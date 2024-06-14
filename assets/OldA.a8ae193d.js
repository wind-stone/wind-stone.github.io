import OldB from "./OldB.009600d3.js";
import { r as resolveComponent, o as openBlock, a as createElementBlock, e as createBaseVNode, b as createVNode } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
import "./OldC.82349269.js";
var OldA_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "OldA",
  components: {
    OldB
  },
  data() {
    return {
      proA: false
    };
  },
  methods: {
    showOldB() {
      this.proA = true;
    }
  }
};
const _hoisted_1 = { class: "old-a" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OldB = resolveComponent("OldB");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.showOldB && $options.showOldB(...args))
    }, " \u663E\u793A B \u7EC4\u4EF6 "),
    createVNode(_component_OldB, {
      modelValue: $data.proA,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.proA = $event)
    }, null, 8, ["modelValue"])
  ]);
}
var OldA = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aafbeedc"]]);
export { OldA as default };
