if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$m = {
    name: "homeHead",
    data() {
      return {};
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "home-head" }, [
        vue.createElementVNode("image", {
          class: "home-icon",
          src: "/static/homepage/image.png"
        }),
        vue.createElementVNode("image", {
          class: "home-title",
          src: "/static/homepage/title.png"
        })
      ])
    ]);
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-fe552612"], ["__file", "E:/fuchuang/learn/demo1/components/home-head/home-head.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$l = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "E:/fuchuang/learn/demo1/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$k = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:298", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$5);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-4dd3c44b"], ["__file", "E:/fuchuang/learn/demo1/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const innerAudioContext$5 = uni.createInnerAudioContext();
  innerAudioContext$5.autoplay = false;
  innerAudioContext$5.src = "";
  const _sfc_main$j = {
    name: "homeFoot",
    props: {
      pageType: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        chatMsg: "",
        holding: true,
        recoging: false,
        holderText: "正在听，请说出你的问题...",
        recogText: ""
      };
    },
    methods: {
      TestPage() {
        const url = "/pages/test/test";
        uni.navigateTo({ url });
      },
      navigateHome() {
        let routes = getCurrentPages();
        let curRoute = routes[routes.length - 1].route;
        const url = "/pages/index/index";
        formatAppLog("log", "at components/home-foot/home-foot.vue:73", curRoute, url);
        if (url != curRoute) {
          uni.navigateTo({ url });
        }
      },
      navigatePerson() {
        let routes = getCurrentPages();
        let curRoute = routes[routes.length - 1].route;
        const url = "/pages/personal/personal";
        formatAppLog("log", "at components/home-foot/home-foot.vue:83", curRoute, url);
        if (url != curRoute) {
          uni.navigateTo({ url });
        }
      },
      assist() {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        formatAppLog("log", "at components/home-foot/home-foot.vue:94", page);
        this.recoging = false;
        this.holding = true;
        this.holderText = "正在听，请说出你的问题...";
        this.$refs["popup"].open();
        formatAppLog("log", "at components/home-foot/home-foot.vue:101", "开始录音");
        recorderManager.start();
      },
      stopMic() {
        var _this = this;
        formatAppLog("log", "at components/home-foot/home-foot.vue:106", "录音结束");
        this.holderText = "正在识别...";
        recorderManager.stop();
        recorderManager.onStop(function(res) {
          formatAppLog("log", "at components/home-foot/home-foot.vue:110", JSON.stringify(res));
          uni.uploadFile({
            url: "http://8.137.38.90:8000/speechtotext",
            filePath: res.tempFilePath,
            name: "mp3",
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at components/home-foot/home-foot.vue:117", "上传成功：" + JSON.stringify(res2));
              const response = JSON.parse(res2.data);
              _this.chatMsg = response.text;
              _this.close();
            },
            fail: (err) => {
              formatAppLog("error", "at components/home-foot/home-foot.vue:122", "上传录音失败：" + err);
              _this.close();
            }
          });
        });
      },
      close() {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        formatAppLog("log", "at components/home-foot/home-foot.vue:131", page);
        var index = -1;
        const links = [
          "/pages/smart-travel/smart-travel",
          "/pages/photo-recog/photo_nvue",
          "/pages/smart-chat/smart-chat",
          "/pages/assist-read/photo_nvue"
        ];
        this.recoging = true;
        this.holding = false;
        if (this.chatMsg.includes("出行")) {
          this.recogText = "即将为你打开智能出行...";
          index = 0;
        } else if (this.chatMsg.includes("识图") || this.chatMsg.includes("拍照")) {
          this.recogText = "即将为你打开拍照识图...";
          index = 1;
        } else if (this.chatMsg.includes("助手") || this.chatMsg.includes("健康")) {
          this.recogText = "即将为你打开智能健康助手...";
          index = 2;
        } else if (this.chatMsg.includes("阅读")) {
          this.recogText = "即将为你打开辅助阅读...";
          index = 3;
        } else {
          this.recogText = "抱歉，我没听清...";
          setTimeout(() => {
            formatAppLog("log", "at components/home-foot/home-foot.vue:157", "Timeout Here!");
            this.$refs["popup"].close();
          }, 5e3);
          const text2 = this.recogText;
          const encoded2 = encodeURI(text2);
          formatAppLog("log", "at components/home-foot/home-foot.vue:163", encoded2);
          innerAudioContext$5.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
						&spd=6&ctp=1&amp&pdt=301&tex=` + encoded2;
          formatAppLog("log", "at components/home-foot/home-foot.vue:166", innerAudioContext$5.src);
          innerAudioContext$5.play();
          formatAppLog("log", "at components/home-foot/home-foot.vue:168", "play over!!!");
        }
        setTimeout(() => {
          this.$refs["popup"].close();
          uni.navigateTo({
            url: links[index]
          });
        }, 3e3);
        const text = this.recogText;
        const encoded = encodeURI(text);
        formatAppLog("log", "at components/home-foot/home-foot.vue:181", encoded);
        innerAudioContext$5.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
					&spd=6&ctp=1&amp&pdt=301&tex=` + encoded;
        formatAppLog("log", "at components/home-foot/home-foot.vue:184", innerAudioContext$5.src);
        innerAudioContext$5.play();
        formatAppLog("log", "at components/home-foot/home-foot.vue:186", "play over!!!");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("footer", { class: "footer-container" }, [
        $props.pageType ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "footer-parter-left"
        }, [
          vue.createCommentVNode(" Replace with your actual home icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/home-icon.png",
            class: "icon-footer",
            id: "home-icon",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateHome && $options.navigateHome(...args))
          }),
          vue.createElementVNode("text", {
            class: "footer-words",
            style: { "color": "#08DF86" }
          }, " 首页 ")
        ])) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "footer-parter-left"
        }, [
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/black_home.png",
            class: "icon-footer",
            id: "home-icon",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateHome && $options.navigateHome(...args))
          }),
          vue.createElementVNode("text", { class: "footer-words" }, " 首页 ")
        ])),
        vue.createElementVNode("div", { class: "footer-parter-center" }, [
          vue.createElementVNode(
            "img",
            {
              src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/segment.png",
              class: "icon-footer-center",
              onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.assist && $options.assist(...args)),
              onTouchend: _cache[3] || (_cache[3] = (...args) => $options.close && $options.close(...args))
            },
            null,
            32
            /* HYDRATE_EVENTS */
          ),
          vue.createElementVNode("text", { class: "footer-words" }, " 智能助手 "),
          vue.createCommentVNode(' <img src="path_to_microphone_icon.png" class="icon-footer" id="icon microphone-icon"> ')
        ]),
        $props.pageType ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 2,
          class: "footer-parter-right"
        }, [
          vue.createCommentVNode(" Replace with your actual user profile icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/user.png",
            class: "icon-footer",
            id: "user-icon",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.navigatePerson && $options.navigatePerson(...args))
          }),
          vue.createElementVNode("text", { class: "footer-words" }, " 个人 ")
        ])) : (vue.openBlock(), vue.createElementBlock("div", {
          key: 3,
          class: "footer-parter-right"
        }, [
          vue.createCommentVNode(" Replace with your actual user profile icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/green_person.png",
            class: "icon-footer",
            id: "user-icon",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.navigatePerson && $options.navigatePerson(...args))
          }),
          vue.createElementVNode("text", {
            class: "footer-words",
            style: { "color": "#08DF86" }
          }, " 个人 ")
        ])),
        vue.createVNode(
          _component_uni_popup,
          {
            ref: "popup",
            type: "bottom",
            class: "popup"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popup" }, [
                $data.holding ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "holderText"
                  },
                  vue.toDisplayString($data.holderText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $data.recoging ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "responseText"
                  },
                  vue.toDisplayString($data.recogText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("image", {
                  class: "popup-gif",
                  src: "/static/homepage/sound.gif"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-5c189880"], ["__file", "E:/fuchuang/learn/demo1/components/home-foot/home-foot.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        holding: true,
        recoging: false
      };
    },
    onLoad() {
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home_head = resolveEasycom(vue.resolveDynamicComponent("home-head"), __easycom_0$6);
    const _component_home_foot = resolveEasycom(vue.resolveDynamicComponent("home-foot"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "main-container" }, [
      vue.createVNode(_component_home_head),
      vue.createElementVNode("div", { class: "content" }, [
        vue.createElementVNode("div", { class: "content-first-row" }, [
          vue.createElementVNode("navigator", {
            id: "link-to-smart-travel",
            url: "/pages/smart-travel/cover_nvue"
          }, " 智能出行 "),
          vue.createElementVNode("navigator", {
            id: "link-to-snap-recognize",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("img", { src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/snap-icon.png" }),
            vue.createTextVNode(" 拍照识图 ")
          ])
        ]),
        vue.createElementVNode("div", { class: "content-second-row" }, [
          vue.createElementVNode("navigator", {
            id: "link-to-health-assistant",
            url: "/pages/smart-chat/smart-chat"
          }, [
            vue.createElementVNode("text", null, "智能健康助手"),
            vue.createElementVNode("image", { src: "/static/homepage/poe.png" })
          ]),
          vue.createElementVNode("navigator", {
            id: "link-to-assist-read",
            url: "/pages/assist-read/photo_nvue"
          }, [
            vue.createElementVNode("text", null, "辅助阅读"),
            vue.createElementVNode("image", { src: "/static/homepage/book.png" })
          ])
        ])
      ]),
      vue.createVNode(_component_home_foot, { pageType: true })
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "E:/fuchuang/learn/demo1/pages/index/index.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        pathList: [
          {
            path: "/pages/recTest/native_test",
            lebal: "测试音频"
          },
          {
            path: "/pages/test-camera/cover_nvue",
            lebal: "测试摄像头"
          },
          {
            path: "/pages/test_api/test-upload",
            lebal: "测试API"
          },
          {
            path: "/pages/test-page/test-page",
            lebal: "测试Page"
          }
        ]
      };
    },
    methods: {
      TestPage(url) {
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("div", { class: "container" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.pathList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("button", {
              key: index,
              onClick: ($event) => $options.TestPage(item.path)
            }, vue.toDisplayString(item.lebal), 9, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "E:/fuchuang/learn/demo1/pages/test/test.vue"]]);
  const innerAudioContext$4 = uni.createInnerAudioContext();
  innerAudioContext$4.autoplay = false;
  innerAudioContext$4.src = "";
  const _sfc_main$g = {
    name: "bot-chat",
    props: {
      msgList: {
        type: Array,
        default: [
          // {
          //     botContent: "hello，请问我有什么可以帮助你的吗？",
          //     recordId: 0,
          //     titleId: 0,
          //     userContent: "",
          //     userId: 0
          // },
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
        chatMsg: ""
      };
    },
    methods: {
      play(index) {
        const text = this.msgList[index].botContent;
        const encoded = encodeURI(text);
        formatAppLog("log", "at components/bot-chat/bot-chat.vue:87", encoded);
        innerAudioContext$4.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
					&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
        formatAppLog("log", "at components/bot-chat/bot-chat.vue:90", innerAudioContext$4.src);
        innerAudioContext$4.play();
        formatAppLog("log", "at components/bot-chat/bot-chat.vue:92", "play over!!!");
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        id: "msglistview",
        class: "chat-body"
      }, [
        vue.createCommentVNode(" 聊天记录 "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.msgList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
              vue.createCommentVNode(" 自己发的消息 "),
              item.userContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "item self"
              }, [
                vue.createCommentVNode(" 文字内容 "),
                vue.createElementVNode(
                  "view",
                  { class: "content right" },
                  vue.toDisplayString(item.userContent),
                  1
                  /* TEXT */
                ),
                vue.createCommentVNode(" 头像 "),
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", { src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/avatar.jpg" })
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 机器人发的消息 "),
              item.botContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "item Ai"
              }, [
                vue.createCommentVNode(" 头像 "),
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", { src: "/static/smart-chat/icon-bot.png" })
                ]),
                vue.createCommentVNode(" 文字内容 "),
                vue.createElementVNode("view", {
                  class: "content left",
                  onClick: ($event) => $options.play(index)
                }, vue.toDisplayString(item.botContent), 9, ["onClick"])
              ])) : vue.createCommentVNode("v-if", true)
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-fb69b191"], ["__file", "E:/fuchuang/learn/demo1/components/bot-chat/bot-chat.vue"]]);
  const _sfc_main$f = {
    name: "press-mic",
    data() {
      return {};
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "speakarea" }, [
      vue.createElementVNode("image", { src: "/static/smart-chat/press-mic.png" })
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-f48dac70"], ["__file", "E:/fuchuang/learn/demo1/components/press-mic/press-mic.vue"]]);
  const recorderManager$3 = uni.getRecorderManager();
  const innerAudioContext$3 = uni.createInnerAudioContext();
  innerAudioContext$3.autoplay = false;
  innerAudioContext$3.src = "";
  const _sfc_main$e = {
    data() {
      return {
        keyboardHeight: 100,
        showbox1: true,
        showbox2: false,
        showbox: true,
        chatMsg: "",
        speak_mode: true,
        type_mode: false,
        show_listen: false,
        msgModified: false,
        placeholder: "请输入你想问的...",
        msglist: [
          {
            botContent: "hello，请问我有什么可以帮助你的吗？",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          }
        ],
        backUrl: "",
        baseUrl: ""
      };
    },
    updated() {
      if (this.chatMsg != "") {
        this.placeholder = "";
      } else {
        this.placeholder = "请输入你想问的...";
      }
    },
    onLoad() {
      this.backUrl = getApp().globalData.backUrl;
      this.baseUrl = getApp().globalData.baseUrl;
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    methods: {
      keyboardInput() {
        if (this.chatMsg != "") {
          this.placeholder = "";
        } else {
          this.placeholder = "请输入你想问的...";
        }
      },
      toggle1() {
        this.showbox1 = !this.showbox1;
        this.showbox2 = false;
        this.showbox = this.showbox1;
        this.scrollTotop();
      },
      toggle2() {
        this.showbox1 = false;
        this.showbox2 = !this.showbox2;
        this.showbox = this.showbox2;
        this.scrollTotop();
      },
      pxTorpx(px) {
        let deviceWidth = wx.getSystemInfoSync().windowWidth;
        let rpx = 750 / deviceWidth * Number(px);
        return Math.floor(rpx);
      },
      scrollTotop() {
        uni.createSelectorQuery().select(".scroll-view").boundingClientRect((res) => {
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:156", res);
          const scrollH = res.top;
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:158", "scroll view selected!!");
          uni.pageScrollTo({
            duration: 100,
            // 过渡时间
            scrollTop: scrollH
            // 滚动的实际距离
          });
        }).exec();
      },
      scrollTobottom() {
        uni.createSelectorQuery().select(`.scroll-view`).boundingClientRect((res) => {
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:167", res);
          const scrollH = res.bottom;
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:169", "scroll view selected!!");
          uni.pageScrollTo({
            duration: 100,
            // 过渡时间
            scrollTop: scrollH
            // 滚动的实际距离
          });
        }).exec();
      },
      keyboardInput() {
        this.placeholder = "";
      },
      touchstart() {
        this.show_listen = true;
        this.startRecord();
      },
      touchend() {
        this.show_listen = false;
        this.endRecord();
      },
      togglemode() {
        this.speak_mode = !this.speak_mode;
        this.type_mode = !this.type_mode;
      },
      startRecord() {
        formatAppLog("log", "at pages/smart-chat/smart-chat.vue:192", "开始录音");
        recorderManager$3.start();
      },
      endRecord() {
        var _this = this;
        const url = _this.baseUrl + "/speechtotext";
        formatAppLog("log", "at pages/smart-chat/smart-chat.vue:198", "录音结束");
        formatAppLog("log", "at pages/smart-chat/smart-chat.vue:199", url);
        recorderManager$3.stop();
        recorderManager$3.onStop(function(res) {
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:202", JSON.stringify(res));
          uni.uploadFile({
            url,
            filePath: res.tempFilePath,
            name: "mp3",
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at pages/smart-chat/smart-chat.vue:209", "上传成功：" + JSON.stringify(res2));
              const response = JSON.parse(res2.data);
              _this.chatMsg = response.text;
              _this.typeSend();
            },
            fail: (err) => {
              formatAppLog("error", "at pages/smart-chat/smart-chat.vue:214", "上传录音失败：" + err);
            }
          });
        });
      },
      typeSend() {
        this.showbox1 = this.showbox2 = false;
        this.showbox = false;
        this.msgModified = true;
        this.msglist.push({
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: this.chatMsg,
          userId: 0
        });
        this.msglist.push({
          botContent: "思考中...",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        });
        uni.request({
          url: this.baseUrl + "/healthbot",
          method: "POST",
          data: {
            "prompt": this.chatMsg
          },
          success: (res) => {
            formatAppLog("log", "at pages/smart-chat/smart-chat.vue:246", res);
            this.msglist.pop();
            try {
              const response = res.data;
              this.msglist.push({
                botContent: response.response,
                recordId: 0,
                titleId: 0,
                userContent: "",
                userId: 0
              });
              const encoded = encodeURI(response.response);
              formatAppLog("log", "at pages/smart-chat/smart-chat.vue:259", encoded);
              innerAudioContext$3.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
								&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
              innerAudioContext$3.play();
            } catch (e) {
              this.msglist.push({
                botContent: "发送失败",
                recordId: 0,
                titleId: 0,
                userContent: "",
                userId: 0
              });
              const encoded = encodeURI("发送失败");
              formatAppLog("log", "at pages/smart-chat/smart-chat.vue:272", encoded);
              innerAudioContext$3.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
								&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
              innerAudioContext$3.play();
            }
          },
          fail: (err) => {
            formatAppLog("log", "at pages/smart-chat/smart-chat.vue:279", err);
            this.msglist.pop();
            this.msglist.push({
              botContent: "发送失败",
              recordId: 0,
              titleId: 0,
              userContent: "",
              userId: 0
            });
            const encoded = encodeURI("发送失败");
            innerAudioContext$3.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
							&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
            formatAppLog("log", "at pages/smart-chat/smart-chat.vue:291", innerAudioContext$3.src);
            innerAudioContext$3.play();
          }
        });
        this.chatMsg = "";
        this.scrollTobottom();
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bot_chat = resolveEasycom(vue.resolveDynamicComponent("bot-chat"), __easycom_0$3);
    const _component_press_mic = resolveEasycom(vue.resolveDynamicComponent("press-mic"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "wholeview" }, [
      vue.createElementVNode("view", { class: "topview" }),
      vue.createElementVNode("view", { class: "topbar" }, [
        vue.createElementVNode("view", { class: "topbarleft" }, [
          vue.createElementVNode("text", { class: "topbarlefttitle" }, " 健康助手 "),
          vue.createElementVNode("view", {
            class: "topbarlefticon",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggle1 && $options.toggle1(...args))
          }, [
            vue.createElementVNode("text", { class: "topbarlefticontext" }, "Λ")
          ])
        ]),
        vue.createElementVNode("image", {
          class: "topbarright",
          src: "/static/smart-chat/manage.png",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.toggle2 && $options.toggle2(...args))
        })
      ]),
      vue.createElementVNode("scroll-view", {
        style: vue.normalizeStyle({ height: `${_ctx.windowHeight}rpx` }),
        id: "scrollview",
        "scroll-y": "true",
        "scroll-top": _ctx.scrollTop,
        class: "scroll-view"
      }, [
        vue.createElementVNode("view", { class: "placebox" }),
        vue.createElementVNode("view", { class: "placebox-bottom" }),
        $data.showbox1 ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "polygon1",
          src: "/static/smart-chat/polygon.png"
        })) : vue.createCommentVNode("v-if", true),
        $data.showbox2 ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 1,
          class: "polygon2",
          src: "/static/smart-chat/polygon.png"
        })) : vue.createCommentVNode("v-if", true),
        $data.showbox1 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "middlebox1"
        }, [
          vue.createElementVNode("view", { class: "row11" }, " Hi，你好，我是你的智能助手 "),
          vue.createElementVNode("view", { class: "row12" }, "可能偶尔产生不正确的信息，可能偶尔产生有害的指令，内容仅供参考。"),
          vue.createElementVNode("view", { class: "row13" }, "我有点头疼"),
          vue.createElementVNode("view", { class: "row14" }, "阿司匹林是治疗什么的？")
        ])) : vue.createCommentVNode("v-if", true),
        $data.showbox2 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "middlebox2"
        }, [
          vue.createElementVNode("view", { class: "col21" }, [
            vue.createElementVNode("image", {
              class: "row211",
              src: "/static/smart-chat/archive.png"
            }),
            vue.createElementVNode("view", { class: "row212" }, " 上传医疗报告 ")
          ]),
          vue.createElementVNode("view", { class: "col22" }, [
            vue.createElementVNode("image", {
              class: "row221",
              src: "/static/smart-chat/info.png"
            }),
            vue.createElementVNode("view", { class: "row222" }, " 完善个人信息 ")
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([$data.showbox ? "content-box" : "content"])
          },
          [
            vue.createVNode(_component_bot_chat, { msgList: $data.msglist }, null, 8, ["msgList"])
          ],
          2
          /* CLASS */
        ),
        $data.show_listen ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 4,
          class: "show-listen"
        }, [
          vue.createElementVNode("text", { class: "listen-title" }, "正在听，请说出您的问题"),
          vue.createElementVNode("image", { src: "/static/homepage/sound.gif" })
        ])) : vue.createCommentVNode("v-if", true),
        $data.show_listen ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "listen-place"
        })) : vue.createCommentVNode("v-if", true)
      ], 12, ["scroll-top"]),
      vue.createElementVNode("view", { class: "chat-bottom" }, [
        $data.type_mode ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "send-msg"
        }, [
          vue.createElementVNode("image", {
            src: "/static/smart-chat/chat-mic.png",
            class: "send-btn",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.togglemode && $options.togglemode(...args))
          }),
          vue.createElementVNode("view", { class: "uni-textarea" }, [
            vue.withDirectives(vue.createElementVNode("textarea", {
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.chatMsg = $event),
              placeholder: $data.placeholder,
              "placeholder-style": "display:flex; align-items:center; justify-content:center;",
              onInput: _cache[4] || (_cache[4] = (...args) => $options.keyboardInput && $options.keyboardInput(...args)),
              maxlength: "300",
              "show-confirm-bar": false,
              class: "textarea"
            }, null, 40, ["placeholder"]), [
              [vue.vModelText, $data.chatMsg]
            ])
          ]),
          vue.createElementVNode("image", {
            src: "/static/smart-chat/send.png",
            class: "send-btn",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.typeSend && $options.typeSend(...args))
          })
        ])) : vue.createCommentVNode("v-if", true),
        $data.speak_mode ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "send-msg"
        }, [
          vue.createElementVNode("image", {
            src: "/static/smart-chat/keyboard.png",
            class: "send-btn",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.togglemode && $options.togglemode(...args))
          }),
          vue.createElementVNode("view", { class: "uni-textarea" }, [
            vue.createVNode(_component_press_mic, {
              onTouchstart: $options.touchstart,
              onTouchend: $options.touchend
            }, null, 8, ["onTouchstart", "onTouchend"])
          ]),
          vue.createElementVNode("image", {
            src: "/static/smart-chat/send.png",
            class: "send-btn",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.scrollTobottom && $options.scrollTobottom(...args))
          })
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesSmartChatSmartChat = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "E:/fuchuang/learn/demo1/pages/smart-chat/smart-chat.vue"]]);
  const recorderManager$2 = uni.getRecorderManager();
  const innerAudioContext$2 = uni.createInnerAudioContext();
  innerAudioContext$2.autoplay = false;
  innerAudioContext$2.src = "";
  const _sfc_main$d = {
    props: {
      photoUrl: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        inputText: "",
        hasInput: false,
        playText: "我很高兴为您解答！你可以在上面手动或语音输入",
        placeholder: "你可以点击这里输入, 也可以按住下方语音发送",
        playColor: "#888888",
        hasPlay: false
      };
    },
    methods: {
      micStart() {
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:46", "开始录音");
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:47", this.inputText);
        this.hasPlay = false;
        this.placeholder = "我正在听...";
        this.playText = "我很高兴为您解答！你可以在上面手动或语音输入";
        this.playColor = "#888888";
        recorderManager$2.start();
      },
      micStop() {
        const baseUrl = getApp().globalData.baseUrl;
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:56", "录音结束");
        this.placeholder = "识别中...";
        recorderManager$2.stop();
        var _this = this;
        recorderManager$2.onStop(function(res) {
          formatAppLog("log", "at components/tab-chat/tab-chat.vue:61", res.tempFilePath);
          uni.uploadFile({
            url: baseUrl + "/speechtotext",
            name: "mp3",
            filePath: res.tempFilePath,
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at components/tab-chat/tab-chat.vue:68", "上传成功：" + JSON.stringify(res2));
              if (res2.statusCode == 200) {
                const response = JSON.parse(res2.data);
                formatAppLog("log", "at components/tab-chat/tab-chat.vue:72", response.text);
                _this.inputText = response.text;
                _this.placeholder = "";
                _this.hasInput = true;
                _this.sendMsg();
              } else {
                _this.hasPlay = true;
                _this.playText = "发送失败";
                _this.playColor = "red";
              }
            },
            fail: (err) => {
              formatAppLog("error", "at components/tab-chat/tab-chat.vue:83", "上传录音失败：" + JSON.stringify(err));
            }
          });
        });
      },
      focus() {
        this.placeholder = "";
      },
      blur() {
        this.placeholder = "";
        if (this.inputText == "") {
          this.placeholder = "你可以点击这里输入, 也可以按住下方语音发送";
        }
      },
      clearText() {
        this.hasInput = false;
        this.inputText = "";
        this.placeholder = "你可以点击这里输入, 也可以按住下方语音发送";
      },
      clearPlay() {
        this.hasPlay = false;
        this.playText = "我很高兴为您解答！你可以在上面手动或语音输入";
        this.playColor = "#888888";
      },
      play() {
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:107", "播放");
        const encoded = encodeURI(this.playText);
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:110", encoded);
        innerAudioContext$2.src = "https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&ctp=1&amp&pdt=301&tex=" + encoded;
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:112", innerAudioContext$2.src);
        innerAudioContext$2.play();
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:114", "play over!!!");
      },
      send() {
        this.sendMsg();
      },
      sendMsg() {
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:120", this.inputText, this.photoUrl);
        const baseUrl = getApp().globalData.baseUrl;
        this.playText = "发送中...";
        this.playColor = "#888888";
        uni.request({
          url: baseUrl + "/chatbot",
          method: "POST",
          data: {
            "prompt": this.inputText,
            "image": this.photoUrl
          },
          success: (res) => {
            formatAppLog("log", "at components/tab-chat/tab-chat.vue:132", res);
            this.hasPlay = true;
            try {
              formatAppLog("log", "at components/tab-chat/tab-chat.vue:136", res.data);
              formatAppLog("log", "at components/tab-chat/tab-chat.vue:138", res.data.response);
              this.playText = res.data.response;
              this.playColor = "black";
            } catch (e) {
              this.playText = "发送失败！！";
              this.playColor = "red";
            }
          },
          fail: (err) => {
            formatAppLog("log", "at components/tab-chat/tab-chat.vue:147", err);
            this.playText = "发送失败！！";
            this.playColor = "red";
          }
        });
      },
      textInput() {
        formatAppLog("log", "at components/tab-chat/tab-chat.vue:154", "input....");
        if (this.inputText == "") {
          this.hasInput = false;
          this.placeholder = "你可以在上方输入,也可以按住语音发送";
        } else {
          this.hasInput = true;
          this.placeholder = "";
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-view" }, [
      vue.withDirectives(vue.createElementVNode("textarea", {
        class: "input-text",
        onInput: _cache[0] || (_cache[0] = (...args) => $options.textInput && $options.textInput(...args)),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.inputText = $event),
        onFocus: _cache[2] || (_cache[2] = (...args) => $options.focus && $options.focus(...args)),
        onBlur: _cache[3] || (_cache[3] = (...args) => $options.blur && $options.blur(...args)),
        placeholder: $data.placeholder,
        "placeholder-style": "font-size: 36rpx"
      }, null, 40, ["placeholder"]), [
        [vue.vModelText, $data.inputText]
      ]),
      $data.hasInput ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: "clear",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.clearText && $options.clearText(...args))
      }, "清除内容")) : vue.createCommentVNode("v-if", true),
      $data.hasInput ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        class: "tap-mic",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.send && $options.send(...args))
      }, " 确认发送 ")) : (vue.openBlock(), vue.createElementBlock(
        "div",
        {
          key: 2,
          class: "tap-mic",
          onTouchstart: _cache[6] || (_cache[6] = (...args) => $options.micStart && $options.micStart(...args)),
          onTouchend: _cache[7] || (_cache[7] = (...args) => $options.micStop && $options.micStop(...args))
        },
        [
          vue.createElementVNode("image", { src: "/static/recog/mic.png" })
        ],
        32
        /* HYDRATE_EVENTS */
      )),
      vue.createElementVNode("div", { class: "divide" }),
      vue.createElementVNode(
        "div",
        {
          class: "show-box",
          style: vue.normalizeStyle({ color: `${$data.playColor}` })
        },
        vue.toDisplayString($data.playText),
        5
        /* TEXT, STYLE */
      ),
      $data.hasPlay ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 3,
        class: "clear",
        onClick: _cache[8] || (_cache[8] = (...args) => $options.clearPlay && $options.clearPlay(...args))
      }, "清除内容")) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        class: "tap-mic",
        onClick: _cache[9] || (_cache[9] = (...args) => $options.play && $options.play(...args))
      }, " 点击播放 ")
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-6c9e0889"], ["__file", "E:/fuchuang/learn/demo1/components/tab-chat/tab-chat.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        photoPath: "",
        heightRatio: 1,
        thumbnail: false,
        startData: {
          clientY: ""
        },
        moveY: 0,
        state: 0,
        photoUrl: "",
        backUrl: "",
        baseUrl: "",
        token: ""
      };
    },
    onLoad(option) {
      this.token = getApp().getToken();
      this.backUrl = getApp().globalData.backUrl;
      this.baseUrl = getApp().globalData.baseUrl;
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("recieveFile", (data) => {
        this.photoPath = data.filepath;
        this.$refs.image.src = data.filepath;
      });
      eventChannel.on("recieveFile", (data) => {
        uni.compressImage({
          src: data.filepath,
          quality: 80,
          success: (res) => {
            formatAppLog("log", "at pages/photo-recog/photo-recog.vue:70", res.tempFilePath);
            this.uploadFile(res.tempFilePath);
          }
        });
      });
    },
    methods: {
      uploadFile(filepath) {
        formatAppLog("log", "at pages/photo-recog/photo-recog.vue:78", this.backUrl + "/storage/api/v1/uploadImg/photo");
        formatAppLog("log", "at pages/photo-recog/photo-recog.vue:79", this.token);
        uni.uploadFile({
          url: this.backUrl + "/storage/api/v1/uploadImg/photo",
          name: "multipartFile",
          filePath: filepath,
          formData: {},
          header: {
            "token": this.token
          },
          success: (res) => {
            formatAppLog("log", "at pages/photo-recog/photo-recog.vue:89", "上传成功：" + JSON.stringify(res));
            try {
              const response = JSON.parse(res.data);
              formatAppLog("log", "at pages/photo-recog/photo-recog.vue:93", response.data.image);
              this.photoUrl = response.data.image;
            } catch (e) {
              formatAppLog("error", "at pages/photo-recog/photo-recog.vue:96", e);
              uni.showToast({
                title: "图片上传失败，请检查网络"
              });
            }
          },
          fail: (err) => {
            formatAppLog("error", "at pages/photo-recog/photo-recog.vue:103", err);
            uni.showToast({
              title: "图片上传失败，请检查网络"
            });
          }
        });
      },
      back() {
        if (this.thumbnail) {
          this.thumbnail = false;
        } else {
          uni.navigateBack();
        }
      },
      showThumb() {
        this.thumbnail = true;
        this.moveY = 0;
        this.state = 0;
      },
      start(e) {
        this.startData.clientY = e.changedTouches[0].clientY;
      },
      end(e) {
        formatAppLog("log", "at pages/photo-recog/photo-recog.vue:127", "this.moveY = ", this.touch.clientY - this.startData.clientY);
        if (this.touch.clientY - this.startData.clientY > 300) {
          this.state = 1;
          this.moveY = 350;
          this.thumbnail = false;
        } else {
          this.state = 0;
          this.moveY = 0;
        }
      },
      move(event) {
        let touch = event.touches[0];
        this.touch = touch;
        let data = 0;
        if (touch.clientY > this.startData.clientY && this.state === 0) {
          data = touch.clientY - this.startData.clientY;
          if (data > 1e3) {
            data = 1e3;
          }
          this.moveY = data;
        }
        if (touch.clientY < this.startData.clientY && this.state === 1) {
          data = this.startData.clientY - touch.clientY;
          if (data > 1e3) {
            data = -1e3;
          }
          this.moveY = 350 - data;
        }
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_chat = resolveEasycom(vue.resolveDynamicComponent("tab-chat"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "root-view" }, [
      vue.createElementVNode("image", {
        class: "back-icon",
        src: "/static/recog/back-icon.png",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
      }),
      vue.createElementVNode("view", { class: "recog-view" }, [
        vue.createElementVNode("image", {
          class: vue.normalizeClass([$data.thumbnail ? "preview-img-thumb" : "preview-img"]),
          src: $data.photoPath,
          ref: "image"
        }, null, 10, ["src"]),
        vue.createElementVNode("view", { class: "menu" }, [
          vue.createElementVNode("navigator", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/back.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 返回 ")
          ]),
          vue.createElementVNode("view", {
            class: "row",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.showThumb && $options.showThumb(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/ok.png",
              class: "row-middle"
            })
          ]),
          vue.createElementVNode("view", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/rotate.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 旋转 ")
          ])
        ])
      ]),
      $data.thumbnail ? (vue.openBlock(), vue.createBlock(_component_tab_chat, {
        key: 0,
        class: "showMore-box",
        style: vue.normalizeStyle({
          transform: "translateY(" + $data.moveY + "px)"
        }),
        onTouchstart: $options.start,
        onTouchend: $options.end,
        onTouchmove: $options.move,
        photoUrl: $data.photoUrl
      }, null, 8, ["style", "onTouchstart", "onTouchend", "onTouchmove", "photoUrl"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPhotoRecogPhotoRecog = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-3abb26b1"], ["__file", "E:/fuchuang/learn/demo1/pages/photo-recog/photo-recog.vue"]]);
  const innerAudioContext$1 = uni.createInnerAudioContext();
  innerAudioContext$1.autoplay = false;
  innerAudioContext$1.src = "";
  const _sfc_main$b = {
    props: {
      recogText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        speed: 5,
        playHint: "正常",
        playicon: "/static/read/start.png",
        playing: true
      };
    },
    methods: {
      goHome() {
        uni.navigateTo({
          url: "/pages/index/index"
        });
      },
      play() {
        formatAppLog("log", "at components/tab-recog/tab-recog.vue:45", "播放" + this.recogText);
        this.playing = false;
        const encoded = encodeURI(this.recogText);
        formatAppLog("log", "at components/tab-recog/tab-recog.vue:50", encoded);
        innerAudioContext$1.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
				&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
        formatAppLog("log", "at components/tab-recog/tab-recog.vue:53", innerAudioContext$1.src);
        innerAudioContext$1.play();
        innerAudioContext$1.onEnded(() => {
          formatAppLog("log", "at components/tab-recog/tab-recog.vue:57", "play over!!!");
          this.playing = true;
        });
      },
      toggle() {
        switch (this.speed) {
          case 3:
            this.speed = 5;
            this.playHint = "正常";
            break;
          case 5:
            this.speed = 8;
            this.playHint = "倍速";
            break;
          case 8:
            this.speed = 3;
            this.playHint = "慢速";
            break;
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-view" }, [
      vue.createElementVNode(
        "scroll-view",
        {
          class: "show-box",
          style: {},
          "scroll-y": "true"
        },
        vue.toDisplayString($props.recogText),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "menu" }, [
        vue.createElementVNode("view", { class: "first-row" }, [
          $data.playing ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "start-play",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.play && $options.play(...args)),
            src: "/static/read/start.png"
          })) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            class: "start-play",
            src: "/static/read/bg-suspend.png"
          })),
          vue.createElementVNode(
            "view",
            {
              class: "mult-play",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.toggle && $options.toggle(...args))
            },
            vue.toDisplayString($data.playHint),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "second-row" }, [
          vue.createElementVNode("image", {
            src: "/static/recog/home.png",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.goHome && $options.goHome(...args))
          }),
          vue.createElementVNode("navigator", {
            class: "once-again",
            url: "/pages/assist-read/photo_nvue"
          }, "再拍一张")
        ])
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-ba5ee5c4"], ["__file", "E:/fuchuang/learn/demo1/components/tab-recog/tab-recog.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        photoPath: "",
        heightRatio: 1,
        thumbnail: false,
        startData: {
          clientY: ""
        },
        moveY: 0,
        state: 0,
        recogText: "",
        backUrl: "",
        baseUrl: "",
        token: ""
      };
    },
    onLoad(option) {
      this.token = getApp().getToken();
      this.backUrl = getApp().globalData.backUrl;
      this.baseUrl = getApp().globalData.baseUrl;
      const eventChannel = this.getOpenerEventChannel();
      this.recogText = "";
      eventChannel.on("recieveFile", (data) => {
        this.photoPath = data.filepath;
        this.$refs.image.src = data.filepath;
      });
      eventChannel.on("recieveFile", (data) => {
        uni.uploadFile({
          url: this.backUrl + "/storage/api/v1/uploadImg/read",
          name: "multipartFile",
          filePath: data.filepath,
          formData: {},
          header: {
            "token": this.token
          },
          success: (res) => {
            formatAppLog("log", "at pages/assist-read/photo-recog.vue:77", "上传成功：" + JSON.stringify(res));
            try {
              const response = JSON.parse(res.data);
              formatAppLog("log", "at pages/assist-read/photo-recog.vue:81", response.data.image);
              this.photoUrl = response.data.image;
              this.handleImg();
            } catch (e) {
              formatAppLog("error", "at pages/assist-read/photo-recog.vue:86", e);
              uni.showToast({
                title: "图片上传失败，请检查网络"
              });
            }
          },
          fail: (err) => {
            formatAppLog("error", "at pages/assist-read/photo-recog.vue:93", err);
            uni.showToast({
              title: "图片上传失败，请检查网络"
            });
          }
        });
      });
    },
    methods: {
      back() {
        if (this.thumbnail) {
          this.thumbnail = false;
        } else {
          uni.navigateBack();
        }
      },
      handleImg() {
        var _this = this;
        formatAppLog("log", "at pages/assist-read/photo-recog.vue:111", "photoUrl: " + this.photoUrl);
        uni.request({
          url: this.baseUrl + "/ocr",
          method: "POST",
          data: {
            "image": this.photoUrl
          },
          success: (res) => {
            formatAppLog("log", "at pages/assist-read/photo-recog.vue:119", res);
            try {
              const resText = res.data.join("\n");
              _this.recogText = resText;
              formatAppLog("log", "at pages/assist-read/photo-recog.vue:123", this.recogText);
            } catch (e) {
              _this.recogText = "发送失败";
            }
          },
          fail: (err) => {
            _this.recogText = "发送失败";
          }
        });
      },
      showThumb() {
        this.thumbnail = true;
        this.moveY = 0;
        this.state = 0;
      },
      start(e) {
        this.startData.clientY = e.changedTouches[0].clientY;
      },
      end(e) {
        formatAppLog("log", "at pages/assist-read/photo-recog.vue:142", this.recogText);
        formatAppLog("log", "at pages/assist-read/photo-recog.vue:143", "this.moveY = ", this.touch.clientY - this.startData.clientY);
        if (this.touch.clientY - this.startData.clientY > 300) {
          this.state = 1;
          this.moveY = 350;
          this.thumbnail = false;
        } else {
          this.state = 0;
          this.moveY = 0;
        }
      },
      move(event) {
        let touch = event.touches[0];
        this.touch = touch;
        let data = 0;
        if (touch.clientY > this.startData.clientY && this.state === 0) {
          data = touch.clientY - this.startData.clientY;
          if (data > 1e3) {
            data = 1e3;
          }
          this.moveY = data;
        }
        if (touch.clientY < this.startData.clientY && this.state === 1) {
          data = this.startData.clientY - touch.clientY;
          if (data > 1e3) {
            data = -1e3;
          }
          this.moveY = 350 - data;
        }
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_recog = resolveEasycom(vue.resolveDynamicComponent("tab-recog"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "root-view" }, [
      vue.createElementVNode("image", {
        class: "back-icon",
        src: "/static/recog/back-icon.png",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
      }),
      vue.createElementVNode("view", { class: "recog-view" }, [
        vue.createElementVNode("image", {
          class: vue.normalizeClass([$data.thumbnail ? "preview-img-thumb" : "preview-img"]),
          src: $data.photoPath,
          ref: "image"
        }, null, 10, ["src"]),
        vue.createElementVNode("view", { class: "menu" }, [
          vue.createElementVNode("navigator", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/back.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 返回 ")
          ]),
          vue.createElementVNode("view", {
            class: "row",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.showThumb && $options.showThumb(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/ok.png",
              class: "row-middle"
            })
          ]),
          vue.createElementVNode("view", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/rotate.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 旋转 ")
          ])
        ])
      ]),
      $data.thumbnail ? (vue.openBlock(), vue.createBlock(_component_tab_recog, {
        key: 0,
        class: "showMore-box",
        style: vue.normalizeStyle({
          transform: "translateY(" + $data.moveY + "px)"
        }),
        onTouchstart: $options.start,
        onTouchend: $options.end,
        onTouchmove: $options.move,
        recogText: $data.recogText
      }, null, 8, ["style", "onTouchstart", "onTouchend", "onTouchmove", "recogText"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesAssistReadPhotoRecog = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-fb8e82d4"], ["__file", "E:/fuchuang/learn/demo1/pages/assist-read/photo-recog.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        gender: false,
        avatar: "",
        age: 0,
        nickname: "",
        backUrl: "",
        baseUrl: "",
        token: ""
      };
    },
    onLoad() {
      this.token = getApp().getToken();
      this.backUrl = getApp().globalData.backUrl;
      this.baseUrl = getApp().globalData.baseUrl;
      uni.request({
        url: this.backUrl + "/user/api/v1",
        method: "GET",
        header: {
          "token": this.token
        },
        success: (res) => {
          formatAppLog("log", "at pages/personal/personal.vue:75", res.data.data);
          const response = res.data.data;
          this.date = response.birthday;
          const date = /* @__PURE__ */ new Date();
          const year = parseInt(this.date.slice(0, 4));
          this.age = date.getFullYear() - year;
          this.nickname = response.nickname;
          if (response.imageUri == null) {
            this.avatar = "/static/personal/girl.png";
          } else {
            this.avatar = response.imageUri;
          }
          if (response.gender == "男") {
            this.gender = true;
          } else if (response.gender == "女") {
            this.gender = false;
          }
        }
      });
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home_foot = resolveEasycom(vue.resolveDynamicComponent("home-foot"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "personal" }, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "home-head" }, [
          vue.createElementVNode("view", { class: "head-left" }, [
            vue.createElementVNode("image", {
              class: "home-icon",
              src: $data.avatar
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "head-info" }, [
              vue.createElementVNode(
                "text",
                { class: "home-title" },
                vue.toDisplayString($data.nickname),
                1
                /* TEXT */
              ),
              $data.gender ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "info-text"
              }, [
                vue.createElementVNode("span", { style: { "color": "#1fa6ea" } }, "♂"),
                vue.createTextVNode(
                  " 男 " + vue.toDisplayString($data.age + "岁"),
                  1
                  /* TEXT */
                )
              ])) : (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                class: "info-text"
              }, [
                vue.createElementVNode("span", { style: { "color": "#F49ED9" } }, "♀"),
                vue.createTextVNode(
                  " 女 " + vue.toDisplayString($data.age + "岁"),
                  1
                  /* TEXT */
                )
              ]))
            ])
          ]),
          vue.createElementVNode("navigator", {
            class: "edit-button",
            url: "/pages/personal/profile/profile"
          }, " 编辑资料 ")
        ]),
        vue.createElementVNode("view", { class: "service" }, [
          vue.createElementVNode("view", { class: "content-title" }, "推荐服务"),
          vue.createElementVNode("view", { class: "service-container" }, [
            vue.createElementVNode("view", { class: "service-box" }, "健康助手"),
            vue.createElementVNode("view", { class: "service-box" }, "智能出行"),
            vue.createElementVNode("view", { class: "service-box" }, "辅助阅读")
          ])
        ]),
        vue.createElementVNode("view", { class: "more-funcs" }, [
          vue.createElementVNode("view", { class: "content-title" }, "更多功能"),
          vue.createElementVNode("view", { class: "funcs-container" }, [
            vue.createElementVNode("view", { class: "service-box" }, [
              vue.createElementVNode("image", {
                class: "item1",
                src: "/static/personal/help.png"
              }),
              vue.createElementVNode("text", { class: "item2" }, "获取帮助"),
              vue.createElementVNode("image", {
                class: "item3",
                src: "/static/personal/more1.png"
              })
            ]),
            vue.createElementVNode("view", { class: "service-box" }, [
              vue.createElementVNode("image", {
                class: "item1",
                src: "/static/personal/about.png"
              }),
              vue.createElementVNode("text", { class: "item2" }, "关于明道"),
              vue.createElementVNode("image", {
                class: "item3",
                src: "/static/personal/more1.png"
              })
            ]),
            vue.createElementVNode("navigator", {
              class: "service-box",
              url: "/pages/personal/system/system"
            }, [
              vue.createElementVNode("image", {
                class: "item1",
                src: "/static/personal/setting.png"
              }),
              vue.createElementVNode("text", { class: "item2" }, "系统设置"),
              vue.createElementVNode("image", {
                class: "item3",
                src: "/static/personal/more1.png"
              })
            ])
          ])
        ])
      ]),
      vue.createVNode(_component_home_foot, { pageType: false })
    ]);
  }
  const PagesPersonalPersonal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "E:/fuchuang/learn/demo1/pages/personal/personal.vue"]]);
  const popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  const zhHans = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "确定",
    "uni-popup.placeholder": "请输入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const zhHant = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "確定",
    "uni-popup.placeholder": "請輸入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$8 = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close", "update:modelValue", "input"],
    props: {
      inputType: {
        type: String,
        default: "text"
      },
      showClose: {
        type: Boolean,
        default: true
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      maxlength: {
        type: Number,
        default: -1
      },
      focus: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        dialogType: "error",
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        if (this.maxlength != -1 && this.mode === "input") {
          this.val = val.slice(0, this.maxlength);
        } else {
          this.val = val;
        }
      },
      val(val) {
        this.$emit("update:modelValue", val);
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
        this.val = this.modelValue;
      } else {
        this.dialogType = this.type;
      }
    },
    methods: {
      /**
       * 点击确认按钮
       */
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      /**
       * 点击取消按钮
       */
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode(
          "text",
          {
            class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
          },
          vue.toDisplayString($options.titleText),
          3
          /* TEXT, CLASS */
        )
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-content-text" },
            vue.toDisplayString($props.content),
            1
            /* TEXT */
          )
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            maxlength: $props.maxlength,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: $props.inputType,
            placeholder: $options.placeholderText,
            focus: $props.focus
          }, null, 8, ["maxlength", "type", "placeholder", "focus"]), [
            [vue.vModelDynamic, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        $props.showClose ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-button-text" },
            vue.toDisplayString($options.closeText),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-dialog-button", $props.showClose ? "uni-border-left" : ""]),
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
          },
          [
            vue.createElementVNode(
              "text",
              { class: "uni-dialog-button-text uni-button-color" },
              vue.toDisplayString($options.okText),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-d78c88b7"], ["__file", "E:/fuchuang/learn/demo1/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  const _sfc_main$7 = {
    data() {
      const currentDate = this.getDate({
        format: true
      });
      return {
        date: currentDate,
        array: ["男", "女"],
        index: 0,
        genderSet: false,
        height: 0,
        weight: 0,
        nickname: "",
        avatar: ""
      };
    },
    onLoad() {
      const token = getApp().getToken();
      uni.request({
        url: "http://82.157.124.83:51603/user/api/v1",
        method: "GET",
        header: {
          "token": token
        },
        success: (res) => {
          formatAppLog("log", "at pages/personal/profile/profile.vue:100", res);
          const response = res.data.data;
          this.date = response.birthday;
          this.height = response.height;
          this.weight = response.weight;
          this.genderSet = true;
          if (response.gender == "男") {
            this.index = 0;
          } else if (response.gender == "女") {
            this.index = 1;
          }
          this.nickname = response.nickname;
          if (response.imageUri == null) {
            this.avatar = "/static/personal/girl.png";
          } else {
            this.avatar = response.imageUri;
          }
        }
      });
    },
    computed: {
      startDate() {
        return this.getDate("start");
      },
      endDate() {
        return this.getDate("end");
      }
    },
    methods: {
      bindPickerChange: function(e) {
        formatAppLog("log", "at pages/personal/profile/profile.vue:132", "picker发送选择改变，携带值为", e.detail.value);
        this.index = e.detail.value;
        this.genderSet = true;
      },
      bindDateChange: function(e) {
        this.date = e.detail.value;
      },
      getDate(type) {
        const date = /* @__PURE__ */ new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (type === "start") {
          year = year - 100;
        }
        month = month > 9 ? month : "0" + month;
        day = day > 9 ? day : "0" + day;
        return `${year}-${month}-${day}`;
      },
      nameChange() {
        this.$refs["popup-name"].open();
      },
      heightChange() {
        this.$refs["popup-height"].open();
      },
      weightChange() {
        this.$refs["popup-weight"].open();
      },
      save() {
        const token = getApp().getToken();
        uni.request({
          url: "http://82.157.124.83:51603/user/api/v1",
          method: "PUT",
          data: {
            "birthday": this.date,
            "city": "成都",
            "gender": this.array[this.index],
            "height": this.height,
            "nickname": this.nickname,
            "weight": this.weight
          },
          header: {
            "token": token
          },
          success() {
            uni.showToast({
              title: "保存成功",
              duration: 2e3
            });
          }
        });
      },
      changeAvatar() {
        const token = getApp().getToken();
        uni.chooseImage({
          count: 1,
          sourceType: ["album"],
          success: (res) => {
            formatAppLog("log", "at pages/personal/profile/profile.vue:192", "chosed" + res.tempFilePaths);
            let imgFiles = res.tempFilePaths;
            uni.uploadFile({
              url: `http://82.157.124.83:51603/user/api/v1/uploadPicture`,
              header: {
                "token": token
              },
              filePath: imgFiles[0],
              name: "multipartFile",
              success: (res2) => {
                let data = JSON.parse(res2.data);
                formatAppLog("log", "at pages/personal/profile/profile.vue:203", data);
                if (data.code == 200) {
                  formatAppLog("log", "at pages/personal/profile/profile.vue:205", data.data.imageUri);
                  this.avatar = data.data.imageUri;
                }
              },
              fail: (err) => {
                formatAppLog("log", "at pages/personal/profile/profile.vue:210", err);
              }
            });
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_0);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile" }, [
      vue.createElementVNode("view", { class: "item-high" }, [
        vue.createElementVNode("view", { class: "item-left" }, "更改头像"),
        vue.createElementVNode("image", {
          class: "avatar",
          src: $data.avatar,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.changeAvatar && $options.changeAvatar(...args))
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, "昵称"),
        vue.createElementVNode("view", {
          class: "item-right",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.nameChange && $options.nameChange(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "text-right" },
            vue.toDisplayString($data.nickname == "" ? "未填写" : $data.nickname),
            1
            /* TEXT */
          ),
          vue.createElementVNode("image", {
            class: "icon-right",
            src: "/static/personal/more1.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, "性别"),
        vue.createElementVNode("picker", {
          onChange: _cache[2] || (_cache[2] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
          value: $data.index,
          range: $data.array
        }, [
          vue.createElementVNode("view", { class: "item-right" }, [
            vue.createElementVNode(
              "text",
              { class: "text-right" },
              vue.toDisplayString($data.genderSet ? $data.array[$data.index] : "未填写"),
              1
              /* TEXT */
            ),
            vue.createElementVNode("image", {
              class: "icon-right",
              src: "/static/personal/more1.png"
            })
          ])
        ], 40, ["value", "range"])
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, "生日"),
        vue.createElementVNode("picker", {
          mode: "date",
          value: $data.date,
          start: $options.startDate,
          end: $options.endDate,
          onChange: _cache[3] || (_cache[3] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
        }, [
          vue.createElementVNode("view", { class: "item-right" }, [
            vue.createElementVNode(
              "view",
              { class: "text-right" },
              vue.toDisplayString($data.date),
              1
              /* TEXT */
            ),
            vue.createElementVNode("image", {
              class: "icon-right",
              src: "/static/personal/more1.png"
            })
          ])
        ], 40, ["value", "start", "end"])
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, "身高"),
        vue.createElementVNode("view", {
          class: "item-right",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.heightChange && $options.heightChange(...args))
        }, [
          vue.createElementVNode(
            "view",
            { class: "text-right" },
            vue.toDisplayString($data.height == 0 ? "未填写" : $data.height + "cm"),
            1
            /* TEXT */
          ),
          vue.createElementVNode("image", {
            class: "icon-right",
            src: "/static/personal/more1.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, "体重"),
        vue.createElementVNode("view", {
          class: "item-right",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.weightChange && $options.weightChange(...args))
        }, [
          vue.createElementVNode(
            "view",
            { class: "text-right" },
            vue.toDisplayString($data.weight == 0 ? "未填写" : $data.weight + "kg"),
            1
            /* TEXT */
          ),
          vue.createElementVNode("image", {
            class: "icon-right",
            src: "/static/personal/more1.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup-name",
          type: "dialog"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_dialog, {
              mode: "input",
              title: "输入你的名字",
              modelValue: $data.nickname,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.nickname = $event),
              placeholder: "请在此输入"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup-height",
          type: "dialog"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_dialog, {
              mode: "input",
              title: "输入你的体重(公斤)",
              modelValue: $data.height,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.height = $event),
              placeholder: "请在此输入"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "popup-weight",
          type: "dialog"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_popup_dialog, {
              mode: "input",
              title: "输入你的身高(厘米)",
              modelValue: $data.weight,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.weight = $event),
              placeholder: "请在此输入"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      vue.createElementVNode("view", {
        class: "save-btn",
        onClick: _cache[9] || (_cache[9] = (...args) => $options.save && $options.save(...args))
      }, "保存")
    ]);
  }
  const PagesPersonalProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-b9418a0f"], ["__file", "E:/fuchuang/learn/demo1/pages/personal/profile/profile.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {
      logout() {
        uni.removeStorageSync("token");
        uni.redirectTo({
          url: "/pages/login/login"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "system" }, [
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, " 个人资料 "),
        vue.createElementVNode("image", {
          class: "icon-right",
          src: "/static/personal/more1.png"
        })
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, " 账号设置 "),
        vue.createElementVNode("image", {
          class: "icon-right",
          src: "/static/personal/more1.png"
        })
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, [
          vue.createTextVNode(" 消息推送 "),
          vue.createElementVNode("view", { class: "item-middle" }, " 已关闭 ")
        ]),
        vue.createElementVNode("view", { class: "item-right" }, " 去设置 ")
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", { class: "item-left" }, " 清理缓存 "),
        vue.createElementVNode("view", { class: "item-right" }, " 清理 ")
      ]),
      vue.createElementVNode("view", { class: "line" }),
      vue.createElementVNode("view", { class: "item" }, [
        vue.createElementVNode("view", {
          class: "item-left",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.logout && $options.logout(...args))
        }, " 退出登录 "),
        vue.createElementVNode("image", {
          class: "icon-right",
          src: "/static/personal/more1.png"
        })
      ]),
      vue.createElementVNode("view", { class: "line" })
    ]);
  }
  const PagesPersonalSystemSystem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-05016e99"], ["__file", "E:/fuchuang/learn/demo1/pages/personal/system/system.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "account" }, [
      vue.createElementVNode("view", { class: "phone" }),
      vue.createElementVNode("view", { class: "subtitle" }, "第三方账号"),
      vue.createElementVNode("view", { class: "app" })
    ]);
  }
  const PagesPersonalAccountAccount = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/fuchuang/learn/demo1/pages/personal/account/account.vue"]]);
  const recorderManager$1 = uni.getRecorderManager();
  const innerAudioContext = uni.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  const _sfc_main$4 = {
    data() {
      return {
        text: "uni-app",
        voicePath: ""
      };
    },
    onLoad() {
    },
    methods: {
      startRecord() {
        formatAppLog("log", "at pages/test/test-record/test-record.vue:26", "开始录音");
        recorderManager$1.start();
      },
      endRecord() {
        var _this = this;
        formatAppLog("log", "at pages/test/test-record/test-record.vue:32", "录音结束");
        recorderManager$1.stop();
        recorderManager$1.onStop(function(res) {
          _this.voicePath = res.tempFilePath;
          uni.showToast({
            title: _this.voicePath
          });
        });
      },
      playVoice() {
        formatAppLog("log", "at pages/test/test-record/test-record.vue:42", "播放录音");
        if (this.voicePath) {
          innerAudioContext.src = this.voicePath;
          innerAudioContext.play();
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.startRecord && $options.startRecord(...args))
      }, "开始录音"),
      vue.createElementVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.endRecord && $options.endRecord(...args))
      }, "停止录音"),
      vue.createElementVNode("button", {
        onClick: _cache[2] || (_cache[2] = (...args) => $options.playVoice && $options.playVoice(...args))
      }, "播放录音")
    ]);
  }
  const PagesTestTestRecordTestRecord = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/fuchuang/learn/demo1/pages/test/test-record/test-record.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("view", { class: "head1" }, [
        vue.createElementVNode("image", {
          class: "home-icon",
          src: "/static/login/icon.png"
        }),
        vue.createElementVNode("image", {
          class: "title",
          src: "/static/login/title.png"
        })
      ]),
      vue.createElementVNode("image", {
        class: "head2",
        src: "/static/login/subtitle.png"
      }),
      vue.createElementVNode("navigator", {
        class: "option",
        url: "/pages/login/easy-login/easy-login"
      }, " 快捷登录 "),
      vue.createElementVNode("navigator", {
        class: "option",
        url: "/pages/login/verify-login/verify-login"
      }, " 验证码登录 "),
      vue.createElementVNode("view", { style: { "height": "100rpx" } })
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-e4e4508d"], ["__file", "E:/fuchuang/learn/demo1/pages/login/login.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        state: false,
        phoneNumber: "",
        verifyCode: ""
      };
    },
    methods: {
      checkboxChange(e) {
        this.state = !this.state;
        formatAppLog("log", "at pages/login/verify-login/verify-login.vue:50", this.state);
      },
      getVeriCode() {
        const backUrl = getApp().globalData.backUrl;
        const url = backUrl + "/user/api/v1/sendCode";
        formatAppLog("log", "at pages/login/verify-login/verify-login.vue:55", "url: " + url);
        formatAppLog("log", "at pages/login/verify-login/verify-login.vue:56", "phoneNumber: " + this.phoneNumber);
        uni.request({
          url,
          method: "POST",
          data: {
            phone: this.phoneNumber
          },
          success: (res) => {
            formatAppLog("log", "at pages/login/verify-login/verify-login.vue:64", res.data);
            this.text = "request success";
          },
          fail(e) {
            formatAppLog("log", "at pages/login/verify-login/verify-login.vue:68", e);
          }
        });
      },
      login() {
        const backUrl = getApp().globalData.backUrl;
        formatAppLog("log", "at pages/login/verify-login/verify-login.vue:75", "phoneNumber: " + this.verifyCode);
        uni.request({
          url: backUrl + "/user/api/v1/login",
          method: "POST",
          data: {
            phone: this.phoneNumber,
            code: this.verifyCode
          },
          success: (res) => {
            formatAppLog("log", "at pages/login/verify-login/verify-login.vue:84", res.data);
            this.text = "request success";
            getApp().setToken(res.data.data.token, 3600);
            formatAppLog("log", "at pages/login/verify-login/verify-login.vue:88", res.data.data.token);
            uni.navigateTo({
              url: "/pages/index/index",
              success() {
                formatAppLog("log", "at pages/login/verify-login/verify-login.vue:92", getApp().getToken());
              }
            });
          },
          fail(e) {
            formatAppLog("log", "at pages/login/verify-login/verify-login.vue:97", e);
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("view", { class: "head1" }, [
        vue.createElementVNode("image", {
          src: "/static/login/icon.png",
          style: { "height": "102rpx", "width": "110rpx" }
        }),
        vue.createElementVNode("image", {
          class: "title",
          src: "/static/login/title.png"
        })
      ]),
      vue.createElementVNode("image", {
        class: "head2",
        src: "/static/login/subtitle.png"
      }),
      vue.createElementVNode("view", { class: "logbox" }, [
        vue.createElementVNode("view", { class: "subtitle" }, "短信验证码登录"),
        vue.createElementVNode("view", { class: "hint" }, "未注册的手机号验证后将自动登录"),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input1",
            placeholder: "请输入手机号码",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.phoneNumber = $event),
            "placeholder-style": "font-size: 30rpx; color: rgba(0, 0, 0, 0.26);"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.phoneNumber]
        ]),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input2",
            placeholder: "请输入验证码",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.verifyCode = $event),
            "placeholder-style": "font-size: 30rpx; color: rgba(0, 0, 0, 0.26);"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.verifyCode]
        ]),
        vue.createElementVNode("text", {
          class: "verify-button",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.getVeriCode && $options.getVeriCode(...args))
        }, " 获取验证码 "),
        vue.createElementVNode("view", {
          class: "login-button",
          checked: _ctx.checked,
          onClick: _cache[3] || (_cache[3] = (...args) => $options.login && $options.login(...args))
        }, " 登录 ", 8, ["checked"]),
        vue.createElementVNode(
          "checkbox-group",
          {
            onChange: _cache[4] || (_cache[4] = (...args) => $options.checkboxChange && $options.checkboxChange(...args)),
            class: "agreement"
          },
          [
            vue.createElementVNode("label", null, [
              vue.createElementVNode("checkbox", {
                class: "checkbox",
                checked: $data.state,
                style: { "transform": "scale(0.7)", "border-radius": "50%" }
              }, null, 8, ["checked"]),
              vue.createTextVNode(" 我已阅读并同意"),
              vue.createElementVNode("a", { style: { "color": "#3ab0de" } }, "《用户服务协议》"),
              vue.createTextVNode("和"),
              vue.createElementVNode("a", { style: { "color": "#3ab0de" } }, "《隐私政策》")
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        ),
        vue.createElementVNode("view", { class: "last-row" }, [
          vue.createElementVNode("image", { src: "/static/login/wechat.png" }),
          vue.createElementVNode("image", { src: "/static/login/QQ.png" })
        ])
      ])
    ]);
  }
  const PagesLoginVerifyLoginVerifyLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-84a775d7"], ["__file", "E:/fuchuang/learn/demo1/pages/login/verify-login/verify-login.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {
      login() {
        const backUrl = getApp().globalData.backUrl;
        const url = backUrl + "/user/api/v1/loginFast";
        formatAppLog("log", "at pages/login/easy-login/easy-login.vue:34", "phoneNumber: " + this.verifyCode);
        uni.request({
          url,
          method: "POST",
          data: {
            phone: this.phoneNumber
          },
          success: (res) => {
            formatAppLog("log", "at pages/login/easy-login/easy-login.vue:42", res.data);
            this.text = "request success";
            getApp().setToken(res.data.data.token, 3600);
            formatAppLog("log", "at pages/login/easy-login/easy-login.vue:46", res.data.data.token);
            uni.navigateTo({
              url: "/pages/index/index",
              success() {
                formatAppLog("log", "at pages/login/easy-login/easy-login.vue:50", getApp().getToken());
              }
            });
          },
          fail(e) {
            formatAppLog("log", "at pages/login/easy-login/easy-login.vue:55", e);
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("view", { class: "head1" }, [
        vue.createElementVNode("image", {
          class: "home-icon",
          src: "/static/login/icon.png"
        }),
        vue.createElementVNode("image", {
          class: "title",
          src: "/static/login/title.png"
        })
      ]),
      vue.createElementVNode("image", {
        class: "head2",
        src: "/static/login/subtitle.png"
      }),
      vue.withDirectives(vue.createElementVNode(
        "input",
        {
          class: "input1",
          placeholder: "请输入手机号码",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.phoneNumber = $event),
          "placeholder-style": "font-size: 30rpx; color: rgba(0, 0, 0, 0.26);"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vModelText, _ctx.phoneNumber]
      ]),
      vue.createElementVNode(
        "checkbox-group",
        {
          onChange: _cache[1] || (_cache[1] = (...args) => _ctx.checkboxChange && _ctx.checkboxChange(...args)),
          class: "agreement"
        },
        [
          vue.createElementVNode("label", null, [
            vue.createElementVNode("checkbox", {
              class: "checkbox",
              checked: _ctx.state,
              style: { "transform": "scale(0.7)", "border-radius": "50%" }
            }, null, 8, ["checked"]),
            vue.createTextVNode(" 我已阅读并同意"),
            vue.createElementVNode("a", { style: { "color": "#3ab0de" } }, "《用户服务协议》"),
            vue.createTextVNode("和"),
            vue.createElementVNode("a", { style: { "color": "#3ab0de" } }, "《隐私政策》")
          ])
        ],
        32
        /* HYDRATE_EVENTS */
      ),
      vue.createElementVNode("view", {
        class: "option",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args))
      }, " 点击登录 "),
      vue.createElementVNode("view", { style: { "height": "100rpx" } })
    ]);
  }
  const PagesLoginEasyLoginEasyLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-c7475db3"], ["__file", "E:/fuchuang/learn/demo1/pages/login/easy-login/easy-login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/smart-chat/smart-chat", PagesSmartChatSmartChat);
  __definePage("pages/photo-recog/photo-recog", PagesPhotoRecogPhotoRecog);
  __definePage("pages/assist-read/photo-recog", PagesAssistReadPhotoRecog);
  __definePage("pages/personal/personal", PagesPersonalPersonal);
  __definePage("pages/personal/profile/profile", PagesPersonalProfileProfile);
  __definePage("pages/personal/system/system", PagesPersonalSystemSystem);
  __definePage("pages/personal/account/account", PagesPersonalAccountAccount);
  __definePage("pages/test/test-record/test-record", PagesTestTestRecordTestRecord);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login/verify-login/verify-login", PagesLoginVerifyLoginVerifyLogin);
  __definePage("pages/login/easy-login/easy-login", PagesLoginEasyLoginEasyLogin);
  const _sfc_main = {
    globalData: {
      backUrl: "http://82.157.124.83:51603",
      baseUrl: "http://127.0.0.1:8000"
    },
    onLaunch: function() {
      formatAppLog("log", "at App.vue:8", "App Launch");
      this.getToken();
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:13", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:16", "App Hide");
    },
    methods: {
      setToken(value, expire) {
        let obj = {
          data: value,
          time: Date.now() / 1e3,
          expire
        };
        uni.setStorageSync("token", JSON.stringify(obj));
      },
      getToken() {
        let val = uni.getStorageSync("token");
        if (!val) {
          uni.reLaunch({
            url: "/pages/login/login",
            success: () => {
              formatAppLog("log", "at App.vue:34", "jump to login");
            },
            fail(e) {
              formatAppLog("log", "at App.vue:37", e);
            }
          });
        }
        val = JSON.parse(val);
        formatAppLog("log", "at App.vue:42", "pre setCache:", val.data);
        if (val.expire && Date.now() / 1e3 - val.time > val.expire) {
          uni.removeStorageSync("token");
          uni.reLaunch({
            url: "/pages/login/login",
            success: () => {
              formatAppLog("log", "at App.vue:48", "jump to login");
            },
            fail(e) {
              formatAppLog("log", "at App.vue:51", e);
            }
          });
        }
        formatAppLog("log", "at App.vue:55", "end setCache:", val.data);
        return val.data;
      }
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/fuchuang/learn/demo1/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
