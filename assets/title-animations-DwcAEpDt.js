import { g as defineComponent, h as ref, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "title-animations",
  setup(__props, { expose: __expose }) {
    __expose();
    const dom = ref();
    onMounted(() => {
      if (dom.value) {
        let index = 0;
        [...dom.value.children].forEach((p) => {
          p.innerHTML = p.textContent.split("").map((char) => {
            const text = `<span style="animation-delay: ${index++ * 0.1}s">${char}</span>`;
            return text;
          }).join("");
        });
      }
    });
    const __returned__ = { dom };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  ref: "dom",
  class: "title-animations"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("p", { class: "title first-line" }, " 这是 ", -1),
    createBaseVNode("p", { class: "title second-line" }, " 风动之石 ", -1),
    createBaseVNode("p", { class: "title third-line" }, " 的 blog ", -1)
  ]), 512);
}
const titleAnimations = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "title-animations.vue"]]);
export {
  titleAnimations as default
};
