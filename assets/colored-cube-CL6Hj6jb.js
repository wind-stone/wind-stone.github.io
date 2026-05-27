import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { M as Matrix4 } from "./cuon-matrix-Cz4pgOZV.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "colored-cube",
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
      var vertices = new Float32Array([
        // Vertex coordinates
        1,
        1,
        1,
        -1,
        1,
        1,
        -1,
        -1,
        1,
        1,
        -1,
        1,
        // v0-v1-v2-v3 front
        1,
        1,
        1,
        1,
        -1,
        1,
        1,
        -1,
        -1,
        1,
        1,
        -1,
        // v0-v3-v4-v5 right
        1,
        1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        // v0-v5-v6-v1 up
        -1,
        1,
        1,
        -1,
        1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        // v1-v6-v7-v2 left
        -1,
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        // v7-v4-v3-v2 down
        1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1
        // v4-v7-v6-v5 back
      ]);
      var colors = new Float32Array([
        // Colors
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        // v0-v1-v2-v3 front(blue)
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        // v0-v3-v4-v5 right(green)
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        // v0-v5-v6-v1 up(red)
        1,
        1,
        0.4,
        1,
        1,
        0.4,
        1,
        1,
        0.4,
        1,
        1,
        0.4,
        // v1-v6-v7-v2 left
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        // v7-v4-v3-v2 down
        0.4,
        1,
        1,
        0.4,
        1,
        1,
        0.4,
        1,
        1,
        0.4,
        1,
        1
        // v4-v7-v6-v5 back
      ]);
      var indices = new Uint8Array([
        // Indices of the vertices
        0,
        1,
        2,
        0,
        2,
        3,
        // front
        4,
        5,
        6,
        4,
        6,
        7,
        // right
        8,
        9,
        10,
        8,
        10,
        11,
        // up
        12,
        13,
        14,
        12,
        14,
        15,
        // left
        16,
        17,
        18,
        16,
        18,
        19,
        // down
        20,
        21,
        22,
        20,
        22,
        23
        // back
      ]);
      var indexBuffer = gl.createBuffer();
      if (!indexBuffer) return -1;
      if (!initArrayBuffer(gl, vertices, 3, gl.FLOAT, "a_Position")) return -1;
      if (!initArrayBuffer(gl, colors, 3, gl.FLOAT, "a_Color")) return -1;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
      return indices.length;
    }
    function initArrayBuffer(gl, data, num, type, attribute) {
      var buffer = gl.createBuffer();
      if (!buffer) {
        console.log("Failed to create the buffer object");
        return false;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      var a_attribute = gl.getAttribLocation(gl.program, attribute);
      if (a_attribute < 0) {
        console.log("Failed to get the storage location of " + attribute);
        return false;
      }
      gl.vertexAttribPointer(a_attribute, num, type, false, 0, 0);
      gl.enableVertexAttribArray(a_attribute);
      return true;
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
    }, main, initVertexBuffers, initArrayBuffer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "colored-cube" };
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
const coloredCube = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "colored-cube.vue"]]);
export {
  coloredCube as default
};
