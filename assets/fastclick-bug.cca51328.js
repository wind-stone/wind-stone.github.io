import { _ as __vitePreload, o as openBlock, a as createElementBlock, e as createBaseVNode, n as normalizeClass } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var fastclickBug_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "VueTapFastclickBug",
  data() {
    return {
      div2Bg: false
    };
  },
  mounted() {
    __vitePreload(() => import("./fastclick.6bbe006f.js").then(function(n) {
      return n.f;
    }), true ? [] : void 0).then((Fastclick) => {
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
    }, " div1\uFF0C\u70B9\u51FB\u6B64\u5904\uFF0C\u5C06\u5728 div1 \u7684 click \u56DE\u8C03\u91CC\u89E6\u53D1 div2.click() "),
    createBaseVNode("div", {
      ref: "div2",
      class: normalizeClass(["div2", { "div2-bg": $data.div2Bg }]),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clickDiv2 && $options.clickDiv2(...args))
    }, " div2\uFF0Cdiv2 \u7684 click \u56DE\u8C03\u91CC\u5C06 tootle \u80CC\u666F\u8272 ", 2)
  ]);
}
var fastclickBug = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7974aa0e"]]);
export { fastclickBug as default };
