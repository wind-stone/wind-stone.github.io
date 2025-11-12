import { g as defineComponent, h as ref, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const defaultValue = 0.5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ball-translate",
  setup(__props, { expose: __expose }) {
    __expose();
    const ballRef = ref();
    const rangeRef = ref(0);
    const onInputChange = (e) => {
      onRangeChange(e.target.value);
    };
    const onRangeChange = (value) => {
      ballRef.value.style.setProperty("--delay", `${-value}s`);
    };
    onMounted(() => {
      onRangeChange(defaultValue);
    });
    const __returned__ = { ballRef, rangeRef, defaultValue, onInputChange, onRangeChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = {
  ref: "ballRef",
  class: "ball"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, null, 512),
    createBaseVNode("input", {
      ref: "rangeRef",
      type: "range",
      max: "1",
      min: "0",
      step: "0.01",
      value: $setup.defaultValue,
      onInput: $setup.onInputChange
    }, null, 544)
  ]);
}
const ballTranslate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4e97400d"], ["__file", "ball-translate.vue"]]);
export {
  ballTranslate as default
};
