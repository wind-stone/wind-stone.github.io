import { g as defineComponent, m as computed, h as ref, o as openBlock, c as createElementBlock, d as createBaseVNode, p as normalizeStyle, F as Fragment, l as renderList, u as renderSlot } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item-fixed-height",
  props: {
    list: {},
    viewHeight: { default: 400 },
    itemHeight: { default: 30 },
    bufferCount: { default: 5 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const renderCount = computed(() => {
      const countInView = Math.ceil(props.viewHeight / props.itemHeight);
      return countInView + props.bufferCount * 2;
    });
    const scrollTop = ref(0);
    const startIndex = computed(() => {
      return Math.max(Math.floor(scrollTop.value / props.itemHeight) - props.bufferCount, 0);
    });
    const endIndex = computed(() => {
      return Math.min(startIndex.value + renderCount.value, props.list.length);
    });
    const displayedList = computed(() => {
      return props.list.slice(startIndex.value, endIndex.value);
    });
    const handleScroll = (e) => {
      scrollTop.value = e.target.scrollTop;
    };
    const translateY = computed(() => {
      if (scrollTop.value < props.itemHeight * (props.bufferCount + 1)) {
        return 0;
      } else {
        return scrollTop.value - scrollTop.value % props.itemHeight - props.bufferCount * props.itemHeight;
      }
    });
    const __returned__ = { props, renderCount, scrollTop, startIndex, endIndex, displayedList, handleScroll, translateY };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["data-scroll"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "view-container",
    style: normalizeStyle({ height: `${$props.viewHeight}px` }),
    onScroll: $setup.handleScroll
  }, [
    createBaseVNode("div", {
      class: "scrollbar-container",
      style: normalizeStyle({ height: `${$props.itemHeight * $props.list.length}px` })
    }, null, 4),
    createBaseVNode("div", {
      class: "content-container",
      "data-scroll": $setup.scrollTop,
      style: normalizeStyle({ transform: `translate3d(0, ${$setup.translateY}px, 0)` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.displayedList, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.id
        }, [
          renderSlot(_ctx.$slots, "default", { item }, void 0)
        ]);
      }), 128))
    ], 12, _hoisted_1)
  ], 36);
}
const VirtualScroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-12bba9ad"], ["__file", "item-fixed-height.vue"]]);
export {
  VirtualScroll as default
};
