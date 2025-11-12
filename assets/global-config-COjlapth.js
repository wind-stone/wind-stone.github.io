import { g as defineComponent, h as ref, i as onMounted, _ as __vitePreload, o as openBlock, c as createElementBlock, j as createCommentVNode, d as createBaseVNode, k as withDirectives, v as vShow, f as createTextVNode, a as createVNode } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const d = ["id", "host", "repo", "repoid", "category", "categoryid", "mapping", "term", "strict", "reactionsenabled", "emitmetadata", "inputposition", "theme", "lang", "loading"], l = /* @__PURE__ */ defineComponent({
  __name: "Giscus",
  props: {
    id: {},
    host: {},
    repo: {},
    repoId: {},
    category: {},
    categoryId: {},
    mapping: {},
    term: {},
    theme: {},
    strict: {},
    reactionsEnabled: {},
    emitMetadata: {},
    inputPosition: {},
    lang: {},
    loading: {}
  },
  setup(s) {
    const t = ref(false);
    return onMounted(() => {
      t.value = true, __vitePreload(() => import("./giscus-BNK3dBIH-GOgO_0L-.js"), true ? [] : void 0);
    }), (e, m) => t.value ? (openBlock(), createElementBlock("giscus-widget", {
      key: 0,
      id: e.id,
      host: e.host,
      repo: e.repo,
      repoid: e.repoId,
      category: e.category,
      categoryid: e.categoryId,
      mapping: e.mapping,
      term: e.term,
      strict: e.strict,
      reactionsenabled: e.reactionsEnabled,
      emitmetadata: e.emitMetadata,
      inputposition: e.inputPosition,
      theme: e.theme,
      lang: e.lang,
      loading: e.loading
    }, null, 8, d)) : createCommentVNode("", true);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "global-config",
  setup(__props, { expose: __expose }) {
    __expose();
    const busuanziVisible = ref(false);
    const initBusuanzi = () => {
      const script = document.createElement("script");
      script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
      script.onload = () => {
        setTimeout(() => {
          busuanziVisible.value = true;
        }, 1e3);
      };
      document.body.appendChild(script);
    };
    onMounted(() => {
      initBusuanzi();
    });
    const __returned__ = { busuanziVisible, initBusuanzi, get Giscus() {
      return l;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "global-config" };
const _hoisted_2 = { class: "count" };
const _hoisted_3 = { id: "busuanzi_container_site_pv" };
const _hoisted_4 = {
  id: "busuanzi_value_site_pv",
  ref: "busuanziRef"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      withDirectives(createBaseVNode("span", _hoisted_3, [
        _cache[0] || (_cache[0] = createTextVNode(" 本站总访问量  ")),
        createBaseVNode("span", _hoisted_4, null, 512),
        _cache[1] || (_cache[1] = createTextVNode("  次 "))
      ], 512), [
        [vShow, $setup.busuanziVisible]
      ])
    ]),
    createVNode($setup["Giscus"], {
      id: "comments",
      repo: "wind-stone/blog",
      "repo-id": "MDEwOlJlcG9zaXRvcnk4MzIwNDgwMw==",
      category: "Announcements",
      "category-id": "DIC_kwDOBPWaw84Ciupj",
      mapping: "pathname",
      strict: "0",
      "reactions-enabled": "1",
      "emit-metadata": "0",
      "input-position": "bottom",
      theme: "preferred_color_scheme",
      lang: "zh-CN"
    })
  ]);
}
const globalConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3be6500c"], ["__file", "global-config.vue"]]);
export {
  globalConfig as default
};
