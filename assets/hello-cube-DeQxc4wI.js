import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { M as Matrix4 } from "./cuon-matrix-Cz4pgOZV.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hello-cube",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute vec4 a_Color;\nuniform mat4 u_MvpMatrix;\nvarying vec4 v_Color;\nvoid main() {\n  gl_Position = u_MvpMatrix * a_Position;\n  v_Color = a_Color;\n}\n";
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
      gl.enable(gl.DEPTH_TEST);
      var u_MvpMatrix = gl.getUniformLocation(gl.program, "u_MvpMatrix");
      if (!u_MvpMatrix) {
        console.log("Failed to get the storage location of u_MvpMatrix");
        return;
      }
      var mvpMatrix = new Matrix4();
      mvpMatrix.setPerspective(30, 1, 1, 100);
      mvpMatrix.lookAt(3, 3, 7, 0, 0, 0, 0, 1, 0);
      gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
    }
    function initVertexBuffers(gl) {
      var verticesColors = new Float32Array([
        // Vertex coordinates and color
        1,
        1,
        1,
        1,
        1,
        1,
        // v0 White
        -1,
        1,
        1,
        1,
        0,
        1,
        // v1 Magenta
        -1,
        -1,
        1,
        1,
        0,
        0,
        // v2 Red
        1,
        -1,
        1,
        1,
        1,
        0,
        // v3 Yellow
        1,
        -1,
        -1,
        0,
        1,
        0,
        // v4 Green
        1,
        1,
        -1,
        0,
        1,
        1,
        // v5 Cyan
        -1,
        1,
        -1,
        0,
        0,
        1,
        // v6 Blue
        -1,
        -1,
        -1,
        0,
        0,
        0
        // v7 Black
      ]);
      var indices = new Uint8Array([
        0,
        1,
        2,
        0,
        2,
        3,
        // front
        0,
        3,
        4,
        0,
        4,
        5,
        // right
        0,
        5,
        6,
        0,
        6,
        1,
        // up
        1,
        6,
        7,
        1,
        7,
        2,
        // left
        7,
        4,
        3,
        7,
        3,
        2,
        // down
        4,
        7,
        6,
        4,
        6,
        5
        // back
      ]);
      var vertexColorBuffer = gl.createBuffer();
      var indexBuffer = gl.createBuffer();
      if (!vertexColorBuffer || !indexBuffer) {
        return -1;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
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
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
      return indices.length;
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
const _hoisted_1 = { class: "hello-cube" };
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
const helloCube = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "hello-cube.vue"]]);
export {
  helloCube as default
};
