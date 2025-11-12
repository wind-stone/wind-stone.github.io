import { o as openBlock, c as createElementBlock, d as createBaseVNode, x as renderSlot, n as normalizeClass } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  data() {
    return {
      timer: null,
      liHeight: 0,
      transition: false
    };
  },
  mounted() {
    this.initSize();
    this.timer = setInterval(this.showMarquee, 3e3);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    initSize() {
      this.liHeight = this.$refs.marqueeList.firstElementChild.offsetHeight || 0;
      this.$refs.baseMarquee.style.height = this.liHeight + "px";
    },
    setMarqueeUlMarginTop(height) {
      if (this.$refs.marqueeList) {
        this.$refs.marqueeList.style.marginTop = -height + "px";
      }
    },
    showMarquee() {
      this.transition = true;
      this.setMarqueeUlMarginTop(this.liHeight);
    },
    transitionend() {
      this.transition = false;
      setTimeout(() => {
        const marqueeList = this.$refs.marqueeList;
        marqueeList.appendChild(marqueeList.firstElementChild);
        this.setMarqueeUlMarginTop(0);
      }, 0);
    }
  }
};
const _hoisted_1 = {
  ref: "baseMarquee",
  class: "base-marquee"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      ref: "marqueeList",
      class: normalizeClass(["marquee-list", { "transition-top": $data.transition }]),
      onTransitionend: _cache[0] || (_cache[0] = (...args) => $options.transitionend && $options.transitionend(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0)
    ], 34)
  ], 512);
}
const BaseMarquee = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-96ec2693"], ["__file", "index.vue"]]);
export {
  BaseMarquee as default
};
