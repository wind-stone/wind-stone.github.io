import NewB from "./NewB.e487f827.js";
import { r as resolveComponent, o as openBlock, a as createElementBlock, e as createBaseVNode, b as createVNode } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
import "./OldC.511f889b.js";
var NewA_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "NewA",
  components: {
    NewB
  },
  data() {
    return {
      proA: false
    };
  },
  methods: {
    showNewB() {
      this.proA = true;
    }
  }
};
const _hoisted_1 = { class: "new-a" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NewB = resolveComponent("NewB");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.showNewB && $options.showNewB(...args))
    }, " \u663E\u793A B \u7EC4\u4EF6 "),
    createVNode(_component_NewB, {
      modelValue: $data.proA,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.proA = $event)
    }, null, 8, ["modelValue"])
  ]);
}
var NewA = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-26405b40"]]);
export { NewA as default };
