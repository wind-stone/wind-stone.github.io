import { g as defineComponent, o as openBlock, c as createElementBlock, a as createVNode, e as withCtx, d as createBaseVNode, t as toDisplayString } from "./app-BIlS0k3L.js";
import VirtualScroll from "./item-fixed-height-C-kSTGQf.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item-fixed-height-example",
  setup(__props, { expose: __expose }) {
    __expose();
    const list = new Array(1e3).fill(0).map((_, index) => ({ id: index, name: `Item ${index}` }));
    const __returned__ = { list, VirtualScroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["VirtualScroll"], { list: $setup.list }, {
      default: withCtx(({ item }) => [
        createBaseVNode("div", _hoisted_2, toDisplayString(item.name), 1)
      ]),
      _: 1
    }, 8, ["list"])
  ]);
}
const itemFixedHeightExample = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf682f7b"], ["__file", "item-fixed-height-example.vue"]]);
export {
  itemFixedHeightExample as default
};
