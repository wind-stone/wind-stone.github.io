const GET_A_WEBGL_BROWSER = 'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>';
const OTHER_PROBLEM = `It doesn't appear your computer can support WebGL.<br/><a href="http://get.webgl.org">Click here for more information.</a>`;
function makeFailHTML(msg) {
  return '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + msg + "</div>";
}
function handleCreationError(msg) {
  const container = document.getElementsByTagName("body")[0];
  if (container) {
    let str = window.WebGLRenderingContext ? OTHER_PROBLEM : GET_A_WEBGL_BROWSER;
    if (msg) {
      str += "<br/><br/>Status: " + msg;
    }
    container.innerHTML = makeFailHTML(str);
  }
}
function create3DContext(canvas, opt_attribs) {
  const names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  let context = null;
  for (let ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {
    }
    if (context) {
      break;
    }
  }
  return context;
}
function setupWebGL(canvas, opt_attribs, opt_onError = handleCreationError) {
  if (canvas.addEventListener) {
    canvas.addEventListener("webglcontextcreationerror", function(event) {
      opt_onError(event.statusMessage);
    });
  }
  const context = create3DContext(canvas, opt_attribs);
  if (!context) {
    if (!window.WebGLRenderingContext) {
      opt_onError("");
    } else {
      opt_onError("");
    }
  }
  return context;
}
const log = function(msg) {
  if (window.console && window.console.log) {
    window.console.log(msg);
  }
};
const glValidEnumContexts = {
  // Generic setters and getters
  enable: { 0: true },
  disable: { 0: true },
  getParameter: { 0: true },
  // Rendering
  drawArrays: { 0: true },
  drawElements: { 0: true, 2: true },
  // Shaders
  createShader: { 0: true },
  getShaderParameter: { 1: true },
  getProgramParameter: { 1: true },
  // Vertex attributes
  getVertexAttrib: { 1: true },
  vertexAttribPointer: { 2: true },
  // Textures
  bindTexture: { 0: true },
  activeTexture: { 0: true },
  getTexParameter: { 0: true, 1: true },
  texParameterf: { 0: true, 1: true },
  texParameteri: { 0: true, 1: true, 2: true },
  texImage2D: { 0: true, 2: true, 6: true, 7: true },
  texSubImage2D: { 0: true, 6: true, 7: true },
  copyTexImage2D: { 0: true, 2: true },
  copyTexSubImage2D: { 0: true },
  generateMipmap: { 0: true },
  // Buffer objects
  bindBuffer: { 0: true },
  bufferData: { 0: true, 2: true },
  bufferSubData: { 0: true },
  getBufferParameter: { 0: true, 1: true },
  // Renderbuffers and framebuffers
  pixelStorei: { 0: true, 1: true },
  readPixels: { 4: true, 5: true },
  bindRenderbuffer: { 0: true },
  bindFramebuffer: { 0: true },
  checkFramebufferStatus: { 0: true },
  framebufferRenderbuffer: { 0: true, 1: true, 2: true },
  framebufferTexture2D: { 0: true, 1: true, 2: true },
  getFramebufferAttachmentParameter: { 0: true, 1: true, 2: true },
  getRenderbufferParameter: { 0: true, 1: true },
  renderbufferStorage: { 0: true, 1: true },
  // Frame buffer operations (clear, blend, depth test, stencil)
  clear: { 0: true },
  depthFunc: { 0: true },
  blendFunc: { 0: true, 1: true },
  blendFuncSeparate: { 0: true, 1: true, 2: true, 3: true },
  blendEquation: { 0: true },
  blendEquationSeparate: { 0: true, 1: true },
  stencilFunc: { 0: true },
  stencilFuncSeparate: { 0: true, 1: true },
  stencilMaskSeparate: { 0: true },
  stencilOp: { 0: true, 1: true, 2: true },
  stencilOpSeparate: { 0: true, 1: true, 2: true, 3: true },
  // Culling
  cullFace: { 0: true },
  frontFace: { 0: true }
};
function checkInit() {
  if (glEnums == null) {
    throw "WebGLDebugUtils.init(ctx) not called";
  }
}
function glEnumToString(value) {
  checkInit();
  var name = glEnums[value];
  return name !== void 0 ? name : "*UNKNOWN WebGL ENUM (0x" + value.toString(16) + ")";
}
function glFunctionArgToString(functionName, argumentIndex, value) {
  var funcInfo = glValidEnumContexts[functionName];
  if (funcInfo !== void 0) {
    if (funcInfo[argumentIndex]) {
      return glEnumToString(value);
    }
  }
  return value.toString();
}
let glEnums = null;
function init(ctx) {
  if (glEnums == null) {
    glEnums = {};
    for (const propertyName in ctx) {
      if (typeof ctx[propertyName] == "number") {
        glEnums[ctx[propertyName]] = propertyName;
      }
    }
  }
}
function makeDebugContext(ctx, opt_onErrorFunc) {
  init(ctx);
  opt_onErrorFunc = opt_onErrorFunc || function(err, functionName, args) {
    var argStr = "";
    for (var ii = 0; ii < args.length; ++ii) {
      argStr += (ii == 0 ? "" : ", ") + glFunctionArgToString(
        functionName,
        ii,
        args[ii]
      );
    }
    log("WebGL error " + glEnumToString(err) + " in " + functionName + "(" + argStr + ")");
  };
  var glErrorShadow = {};
  function makeErrorWrapper(ctx2, functionName) {
    return function() {
      const result = ctx2[functionName].apply(ctx2, arguments);
      const err = ctx2.getError();
      if (err != 0) {
        glErrorShadow[err] = true;
        opt_onErrorFunc(err, functionName, arguments);
      }
      return result;
    };
  }
  const wrapper = {};
  for (const propertyName in ctx) {
    if (typeof ctx[propertyName] == "function") {
      wrapper[propertyName] = makeErrorWrapper(ctx, propertyName);
    } else {
      wrapper[propertyName] = ctx[propertyName];
    }
  }
  wrapper.getError = function() {
    for (var err in glErrorShadow) {
      if (glErrorShadow[err]) {
        glErrorShadow[err] = false;
        return err;
      }
    }
    return ctx.NO_ERROR;
  };
  return wrapper;
}
function initShaders(gl, vshader, fshader) {
  var program = createProgram(gl, vshader, fshader);
  if (!program) {
    console.log("Failed to create program");
    return false;
  }
  gl.useProgram(program);
  gl.program = program;
  return true;
}
function createProgram(gl, vshader, fshader) {
  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
  if (!vertexShader || !fragmentShader) {
    return null;
  }
  var program = gl.createProgram();
  if (!program) {
    return null;
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.log("Failed to link program: " + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }
  return program;
}
function loadShader(gl, type, source) {
  var shader = gl.createShader(type);
  if (shader == null) {
    console.log("unable to create shader");
    return null;
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.log("Failed to compile shader: " + error);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}
function getWebGLContext(canvas, opt_debug = true) {
  let gl = setupWebGL(canvas);
  if (!gl) return null;
  if (opt_debug) {
    gl = makeDebugContext(gl);
  }
  return gl;
}
export {
  getWebGLContext as g,
  initShaders as i
};
