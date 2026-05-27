import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { M as Matrix4 } from "./cuon-matrix-Cz4pgOZV.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "perspective-view",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute vec4 a_Color;\nuniform mat4 u_ViewMatrix;\nuniform mat4 u_ProjMatrix;\nvarying vec4 v_Color;\nvoid main() {\n  gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;\n  v_Color = a_Color;\n}\n";
    var FSHADER_SOURCE = "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 v_Color;\nvoid main() {\n  gl_FragColor = v_Color;\n}\n";
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
      var u_ViewMatrix = gl.getUniformLocation(gl.program, "u_ViewMatrix");
      var u_ProjMatrix = gl.getUniformLocation(gl.program, "u_ProjMatrix");
      if (!u_ViewMatrix || !u_ProjMatrix) {
        console.log("Failed to get the storage location of u_ViewMatrix and/or u_ProjMatrix");
        return;
      }
      var viewMatrix = new Matrix4();
      var projMatrix = new Matrix4();
      viewMatrix.setLookAt(0, 0, 5, 0, 0, -100, 0, 1, 0);
      projMatrix.setPerspective(30, canvas.width / canvas.height, 1, 100);
      gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements);
      gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
    function initVertexBuffers(gl) {
      var verticesColors = new Float32Array([
        // 右侧的 3 个三角形
        0.75,
        1,
        -4,
        0.4,
        1,
        0.4,
        // 绿色三角形在最后面
        0.25,
        -1,
        -4,
        0.4,
        1,
        0.4,
        1.25,
        -1,
        -4,
        1,
        0.4,
        0.4,
        0.75,
        1,
        -2,
        1,
        1,
        0.4,
        // The middle yellow one
        0.25,
        -1,
        -2,
        1,
        1,
        0.4,
        1.25,
        -1,
        -2,
        1,
        0.4,
        0.4,
        0.75,
        1,
        0,
        0.4,
        0.4,
        1,
        // The front blue one
        0.25,
        -1,
        0,
        0.4,
        0.4,
        1,
        1.25,
        -1,
        0,
        1,
        0.4,
        0.4,
        // Three triangles on the left side
        -0.75,
        1,
        -4,
        0.4,
        1,
        0.4,
        // The back green one
        -1.25,
        -1,
        -4,
        0.4,
        1,
        0.4,
        -0.25,
        -1,
        -4,
        1,
        0.4,
        0.4,
        -0.75,
        1,
        -2,
        1,
        1,
        0.4,
        // The middle yellow one
        -1.25,
        -1,
        -2,
        1,
        1,
        0.4,
        -0.25,
        -1,
        -2,
        1,
        0.4,
        0.4,
        -0.75,
        1,
        0,
        0.4,
        0.4,
        1,
        // The front blue one
        -1.25,
        -1,
        0,
        0.4,
        0.4,
        1,
        -0.25,
        -1,
        0,
        1,
        0.4,
        0.4
      ]);
      var n = 18;
      var vertexColorbuffer = gl.createBuffer();
      if (!vertexColorbuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorbuffer);
      gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);
      var FSIZE = verticesColors.BYTES_PER_ELEMENT;
      var a_Position = gl.getAttribLocation(gl.program, "a_Position");
      if (a_Position < 0) {
        console.log("Failed to get the storage location of a_Position");
        return -1;
      }
      gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);
      gl.enableVertexAttribArray(a_Position);
      var a_Color = gl.getAttribLocation(gl.program, "a_Color");
      if (a_Color < 0) {
        console.log("Failed to get the storage location of a_Color");
        return -1;
      }
      gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
      gl.enableVertexAttribArray(a_Color);
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
const _hoisted_1 = { class: "perspective-view" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1),
    createBaseVNode("p", { id: "nearFar" }, "The near and far values are displayed here.", -1)
  ]));
}
const perspectiveView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "perspective-view.vue"]]);
export {
  perspectiveView as default
};
