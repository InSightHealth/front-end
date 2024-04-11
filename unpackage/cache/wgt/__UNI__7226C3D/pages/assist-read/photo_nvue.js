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


(()=>{var v=Object.create;var g=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var x=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var y=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of _(e))!k.call(t,r)&&r!==a&&g(t,r,{get:()=>e[r],enumerable:!(i=f(e,r))||i.enumerable});return t};var m=(t,e,a)=>(a=t!=null?v(b(t)):{},y(e||!t||!t.__esModule?g(a,"default",{value:t,enumerable:!0}):a,t));var p=x((S,d)=>{d.exports=Vue});var z=m(p());function c(t,e,...a){uni.__log__?uni.__log__(t,e,...a):console[t].apply(console,[...a,e])}var w=(t,e)=>{let a=t.__vccOpts||t;for(let[i,r]of e)a[i]=r;return a};var n=m(p()),C={"pengke-camera":{"":{justifyContent:"center",alignItems:"center"}},menu:{".pengke-camera ":{position:"absolute",left:0,bottom:0,width:"750rpx",height:"250rpx",zIndex:97,backgroundColor:"#000000",display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"row"}},"menu-back":{".pengke-camera .menu ":{width:"80rpx",height:"80rpx",zIndex:99,alignItems:"center",justifyContent:"center"}},"menu-snapshot":{".pengke-camera .menu ":{width:"170rpx",height:"170rpx",zIndex:99,backgroundColor:"#FFFFFF",borderRadius:50,display:"flex",alignItems:"center",justifyContent:"center"}},"snapshot-button":{".pengke-camera .menu .menu-snapshot ":{zIndex:100,borderWidth:"4rpx",borderStyle:"solid",borderColor:"#000000",backgroundColor:"#FFFFFF",width:"138rpx",height:"138rpx",borderRadius:50}},"menu-flip":{".pengke-camera .menu ":{width:"80rpx",height:"80rpx",zIndex:99,alignItems:"center",justifyContent:"center"}}},s=null,P={data(){return{poenCarmeInterval:null,aspect:"2:3",windowWidth:"",windowHeight:"",camerastate:!1,livePusher:null,snapshotsrc:null}},onLoad(t){s=this,this.initCamera()},onReady(){this.livePusher=uni.createLivePusherContext("livePusher",this),this.startPreview(),this.poenCarme()},methods:{poenCarme(){plus.os.name=="Android"&&(this.poenCarmeInterval=setInterval(function(){s.camerastate||s.startPreview()},2500))},initCamera(){uni.getSystemInfo({success:function(t){s.windowWidth=t.windowWidth,s.windowHeight=t.windowHeight;let e=s.aliquot(s.windowWidth,s.windowHeight);s.aspect=s.windowWidth/e+":"+s.windowHeight/e}})},aliquot(t,e){return t%e==0?e:this.aliquot(e,t%e)},startPreview(){this.livePusher.startPreview({success:t=>{c("log","at pages/assist-read/photo_nvue.nvue:97",t)}})},stopPreview(){this.livePusher.stopPreview({success:t=>{s.camerastate=!1}})},statechange(t){t.detail.code==1007?s.camerastate=!0:t.detail.code==-1301&&(s.camerastate=!1)},back(){uni.navigateBack()},snapshot(){uni.vibrateShort({success:function(){c("log","at pages/assist-read/photo_nvue.nvue:133","success")}}),this.livePusher.snapshot({success:t=>{s.snapshotsrc=t.message.tempImagePath,getApp().globalData.token,uni.navigateTo({url:"/pages/assist-read/photo-recog",success:function(e){e.eventChannel.emit("recieveFile",{filepath:s.snapshotsrc})},fail:e=>{c("log","at pages/assist-read/photo_nvue.nvue:145",e)}})}})},flip(){this.livePusher.switchCamera()},setImage(){let t=getCurrentPages();t[t.length-2].$vm.setImage({path:s.snapshotsrc})}}};function I(t,e,a,i,r,o){return(0,n.openBlock)(),(0,n.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,n.createElementVNode)("view",{class:"pengke-camera",style:(0,n.normalizeStyle)({width:r.windowWidth,height:r.windowHeight})},[(0,n.createElementVNode)("live-pusher",{id:"livePusher",ref:"livePusher",class:"livePusher",mode:"FHD",beauty:"0",whiteness:"0",aspect:r.aspect,minBitrate:"1000",audioQuality:"16KHz",devicePosition:"back",autoFocus:!0,muted:!0,enableCamera:!0,enableMic:!1,zoom:!1,onStatechange:e[0]||(e[0]=(...l)=>o.statechange&&o.statechange(...l)),style:(0,n.normalizeStyle)({width:r.windowWidth,height:r.windowHeight})},null,44,["aspect"]),(0,n.createElementVNode)("cover-view",{class:"menu"},[(0,n.createElementVNode)("cover-image",{class:"menu-back",onClick:e[1]||(e[1]=(...l)=>o.back&&o.back(...l)),src:"/static/camera/back.png"}),(0,n.createElementVNode)("cover-view",{class:"menu-snapshot",onClick:e[2]||(e[2]=(...l)=>o.snapshot&&o.snapshot(...l))},[(0,n.createElementVNode)("cover-view",{class:"snapshot-button"})]),(0,n.createElementVNode)("cover-image",{class:"menu-flip",onClick:e[3]||(e[3]=(...l)=>o.flip&&o.flip(...l)),src:"/static/camera/flip.png"})])],4)])}var u=w(P,[["render",I],["styles",[C]]]);var h=plus.webview.currentWebview();if(h){let t=parseInt(h.id),e="pages/assist-read/photo_nvue",a={};try{a=JSON.parse(h.__query__)}catch(r){}u.mpType="page";let i=Vue.createPageApp(u,{$store:getApp({allowDefault:!0}).$store,__pageId:t,__pagePath:e,__pageQuery:a});i.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...u.styles||[]])),i.mount("#root")}})();
