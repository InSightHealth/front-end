import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, resolveDynamicComponent, createElementVNode, normalizeStyle, createCommentVNode, Fragment, renderList, toDisplayString, createVNode } from "vue";
const _style_0$2 = { "mic": { "": { "width": "100rpx", "height": "100rpx" } } };
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
const _sfc_main$2 = {
  data() {
    return {
      text: "uni-app",
      voicePath: ""
    };
  },
  methods: {
    startRecord() {
      formatAppLog("log", "at components/micphone/micphone.vue:20", "开始录音");
      recorderManager.start();
    },
    endRecord() {
      formatAppLog("log", "at components/micphone/micphone.vue:24", "录音结束");
      recorderManager.stop();
      recorderManager.onStop(function(res) {
        formatAppLog("log", "at components/micphone/micphone.vue:27", JSON.stringify(res));
        uni.uploadFile({
          url: "http://127.0.0.1:8000/speechtotext",
          filePath: res.tempFilePath,
          name: "mp3",
          formData: {},
          success: (res2) => {
            formatAppLog("log", "at components/micphone/micphone.vue:34", "上传成功：" + JSON.stringify(res2));
          },
          fail: (err) => {
            formatAppLog("error", "at components/micphone/micphone.vue:36", "上传录音失败：" + err);
          }
        });
      });
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
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
const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "E:/fuchuang/learn/demo1/components/micphone/micphone.vue"]]);
const _style_0$1 = { "chat": { "": { "width": "750rpx" } }, "scroll-view": { ".chat ": { "width": "750rpx" } }, "chat-body": { ".chat .scroll-view ": { "display": "flex", "width": "750rpx", "flexDirection": "column", "paddingTop": "23rpx" } }, "self": { ".chat .scroll-view .chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat .scroll-view .chat-body ": { "display": "flex", "paddingTop": "23rpx", "paddingRight": "5rpx", "paddingBottom": "23rpx", "paddingLeft": "5rpx", "width": "750rpx" } }, "right": { ".chat .scroll-view .chat-body .item ": { "backgroundColor": "#ACEC9C", "position::after": "absolute", "content::after": '""', "width::after": 0, "height::after": 0, "left::after": 100, "top::after": 10, "borderWidth::after": "12rpx", "borderStyle::after": "solid", "borderColor::after": "rgba(0,0,0,0)", "borderLeftWidth::after": "15rpx", "borderLeftStyle::after": "solid", "borderLeftColor::after": "#ACEC9C", "transform::after": "translate(-4rpx)" } }, "left": { ".chat .scroll-view .chat-body .item ": { "backgroundColor": "#FFFFFF", "position::after": "absolute", "content::after": '""', "width::after": 0, "height::after": 0, "top::after": 10, "right::after": 100, "borderWidth::after": "12rpx", "borderStyle::after": "solid", "borderColor::after": "rgba(0,0,0,0)", "borderRightWidth::after": "15rpx", "borderRightStyle::after": "solid", "borderRightColor::after": "#FFFFFF", "transform::after": "translate(4rpx)" } }, "content": { ".chat .scroll-view .chat-body .item ": { "position": "relative", "maxWidth": "450rpx", "borderRadius": 12, "wordWrap": "break-word", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "fontSize": "20rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "32rpx" } }, "chat-bottom": { ".chat ": { "width": "750rpx", "height": "177rpx", "paddingBottom": "20rpx", "transitionDuration": 100, "transitionTimingFunction": "ease", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "@TRANSITION": { "chat-bottom": { "duration": 100, "timingFunction": "ease" } } };
const _sfc_main$1 = {
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
          botContent: "按住屏幕下方按钮讲话",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "我的前面有什么？",
          userId: 0
        },
        {
          userContent: "",
          recordId: 0,
          titleId: 0,
          botContent: "您的正前方有一个指示牌，请注意安全",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "我的前面有什么？",
          userId: 0
        },
        {
          userContent: "",
          recordId: 0,
          titleId: 0,
          botContent: "您的正前方有一个指示牌，请注意安全",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "我的前面有什么？",
          userId: 0
        },
        {
          userContent: "",
          recordId: 0,
          titleId: 0,
          botContent: "您的正前方有一个指示牌，请注意安全",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "我的前面有什么？",
          userId: 0
        },
        {
          userContent: "",
          recordId: 0,
          titleId: 0,
          botContent: "您的正前方有一个指示牌，请注意安全",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "我的前面有什么？",
          userId: 0
        },
        {
          userContent: "",
          recordId: 0,
          titleId: 0,
          botContent: "您的正前方有一个指示牌，请注意安全",
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
  const _component_micphone = resolveEasycom(resolveDynamicComponent("micphone"), __easycom_0$1);
  return openBlock(), createElementBlock("view", {
    class: "chat",
    renderWhole: true
  }, [
    createElementVNode("scroll-view", {
      style: normalizeStyle({ height: `${$options.windowHeight - $options.inputHeight}rpx` }),
      id: "scrollview",
      scrollY: "true",
      scrollTop: $data.scrollTop,
      class: "scroll-view"
    }, [
      createCommentVNode(" 聊天主体 "),
      createElementVNode("view", {
        id: "msglistview",
        class: "chat-body"
      }, [
        createCommentVNode(" 聊天记录 "),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.msgList, (item, index) => {
            return openBlock(), createElementBlock("view", { key: index }, [
              createCommentVNode(" 自己发的消息 "),
              item.userContent != "" ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "item self"
              }, [
                createCommentVNode(" 文字内容 "),
                createElementVNode("view", { class: "content right" }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.userContent),
                    1
                    /* TEXT */
                  )
                ])
              ])) : createCommentVNode("v-if", true),
              createCommentVNode(" 机器人发的消息 "),
              item.botContent != "" ? (openBlock(), createElementBlock("view", {
                key: 1,
                class: "item Ai"
              }, [
                createCommentVNode(" 文字内容 "),
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
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ], 12, ["scrollTop"]),
    createCommentVNode(" 底部消息发送栏 "),
    createCommentVNode(" 用来占位，防止聊天消息被发送框遮挡 "),
    createElementVNode("view", { class: "chat-bottom" }, [
      createVNode(_component_micphone, { StopHandler: $options.handleSend }, null, 8, ["StopHandler"])
    ])
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
const _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99 } } };
let _this = null;
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
  const _component_cover_chat = resolveEasycom(resolveDynamicComponent("cover-chat"), __easycom_0);
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
                createVNode(_component_cover_chat)
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
