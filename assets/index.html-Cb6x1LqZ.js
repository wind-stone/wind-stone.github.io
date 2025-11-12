import { r as resolveComponent, c as createElementBlock, d as createBaseVNode, a as createVNode, e as withCtx, f as createTextVNode, o as openBlock } from "./app-Dscgj__W.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_global_config = resolveComponent("global-config");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "兼容性",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#兼容性"
      }, [
        createBaseVNode("span", null, "兼容性")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#浏览器对-apk-类型文件的兼容性" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("浏览器对 apk 类型文件的兼容性")
            ])),
            _: 1
          })
        ])
      ])
    ]),
    _cache[2] || (_cache[2] = createBaseVNode("h2", {
      id: "浏览器对-apk-类型文件的兼容性",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#浏览器对-apk-类型文件的兼容性"
      }, [
        createBaseVNode("span", null, "浏览器对 apk 类型文件的兼容性")
      ])
    ], -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, [
      createTextVNode("在某些浏览器/APP（比如百度地图 APP）里，当页面里使用"),
      createBaseVNode("code", null, "location.href = xx.apk"),
      createTextVNode("来下载一个 Android 安装包时，会出现一个空白页/错误页，其原因大概是浏览器对"),
      createBaseVNode("code", null, "apk"),
      createTextVNode("格式的文件解析有误，将其解析成一个常规的网址并跳转到了这个"),
      createBaseVNode("code", null, "apk"),
      createTextVNode("地址上。")
    ], -1)),
    createVNode(_component_global_config)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/browser-env/compatibility/","title":"兼容性","lang":"en-US","frontmatter":{"description":"兼容性 浏览器对 apk 类型文件的兼容性 在某些浏览器/APP（比如百度地图 APP）里，当页面里使用location.href = xx.apk来下载一个 Android 安装包时，会出现一个空白页/错误页，其原因大概是浏览器对apk格式的文件解析有误，将其解析成一个常规的网址并跳转到了这个apk地址上。","head":[["meta",{"property":"og:url","content":"https://blog.windstone.cc/browser-env/compatibility/"}],["meta",{"property":"og:site_name","content":"风动之石的博客"}],["meta",{"property":"og:title","content":"兼容性"}],["meta",{"property":"og:description","content":"兼容性 浏览器对 apk 类型文件的兼容性 在某些浏览器/APP（比如百度地图 APP）里，当页面里使用location.href = xx.apk来下载一个 Android 安装包时，会出现一个空白页/错误页，其原因大概是浏览器对apk格式的文件解析有误，将其解析成一个常规的网址并跳转到了这个apk地址上。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2021-06-14T10:58:48.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-14T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"兼容性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-14T10:58:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"浏览器对 apk 类型文件的兼容性","slug":"浏览器对-apk-类型文件的兼容性","link":"#浏览器对-apk-类型文件的兼容性","children":[]}],"git":{"createdTime":1568629165000,"updatedTime":1623668328000,"contributors":[{"name":"wind-stone","email":"wind-stone@qq.com","commits":1}]},"readingTime":{"minutes":0.36,"words":108},"filePathRelative":"browser-env/compatibility/README.md","localizedDate":"September 16, 2019","autoDesc":true}');
export {
  index_html as comp,
  data
};
