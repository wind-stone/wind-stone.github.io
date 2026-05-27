import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { M as Matrix4 } from "./cuon-matrix-Cz4pgOZV.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ortho-view",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute vec4 a_Color;\nuniform mat4 u_ProjMatrix;\nvarying vec4 v_Color;\nvoid main() {\n  gl_Position = u_ProjMatrix * a_Position;\n  v_Color = a_Color;\n}\n";
    var FSHADER_SOURCE = "#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec4 v_Color;\nvoid main() {\n  gl_FragColor = v_Color;\n}\n";
    function main() {
      var canvas = document.getElementById("webgl");
      var nf = document.getElementById("nearFar");
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
      var u_ProjMatrix = gl.getUniformLocation(gl.program, "u_ProjMatrix");
      if (!u_ProjMatrix) {
        console.log("Failed to get the storage location of u_ProjMatrix");
        return;
      }
      var projMatrix = new Matrix4();
      document.onkeydown = function(ev) {
        keydown(ev, gl, n, u_ProjMatrix, projMatrix, nf);
      };
      draw(gl, n, u_ProjMatrix, projMatrix, nf);
    }
    function initVertexBuffers(gl) {
      var verticesColors = new Float32Array([
        // Vertex coordinates and color
        // 顶点一坐标
        0,
        0.6,
        -0.4,
        // 顶点一颜色，整体成绿色
        0.4,
        1,
        0.4,
        // 顶点二坐标
        -0.5,
        -0.4,
        -0.4,
        // 顶点二颜色，整体成绿色
        0.4,
        1,
        0.4,
        // 顶点三坐标
        0.5,
        -0.4,
        -0.4,
        // 顶点三颜色，整体成绿色
        1,
        0.4,
        0.4,
        // 顶点四坐标
        0.5,
        0.4,
        -0.2,
        // 顶点四颜色，整体成黄色
        1,
        0.4,
        0.4,
        // 顶点五坐标
        -0.5,
        0.4,
        -0.2,
        // 顶点五颜色，整体成黄色
        1,
        1,
        0.4,
        // 顶点六坐标
        0,
        -0.6,
        -0.2,
        // 顶点六颜色，整体成黄色
        1,
        1,
        0.4,
        // 顶点七坐标
        0,
        0.5,
        0,
        // 顶点七颜色，整体成蓝色
        0.4,
        0.4,
        1,
        // 顶点八坐标
        -0.5,
        -0.5,
        0,
        // 顶点八颜色，整体成蓝色
        0.4,
        0.4,
        1,
        // 顶点九坐标
        0.5,
        -0.5,
        0,
        // 顶点九颜色，整体成蓝色
        1,
        0.4,
        0.4
      ]);
      var n = 9;
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
    var g_near = 0, g_far = 0.5;
    function keydown(ev, gl, n, u_ProjMatrix, projMatrix, nf) {
      ev.preventDefault();
      switch (ev.keyCode) {
        case 39:
          g_near += 0.01;
          break;
        case 37:
          g_near -= 0.01;
          break;
        case 38:
          g_far += 0.01;
          break;
        case 40:
          g_far -= 0.01;
          break;
        default:
          return;
      }
      draw(gl, n, u_ProjMatrix, projMatrix, nf);
    }
    function draw(gl, n, u_ProjMatrix, projMatrix, nf) {
      projMatrix.setOrtho(-1, 1, -1, 1, g_near, g_far);
      gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);
      gl.clear(gl.COLOR_BUFFER_BIT);
      nf.innerHTML = "near: " + Math.round(g_near * 100) / 100 + ", far: " + Math.round(g_far * 100) / 100;
      gl.drawArrays(gl.TRIANGLES, 0, n);
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
    }, main, initVertexBuffers, get g_near() {
      return g_near;
    }, set g_near(v) {
      g_near = v;
    }, get g_far() {
      return g_far;
    }, set g_far(v) {
      g_far = v;
    }, keydown, draw };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "ortho-view" };
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
const orthoView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ortho-view.vue"]]);
export {
  orthoView as default
};
