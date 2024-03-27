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


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/fuchuang/learn/demo1/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var import_vue = __toESM(require_vue());
  var isString = (val) => typeof val === "string";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/fuchuang/learn/demo1/unpackage/dist/dev/.nvue/pages/test-camera/cover_nvue.js
  var import_vue2 = __toESM(require_vue());
  var _style_0$2 = { "mic": { "": { "width": "100rpx", "height": "100rpx" } } };
  var recorderManager = uni.getRecorderManager();
  var innerAudioContext = uni.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  var _sfc_main$2 = {
    data() {
      return {
        text: "uni-app",
        voicePath: ""
      };
    },
    methods: {
      startRecord() {
        formatAppLog("log", "at components/micphone/micphone.vue:20", "\u5F00\u59CB\u5F55\u97F3");
        recorderManager.start();
      },
      endRecord() {
        formatAppLog("log", "at components/micphone/micphone.vue:24", "\u5F55\u97F3\u7ED3\u675F");
        recorderManager.stop();
        recorderManager.onStop(function(res) {
          formatAppLog("log", "at components/micphone/micphone.vue:27", JSON.stringify(res));
          uni.uploadFile({
            url: "http://127.0.0.1:8000/speechtotext",
            filePath: res.tempFilePath,
            name: "mp3",
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at components/micphone/micphone.vue:34", "\u4E0A\u4F20\u6210\u529F\uFF1A" + JSON.stringify(res2));
            },
            fail: (err) => {
              formatAppLog("error", "at components/micphone/micphone.vue:36", "\u4E0A\u4F20\u5F55\u97F3\u5931\u8D25\uFF1A" + err);
            }
          });
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-image",
      {
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.startRecord && $options.startRecord(...args)),
        onTouchend: _cache[1] || (_cache[1] = (...args) => $options.endRecord && $options.endRecord(...args)),
        src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/micphone/mic1.png",
        class: "mic"
      },
      null,
      32
      /* HYDRATE_EVENTS */
    );
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/fuchuang/learn/demo1/components/micphone/micphone.vue"]]);
  var _style_0$1 = { "chat": { "": { "width": "750rpx" } }, "scroll-view": { ".chat ": { "width": "750rpx" } }, "chat-body": { ".chat .scroll-view ": { "display": "flex", "width": "750rpx", "flexDirection": "column", "paddingTop": "23rpx" } }, "self": { ".chat .scroll-view .chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat .scroll-view .chat-body ": { "display": "flex", "paddingTop": "23rpx", "paddingRight": "5rpx", "paddingBottom": "23rpx", "paddingLeft": "5rpx", "width": "750rpx" } }, "right": { ".chat .scroll-view .chat-body .item ": { "backgroundColor": "#ACEC9C", "position::after": "absolute", "content::after": '""', "width::after": 0, "height::after": 0, "left::after": 100, "top::after": 10, "borderWidth::after": "12rpx", "borderStyle::after": "solid", "borderColor::after": "rgba(0,0,0,0)", "borderLeftWidth::after": "15rpx", "borderLeftStyle::after": "solid", "borderLeftColor::after": "#ACEC9C", "transform::after": "translate(-4rpx)" } }, "left": { ".chat .scroll-view .chat-body .item ": { "backgroundColor": "#FFFFFF", "position::after": "absolute", "content::after": '""', "width::after": 0, "height::after": 0, "top::after": 10, "right::after": 100, "borderWidth::after": "12rpx", "borderStyle::after": "solid", "borderColor::after": "rgba(0,0,0,0)", "borderRightWidth::after": "15rpx", "borderRightStyle::after": "solid", "borderRightColor::after": "#FFFFFF", "transform::after": "translate(4rpx)" } }, "content": { ".chat .scroll-view .chat-body .item ": { "position": "relative", "maxWidth": "450rpx", "borderRadius": 12, "wordWrap": "break-word", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "fontSize": "20rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "32rpx" } }, "chat-bottom": { ".chat ": { "width": "750rpx", "height": "177rpx", "paddingBottom": "20rpx", "transitionDuration": 100, "transitionTimingFunction": "ease", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "@TRANSITION": { "chat-bottom": { "duration": 100, "timingFunction": "ease" } } };
  var _sfc_main$1 = {
    data() {
      return {
        //键盘高度
        keyboardHeight: 0,
        //底部消息发送高度
        bottomHeight: 0,
        //滚动距离
        scrollTop: 0,
        userId: "",
        //发送的消息
        chatMsg: "",
        msgList: [
          {
            botContent: "\u6309\u4F4F\u5C4F\u5E55\u4E0B\u65B9\u6309\u94AE\u8BB2\u8BDD",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "\u6211\u7684\u524D\u9762\u6709\u4EC0\u4E48\uFF1F",
            userId: 0
          },
          {
            userContent: "",
            recordId: 0,
            titleId: 0,
            botContent: "\u60A8\u7684\u6B63\u524D\u65B9\u6709\u4E00\u4E2A\u6307\u793A\u724C\uFF0C\u8BF7\u6CE8\u610F\u5B89\u5168",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "\u6211\u7684\u524D\u9762\u6709\u4EC0\u4E48\uFF1F",
            userId: 0
          },
          {
            userContent: "",
            recordId: 0,
            titleId: 0,
            botContent: "\u60A8\u7684\u6B63\u524D\u65B9\u6709\u4E00\u4E2A\u6307\u793A\u724C\uFF0C\u8BF7\u6CE8\u610F\u5B89\u5168",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "\u6211\u7684\u524D\u9762\u6709\u4EC0\u4E48\uFF1F",
            userId: 0
          },
          {
            userContent: "",
            recordId: 0,
            titleId: 0,
            botContent: "\u60A8\u7684\u6B63\u524D\u65B9\u6709\u4E00\u4E2A\u6307\u793A\u724C\uFF0C\u8BF7\u6CE8\u610F\u5B89\u5168",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "\u6211\u7684\u524D\u9762\u6709\u4EC0\u4E48\uFF1F",
            userId: 0
          },
          {
            userContent: "",
            recordId: 0,
            titleId: 0,
            botContent: "\u60A8\u7684\u6B63\u524D\u65B9\u6709\u4E00\u4E2A\u6307\u793A\u724C\uFF0C\u8BF7\u6CE8\u610F\u5B89\u5168",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "\u6211\u7684\u524D\u9762\u6709\u4EC0\u4E48\uFF1F",
            userId: 0
          },
          {
            userContent: "",
            recordId: 0,
            titleId: 0,
            botContent: "\u60A8\u7684\u6B63\u524D\u65B9\u6709\u4E00\u4E2A\u6307\u793A\u724C\uFF0C\u8BF7\u6CE8\u610F\u5B89\u5168",
            userId: 0
          }
        ]
      };
    },
    updated() {
      this.scrollToBottom();
    },
    computed: {
      windowHeight() {
        return this.rpxTopx(uni.getSystemInfoSync().windowHeight);
      },
      // 键盘弹起来的高度+发送框高度
      inputHeight() {
        return 177;
      }
    },
    onLoad() {
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    methods: {
      focus() {
        this.scrollToBottom();
      },
      blur() {
        this.scrollToBottom();
      },
      // px转换成rpx
      rpxTopx(px) {
        let deviceWidth = wx.getSystemInfoSync().windowWidth;
        let rpx = 750 / deviceWidth * Number(px);
        return Math.floor(rpx);
      },
      // 监视聊天发送栏高度
      sendHeight() {
        setTimeout(() => {
          let query = uni.createSelectorQuery();
          query.select(".send-msg").boundingClientRect();
          query.exec((res) => {
            this.bottomHeight = this.rpxTopx(res[0].height);
          });
        }, 10);
      },
      // 滚动至聊天底部
      scrollToBottom(e) {
        setTimeout(() => {
          let query = uni.createSelectorQuery().in(this);
          query.select("#scrollview").boundingClientRect();
          query.select("#msglistview").boundingClientRect();
          query.exec((res) => {
            if (res[1].height > res[0].height) {
              this.scrollTop = this.rpxTopx(res[1].height - res[0].height);
            }
          });
        }, 15);
      },
      handleSend() {
        formatAppLog("log", "at components/cover-chat/cover-chat.vue:195", "Here");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_micphone = resolveEasycom((0, import_vue2.resolveDynamicComponent)("micphone"), __easycom_0$1);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "chat",
      renderWhole: true
    }, [
      (0, import_vue2.createElementVNode)("scroll-view", {
        style: (0, import_vue2.normalizeStyle)({ height: `${$options.windowHeight - $options.inputHeight}rpx` }),
        id: "scrollview",
        scrollY: "true",
        scrollTop: $data.scrollTop,
        class: "scroll-view"
      }, [
        (0, import_vue2.createCommentVNode)(" \u804A\u5929\u4E3B\u4F53 "),
        (0, import_vue2.createElementVNode)("view", {
          id: "msglistview",
          class: "chat-body"
        }, [
          (0, import_vue2.createCommentVNode)(" \u804A\u5929\u8BB0\u5F55 "),
          ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
            import_vue2.Fragment,
            null,
            (0, import_vue2.renderList)($data.msgList, (item, index) => {
              return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", { key: index }, [
                (0, import_vue2.createCommentVNode)(" \u81EA\u5DF1\u53D1\u7684\u6D88\u606F "),
                item.userContent != "" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  key: 0,
                  class: "item self"
                }, [
                  (0, import_vue2.createCommentVNode)(" \u6587\u5B57\u5185\u5BB9 "),
                  (0, import_vue2.createElementVNode)("view", { class: "content right" }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      null,
                      (0, import_vue2.toDisplayString)(item.userContent),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : (0, import_vue2.createCommentVNode)("v-if", true),
                (0, import_vue2.createCommentVNode)(" \u673A\u5668\u4EBA\u53D1\u7684\u6D88\u606F "),
                item.botContent != "" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  key: 1,
                  class: "item Ai"
                }, [
                  (0, import_vue2.createCommentVNode)(" \u6587\u5B57\u5185\u5BB9 "),
                  (0, import_vue2.createElementVNode)("view", { class: "content left" }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      null,
                      (0, import_vue2.toDisplayString)(item.botContent),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : (0, import_vue2.createCommentVNode)("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ], 12, ["scrollTop"]),
      (0, import_vue2.createCommentVNode)(" \u5E95\u90E8\u6D88\u606F\u53D1\u9001\u680F "),
      (0, import_vue2.createCommentVNode)(" \u7528\u6765\u5360\u4F4D\uFF0C\u9632\u6B62\u804A\u5929\u6D88\u606F\u88AB\u53D1\u9001\u6846\u906E\u6321 "),
      (0, import_vue2.createElementVNode)("view", { class: "chat-bottom" }, [
        (0, import_vue2.createVNode)(_component_micphone, { StopHandler: $options.handleSend }, null, 8, ["StopHandler"])
      ])
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
  var _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99 } } };
  var _this = null;
  var _sfc_main = {
    data() {
      return {
        poenCarmeInterval: null,
        //打开相机的轮询
        aspect: "2:3",
        //比例
        windowWidth: "",
        //屏幕可用宽度
        windowHeight: "",
        //屏幕可用高度
        camerastate: false,
        //相机准备好了
        livePusher: null,
        //流视频对象
        snapshotsrc: null
        //快照
      };
    },
    onLoad(e) {
      _this = this;
      this.initCamera();
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    onReady() {
      this.livePusher = uni.createLivePusherContext("livePusher", this);
      this.startPreview();
      this.poenCarme();
    },
    methods: {
      //轮询打开
      poenCarme() {
        if (plus.os.name == "Android") {
          this.poenCarmeInterval = setInterval(function() {
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:64", _this.camerastate);
            if (!_this.camerastate)
              _this.startPreview();
          }, 2500);
        }
      },
      //初始化相机
      initCamera() {
        uni.getSystemInfo({
          success: function(res) {
            _this.windowWidth = res.windowWidth;
            _this.windowHeight = res.windowHeight;
            let zcs = _this.aliquot(_this.windowWidth, _this.windowHeight);
            _this.aspect = _this.windowWidth / zcs + ":" + _this.windowHeight / zcs;
          }
        });
      },
      //整除数计算
      aliquot(x, y) {
        if (x % y == 0)
          return y;
        return this.aliquot(y, x % y);
      },
      //开始预览
      startPreview() {
        this.livePusher.startPreview({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:93", a);
          }
        });
      },
      //停止预览
      stopPreview() {
        this.livePusher.stopPreview({
          success: (a) => {
            _this.camerastate = false;
          }
        });
      },
      //状态
      statechange(e) {
        formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:110", e);
        if (e.detail.code == 1007) {
          _this.camerastate = true;
        } else if (e.detail.code == -1301) {
          _this.camerastate = false;
        }
      },
      //返回
      back() {
        uni.navigateBack();
      },
      //抓拍
      snapshot() {
        uni.vibrateShort({
          success: function() {
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:129", "success");
          }
        });
        this.livePusher.snapshot({
          success: (e) => {
            _this.snapshotsrc = e.message.tempImagePath;
            _this.stopPreview();
            _this.setImage();
            uni.navigateBack();
          }
        });
      },
      //反转
      flip() {
        this.livePusher.switchCamera();
      },
      //设置
      setImage() {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.$vm.setImage({ path: _this.snapshotsrc });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cover_chat = resolveEasycom((0, import_vue2.resolveDynamicComponent)("cover-chat"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: "pengke-camera",
          style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
        },
        [
          (0, import_vue2.createElementVNode)("live-pusher", {
            id: "livePusher",
            ref: "livePusher",
            class: "livePusher",
            mode: "FHD",
            beauty: "0",
            whiteness: "0",
            aspect: $data.aspect,
            minBitrate: "1000",
            audioQuality: "16KHz",
            devicePosition: "back",
            autoFocus: true,
            muted: true,
            enableCamera: true,
            enableMic: false,
            zoom: false,
            onStatechange: _cache[0] || (_cache[0] = (...args) => $options.statechange && $options.statechange(...args)),
            style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
          }, null, 44, ["aspect"]),
          (0, import_vue2.createElementVNode)(
            "view",
            {
              class: "chat",
              style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
            },
            [
              (0, import_vue2.createElementVNode)(
                "cover-view",
                {
                  class: "coverchat",
                  style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
                },
                [
                  (0, import_vue2.createVNode)(_component_cover_chat, {
                    style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
                  }, null, 8, ["style"])
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var cover_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/test-camera/cover_nvue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/test-camera/cover_nvue";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    cover_nvue.mpType = "page";
    const app = Vue.createPageApp(cover_nvue, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...cover_nvue.styles || []]));
    app.mount("#root");
  }
})();
