import { g as defineComponent, h as ref, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const defaultValue = 0;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "give-scores",
  setup(__props, { expose: __expose }) {
    __expose();
    const faceRef = ref();
    const rangeRef = ref(0);
    const onInputChange = (e) => {
      onRangeChange(e.target.value);
    };
    const onRangeChange = (value) => {
      faceRef.value.style.setProperty("--delay", `${-value}s`);
    };
    onMounted(() => {
      onRangeChange(defaultValue);
    });
    const __returned__ = { faceRef, rangeRef, defaultValue, onInputChange, onRangeChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = {
  ref: "faceRef",
  class: "face"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = createBaseVNode("div", { class: "title" }, " 你对我们的印象是： ", -1)),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, _cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "eye left-eye" }, null, -1),
        createBaseVNode("div", { class: "eye right-eye" }, null, -1),
        createBaseVNode("div", { class: "mouse" }, null, -1)
      ]), 512),
      createBaseVNode("input", {
        ref: "rangeRef",
        type: "range",
        max: "1",
        min: "0",
        step: "0.01",
        value: $setup.defaultValue,
        onInput: $setup.onInputChange
      }, null, 544)
    ])
  ]);
}
const giveScores = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6ea67b9"], ["__file", "give-scores.vue"]]);
export {
  giveScores as default
};
