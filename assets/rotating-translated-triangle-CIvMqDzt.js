import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-Dscgj__W.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { M as Matrix4 } from "./cuon-matrix-D-8_PX2h.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rotating-translated-triangle",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nuniform mat4 u_ModelMatrix;\nvoid main() {\n  gl_Position = u_ModelMatrix * a_Position;\n}\n";
    var FSHADER_SOURCE = "void main() {\n  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n";
    var ANGLE_STEP = 45;
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
      gl.clearColor(0, 0, 0, 1);
      var u_ModelMatrix = gl.getUniformLocation(gl.program, "u_ModelMatrix");
      if (!u_ModelMatrix) {
        console.log("Failed to get the storage location of u_ModelMatrix");
        return;
      }
      var currentAngle = 0;
      var modelMatrix = new Matrix4();
      var tick = function() {
        currentAngle = animate(currentAngle);
        draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix);
        requestAnimationFrame(tick, canvas);
      };
      tick();
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
    function draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix) {
      modelMatrix.setRotate(currentAngle, 0, 0, 1);
      modelMatrix.translate(0.5, 0, 0);
      gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
    var g_last = Date.now();
    function animate(angle) {
      var now = Date.now();
      var elapsed = now - g_last;
      g_last = now;
      var newAngle = angle + ANGLE_STEP * elapsed / 1e3;
      return newAngle %= 360;
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
    }, get ANGLE_STEP() {
      return ANGLE_STEP;
    }, set ANGLE_STEP(v) {
      ANGLE_STEP = v;
    }, main, initVertexBuffers, draw, get g_last() {
      return g_last;
    }, set g_last(v) {
      g_last = v;
    }, animate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "rotating-translated-triangle" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const rotatingTranslatedTriangle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "rotating-translated-triangle.vue"]]);
export {
  rotatingTranslatedTriangle as default
};
