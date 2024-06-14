import { r as resolveComponent, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, f as createTextVNode, o as openBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var _imports_0 = "/assets/inner-join.ef0d3d28.png";
var _imports_1 = "/assets/left-outer-join.4cd95d32.png";
var _imports_2 = "/assets/right-outer-join.5ecc5576.png";
var _imports_3 = "/assets/full-outer-join.d6dda982.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "sql",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#sql",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SQL")
], -1);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("SQL \u8BED\u6CD5");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u8FDE\u63A5\u67E5\u8BE2");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "sql-\u8BED\u6CD5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#sql-\u8BED\u6CD5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" SQL \u8BED\u6CD5")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "\u8FDE\u63A5\u67E5\u8BE2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8FDE\u63A5\u67E5\u8BE2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8FDE\u63A5\u67E5\u8BE2")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "INNER JOIN")
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "INNER JOIN"
  })
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "LEFT OUTER JOIN")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1,
    alt: "LEFT OUTER JOIN"
  })
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "RIGHT OUTER JOIN")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2,
    alt: "RIGHT OUTER JOIN"
  })
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "FULL OUTER JOIN")
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: "FULL OUTER JOIN"
  })
], -1);
const _hoisted_15 = /* @__PURE__ */ createTextVNode("\u8BE6\u89C1\uFF1A");
const _hoisted_16 = {
  href: "https://www.liaoxuefeng.com/wiki/1177760294764384/1179610888796448",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u8FDE\u63A5\u67E5\u8BE2");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_RouterLink, { to: "#sql-\u8BED\u6CD5" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: "#\u8FDE\u63A5\u67E5\u8BE2" }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    _hoisted_12,
    _hoisted_13,
    _hoisted_14,
    createBaseVNode("p", null, [
      _hoisted_15,
      createBaseVNode("a", _hoisted_16, [
        _hoisted_17,
        createVNode(_component_OutboundLink)
      ])
    ]),
    createVNode(_component_global_config)
  ], 64);
}
var sql_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { sql_html as default };
