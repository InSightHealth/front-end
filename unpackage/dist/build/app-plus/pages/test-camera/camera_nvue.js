"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var d=Object.create;var h=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var k=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var P=(e,t,a,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of _(t))!x.call(e,n)&&n!==a&&h(e,n,{get:()=>t[n],enumerable:!(i=f(t,n))||i.enumerable});return e};var g=(e,t,a)=>(a=e!=null?d(b(e)):{},P(t||!e||!e.__esModule?h(a,"default",{value:e,enumerable:!0}):a,e));var p=k((H,w)=>{w.exports=Vue});var S=g(p());function l(e,t,...a){uni.__log__?uni.__log__(e,t,...a):console[e].apply(console,[...a,t])}var v=(e,t)=>{let a=e.__vccOpts||e;for(let[i,n]of t)a[i]=n;return a};var r=g(p()),y={"pengke-camera":{"":{justifyContent:"center",alignItems:"center"}},menu:{".pengke-camera ":{position:"absolute",left:0,bottom:0,width:"750rpx",height:"180rpx",zIndex:98,alignItems:"center",justifyContent:"center"}},"menu-mask":{".pengke-camera .menu ":{position:"absolute",left:0,bottom:0,width:"750rpx",height:"180rpx",zIndex:98}},"menu-back":{".pengke-camera .menu ":{position:"absolute",left:"30rpx",bottom:"50rpx",width:"80rpx",height:"80rpx",zIndex:99,alignItems:"center",justifyContent:"center"}},"menu-snapshot":{".pengke-camera .menu ":{width:"130rpx",height:"130rpx",zIndex:99}},"menu-flip":{".pengke-camera .menu ":{position:"absolute",right:"30rpx",bottom:"50rpx",width:"80rpx",height:"80rpx",zIndex:99,alignItems:"center",justifyContent:"center"}}},s=null,C={data(){return{poenCarmeInterval:null,aspect:"2:3",windowWidth:"",windowHeight:"",camerastate:!1,livePusher:null,snapshotsrc:null}},onLoad(e){s=this,this.initCamera()},onReady(){this.livePusher=uni.createLivePusherContext("livePusher",this),this.startPreview(),this.poenCarme()},methods:{poenCarme(){plus.os.name=="Android"&&(this.poenCarmeInterval=setInterval(function(){l("log","at pages/test-camera/camera_nvue.nvue:69",s.camerastate),s.camerastate||s.startPreview()},2500))},initCamera(){uni.getSystemInfo({success:function(e){s.windowWidth=e.windowWidth,s.windowHeight=e.windowHeight;let t=s.aliquot(s.windowWidth,s.windowHeight);s.aspect=s.windowWidth/t+":"+s.windowHeight/t}})},aliquot(e,t){return e%t==0?t:this.aliquot(t,e%t)},startPreview(){this.livePusher.startPreview({success:e=>{l("log","at pages/test-camera/camera_nvue.nvue:98",e)}})},stopPreview(){this.livePusher.stopPreview({success:e=>{s.camerastate=!1}})},statechange(e){l("log","at pages/test-camera/camera_nvue.nvue:115",e),e.detail.code==1007?s.camerastate=!0:e.detail.code==-1301&&(s.camerastate=!1)},back(){uni.navigateBack()},snapshot(){uni.vibrateShort({success:function(){l("log","at pages/test-camera/camera_nvue.nvue:134","success")}}),this.livePusher.snapshot({success:e=>{s.snapshotsrc=e.message.tempImagePath,s.stopPreview(),s.setImage(),uni.navigateBack()}})},flip(){this.livePusher.switchCamera()},setImage(){let e=getCurrentPages();e[e.length-2].$vm.setImage({path:s.snapshotsrc})}}};function I(e,t,a,i,n,o){return(0,r.openBlock)(),(0,r.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,r.createElementVNode)("view",{class:"pengke-camera",style:(0,r.normalizeStyle)({width:n.windowWidth,height:n.windowHeight})},[(0,r.createElementVNode)("live-pusher",{id:"livePusher",ref:"livePusher",class:"livePusher",mode:"FHD",beauty:"0",whiteness:"0",aspect:n.aspect,minBitrate:"1000",audioQuality:"16KHz",devicePosition:"back",autoFocus:!0,muted:!0,enableCamera:!0,enableMic:!1,zoom:!1,onStatechange:t[0]||(t[0]=(...c)=>o.statechange&&o.statechange(...c)),style:(0,r.normalizeStyle)({width:n.windowWidth,height:n.windowHeight})},null,44,["aspect"]),(0,r.createElementVNode)("view",{class:"menu"},[(0,r.createElementVNode)("cover-image",{class:"menu-mask",src:"/static/camera/bar.png"}),(0,r.createElementVNode)("cover-image",{class:"menu-back",onClick:t[1]||(t[1]=(...c)=>o.back&&o.back(...c)),src:"/static/camera/back.png"}),(0,r.createElementVNode)("cover-image",{class:"menu-snapshot",onClick:t[2]||(t[2]=(...c)=>o.snapshot&&o.snapshot(...c)),src:"/static/camera/shutter.png"}),(0,r.createElementVNode)("cover-image",{class:"menu-flip",onClick:t[3]||(t[3]=(...c)=>o.flip&&o.flip(...c)),src:"/static/camera/flip.png"})])],4)])}var u=v(C,[["render",I],["styles",[y]]]);var m=plus.webview.currentWebview();if(m){let e=parseInt(m.id),t="pages/test-camera/camera_nvue",a={};try{a=JSON.parse(m.__query__)}catch(n){}u.mpType="page";let i=Vue.createPageApp(u,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:a});i.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...u.styles||[]])),i.mount("#root")}})();
