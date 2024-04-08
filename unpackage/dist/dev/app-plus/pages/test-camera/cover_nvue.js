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
  var _style_0$2 = { "chat-body": { "": { "display": "flex", "flexDirection": "column", "width": "750rpx", "height": "750rpx", "boxSizing": "content-box" } }, "self": { ".chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat-body ": { "width": "750rpx", "display": "flex", "paddingTop": "45rpx", "paddingRight": "30rpx", "paddingBottom": "45rpx", "paddingLeft": "30rpx" } }, "right": { ".chat-body .item ": { "backgroundColor": "#ACEC9C", "alignSelf": "flex-end" } }, "left": { ".chat-body .item ": { "backgroundColor": "#FFFFFF" } }, "poly-right": { ".chat-body .item ": { "position": "relative", "top": "-50rpx", "left": "-5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-end" } }, "poly-left": { ".chat-body .item ": { "position": "relative", "top": "50rpx", "left": "5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-start" } }, "content": { ".chat-body .item ": { "position": "relative", "wordWrap": "break-word", "paddingTop": "24rpx", "paddingRight": "24rpx", "paddingBottom": "24rpx", "paddingLeft": "24rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "borderRadius": "30rpx", "fontSize": "32rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "42rpx", "maxWidth": "380rpx" } }, "avatar": { ".chat-body .item ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "115rpx", "height": "115rpx", "overflow": "hidden" } } };
  var _sfc_main$2 = {
    name: "bot-chat",
    props: {
      msgList: {
        type: Array,
        default: [
          {
            botContent: "hello\uFF0C\u8BF7\u95EE\u6211\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          }
          // {
          //     botContent: "",
          //     recordId: 0,
          //     titleId: 0,
          //     userContent: "你好呀我想问你一件事，可以吗？",
          //     userId: 0
          // },
          // {
          //     userContent: "",
          //     recordId: 0,
          //     titleId: 0,
          //     botContent: "当然可以!",
          //     userId: 0
          // },
          // {
          //     botContent: "",
          //     recordId: 0,
          //     titleId: 0,
          //     userContent: "我的问题是：blablabla...",
          //     userId: 0
          // },
        ]
      }
    },
    data() {
      return {
        userId: "",
        //发送的消息
        chatMsg: "",
        randstr: "ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl"
      };
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        id: "msglistview",
        class: "chat-body",
        style: (0, import_vue2.normalizeStyle)({ width: _ctx.windowWidth, height: _ctx.windowHeight }),
        renderWhole: true
      },
      [
        (0, import_vue2.createCommentVNode)(" \u804A\u5929\u8BB0\u5F55 "),
        ((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
          import_vue2.Fragment,
          null,
          (0, import_vue2.renderList)($props.msgList, (item, index) => {
            return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
              "view",
              {
                key: index,
                style: (0, import_vue2.normalizeStyle)({ width: _ctx.windowWidth })
              },
              [
                item.userContent != "" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  key: 0,
                  class: "item self"
                }, [
                  (0, import_vue2.createElementVNode)("view", { class: "content right" }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      null,
                      (0, import_vue2.toDisplayString)(item.userContent),
                      1
                      /* TEXT */
                    )
                  ]),
                  (0, import_vue2.createElementVNode)("u-image", {
                    class: "poly-right",
                    src: "/static/travel/polygon-right.png"
                  })
                ])) : (0, import_vue2.createCommentVNode)("v-if", true),
                item.botContent != "" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                  key: 1,
                  class: "item Ai"
                }, [
                  (0, import_vue2.createElementVNode)("u-image", {
                    class: "poly-left",
                    src: "/static/travel/polygon-left.png"
                  }),
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
              ],
              4
              /* STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (0, import_vue2.createCommentVNode)(" 			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>")
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
  var _style_0$1 = { "mic": { "": { "width": "130rpx", "height": "130rpx" } } };
  var recorderManager$1 = uni.getRecorderManager();
  var innerAudioContext = uni.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  var _sfc_main$1 = {
    data() {
      return {
        text: "uni-app",
        voicePath: ""
      };
    },
    methods: {
      startRecord() {
        formatAppLog("log", "at components/micphone/micphone.vue:20", "\u5F00\u59CB\u5F55\u97F3");
        recorderManager$1.start();
      },
      endRecord() {
        let tmpfPath = "";
        formatAppLog("log", "at components/micphone/micphone.vue:25", "\u5F55\u97F3\u7ED3\u675F");
        recorderManager$1.stop();
        recorderManager$1.onStop(function(res) {
          this.voicePath = res.tempFilePath;
        });
        formatAppLog("log", "at components/micphone/micphone.vue:41", "tmpfPath = " + this.voicePath);
        return tmpfPath;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-image", {
      src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/micphone/mic1.png",
      class: "mic"
    });
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/fuchuang/learn/demo1/components/micphone/micphone.vue"]]);
  var _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99, "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-between" } }, "scroll-view": { ".pengke-camera .chat .coverchat ": { "height": 100, "width": "750rpx" } }, "mic-container": { ".pengke-camera .chat .coverchat ": { "height": "160rpx", "display": "flex", "alignItems": "center", "justifyContent": "center" } } };
  var _this = null;
  var recorderManager = uni.getRecorderManager();
  uni.createInnerAudioContext();
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
        snapshotsrc: null,
        //快照
        msglist: [
          {
            botContent: "hello\uFF0C\u8BF7\u95EE\u6211\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          }
          // {
          //     botContent: "",
          //     recordId: 0,
          //     titleId: 0,
          //     userContent: "你好呀我想问你一件事，可以吗？",
          //     userId: 0
          // },
          // {
          //     userContent: "",
          //     recordId: 0,
          //     titleId: 0,
          //     botContent: "当然可以!",
          //     userId: 0
          // },
          // {
          //     botContent: "",
          //     recordId: 0,
          //     titleId: 0,
          //     userContent: "我的问题是：blablabla...",
          //     userId: 0
          // },
        ],
        randstr: "ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl"
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
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:113", _this.camerastate);
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
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:142", a);
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
        formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:159", e);
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
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:178", "success");
          }
        });
        this.livePusher.snapshot({
          success: (e) => {
            _this.snapshotsrc = e.message.tempImagePath;
            this.snapshotsrc = e.message.tempImagePath;
          }
        });
      },
      //设置
      setImage() {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.$vm.setImage({ path: _this.snapshotsrc });
      },
      startMic() {
        formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:198", "\u5F00\u59CB\u5F55\u97F3");
        recorderManager.start();
      },
      stopMic() {
        formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:203", "\u5F55\u97F3\u7ED3\u675F");
        recorderManager.stop();
        recorderManager.onStop(function(res) {
          uni.uploadFile({
            url: "http://127.0.0.1:8000/speechtotext",
            name: "mp3",
            filePath: res.tempFilePath,
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:212", "\u4E0A\u4F20\u6210\u529F\uFF1A" + JSON.stringify(res2));
              const response = JSON.parse(res2.data);
              if (res2.statusCode == 200) {
                _this.msglist.push({
                  botContent: "",
                  recordId: 0,
                  titleId: 0,
                  userContent: response.text,
                  userId: 0
                });
                _this.handleRecord(response.text);
              }
            },
            fail: (err) => {
              formatAppLog("error", "at pages/test-camera/cover_nvue.nvue:226", "\u4E0A\u4F20\u5F55\u97F3\u5931\u8D25\uFF1A" + err.errMsg);
            }
          });
        });
      },
      handleRecord(text) {
        this.livePusher.snapshot({
          success: (e) => {
            _this.snapshotsrc = e.message.tempImagePath;
            const token = getApp().globalData.token;
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:236", "_this.snapshotsrc = " + _this.snapshotsrc);
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:237", "token = " + token);
            uni.uploadFile({
              url: "http://82.157.124.83:51603/storage/api/v1/uploadImg/move",
              filePath: _this.snapshotsrc,
              name: "multipartFile",
              formData: {},
              header: {
                "token": token
              },
              success: (uploadFileRes) => {
                formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:247", uploadFileRes.data);
                const response = JSON.parse(uploadFileRes.data);
                if (response.code == 200) {
                  formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:250", response.data);
                  _this.sendChat(text, response.data.image);
                }
              },
              fail: (err) => {
                formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:254", err.errMsg);
              }
            });
          }
        });
      },
      sendChat(text, imgUrl) {
        formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:262", "text = " + text + "   imgUrl = " + imgUrl);
        uni.request({
          url: "http://127.0.0.1:8000/chatbot",
          method: "POST",
          data: {
            "prompt": text,
            "image": imgUrl
          },
          success: (res) => {
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:271", res);
            {
              _this.msglist.push({
                botContent: res.data,
                recordId: 0,
                titleId: 0,
                userContent: "",
                userId: 0
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cover_chat = resolveEasycom((0, import_vue2.resolveDynamicComponent)("cover-chat"), __easycom_0);
    const _component_micphone = resolveEasycom((0, import_vue2.resolveDynamicComponent)("micphone"), __easycom_1);
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
                  (0, import_vue2.createElementVNode)("scroll-view", {
                    style: (0, import_vue2.normalizeStyle)({ height: `${$data.windowHeight * 0.8}px` }),
                    id: "scrollview",
                    scrollY: "true",
                    scrollTop: _ctx.scrollTop,
                    class: "scroll-view",
                    enableFlex: "true"
                  }, [
                    (0, import_vue2.createCommentVNode)(" \r\n						{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n					"),
                    (0, import_vue2.createVNode)(_component_cover_chat, {
                      msgList: $data.msglist,
                      style: (0, import_vue2.normalizeStyle)({ height: `${$data.windowHeight * 0.8}px` })
                    }, null, 8, ["msgList", "style"])
                  ], 12, ["scrollTop"]),
                  (0, import_vue2.createElementVNode)(
                    "cover-view",
                    {
                      class: "mic-container",
                      style: (0, import_vue2.normalizeStyle)({ height: `${$data.windowHeight * 0.2}px` })
                    },
                    [
                      (0, import_vue2.createVNode)(_component_micphone, {
                        ref: "micphone",
                        onTouchstart: $options.startMic,
                        onTouchend: $options.stopMic
                      }, null, 8, ["onTouchstart", "onTouchend"])
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
