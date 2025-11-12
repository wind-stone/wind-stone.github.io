import { o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "MarginCollapseComplicated"
};
const _hoisted_1 = { class: "example" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("div", { class: "ctn" }, [
      createBaseVNode("div", { class: "float" }, " 浮动元素 "),
      createBaseVNode("div", { class: "clear-float" }),
      createBaseVNode("div", { class: "last" }),
      createBaseVNode("div", null, "这是 .ctn 元素的最后一个子元素")
    ], -1),
    createBaseVNode("p", null, "这是 .ctn 元素的兄弟元素", -1)
  ]));
}
const complicated = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf57d525"], ["__file", "complicated.vue"]]);
export {
  complicated as default
};
