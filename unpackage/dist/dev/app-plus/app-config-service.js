
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/dynamic/dynamic","pages/msg/msg","pages/my/my","pages/ads/ads","pages/search/search","pages/write/write","pages/topic-detail/topic-detail","pages/friend-list/friend-list","pages/friend-chat/friend-chat","pages/article-detail/article-detail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我的应用","navigationBarBackgroundColor":"#5c8396","backgroundColor":"#F8F8F8","pageOrientation":"portrait","rpxCalcMaxDeviceWidth":960,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750},"tabBar":{"color":"#333333","borderStyle":"black","selectedColor":"#5c8396","backgroundColor":"#FFFFFF","height":"50px","fontSize":"14px","iconWidth":"20px","spacing":"3px","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-active.png"},{"pagePath":"pages/dynamic/dynamic","text":"动态","iconPath":"static/tabbar/dynamic.png","selectedIconPath":"static/tabbar/dynamic-active.png"},{"pagePath":"pages/msg/msg","text":"消息","iconPath":"static/tabbar/msg.png","selectedIconPath":"static/tabbar/msg-active.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"社区交友","compilerVersion":"3.3.13","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","placeholder":"搜索","disabled":true,"placeholderColor":"#6F6C67"},"buttons":[{"color":"#FFFFFF","colorPressed":"#ea6783","float":"right","fontSize":"20px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/dynamic/dynamic","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"动态","titleNView":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"消息","scrollIndicator":"none","titleNView":{"buttons":[{"color":"#FFFFFF","colorPressed":"#CCCCCC","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#FFFFFF","colorPressed":"#CCCCCC","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/ads/ads","meta":{},"window":{"navigationBarTitleText":"uni-app","safearea":{"bottom":{"offset":"none"}}}},{"path":"/pages/search/search","meta":{},"window":{"enablePullDownRefresh":false,"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#6F6C67"},"buttons":[{"color":"#FFFFFF","colorPressed":"#ea6783","float":"right","fontSize":"14px","text":"搜索"}]}}},{"path":"/pages/write/write","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"navigationBarTitleText":"话题详情","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/friend-list/friend-list","meta":{},"window":{"animationType":"slide-in-left","scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索好友","placeholderColor":"#CCCCCC","disabled":false},"buttons":[{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/friend-chat/friend-chat","meta":{},"window":{"navigationBarTitleText":"聊天页","titleNView":{"buttons":[{"color":"#FFFFFF","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/article-detail/article-detail","meta":{},"window":{"navigationBarTitleText":"文章详情","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
