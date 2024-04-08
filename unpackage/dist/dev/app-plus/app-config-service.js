
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"demo1","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"compilerVersion":"3.99","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/test/test","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/test-camera/test_nvue","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":true}},{"path":"pages/test-camera/camera_nvue","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":true}},{"path":"pages/test_api/test_api","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/smart-travel/smart-travel","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/test-camera/cover_nvue","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":true}},{"path":"pages/recTest/native_test","meta":{"navigationBar":{"titleText":"RecordApp纯renderjs调用 - uni-app","type":"default"},"isNVue":false}},{"path":"pages/smart-chat/smart-chat","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/photo-recog/photo-recog","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/photo-recog/photo_nvue","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":true}},{"path":"pages/test-page/test-page","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/assist-read/assist-read","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"辅助阅读","type":"default"},"isNVue":false}},{"path":"pages/assist-read/photo-recog","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/assist-read/photo_nvue","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":true}},{"path":"pages/test_api/test-upload","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/personal/personal","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}},{"path":"pages/personal/profile/profile","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"个人资料","type":"default"},"isNVue":false}},{"path":"pages/personal/system/system","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"系统设置","type":"default"},"isNVue":false}},{"path":"pages/personal/account/account","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"账号设置","type":"default"},"isNVue":false}},{"path":"pages/test-page/login","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"type":"default","style":"custom"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  