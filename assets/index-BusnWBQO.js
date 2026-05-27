import { g as defineComponent, h as ref, o as openBlock, c as createElementBlock, d as createBaseVNode, k as withDirectives, x as vModelText, y as withKeys, t as toDisplayString, j as createCommentVNode } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const query = ref("SSE 是一种轻量级的服务器推送技术，非常适合实现这种打字机效果。🚀");
    const displayText = ref("");
    const isStreaming = ref(false);
    const errorMsg = ref("");
    const handleClick = async () => {
      var _a;
      if (isStreaming.value) return;
      errorMsg.value = "";
      displayText.value = "";
      isStreaming.value = true;
      try {
        const response = await fetch("http://localhost:3000/sse", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({ query: query.value }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
          const errorBody = await response.json();
          throw {
            status: response.status,
            message: response.statusText,
            data: errorBody
          };
        }
        return streamResponse(response);
      } catch (err) {
        errorMsg.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) || "连接失败，请确认后端服务已启动";
        isStreaming.value = false;
      }
    };
    const streamResponse = (response) => {
      if (!response.body) {
        errorMsg.value = "无法读取响应流，请检查 CORS 配置";
        isStreaming.value = false;
        return;
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            console.log("[SSE] 流结束");
            isStreaming.value = false;
            return;
          }
          const chunk = decoder.decode(value, { stream: true });
          console.log("[SSE] 收到数据:", JSON.stringify(chunk));
          buffer += chunk;
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const payload = line.slice(6);
            if (payload === "[DONE]") {
              console.log("[SSE] 收到结束信号");
              isStreaming.value = false;
              return;
            }
            try {
              const { char } = JSON.parse(payload);
              displayText.value += char;
            } catch {
              console.log("[SSE] 跳过非 JSON 行:", payload);
            }
          }
          read();
        }).catch((err) => {
          console.log("[SSE] 流读取错误:", err);
          errorMsg.value = "流读取中断";
          isStreaming.value = false;
        });
      }
      read();
    };
    const __returned__ = { query, displayText, isStreaming, errorMsg, handleClick, streamResponse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "input-row" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { class: "content" };
const _hoisted_5 = {
  key: 0,
  class: "cursor"
};
const _hoisted_6 = {
  key: 0,
  class: "error"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.query = $event),
        type: "text",
        placeholder: "请输入内容...",
        onKeyup: withKeys($setup.handleClick, ["enter"])
      }, null, 544), [
        [vModelText, $setup.query]
      ]),
      createBaseVNode("button", {
        disabled: $setup.isStreaming,
        onClick: $setup.handleClick
      }, toDisplayString($setup.isStreaming ? "输出中..." : "查询"), 9, _hoisted_3)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("span", null, toDisplayString($setup.displayText), 1),
      $setup.isStreaming ? (openBlock(), createElementBlock("span", _hoisted_5, "|")) : createCommentVNode("", true)
    ]),
    $setup.errorMsg ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString($setup.errorMsg), 1)) : createCommentVNode("", true)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-11da3ed9"], ["__file", "index.vue"]]);
export {
  index as default
};
