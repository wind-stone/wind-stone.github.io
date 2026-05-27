import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { s as skyImage } from "./sky-Bxe5Mub4.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "textured-quad",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvoid main() {\n  gl_Position = a_Position;\n  v_TexCoord = a_TexCoord;\n}\n";
    var FSHADER_SOURCE = (
      // '#ifdef GL_ES\n' +
      "precision mediump float;\nuniform sampler2D u_Sampler;\nvarying vec2 v_TexCoord;\nvoid main() {\n  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n}\n"
    );
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
      if (!initTextures(gl, n)) {
        console.log("Failed to intialize the texture.");
        return;
      }
    }
    function initVertexBuffers(gl) {
      var verticesTexCoords = new Float32Array([
        // Vertex coordinates, texture coordinate
        // 前两个是顶点坐标，后两个是纹理坐标
        -0.5,
        0.5,
        0,
        1,
        -0.5,
        -0.5,
        0,
        0,
        0.5,
        0.5,
        1,
        1,
        0.5,
        -0.5,
        1,
        0
      ]);
      var n = 4;
      var vertexTexCoordBuffer = gl.createBuffer();
      if (!vertexTexCoordBuffer) {
        console.log("Failed to create the buffer object");
        return -1;
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW);
      var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
      var a_Position = gl.getAttribLocation(gl.program, "a_Position");
      if (a_Position < 0) {
        console.log("Failed to get the storage location of a_Position");
        return -1;
      }
      gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
      gl.enableVertexAttribArray(a_Position);
      var a_TexCoord = gl.getAttribLocation(gl.program, "a_TexCoord");
      if (a_TexCoord < 0) {
        console.log("Failed to get the storage location of a_TexCoord");
        return -1;
      }
      gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
      gl.enableVertexAttribArray(a_TexCoord);
      return n;
    }
    function initTextures(gl, n) {
      var texture = gl.createTexture();
      if (!texture) {
        console.log("Failed to create the texture object");
        return false;
      }
      var u_Sampler = gl.getUniformLocation(gl.program, "u_Sampler");
      if (!u_Sampler) {
        console.log("Failed to get the storage location of u_Sampler");
        return false;
      }
      var image = new Image();
      if (!image) {
        console.log("Failed to create the image object");
        return false;
      }
      image.onload = function() {
        loadTexture(gl, n, texture, u_Sampler, image);
      };
      image.src = skyImage;
      return true;
    }
    function loadTexture(gl, n, texture, u_Sampler, image) {
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
      gl.uniform1i(u_Sampler, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
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
    }, main, initVertexBuffers, initTextures, loadTexture };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "textured-quad" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const texturedQuad = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "textured-quad.vue"]]);
export {
  texturedQuad as default
};
