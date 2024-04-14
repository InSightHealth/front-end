import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, normalizeStyle, Fragment, renderList, createElementVNode, toDisplayString, createCommentVNode, resolveDynamicComponent, createVNode } from "vue";
const _style_0$2 = { "chat-body": { "": { "display": "flex", "flexDirection": "column", "width": "750rpx", "boxSizing": "content-box" } }, "self": { ".chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat-body ": { "width": "750rpx", "display": "flex", "paddingTop": "45rpx", "paddingRight": "30rpx", "paddingBottom": "45rpx", "paddingLeft": "30rpx" } }, "right": { ".chat-body .item ": { "backgroundColor": "#ACEC9C", "alignSelf": "flex-end" } }, "left": { ".chat-body .item ": { "backgroundColor": "#FFFFFF" } }, "poly-right": { ".chat-body .item ": { "position": "relative", "top": "-50rpx", "left": "-5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-end" } }, "poly-left": { ".chat-body .item ": { "position": "relative", "top": "50rpx", "left": "5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-start" } }, "content": { ".chat-body .item ": { "position": "relative", "wordWrap": "break-word", "paddingTop": "24rpx", "paddingRight": "24rpx", "paddingBottom": "24rpx", "paddingLeft": "24rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "borderRadius": "30rpx", "fontSize": "32rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "42rpx", "maxWidth": "380rpx" } }, "avatar": { ".chat-body .item ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "115rpx", "height": "115rpx", "overflow": "hidden" } } };
const innerAudioContext$2 = uni.createInnerAudioContext();
innerAudioContext$2.autoplay = false;
innerAudioContext$2.src = "";
const _sfc_main$2 = {
  name: "bot-chat",
  props: {
    msgList: {
      type: Array,
      default: [
        {
          botContent: "hello，请问我有什么可以帮助你的吗？",
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
  return openBlock(), createElementBlock(
    "view",
    {
      id: "msglistview",
      class: "chat-body",
      style: normalizeStyle({ width: _ctx.windowWidth }),
      renderWhole: true
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.msgList, (item, index) => {
          return openBlock(), createElementBlock(
            "view",
            {
              key: index,
              style: normalizeStyle({ width: _ctx.windowWidth })
            },
            [
              item.userContent != "" ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "item self"
              }, [
                createElementVNode("view", { class: "content right" }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.userContent),
                    1
                    /* TEXT */
                  )
                ]),
                createElementVNode("u-image", {
                  class: "poly-right",
                  src: "/static/travel/polygon-right.png"
                })
              ])) : createCommentVNode("v-if", true),
              item.botContent != "" ? (openBlock(), createElementBlock("view", {
                key: 1,
                class: "item Ai"
              }, [
                createElementVNode("u-image", {
                  class: "poly-left",
                  src: "/static/travel/polygon-left.png"
                }),
                createElementVNode("view", {
                  class: "content left",
                  onClick: ($event) => $options.play(index)
                }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.botContent),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"])
              ])) : createCommentVNode("v-if", true)
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
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
const _style_0$1 = { "mic": { "": { "width": "130rpx", "height": "130rpx" } } };
const recorderManager$1 = uni.getRecorderManager();
const innerAudioContext$1 = uni.createInnerAudioContext();
innerAudioContext$1.autoplay = true;
const _sfc_main$1 = {
  data() {
    return {
      text: "uni-app",
      voicePath: ""
    };
  },
  methods: {
    startRecord() {
      formatAppLog("log", "at components/micphone/micphone.vue:20", "开始录音");
      recorderManager$1.start();
    },
    endRecord() {
      let tmpfPath = "";
      formatAppLog("log", "at components/micphone/micphone.vue:25", "录音结束");
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
  return openBlock(), createElementBlock("u-image", {
    src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/micphone/mic1.png",
    class: "mic"
  });
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/fuchuang/learn/demo1/components/micphone/micphone.vue"]]);
const _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99, "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-between" } }, "scroll-view": { ".pengke-camera .chat .coverchat ": { "height": 100, "width": "750rpx" } }, "mic-container": { ".pengke-camera .chat .coverchat ": { "height": "200rpx", "width": "200rpx", "display": "flex", "alignItems": "center", "justifyContent": "center" } } };
let _this = null;
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();
const _sfc_main = {
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
          botContent: "hello，请问我有什么可以帮助你的吗？",
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
      formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:174", "开始录音");
      recorderManager.start();
      this.micScale = 1.3;
    },
    stopMic() {
      formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:180", "录音结束");
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
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:192", "上传成功：" + JSON.stringify(res2));
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
                botContent: "发送中...",
                recordId: 0,
                titleId: 0,
                userContent: "",
                userId: 0
              });
              _this.handleRecord(response.text);
            }
          },
          fail: (err) => {
            formatAppLog("error", "at pages/smart-travel/cover_nvue.nvue:214", "上传录音失败：" + err.errMsg);
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
              botContent: "发送失败",
              recordId: 0,
              titleId: 0,
              userContent: "",
              userId: 0
            });
            const encoded = encodeURI("发送失败");
            formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:282", encoded);
            innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&spd=5&ctp=1&amp&pdt=301&tex=` + encoded;
            innerAudioContext.play();
          }
        },
        fail: (err) => {
          formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:288", err);
          _this.msglist.pop();
          _this.msglist.push({
            botContent: "发送失败",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          });
          const encoded = encodeURI("发送失败");
          formatAppLog("log", "at pages/smart-travel/cover_nvue.nvue:298", encoded);
          innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&spd=5&ctp=1&amp&pdt=301&tex=` + encoded;
          innerAudioContext.play();
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cover_chat = resolveEasycom(resolveDynamicComponent("cover-chat"), __easycom_0);
  const _component_micphone = resolveEasycom(resolveDynamicComponent("micphone"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode(
      "view",
      {
        class: "pengke-camera",
        style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
      },
      [
        createElementVNode("live-pusher", {
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
          style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
        }, null, 44, ["aspect"]),
        createElementVNode(
          "view",
          {
            class: "chat",
            style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
          },
          [
            createElementVNode(
              "cover-view",
              {
                class: "coverchat",
                style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
              },
              [
                createElementVNode("scroll-view", {
                  style: normalizeStyle({ height: `${$data.windowHeight * 0.8}px` }),
                  id: "scrollview",
                  scrollY: "true",
                  scrollTop: _ctx.scrollTop,
                  class: "scroll-view",
                  enableFlex: "true"
                }, [
                  createCommentVNode(" {{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br> "),
                  createVNode(_component_cover_chat, { msgList: $data.msglist }, null, 8, ["msgList"])
                ], 12, ["scrollTop"]),
                createElementVNode(
                  "cover-view",
                  {
                    class: "mic-container",
                    style: normalizeStyle({ height: `${$data.windowHeight * 0.2}px` })
                  },
                  [
                    createVNode(_component_micphone, {
                      ref: "micphone",
                      onTouchstart: $options.startMic,
                      onTouchend: $options.stopMic,
                      style: normalizeStyle({ transform: `scale(${$data.micScale})` })
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
const cover_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/smart-travel/cover_nvue.nvue"]]);
export {
  cover_nvue as default
};
