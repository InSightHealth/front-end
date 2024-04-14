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

  // E:/fuchuang/learn/demo1/unpackage/dist/dev/.nvue/pages/smart-travel/cover_nvue.js
  var import_vue2 = __toESM(require_vue());
  var _style_0$2 = { "chat-body": { "": { "display": "flex", "flexDirection": "column", "width": "750rpx", "boxSizing": "content-box" } }, "self": { ".chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat-body ": { "width": "750rpx", "display": "flex", "paddingTop": "45rpx", "paddingRight": "30rpx", "paddingBottom": "45rpx", "paddingLeft": "30rpx" } }, "right": { ".chat-body .item ": { "backgroundColor": "#ACEC9C", "alignSelf": "flex-end" } }, "left": { ".chat-body .item ": { "backgroundColor": "#FFFFFF" } }, "poly-right": { ".chat-body .item ": { "position": "relative", "top": "-50rpx", "left": "-5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-end" } }, "poly-left": { ".chat-body .item ": { "position": "relative", "top": "50rpx", "left": "5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-start" } }, "content": { ".chat-body .item ": { "position": "relative", "wordWrap": "break-word", "paddingTop": "24rpx", "paddingRight": "24rpx", "paddingBottom": "24rpx", "paddingLeft": "24rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "borderRadius": "30rpx", "fontSize": "32rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "42rpx", "maxWidth": "380rpx" } }, "avatar": { ".chat-body .item ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "115rpx", "height": "115rpx", "overflow": "hidden" } } };
  var innerAudioContext$2 = uni.createInnerAudioContext();
  innerAudioContext$2.autoplay = false;
  innerAudioContext$2.src = "";
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
        ]
      }
    },
    data() {
      return {
        chatMsg: "",
        randstr: "ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl"
      };
    },
    methods: {
      play(index) {
        const text = this.msgList[index].botContent;
        const encoded = encodeURI(text);
        formatAppLog("log", "at components/cover-chat/cover-chat.vue:52", encoded);
        innerAudioContext$2.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
					&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
        formatAppLog("log", "at components/cover-chat/cover-chat.vue:55", innerAudioContext$2.src);
        innerAudioContext$2.play();
        formatAppLog("log", "at components/cover-chat/cover-chat.vue:57", "play over!!!");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "view",
      {
        id: "msglistview",
        class: "chat-body",
        style: (0, import_vue2.normalizeStyle)({ width: _ctx.windowWidth }),
        renderWhole: true
      },
      [
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
                  (0, import_vue2.createElementVNode)("view", {
                    class: "content left",
                    onClick: ($event) => $options.play(index)
                  }, [
                    (0, import_vue2.createElementVNode)(
                      "u-text",
                      null,
                      (0, import_vue2.toDisplayString)(item.botContent),
                      1
                      /* TEXT */
                    )
                  ], 8, ["onClick"])
                ])) : (0, import_vue2.createCommentVNode)("v-if", true)
              ],
              4
              /* STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
  var _style_0$1 = { "mic": { "": { "width": "130rpx", "height": "130rpx" } } };
  var recorderManager$1 = uni.getRecorderManager();
  var innerAudioContext$1 = uni.createInnerAudioContext();
  innerAudioContext$1.autoplay = true;
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
        formatAppLog("log", "at components/micphone/micphone.vue:30", "tmpfPath = " + this.voicePath);
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
  var _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99, "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-between" } }, "scroll-view": { ".pengke-camera .chat .coverchat ": { "height": 100, "width": "750rpx" } }, "mic-container": { ".pengke-camera .chat .coverchat ": { "height": "200rpx", "width": "200rpx", "display": "flex", "alignItems": "center", "justifyContent": "center" } } };
  var _this = null;
  var recorderManager = uni.getRecorderManager();
  var innerAudioContext = uni.createInnerAudioContext();
  var _sfc_main = {
    data() {
      return {
        poenCarmeInterval: null,
        aspect: "2:3",
        windowWidth: "",
        windowHeight: "",
        camerastate: false,
        livePusher: null,
        snapshotsrc: null,
        msglist: [
          {
            botContent: "hello\uFF0C\u8BF7\u95EE\u6211\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          }
        ],
        randstr: "ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl",
        micScale: 1,
        backUrl: "",
        baseUrl: "",
        token: ""
      };
    },
    onLoad(e) {
      _this = this;
      this.token = getApp().getToken();
      this.backUrl = getApp().globalData.backUrl;
      this.baseUrl = getApp().globalData.baseUrl;
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
      poenCarme() {
        if (plus.os.name == "Android") {
          this.poenCarmeInterval = setInterval(function() {
            if (!_this.camerastate)
              _this.startPreview();
          }, 2500);
        }
      },
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
      aliquot(x, y) {
        if (x % y == 0)
          return y;
        return this.aliquot(y, x % y);
      },
      startPreview() {
        this.livePusher.startPreview({
          success: (a) => {
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:126", a);
          }
        });
      },
      stopPreview() {
        this.livePusher.stopPreview({
          success: (a) => {
            _this.camerastate = false;
          }
        });
      },
      statechange(e) {
        if (e.detail.code == 1007) {
          _this.camerastate = true;
        } else if (e.detail.code == -1301) {
          _this.camerastate = false;
        }
      },
      back() {
        uni.navigateBack();
      },
      snapshot() {
        uni.vibrateShort({
          success: function() {
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:155", "success");
          }
        });
        this.livePusher.snapshot({
          success: (e) => {
            _this.snapshotsrc = e.message.tempImagePath;
            this.snapshotsrc = e.message.tempImagePath;
          }
        });
      },
      setImage() {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.$vm.setImage({ path: _this.snapshotsrc });
      },
      startMic() {
        formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:174", "\u5F00\u59CB\u5F55\u97F3");
        recorderManager.start();
        this.micScale = 1.3;
      },
      stopMic() {
        formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:180", "\u5F55\u97F3\u7ED3\u675F");
        const url = this.baseUrl + "/speechtotext";
        recorderManager.stop();
        this.micScale = 1;
        formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:184", "");
        recorderManager.onStop(function(res) {
          uni.uploadFile({
            url,
            name: "mp3",
            filePath: res.tempFilePath,
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:192", "\u4E0A\u4F20\u6210\u529F\uFF1A" + JSON.stringify(res2));
              const response = JSON.parse(res2.data);
              if (res2.statusCode == 200) {
                _this.msglist.push({
                  botContent: "",
                  recordId: 0,
                  titleId: 0,
                  userContent: response.text,
                  userId: 0
                });
                _this.msglist.push({
                  botContent: "\u53D1\u9001\u4E2D...",
                  recordId: 0,
                  titleId: 0,
                  userContent: "",
                  userId: 0
                });
                _this.handleRecord(response.text);
              }
            },
            fail: (err) => {
              formatAppLog("error", "at pages/smart-travel/cover_nvue.nvue:214", "\u4E0A\u4F20\u5F55\u97F3\u5931\u8D25\uFF1A" + err.errMsg);
            }
          });
        });
      },
      handleRecord(text) {
        this.livePusher.snapshot({
          success: (e) => {
            _this.snapshotsrc = e.message.tempImagePath;
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:223", "_this.snapshotsrc = " + _this.snapshotsrc);
            uni.uploadFile({
              url: this.backUrl + "/storage/api/v1/uploadImg/move",
              filePath: _this.snapshotsrc,
              name: "multipartFile",
              formData: {},
              header: {
                "token": this.token
              },
              success: (uploadFileRes) => {
                formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:233", uploadFileRes.data);
                const response = JSON.parse(uploadFileRes.data);
                if (response.code == 200) {
                  formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:236", response.data);
                  _this.sendChat(text, response.data.image);
                }
              },
              fail: (err) => {
                formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:240", err.errMsg);
              }
            });
          }
        });
      },
      sendChat(text, imgUrl) {
        formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:248", "text = " + text + "   imgUrl = " + imgUrl);
        uni.request({
          url: this.baseUrl + "/chatbot",
          method: "POST",
          data: {
            "prompt": text,
            "image": imgUrl
          },
          success: (res) => {
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:257", res);
            _this.msglist.pop();
            try {
              const response = res.data;
              _this.msglist.push({
                botContent: response.response,
                recordId: 0,
                titleId: 0,
                userContent: "",
                userId: 0
              });
              const encoded = encodeURI(response.response);
              formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:270", encoded);
              innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&spd=5&ctp=1&amp&pdt=301&tex=` + encoded;
              innerAudioContext.play();
            } catch (e) {
              _this.msglist.push({
                botContent: "\u53D1\u9001\u5931\u8D25",
                recordId: 0,
                titleId: 0,
                userContent: "",
                userId: 0
              });
              const encoded = encodeURI("\u53D1\u9001\u5931\u8D25");
              formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:282", encoded);
              innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&spd=5&ctp=1&amp&pdt=301&tex=` + encoded;
              innerAudioContext.play();
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:288", err);
            _this.msglist.pop();
            _this.msglist.push({
              botContent: "\u53D1\u9001\u5931\u8D25",
              recordId: 0,
              titleId: 0,
              userContent: "",
              userId: 0
            });
            const encoded = encodeURI("\u53D1\u9001\u5931\u8D25");
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:298", encoded);
            innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&spd=5&ctp=1&amp&pdt=301&tex=` + encoded;
            innerAudioContext.play();
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
                    (0, import_vue2.createCommentVNode)(" {{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br> "),
                    (0, import_vue2.createVNode)(_component_cover_chat, { msgList: $data.msglist }, null, 8, ["msgList"])
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
                        onTouchend: $options.stopMic,
                        style: (0, import_vue2.normalizeStyle)({ transform: `scale(${$data.micScale})` })
                      }, null, 8, ["onTouchstart", "onTouchend", "style"])
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
  var cover_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/smart-travel/cover_nvue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/smart-travel/cover_nvue";
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
