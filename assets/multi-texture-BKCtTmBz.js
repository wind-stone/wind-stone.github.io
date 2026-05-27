import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode } from "./app-BIlS0k3L.js";
import { g as getWebGLContext, i as initShaders } from "./cuon-utils-BH0FAFv3.js";
import { s as skyImage } from "./sky-Bxe5Mub4.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const circleGif = "/assets/circle-QrdajSKG.gif";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "multi-texture",
  setup(__props, { expose: __expose }) {
    __expose();
    var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvoid main() {\n  gl_Position = a_Position;\n  v_TexCoord = a_TexCoord;\n}\n";
    var FSHADER_SOURCE = (
      // '#ifdef GL_ES\n' +
      "precision mediump float;\nuniform sampler2D u_Sampler0;\nuniform sampler2D u_Sampler1;\nvarying vec2 v_TexCoord;\nvoid main() {\n  vec4 color0 = texture2D(u_Sampler0, v_TexCoord);\n  vec4 color1 = texture2D(u_Sampler1, v_TexCoord);\n  gl_FragColor = color0 * color1;\n}\n"
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
        // Vertex coordinate, Texture coordinate
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
      var texture0 = gl.createTexture();
      var texture1 = gl.createTexture();
      if (!texture0 || !texture1) {
        console.log("Failed to create the texture object");
        return false;
      }
      var u_Sampler0 = gl.getUniformLocation(gl.program, "u_Sampler0");
      var u_Sampler1 = gl.getUniformLocation(gl.program, "u_Sampler1");
      if (!u_Sampler0 || !u_Sampler1) {
        console.log("Failed to get the storage location of u_Sampler");
        return false;
      }
      var image0 = new Image();
      var image1 = new Image();
      if (!image0 || !image1) {
        console.log("Failed to create the image object");
        return false;
      }
      image0.onload = function() {
        loadTexture(gl, n, texture0, u_Sampler0, image0, 0);
      };
      image1.onload = function() {
        loadTexture(gl, n, texture1, u_Sampler1, image1, 1);
      };
      image0.src = skyImage;
      image1.src = circleGif;
      return true;
    }
    var g_texUnit0 = false, g_texUnit1 = false;
    function loadTexture(gl, n, texture, u_Sampler, image, texUnit) {
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      if (texUnit == 0) {
        gl.activeTexture(gl.TEXTURE0);
        g_texUnit0 = true;
      } else {
        gl.activeTexture(gl.TEXTURE1);
        g_texUnit1 = true;
      }
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.uniform1i(u_Sampler, texUnit);
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (g_texUnit0 && g_texUnit1) {
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
      }
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
    }, main, initVertexBuffers, initTextures, get g_texUnit0() {
      return g_texUnit0;
    }, set g_texUnit0(v) {
      g_texUnit0 = v;
    }, get g_texUnit1() {
      return g_texUnit1;
    }, set g_texUnit1(v) {
      g_texUnit1 = v;
    }, loadTexture };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "multi-texture" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("canvas", {
      id: "webgl",
      width: "400",
      height: "400"
    }, ' Please use a browser that supports "canvas" ', -1)
  ]));
}
const multiTexture = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "multi-texture.vue"]]);
export {
  multiTexture as default
};
