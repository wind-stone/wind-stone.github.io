import { g as defineComponent, h as ref, m as computed, i as onMounted, o as openBlock, c as createElementBlock, d as createBaseVNode, F as Fragment, l as renderList, p as normalizeStyle, t as toDisplayString } from "./app-BIlS0k3L.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-1tPrXgE0.js";
const containerMinHeight = 69;
const THRESHOLD = 0.5;
const SWIPE_VELOCITY_THRESHOLD = 0.5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    list: {},
    countPerRow: { default: 4 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const containerDom = ref(null);
    const rows = Math.ceil((props.list.length - props.countPerRow) / props.countPerRow);
    const containerMaxHeight = containerMinHeight * rows + (rows - 1) * 8;
    const singleItemWidth = ref(0);
    const touchStartX = ref(0);
    const touchStartY = ref(0);
    const scrollX = ref(0);
    const maxScrollDistance = ref(0);
    const isHorizontalScroll = ref(false);
    const isTouching = ref(false);
    const isAnimating = ref(false);
    const lastTouchX = ref(0);
    const lastTouchTime = ref(0);
    const velocityX = ref(0);
    const scrollProgress = computed(() => {
      if (maxScrollDistance.value <= 0) return 0;
      return Math.min(Math.max(scrollX.value / maxScrollDistance.value, 0), 1);
    });
    const containerHeight = computed(() => {
      return containerMinHeight + (containerMaxHeight - containerMinHeight) * scrollProgress.value;
    });
    const containerTranslateX = computed(() => {
      return -scrollProgress.value * singleItemWidth.value * props.countPerRow;
    });
    const scrollIndicatorTranslateX = computed(() => {
      return `${scrollProgress.value * 2 * 100}%`;
    });
    const animateScrollTo = (targetX) => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      const startX = scrollX.value;
      const distance = targetX - startX;
      const duration = 300;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        scrollX.value = startX + distance * easeProgress;
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          isAnimating.value = false;
        }
      };
      requestAnimationFrame(animate);
    };
    const handleTouchStart = (e) => {
      touchStartX.value = e.touches[0].clientX;
      touchStartY.value = e.touches[0].clientY;
      isHorizontalScroll.value = false;
      isTouching.value = true;
      lastTouchX.value = e.touches[0].clientX;
      lastTouchTime.value = performance.now();
      velocityX.value = 0;
    };
    const handleTouchMove = (e) => {
      if (!isTouching.value) {
        return;
      }
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const deltaX = touchStartX.value - touchX;
      const deltaY = Math.abs(touchStartY.value - touchY);
      if (!isHorizontalScroll.value && Math.abs(deltaX) > 5) {
        isHorizontalScroll.value = Math.abs(deltaX) > deltaY;
      }
      if (isHorizontalScroll.value) {
        e.preventDefault();
        const newScrollX = scrollX.value + deltaX;
        scrollX.value = Math.min(Math.max(newScrollX, 0), maxScrollDistance.value);
        touchStartX.value = touchX;
        touchStartY.value = touchY;
        const currentTime = performance.now();
        const timeDelta = currentTime - lastTouchTime.value;
        if (timeDelta > 0) {
          const distance = lastTouchX.value - touchX;
          velocityX.value = distance / timeDelta;
          lastTouchX.value = touchX;
          lastTouchTime.value = currentTime;
        }
      }
    };
    const handleTouchEnd = () => {
      isTouching.value = false;
      isHorizontalScroll.value = false;
      if (velocityX.value > SWIPE_VELOCITY_THRESHOLD) {
        animateScrollTo(maxScrollDistance.value);
        return;
      }
      if (velocityX.value < -SWIPE_VELOCITY_THRESHOLD) {
        animateScrollTo(0);
        return;
      }
      const progress = scrollProgress.value;
      if (progress < THRESHOLD) {
        animateScrollTo(0);
      } else {
        animateScrollTo(maxScrollDistance.value);
      }
    };
    onMounted(() => {
      if (containerDom.value) {
        maxScrollDistance.value = containerDom.value.clientWidth;
        singleItemWidth.value = containerDom.value.clientWidth / props.countPerRow;
      }
    });
    const __returned__ = { props, containerDom, containerMinHeight, rows, containerMaxHeight, singleItemWidth, touchStartX, touchStartY, scrollX, maxScrollDistance, isHorizontalScroll, isTouching, isAnimating, lastTouchX, lastTouchTime, velocityX, THRESHOLD, SWIPE_VELOCITY_THRESHOLD, scrollProgress, containerHeight, containerTranslateX, scrollIndicatorTranslateX, animateScrollTo, handleTouchStart, handleTouchMove, handleTouchEnd };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "horizontal-slide-list" };
const _hoisted_2 = { class: "left-area slide-list" };
const _hoisted_3 = ["src"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "right-area slide-list" };
const _hoisted_6 = ["src"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = { class: "scrollbar" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      ref: "containerDom",
      class: "slide-list-wrap",
      style: normalizeStyle({
        height: `${$setup.containerHeight}px`,
        transform: `translateX(${$setup.containerTranslateX}px)`
      }),
      onTouchstart: $setup.handleTouchStart,
      onTouchmove: $setup.handleTouchMove,
      onTouchend: $setup.handleTouchEnd
    }, [
      createBaseVNode("ul", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.list.slice(0, 4), (item) => {
          return openBlock(), createElementBlock("li", {
            key: item.id,
            class: "slide-item",
            style: normalizeStyle({ width: `calc(100% / ${$props.countPerRow})` })
          }, [
            createBaseVNode("img", {
              src: item.icon,
              class: "image"
            }, null, 8, _hoisted_3),
            createBaseVNode("span", {
              class: "title",
              textContent: toDisplayString(item.title)
            }, null, 8, _hoisted_4)
          ], 4);
        }), 128))
      ]),
      createBaseVNode("ul", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.list.slice(4), (item) => {
          return openBlock(), createElementBlock("li", {
            key: item.id,
            class: "slide-item",
            style: normalizeStyle({ width: `calc(100% / ${$props.countPerRow})` })
          }, [
            createBaseVNode("img", {
              src: item.icon,
              class: "image"
            }, null, 8, _hoisted_6),
            createBaseVNode("span", {
              class: "title",
              textContent: toDisplayString(item.title)
            }, null, 8, _hoisted_7)
          ], 4);
        }), 128))
      ])
    ], 36),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", {
        class: "scroll-indicator",
        style: normalizeStyle({
          transform: `translateX(${$setup.scrollIndicatorTranslateX})`
        })
      }, null, 4)
    ])
  ]);
}
const HorizontalSlideList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d33fe8b"], ["__file", "index.vue"]]);
export {
  HorizontalSlideList as default
};
