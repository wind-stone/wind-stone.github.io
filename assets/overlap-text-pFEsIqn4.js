import { g as defineComponent, h as ref, i as onMounted, o as openBlock, c as createElementBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "overlap-text",
  setup(__props, { expose: __expose }) {
    __expose();
    const dom = ref();
    onMounted(() => {
      if (dom.value) {
        const len = dom.value.textContent.length;
        dom.value.innerHTML = dom.value.textContent.split("").map((text, index) => `<span style="z-index: ${len - index}">${text}</span>`).join("");
      }
    });
    const __returned__ = { dom };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  ref: "dom",
  class: "overlap-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, " CROSS OVER ", 512);
}
const overlapText = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7e56dd6f"], ["__file", "overlap-text.vue"]]);
export {
  overlapText as default
};
