import BaseMarquee from "./index.43d9eeca.js";
import { r as resolveComponent, o as openBlock, c as createBlock, w as withCtx, a as createElementBlock, u as renderList, F as Fragment, e as createBaseVNode, t as toDisplayString } from "./app.fefd6a32.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.5a098b48.js";
var example_vue_vue_type_style_index_0_scoped_true_lang = "";
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
var example = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3170ac23"]]);
export { example as default };
