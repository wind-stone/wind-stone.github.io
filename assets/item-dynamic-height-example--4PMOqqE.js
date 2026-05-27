import { g as defineComponent, o as openBlock, c as createElementBlock, a as createVNode, e as withCtx, d as createBaseVNode, t as toDisplayString } from "./app-BIlS0k3L.js";
import VirtualScroll from "./item-dynamic-height-D85tsEce.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item-dynamic-height-example",
  setup(__props, { expose: __expose }) {
    __expose();
    const list = new Array(100).fill(0).map((_, index) => {
      const lines = index % 3 + 1;
      return {
        id: String(index),
        name: `${index}、${new Array(lines).fill(0).map(() => "虚拟列表元素占满").join("\n")}`
      };
    });
    const __returned__ = { list, VirtualScroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["VirtualScroll"], {
      list: $setup.list,
      "buffer-count": 5
    }, {
      default: withCtx(({ item }) => [
        createBaseVNode("div", _hoisted_2, toDisplayString(item.name), 1)
      ]),
      _: 1
    }, 8, ["list"])
  ]);
}
const itemDynamicHeightExample = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4ff47590"], ["__file", "item-dynamic-height-example.vue"]]);
export {
  itemDynamicHeightExample as default
};
