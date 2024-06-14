import { o as openBlock, a as createElementBlock, e as createBaseVNode, y as renderSlot, n as normalizeClass } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
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
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 34)
  ], 512);
}
var BaseMarquee = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-87f7badc"]]);
export { BaseMarquee as default };
