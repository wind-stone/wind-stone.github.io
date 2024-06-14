import OldC from "./OldC.82349269.js";
import { r as resolveComponent, o as openBlock, c as createBlock } from "./app.80a2bba5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
const EVENT_TOGGLE = "toggle";
var CascadeVisibility = {
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
  data() {
    return {
      selfVisible: false
    };
  },
  watch: {
    selfVisible(newVal) {
      this.$emit(EVENT_TOGGLE, newVal);
    }
  },
  mounted() {
    this.$watch("visible", (newVal) => {
      newVal ? this.show() : this.hide();
    }, {
      immediate: true
    });
  },
  methods: {
    show() {
      this.selfVisible = true;
    },
    hide() {
      this.selfVisible = false;
    }
  }
};
const _sfc_main = {
  name: "OldB",
  components: {
    OldC
  },
  mixins: [
    CascadeVisibility
  ]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OldC = resolveComponent("OldC");
  return openBlock(), createBlock(_component_OldC, {
    modelValue: _ctx.selfVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selfVisible = $event)
  }, null, 8, ["modelValue"]);
}
var NewB = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { NewB as default };
