import { g as defineComponent, h as ref, m as computed, w as watch, q as nextTick, o as openBlock, c as createElementBlock, d as createBaseVNode, p as normalizeStyle, F as Fragment, l as renderList, u as renderSlot } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item-dynamic-height",
  props: {
    list: {},
    initItemHeight: { default: 20 },
    bufferCount: { default: 2 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const positionList = ref(
      props.list.map((item, index) => {
        return {
          index,
          height: props.initItemHeight,
          top: index * props.initItemHeight,
          bottom: (index + 1) * props.initItemHeight,
          disHeight: 0
        };
      })
    );
    const viewContainer = ref();
    const viewContainerHeight = ref(0);
    const contentContainer = ref();
    const scrollBarContainerHeight = computed(() => {
      return positionList.value[positionList.value.length - 1].bottom;
    });
    const startIndex = ref(0);
    const renderCount = ref(0);
    const endIndex = computed(() => {
      return Math.min(startIndex.value + renderCount.value + 1, props.list.length);
    });
    const displayedList = computed(() => {
      return props.list.slice(startIndex.value, endIndex.value);
    });
    const setPosition = () => {
      if (!contentContainer.value) {
        return;
      }
      const itemList = [...contentContainer.value.childNodes || []].filter((item) => {
        return item.nodeType === 1;
      });
      if (!(itemList == null ? void 0 : itemList.length)) {
        return;
      }
      itemList.forEach((node) => {
        const height = node.getBoundingClientRect().height;
        const index = +node.id;
        const item = positionList.value[index];
        const oldHeight = item.height;
        const disHeight = oldHeight - height;
        if (disHeight) {
          item.height = height;
          item.bottom -= disHeight;
          item.disHeight = disHeight;
        }
      });
      const startIndex2 = +itemList[0].id;
      const positionLen = positionList.value.length;
      let allDisHeight = positionList.value[startIndex2].disHeight;
      positionList.value[startIndex2].disHeight = 0;
      for (let i = startIndex2 + 1; i < positionLen; i++) {
        const item = positionList.value[i];
        item.top = positionList.value[i - 1].bottom;
        item.bottom = item.bottom - allDisHeight;
        if (item.disHeight !== 0) {
          allDisHeight += item.disHeight;
          item.disHeight = 0;
        }
      }
    };
    watch(
      viewContainer,
      (dom) => {
        if (dom) {
          viewContainerHeight.value = dom.offsetHeight;
          renderCount.value = Math.ceil(viewContainerHeight.value / props.initItemHeight) + props.bufferCount * 2;
          nextTick(() => {
            setPosition();
          });
        }
      },
      {
        immediate: true
      }
    );
    const scrollTop = ref(0);
    const getStartIndex = (scrollTop2) => {
      if (scrollTop2 < positionList.value[props.bufferCount].bottom) {
        return 0;
      }
      if (scrollTop2 >= positionList.value[positionList.value.length - renderCount.value].bottom) {
        return positionList.value.length - renderCount.value;
      }
      let start = 0;
      let end = positionList.value.length - 1;
      while (start < end) {
        const middle = Math.floor((start + end) / 2);
        const middleTop = positionList.value[middle].top;
        const middleBottom = positionList.value[middle].bottom;
        if (scrollTop2 === middleBottom) {
          return middle + 1;
        } else if (scrollTop2 >= middleTop && scrollTop2 < middleBottom) {
          return middle;
        } else if (scrollTop2 > middleBottom) {
          start = middle + 1;
        } else {
          end = middle - 1;
        }
      }
      return start;
    };
    const translateY = ref(0);
    const handleScroll = (e) => {
      scrollTop.value = e.target.scrollTop;
      if (scrollTop.value < positionList.value[props.bufferCount].bottom) {
        startIndex.value = 0;
        translateY.value = 0;
      } else {
        startIndex.value = getStartIndex(scrollTop.value);
        translateY.value = positionList.value[startIndex.value].top;
      }
      nextTick(() => {
        setPosition();
      });
    };
    const __returned__ = { props, positionList, viewContainer, viewContainerHeight, contentContainer, scrollBarContainerHeight, startIndex, renderCount, endIndex, displayedList, setPosition, scrollTop, getStartIndex, translateY, handleScroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["data-scroll"];
const _hoisted_2 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "viewContainer",
    class: "view-container",
    onScroll: $setup.handleScroll
  }, [
    createBaseVNode("div", {
      class: "scrollbar-container",
      style: normalizeStyle({ height: `${$setup.scrollBarContainerHeight}px` })
    }, null, 4),
    createBaseVNode("div", {
      ref: "contentContainer",
      class: "content-container",
      "data-scroll": $setup.scrollTop,
      style: normalizeStyle({ transform: `translate3d(0, ${$setup.translateY}px, 0)` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.displayedList, (item) => {
        return openBlock(), createElementBlock("div", {
          id: item.id,
          key: item.id,
          class: "item"
        }, [
          renderSlot(_ctx.$slots, "default", { item }, void 0)
        ], 8, _hoisted_2);
      }), 128))
    ], 12, _hoisted_1)
  ], 544);
}
const VirtualScroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7eb13bc8"], ["__file", "item-dynamic-height.vue"]]);
export {
  VirtualScroll as default
};
