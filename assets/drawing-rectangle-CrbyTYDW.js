import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "drawing-rectangle",
  setup(__props, { expose: __expose }) {
    __expose();
    function main() {
      const canvas = document.getElementById("example");
      if (!canvas) {
        console.log("Failed to retrieve the <canvas> element");
        return false;
      }
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(0, 0, 255, 1.0)";
      ctx.fillRect(120, 10, 150, 150);
    }
    onMounted(() => {
      main();
    });
    const __returned__ = { main };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "drawing-rectangle" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "example",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const drawingRectangle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "drawing-rectangle.vue"]]);
export {
  drawingRectangle as default
};
