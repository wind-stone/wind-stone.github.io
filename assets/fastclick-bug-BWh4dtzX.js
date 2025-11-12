import { _ as __vitePreload, o as openBlock, c as createElementBlock, d as createBaseVNode, n as normalizeClass } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "VueTapFastclickBug",
  data() {
    return {
      div2Bg: false
    };
  },
  mounted() {
    __vitePreload(() => import("./fastclick-Bi54_j9u.js").then((n) => n.f), true ? [] : void 0).then((Fastclick) => {
      Fastclick.attach(document.body);
    });
  },
  methods: {
    clickDiv1() {
      this.$refs.div2.click();
    },
    clickDiv2() {
      this.div2Bg = !this.div2Bg;
    }
  }
};
const _hoisted_1 = { class: "fastclick-bug" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: "div1",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickDiv1 && $options.clickDiv1(...args))
    }, " div1，点击此处，将在 div1 的 click 回调里触发 div2.click() "),
    createBaseVNode("div", {
      ref: "div2",
      class: normalizeClass(["div2", { "div2-bg": $data.div2Bg }]),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clickDiv2 && $options.clickDiv2(...args))
    }, " div2，div2 的 click 回调里将 tootle 背景色 ", 2)
  ]);
}
const fastclickBug = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-27a0f555"], ["__file", "fastclick-bug.vue"]]);
export {
  fastclickBug as default
};
