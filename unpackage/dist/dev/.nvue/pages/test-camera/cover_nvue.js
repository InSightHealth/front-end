import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, normalizeStyle, createCommentVNode, Fragment, renderList, createElementVNode, toDisplayString, resolveDynamicComponent, createVNode } from "vue";
const _style_0$2 = { "chat-body": { "": { "display": "flex", "flexDirection": "column", "width": "750rpx", "boxSizing": "content-box" } }, "self": { ".chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat-body ": { "width": "750rpx", "display": "flex", "paddingTop": "45rpx", "paddingRight": "30rpx", "paddingBottom": "45rpx", "paddingLeft": "30rpx" } }, "right": { ".chat-body .item ": { "backgroundColor": "#ACEC9C", "alignSelf": "flex-end" } }, "left": { ".chat-body .item ": { "backgroundColor": "#FFFFFF" } }, "poly-right": { ".chat-body .item ": { "position": "relative", "top": "-50rpx", "left": "-5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-end" } }, "poly-left": { ".chat-body .item ": { "position": "relative", "top": "50rpx", "left": "5rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-start" } }, "content": { ".chat-body .item ": { "position": "relative", "wordWrap": "break-word", "paddingTop": "24rpx", "paddingRight": "24rpx", "paddingBottom": "24rpx", "paddingLeft": "24rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "borderRadius": "30rpx", "fontSize": "32rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "42rpx", "maxWidth": "380rpx" } }, "avatar": { ".chat-body .item ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "115rpx", "height": "115rpx", "overflow": "hidden" } } };
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
  return openBlock(), createElementBlock(
    "view",
    {
      id: "msglistview",
      class: "chat-body",
      style: normalizeStyle({ width: _ctx.windowWidth }),
      renderWhole: true
    },
    [
      createCommentVNode(" 聊天记录 "),
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
                createElementVNode("view", { class: "content left" }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.botContent),
                    1
                    /* TEXT */
                  )
                ])
              ])) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createCommentVNode(" 			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>")
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
const _style_0$1 = { "mic": { "": { "width": "130rpx", "height": "130rpx" } } };
const recorderManager$1 = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
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
      formatAppLog("log", "at components/micphone/micphone.vue:41", "tmpfPath = " + this.voicePath);
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
const _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99, "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-between" } }, "scroll-view": { ".pengke-camera .chat .coverchat ": { "height": 100, "width": "750rpx" } }, "mic-container": { ".pengke-camera .chat .coverchat ": { "height": "160rpx", "display": "flex", "alignItems": "center", "justifyContent": "center" } } };
let _this = null;
const recorderManager = uni.getRecorderManager();
uni.createInnerAudioContext();
const _sfc_main = {
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
          botContent: "hello，请问我有什么可以帮助你的吗？",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        }
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
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:119", a);
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
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:155", "success");
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
      formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:175", "开始录音");
      recorderManager.start();
    },
    stopMic() {
      formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:180", "录音结束");
      recorderManager.stop();
      recorderManager.onStop(function(res) {
        uni.uploadFile({
          url: "http://127.0.0.1:8000/speechtotext",
          name: "mp3",
          filePath: res.tempFilePath,
          formData: {},
          success: (res2) => {
            formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:189", "上传成功：" + JSON.stringify(res2));
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
            formatAppLog("error", "at pages/test-camera/cover_nvue.nvue:211", "上传录音失败：" + err.errMsg);
          }
        });
      });
    },
    handleRecord(text) {
      this.livePusher.snapshot({
        success: (e) => {
          _this.snapshotsrc = e.message.tempImagePath;
          const token = getApp().globalData.token;
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:221", "_this.snapshotsrc = " + _this.snapshotsrc);
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:222", "token = " + token);
          uni.uploadFile({
            url: "http://82.157.124.83:51603/storage/api/v1/uploadImg/move",
            filePath: _this.snapshotsrc,
            name: "multipartFile",
            formData: {},
            header: {
              "token": token
            },
            success: (uploadFileRes) => {
              formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:232", uploadFileRes.data);
              const response = JSON.parse(uploadFileRes.data);
              if (response.code == 200) {
                formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:235", response.data);
                _this.sendChat(text, response.data.image);
              }
            },
            fail: (err) => {
              formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:239", err.errMsg);
            }
          });
        }
      });
    },
    sendChat(text, imgUrl) {
      formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:247", "text = " + text + "   imgUrl = " + imgUrl);
      uni.request({
        url: "http://127.0.0.1:8000/chatbot",
        method: "POST",
        data: {
          "prompt": text,
          "image": imgUrl
        },
        success: (res) => {
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:256", res);
          _this.msglist.pop();
          if (res.statusCode == 200) {
            const response = JSON.parse(res.data);
            _this.msglist.push({
              botContent: response.response,
              recordId: 0,
              titleId: 0,
              userContent: "",
              userId: 0
            });
          } else {
            _this.msglist.push({
              botContent: "发送失败",
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
const cover_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/test-camera/cover_nvue.nvue"]]);
export {
  cover_nvue as default
};
