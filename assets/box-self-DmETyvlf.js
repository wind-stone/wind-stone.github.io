import { o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "example" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("div", { class: "ctn" }, [
      createBaseVNode("div", { class: "last" }),
      createBaseVNode("p", null, "需要注意，该段落之前的 .last 元素的上下外边距实际上已经折叠了，但是通过 DevTools --> Elements --> Styles 查看外边距时，视觉显示的却是没折叠的情况，但是这段文字是位于 .last 元素上下外边距折叠之后的外边距之下的，可打开 DevTools 查看页面元素详细查看")
    ], -1)
  ]));
}
const boxSelf = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b68d9a1d"], ["__file", "box-self.vue"]]);
export {
  boxSelf as default
};
