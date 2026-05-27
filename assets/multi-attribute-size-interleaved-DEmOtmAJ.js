import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "multi-attribute-size-interleaved",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute float a_PointSize;\nvoid main() {\n  gl_Position = a_Position;\n  gl_PointSize = a_PointSize;\n}\n";
    var FSHADER_SOURCE = "void main() {\n  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n";
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
      var n = initVertexBuffers(gl);
      if (n < 0) {
        console.log("Failed to set the vertex information");
        return;
      }
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINTS, 0, n);
    }
    function initVertexBuffers(gl) {
      var verticesSizes = new Float32Array([
        // Coordinate and size of points
        0,
        0.5,
        10,
        // the 1st point
        -0.5,
        -0.5,
        20,
        // the 2nd point
        0.5,
        -0.5,
        30
        // the 3rd point
      ]);
      var n = 3;
      var vertexSizeBuffer = gl.createBuffer();
      if (!vertexSizeBuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexSizeBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, verticesSizes, gl.STATIC_DRAW);
      var FSIZE = verticesSizes.BYTES_PER_ELEMENT;
      var a_Position = gl.getAttribLocation(gl.program, "a_Position");
      if (a_Position < 0) {
        console.log("Failed to get the storage location of a_Position");
        return -1;
      }
      gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 3, 0);
      gl.enableVertexAttribArray(a_Position);
      var a_PointSize = gl.getAttribLocation(gl.program, "a_PointSize");
      if (a_PointSize < 0) {
        console.log("Failed to get the storage location of a_PointSize");
        return -1;
      }
      gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 3, FSIZE * 2);
      gl.enableVertexAttribArray(a_PointSize);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return n;
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
    }, main, initVertexBuffers };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "multi-attribute-size-interleaved" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const multiAttributeSizeInterleaved = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "multi-attribute-size-interleaved.vue"]]);
export {
  multiAttributeSizeInterleaved as default
};
