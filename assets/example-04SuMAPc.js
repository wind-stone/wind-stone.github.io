import BaseMarquee from "./index-ObMvCAEl.js";
import { r as resolveComponent, o as openBlock, u as createBlock, e as withCtx, c as createElementBlock, F as Fragment, l as renderList, d as createBaseVNode, t as toDisplayString } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "SimpleMarqueeExample",
  components: {
    BaseMarquee
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseMarquee = resolveComponent("BaseMarquee");
  return openBlock(), createBlock(_component_BaseMarquee, { class: "base-marquee" }, {
    default: withCtx(() => [
      (openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
        return createBaseVNode("div", {
          key: i,
          class: "marquee-item"
        }, toDisplayString(new Array(10).fill(i).join(" ")), 1);
      }), 64))
    ]),
    _: 1
  });
}
const example = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4a70aed5"], ["__file", "example.vue"]]);
export {
  example as default
};
