import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "clicked-points",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nvoid main() {\n  gl_Position = a_Position;\n  gl_PointSize = 10.0;\n}\n";
    var FSHADER_SOURCE = "void main() {\n  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n";
    var g_points = [];
    function click(ev, gl, canvas, a_Position) {
      var x = ev.clientX;
      var y = ev.clientY;
      var rect = ev.target.getBoundingClientRect();
      x = (x - rect.left - canvas.width / 2) / (canvas.width / 2);
      y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
      g_points.push(x);
      g_points.push(y);
      gl.clear(gl.COLOR_BUFFER_BIT);
      var len = g_points.length;
      for (var i = 0; i < len; i += 2) {
        gl.vertexAttrib3f(a_Position, g_points[i], g_points[i + 1], 0);
        gl.drawArrays(gl.POINTS, 0, 1);
      }
    }
    function main() {
      var canvas = document.getElementById("webgl");
      var gl = getWebGLContext(canvas);
      if (!gl) {
        console.log("Failed to get the rendering context for WebGL");
        return;
      }
      if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("Failed to intialize shaders.");
        return;
      }
      var a_Position = gl.getAttribLocation(gl.program, "a_Position");
      if (a_Position < 0) {
        console.log("Failed to get the storage location of a_Position");
        return;
      }
      canvas.onmousedown = function(ev) {
        click(ev, gl, canvas, a_Position);
      };
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    onMounted(() => {
      main();
    });
    const __returned__ = { get VSHADER_SOURCE() {
      return VSHADER_SOURCE;
    }, set VSHADER_SOURCE(v) {
      VSHADER_SOURCE = v;
    }, get FSHADER_SOURCE() {
      return FSHADER_SOURCE;
    }, set FSHADER_SOURCE(v) {
      FSHADER_SOURCE = v;
    }, get g_points() {
      return g_points;
    }, set g_points(v) {
      g_points = v;
    }, click, main };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "clicked-points" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const clickedPoints = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "clicked-points.vue"]]);
export {
  clickedPoints as default
};
