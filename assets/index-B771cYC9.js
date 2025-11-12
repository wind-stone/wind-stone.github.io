import { k as withDirectives, v as vShow, o as openBlock, c as createElementBlock, d as createBaseVNode, j as createCommentVNode, x as renderSlot } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
function contains(container, contained) {
  if (contained) {
    while (contained.parentNode) {
      contained = contained.parentNode;
      if (contained === container) {
        return true;
      }
    }
  }
  return false;
}
const CLOSE = "update:modelValue";
const _sfc_main = {
  name: "CommonPopup",
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    showClose: {
      type: Boolean,
      required: false,
      default: true
    },
    // 禁止弹窗任何区域滚动
    forbidBgScroll: {
      type: Boolean,
      required: false,
      default: true
    },
    // 滚动区域 DOM 元素的类名，仅在 forbidBgScroll 为真值时有效
    scrollAreaSelector: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      // 滚动区域 DOM 元素
      scrollArea: "",
      // 滚动开始时的 Y 坐标
      touchStartY: 0,
      // 滚动区域 offsetHeight、scrollHeight
      scrollAreaOffsetHeight: 0,
      scrollAreaScrollHeight: 0
    };
  },
  mounted() {
    if (this.forbidBgScroll) {
      this.scrollArea = this.scrollAreaSelector && this.$refs.mask.querySelector(this.scrollAreaSelector);
      this.bindForbidBgScrollEvent();
    }
  },
  destroyed() {
    if (this.forbidBgScroll) {
      this.removeForbidBgScrollEvent();
    }
  },
  methods: {
    close() {
      this.$emit(CLOSE, false);
    },
    bindForbidBgScrollEvent() {
      this.$refs.mask && this.$refs.mask.addEventListener(
        "touchmove",
        this.maskTouchMove
      );
      if (this.scrollArea) {
        this.scrollArea.addEventListener(
          "touchstart",
          this.scrollAreaTouchStart
        );
        this.scrollArea.addEventListener(
          "touchmove",
          this.scrollAreaTouchMove
        );
      }
    },
    removeForbidBgScrollEvent() {
      this.$refs.mask && this.$refs.mask.removeEventListener(
        "touchmove",
        this.maskTouchMove
      );
      if (this.scrollArea) {
        this.scrollArea.removeEventListener(
          "touchstart",
          this.scrollAreaTouchStart
        );
        this.scrollArea.removeEventListener(
          "touchmove",
          this.scrollAreaTouchMove
        );
      }
    },
    maskTouchMove(evt) {
      const target = evt.target;
      if (!this.scrollArea || !contains(this.scrollArea, target)) {
        evt.preventDefault();
      }
    },
    scrollAreaTouchStart(evt) {
      const targetTouches = evt.targetTouches || [];
      if (targetTouches.length > 0) {
        const touch = targetTouches[0] || {};
        this.touchStartY = touch.clientY;
        this.scrollAreaOffsetHeight = this.scrollArea.offsetHeight;
        this.scrollAreaScrollHeight = this.scrollArea.scrollHeight;
      }
    },
    scrollAreaTouchMove(evt) {
      const changedTouches = evt.changedTouches;
      let canMove = false;
      const scrollTop = this.scrollArea.scrollTop;
      if (changedTouches.length > 0) {
        const touch = changedTouches[0] || {};
        const moveY = touch.clientY;
        if (moveY > this.touchStartY && scrollTop <= 0) {
          canMove = false;
        } else if (moveY < this.touchStartY && scrollTop + this.scrollAreaOffsetHeight >= this.scrollAreaScrollHeight) {
          canMove = false;
        } else {
          canMove = true;
        }
        if (!canMove) {
          evt.preventDefault();
        }
      }
    }
  }
};
const _hoisted_1 = {
  ref: "mask",
  class: "common-popup-mask"
};
const _hoisted_2 = { class: "common-popup-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      $props.showClose ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: "close-btn",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args))
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default", {}, void 0)
    ])
  ], 512)), [
    [vShow, $props.modelValue]
  ]);
}
const CommonPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-21493ffc"], ["__file", "index.vue"]]);
export {
  CommonPopup as default
};
