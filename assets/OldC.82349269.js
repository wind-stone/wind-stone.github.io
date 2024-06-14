import { i as withDirectives, v as vShow, o as openBlock, a as createElementBlock, e as createBaseVNode, p as pushScopeId, j as popScopeId } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var OldC_vue_vue_type_style_index_0_scoped_true_lang = "";
const EVENT_TOGGLE = "toggle";
const _sfc_main = {
  name: "OldC",
  model: {
    prop: "visible",
    event: EVENT_TOGGLE
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideOldC() {
      this.$emit(EVENT_TOGGLE, false);
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-52e970cd"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "old-c" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "\u8FD9\u91CC\u662F C \u7EC4\u4EF6\u7684\u5185\u5BB9", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.hideOldC && $options.hideOldC(...args))
    }, " \u70B9\u51FB\u9690\u85CF C \u7EC4\u4EF6 ")
  ], 512)), [
    [vShow, $props.visible]
  ]);
}
var OldC = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-52e970cd"]]);
export { OldC as default };
