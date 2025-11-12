import { g as defineComponent, h as ref, m as computed, o as openBlock, c as createElementBlock, k as withDirectives, p as vModelText, d as createBaseVNode, v as vShow, q as withModifiers } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = defineComponent({
  setup() {
    const input = ref("");
    const isInputFocus = ref(false);
    const isClearIconVisible = computed(() => {
      return isInputFocus.value && input.value.length > 0;
    });
    return {
      input,
      isClearIconVisible,
      handleBlur() {
        isInputFocus.value = false;
      },
      handleFocus() {
        console.log("focus");
        isInputFocus.value = true;
      },
      clear() {
        input.value = "";
      }
    };
  }
});
const _hoisted_1 = { class: "stop-blur" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    withDirectives(createBaseVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.input = $event),
      type: "text",
      class: "input",
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
      onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args))
    }, null, 544), [
      [vModelText, _ctx.input]
    ]),
    withDirectives(createBaseVNode("i", {
      class: "clear-icon",
      onMousedown: _cache[3] || (_cache[3] = withModifiers(() => {
      }, ["prevent"])),
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.clear && _ctx.clear(...args))
    }, "×", 544), [
      [vShow, _ctx.isClearIconVisible]
    ])
  ]);
}
const stopBlurAfter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fc706d5"], ["__file", "stop-blur-after.vue"]]);
export {
  stopBlurAfter as default
};
