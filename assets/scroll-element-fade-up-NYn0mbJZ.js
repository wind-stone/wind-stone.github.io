import { g as defineComponent, o as openBlock, c as createElementBlock, F as Fragment, l as renderList, k as withDirectives, d as createBaseVNode, f as createTextVNode, t as toDisplayString, n as normalizeClass } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const DISTANCE = 100;
const DURATION = 500;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scroll-element-fade-up",
  setup(__props, { expose: __expose }) {
    __expose();
    const weakMap = /* @__PURE__ */ new WeakMap();
    const observer = typeof IntersectionObserver !== "undefined" && new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target;
        if (entry.isIntersecting) {
          const animation = weakMap.get(el);
          animation && animation.play();
          observer.unobserve(el);
        }
      }
    });
    const isBelowViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top > window.innerHeight;
    };
    const vSlideIn = {
      mounted(el) {
        if (!isBelowViewport(el)) {
          return;
        }
        const animation = el.animate([
          {
            transform: `translateY(${DISTANCE}px)`,
            opacity: 0.5
          },
          {
            transform: "translateY(0px)",
            opacity: 1
          }
        ], {
          duration: DURATION,
          easeing: "ease-out",
          fill: "forwards"
        });
        animation.pause();
        weakMap.set(el, animation);
        observer.observe(el);
      },
      unmounted(el) {
        observer.unobserve(el);
      }
    };
    const __returned__ = { DISTANCE, DURATION, weakMap, observer, isBelowViewport, vSlideIn };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock(Fragment, null, renderList(10, (n) => {
      return withDirectives(createBaseVNode("div", {
        key: n,
        class: normalizeClass(["item", `item-${n}`])
      }, [
        createTextVNode(toDisplayString(n), 1)
      ], 2), [
        [$setup["vSlideIn"]]
      ]);
    }), 64))
  ]);
}
const scrollElementFadeUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b751d2d8"], ["__file", "scroll-element-fade-up.vue"]]);
export {
  scrollElementFadeUp as default
};
