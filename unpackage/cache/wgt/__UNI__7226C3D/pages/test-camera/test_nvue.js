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


(()=>{var h=Object.create;var v=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var y=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var x=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports);var b=(e,s,r,u)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of d(s))!w.call(e,o)&&o!==r&&v(e,o,{get:()=>s[o],enumerable:!(u=C(s,o))||u.enumerable});return e};var _=(e,s,r)=>(r=e!=null?h(y(e)):{},b(s||!e||!e.__esModule?v(r,"default",{value:e,enumerable:!0}):r,e));var p=x((N,f)=>{f.exports=Vue});var O=_(p());function a(e,s,...r){uni.__log__?uni.__log__(e,s,...r):console[e].apply(console,[...r,s])}var m=(e,s)=>{let r=e.__vccOpts||e;for(let[u,o]of s)r[u]=o;return r};var t=_(p()),P={data(){return{ImgResponse:"Response"}},onReady(){this.context=uni.createLivePusherContext("livePusher",this)},methods:{statechange(e){a("log","at pages/test-camera/test_nvue.nvue:34","statechange:"+JSON.stringify(e))},netstatus(e){a("log","at pages/test-camera/test_nvue.nvue:37","netstatus:"+JSON.stringify(e))},error(e){a("log","at pages/test-camera/test_nvue.nvue:40","error:"+JSON.stringify(e))},start:function(){this.context.start({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:45","livePusher.start:"+JSON.stringify(e))}})},close:function(){this.context.close({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:52","livePusher.close:"+JSON.stringify(e))}})},snapshot:function(){this.context.snapshot({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:59",JSON.stringify(e)),this.ImgResponse=JSON.stringify(e)}})},resume:function(){this.context.resume({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:67","livePusher.resume:"+JSON.stringify(e))}})},pause:function(){this.context.pause({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:74","livePusher.pause:"+JSON.stringify(e))}})},stop:function(){this.context.stop({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:81",JSON.stringify(e))}})},switchCamera:function(){this.context.switchCamera({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:88","livePusher.switchCamera:"+JSON.stringify(e))}})},startPreview:function(){this.context.startPreview({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:95","livePusher.startPreview:"+JSON.stringify(e))}})},stopPreview:function(){this.context.stopPreview({success:e=>{a("log","at pages/test-camera/test_nvue.nvue:102","livePusher.stopPreview:"+JSON.stringify(e))}})}}};function k(e,s,r,u,o,n){let c=(0,t.resolveComponent)("button");return(0,t.openBlock)(),(0,t.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,t.createElementVNode)("view",null,[(0,t.createElementVNode)("div",{style:{width:"650rpx",height:"650rpx","border-radius":"650rpx",overflow:"hidden","background-color":"#CCCCCC"}},[(0,t.createElementVNode)("live-pusher",{id:"livePusher",ref:"livePusher",class:"livePusher",url:"",mode:"SD",muted:!0,enableCamera:!0,autoFocus:!0,beauty:1,whiteness:"2",aspect:"9:16",onStatechange:s[0]||(s[0]=(...i)=>n.statechange&&n.statechange(...i)),onNetstatus:s[1]||(s[1]=(...i)=>n.netstatus&&n.netstatus(...i)),onError:s[2]||(s[2]=(...i)=>n.error&&n.error(...i))},null,544)]),(0,t.createElementVNode)("u-text",null,(0,t.toDisplayString)(o.ImgResponse),1),(0,t.createVNode)(c,{class:"btn",onClick:n.start},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u5F00\u59CB\u63A8\u6D41")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.pause},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u6682\u505C\u63A8\u6D41")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.resume},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("resume")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.stop},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u505C\u6B62\u63A8\u6D41")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.snapshot},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u5FEB\u7167")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.startPreview},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u5F00\u542F\u6444\u50CF\u5934\u9884\u89C8")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.stopPreview},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u5173\u95ED\u6444\u50CF\u5934\u9884\u89C8")]),_:1},8,["onClick"]),(0,t.createVNode)(c,{class:"btn",onClick:n.switchCamera},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u5207\u6362\u6444\u50CF\u5934")]),_:1},8,["onClick"])])])}var l=m(P,[["render",k]]);var g=plus.webview.currentWebview();if(g){let e=parseInt(g.id),s="pages/test-camera/test_nvue",r={};try{r=JSON.parse(g.__query__)}catch(o){}l.mpType="page";let u=Vue.createPageApp(l,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:s,__pageQuery:r});u.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...l.styles||[]])),u.mount("#root")}})();
