import CommonPopup from "./index.b94fc6e1.js";
import { r as resolveComponent, o as openBlock, a as createElementBlock, e as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, u as renderList, p as pushScopeId, j as popScopeId, t as toDisplayString } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var example_vue_vue_type_style_index_0_lang = "";
var example_vue_vue_type_style_index_1_scoped_true_lang = "";
const _sfc_main = {
  name: "CommonPopupExample",
  components: {
    CommonPopup
  },
  props: {
    forbidBgScroll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-9f4caff4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "common-popup-example" };
const _hoisted_2 = { class: "common-popup-slot" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "title" }, " \u5F39\u7A97\u6807\u9898 ", -1));
const _hoisted_4 = { class: "scroll-area" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CommonPopup = resolveComponent("CommonPopup");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.show && $options.show(...args))
    }, " \u6253\u5F00\u5F39\u7A97 "),
    createVNode(_component_CommonPopup, {
      modelValue: $data.isShow,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.isShow = $event),
      "forbid-bg-scroll": $props.forbidBgScroll,
      "scroll-area-selector": ".scroll-area",
      "show-close": true,
      onClose: $options.hide
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("ul", _hoisted_4, [
            (openBlock(), createElementBlock(Fragment, null, renderList(30, (i) => {
              return createBaseVNode("li", { key: i }, toDisplayString(i) + "\u3001\u8FD9\u91CC\u662F\u5217\u8868\u9879 ", 1);
            }), 64))
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "forbid-bg-scroll", "onClose"])
  ]);
}
var example = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f4caff4"]]);
export { example as default };
