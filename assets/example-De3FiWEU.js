import CommonPopup from "./index-B771cYC9.js";
import { r as resolveComponent, o as openBlock, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, F as Fragment, l as renderList, t as toDisplayString } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
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
const _hoisted_1 = { class: "common-popup-example" };
const _hoisted_2 = { class: "common-popup-slot" };
const _hoisted_3 = { class: "scroll-area" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CommonPopup = resolveComponent("CommonPopup");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.show && $options.show(...args))
    }, " 打开弹窗 "),
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
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "title" }, " 弹窗标题 ", -1)),
          createBaseVNode("ul", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(30, (i) => {
              return createBaseVNode("li", { key: i }, toDisplayString(i) + "、这里是列表项 ", 1);
            }), 64))
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "forbid-bg-scroll", "onClose"])
  ]);
}
const example = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fa75e734"], ["__file", "example.vue"]]);
export {
  example as default
};
