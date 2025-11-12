import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rotated-triangle",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = (
      // x' = x cosβ - y sinβ
      // y' = x sinβ + y cosβ　Equation 3.3
      // z' = z
      "attribute vec4 a_Position;\nuniform float u_CosB, u_SinB;\nvoid main() {\n  gl_Position.x = a_Position.x * u_CosB - a_Position.y * u_SinB;\n  gl_Position.y = a_Position.x * u_SinB + a_Position.y * u_CosB;\n  gl_Position.z = a_Position.z;\n  gl_Position.w = 1.0;\n}\n"
    );
    var FSHADER_SOURCE = "void main() {\n  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n";
    var ANGLE = 90;
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
        console.log("Failed to set the positions of the vertices");
        return;
      }
      var radian = Math.PI * ANGLE / 180;
      var cosB = Math.cos(radian);
      var sinB = Math.sin(radian);
      var u_CosB = gl.getUniformLocation(gl.program, "u_CosB");
      var u_SinB = gl.getUniformLocation(gl.program, "u_SinB");
      if (!u_CosB || !u_SinB) {
        console.log("Failed to get the storage location of u_CosB or u_SinB");
        return;
      }
      gl.uniform1f(u_CosB, cosB);
      gl.uniform1f(u_SinB, sinB);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
    function initVertexBuffers(gl) {
      var vertices = new Float32Array([0, 0.5, -0.5, -0.5, 0.5, -0.5]);
      var n = 3;
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      var a_Position = gl.getAttribLocation(gl.program, "a_Position");
      if (a_Position < 0) {
        console.log("Failed to get the storage location of a_Position");
        return -1;
      }
      gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(a_Position);
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
    }, get ANGLE() {
      return ANGLE;
    }, set ANGLE(v) {
      ANGLE = v;
    }, main, initVertexBuffers };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "rotated-triangle" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const rotatedTriangle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rotated-triangle.vue"]]);
export {
  rotatedTriangle as default
};
