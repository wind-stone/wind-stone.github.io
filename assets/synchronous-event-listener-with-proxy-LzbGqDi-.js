import { g as defineComponent, i as onMounted, o as openBlock, c as createElementBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "synchronous-event-listener-with-proxy",
  setup(__props, { expose: __expose }) {
    __expose();
    onMounted(() => {
      const getElement = (cssSelector) => {
        const dom = document.querySelector(cssSelector);
        const proxy = new Proxy(dom, {
          get(target, prop, receiver) {
            if (!prop.startsWith("wait")) {
              return Reflect.get(target, prop, receiver);
            }
            return new Promise((resolve) => {
              const eventName = prop.slice(4).toLowerCase();
              target.addEventListener(eventName, resolve, {
                once: true
              });
            });
          }
        });
        return proxy;
      };
      (async () => {
        const btn = getElement(".sync-button");
        while (1) {
          await btn.waitClick;
          console.log("click!");
        }
      })();
    });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "sync-button" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1, "按钮");
}
const synchronousEventListenerWithProxy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "synchronous-event-listener-with-proxy.vue"]]);
export {
  synchronousEventListenerWithProxy as default
};
