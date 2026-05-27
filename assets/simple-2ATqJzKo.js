import { g as defineComponent, h as ref, o as openBlock, c as createElementBlock, d as createBaseVNode, p as normalizeStyle, F as Fragment, l as renderList, t as toDisplayString } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "simple",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = Array.from({ length: 1e3 }, (_, i) => i + 1);
    const viewHeight = ref(400);
    const itemHeight = ref(20);
    const showData = ref([]);
    showData.value = data.slice(0, 20);
    const scrollTop = ref(0);
    const handleScroll = (e) => {
      scrollTop.value = e.target.scrollTop;
      const startIndex = Math.round(scrollTop.value / itemHeight.value);
      const endIndex = startIndex + viewHeight.value / itemHeight.value;
      showData.value = data.slice(startIndex, endIndex);
      console.log(showData.value);
    };
    const __returned__ = { data, viewHeight, itemHeight, showData, scrollTop, handleScroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "view-container",
    style: normalizeStyle({ height: $setup.viewHeight + "px" }),
    onScroll: $setup.handleScroll
  }, [
    createBaseVNode("div", {
      class: "content-container",
      style: normalizeStyle({ height: $setup.itemHeight * $setup.data.length + "px" })
    }, null, 4),
    createBaseVNode("div", {
      class: "item-container",
      style: normalizeStyle({ transform: "translateY(" + $setup.scrollTop + "px)" })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.showData, (item, index) => {
        return openBlock(), createElementBlock("div", {
          key: index,
          class: "item",
          style: normalizeStyle({ height: $setup.itemHeight + "px" })
        }, toDisplayString(item), 5);
      }), 128))
    ], 4)
  ], 36);
}
const simple = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e2ec57ca"], ["__file", "simple.vue"]]);
export {
  simple as default
};
