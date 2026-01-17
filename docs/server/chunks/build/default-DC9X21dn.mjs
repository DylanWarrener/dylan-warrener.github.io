import { _ as __nuxt_component_0 } from './nuxt-link-CGrK3rhN.mjs';
import { V as VHover, _ as _sfc_main$5, u as useResizeObserver, a as useDelay, m as makeDelayProps } from './VHover-C4SUKLlx.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, isRef, inject, reactive, toRef, shallowRef, provide, watchEffect, watch, nextTick, readonly, createElementVNode, Fragment, Transition, normalizeStyle, normalizeClass, useId, onScopeDispose, TransitionGroup, h, camelize, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, u as useDisplay, g as genericComponent, z as __nuxt_component_2, p as propsFactory, o as provideTheme, e as useRtl, s as makeThemeProps, i as convertToUnit, h as getCurrentInstance, m as findChildrenWithProvide, b as useNuxtApp, w as useProxiedModel, x as useToggleScope, q as provideDefaults, v as clamp, y as makeDisplayProps } from './server.mjs';
import { u as useRender, a as useDimension, m as makeComponentProps, b as makeTagProps, c as makeDimensionProps } from './tag-D27N3-NH.mjs';
import { u as useBorder, a as useBackgroundColor, b as useElevation, c as useRounded, d as useRouter, t as toPhysical, V as VImg, e as VDefaultsProvider, f as useTextColor, m as makeRoundedProps, g as makeElevationProps, h as makeBorderProps } from './VImg-BTvWkRx9.mjs';
import { b as VContainer, V as VRow, a as VCol } from './VRow-CGY0Q11V.mjs';
import { c as createSimpleFunctional, V as VCard, a as VCardText, b as VCardActions } from './VCard-DAkJRXn7.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';
import './index-CmbwL4p3.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './v3-C0-qQ0-i.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const VuetifyLayoutKey = Symbol.for("vuetify:layout");
const VuetifyLayoutItemKey = Symbol.for("vuetify:layout-item");
const ROOT_ZINDEX = 1e3;
const makeLayoutProps = propsFactory({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout");
const makeLayoutItemProps = propsFactory({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function useLayout() {
  const layout = inject(VuetifyLayoutKey);
  if (!layout) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: layout.getLayoutItem,
    mainRect: layout.mainRect,
    mainStyles: layout.mainStyles
  };
}
function useLayoutItem(options) {
  var _a;
  const layout = inject(VuetifyLayoutKey);
  if (!layout) throw new Error("[Vuetify] Could not find injected layout");
  const id = (_a = options.id) != null ? _a : `layout-item-${useId()}`;
  const vm = getCurrentInstance("useLayoutItem");
  provide(VuetifyLayoutItemKey, {
    id
  });
  const isKeptAlive = shallowRef(false);
  const {
    layoutItemStyles,
    layoutItemScrimStyles
  } = layout.register(vm, {
    ...options,
    active: computed(() => isKeptAlive.value ? false : options.active.value),
    id
  });
  return {
    layoutItemStyles,
    layoutRect: layout.layoutRect,
    layoutItemScrimStyles
  };
}
const generateLayers = (layout, positions, layoutSizes, activeItems) => {
  let previousLayer = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const layers = [{
    id: "",
    layer: {
      ...previousLayer
    }
  }];
  for (const id of layout) {
    const position = positions.get(id);
    const amount = layoutSizes.get(id);
    const active = activeItems.get(id);
    if (!position || !amount || !active) continue;
    const layer = {
      ...previousLayer,
      [position.value]: parseInt(previousLayer[position.value], 10) + (active.value ? parseInt(amount.value, 10) : 0)
    };
    layers.push({
      id,
      layer
    });
    previousLayer = layer;
  }
  return layers;
};
function createLayout(props) {
  const parentLayout = inject(VuetifyLayoutKey, null);
  const rootZIndex = computed(() => parentLayout ? parentLayout.rootZIndex.value - 100 : ROOT_ZINDEX);
  const registered = ref([]);
  const positions = reactive(/* @__PURE__ */ new Map());
  const layoutSizes = reactive(/* @__PURE__ */ new Map());
  const priorities = reactive(/* @__PURE__ */ new Map());
  const activeItems = reactive(/* @__PURE__ */ new Map());
  const disabledTransitions = reactive(/* @__PURE__ */ new Map());
  const {
    resizeRef,
    contentRect: layoutRect
  } = useResizeObserver();
  const computedOverlaps = computed(() => {
    var _a;
    const map = /* @__PURE__ */ new Map();
    const overlaps = (_a = props.overlaps) != null ? _a : [];
    for (const overlap of overlaps.filter((item) => item.includes(":"))) {
      const [top, bottom] = overlap.split(":");
      if (!registered.value.includes(top) || !registered.value.includes(bottom)) continue;
      const topPosition = positions.get(top);
      const bottomPosition = positions.get(bottom);
      const topAmount = layoutSizes.get(top);
      const bottomAmount = layoutSizes.get(bottom);
      if (!topPosition || !bottomPosition || !topAmount || !bottomAmount) continue;
      map.set(bottom, {
        position: topPosition.value,
        amount: parseInt(topAmount.value, 10)
      });
      map.set(top, {
        position: bottomPosition.value,
        amount: -parseInt(bottomAmount.value, 10)
      });
    }
    return map;
  });
  const layers = computed(() => {
    const uniquePriorities = [...new Set([...priorities.values()].map((p) => p.value))].sort((a, b) => a - b);
    const layout = [];
    for (const p of uniquePriorities) {
      const items2 = registered.value.filter((id) => {
        var _a;
        return ((_a = priorities.get(id)) == null ? void 0 : _a.value) === p;
      });
      layout.push(...items2);
    }
    return generateLayers(layout, positions, layoutSizes, activeItems);
  });
  const transitionsEnabled = computed(() => {
    return !Array.from(disabledTransitions.values()).some((ref2) => ref2.value);
  });
  const mainRect = computed(() => {
    return layers.value[layers.value.length - 1].layer;
  });
  const mainStyles = toRef(() => {
    return {
      "--v-layout-left": convertToUnit(mainRect.value.left),
      "--v-layout-right": convertToUnit(mainRect.value.right),
      "--v-layout-top": convertToUnit(mainRect.value.top),
      "--v-layout-bottom": convertToUnit(mainRect.value.bottom),
      ...transitionsEnabled.value ? void 0 : {
        transition: "none"
      }
    };
  });
  const items = computed(() => {
    return layers.value.slice(1).map((_ref, index) => {
      let {
        id
      } = _ref;
      const {
        layer
      } = layers.value[index];
      const size = layoutSizes.get(id);
      const position = positions.get(id);
      return {
        id,
        ...layer,
        size: Number(size.value),
        position: position.value
      };
    });
  });
  const getLayoutItem = (id) => {
    return items.value.find((item) => item.id === id);
  };
  const rootVm = getCurrentInstance("createLayout");
  const isMounted = shallowRef(false);
  provide(VuetifyLayoutKey, {
    register: (vm, _ref2) => {
      let {
        id,
        order,
        position,
        layoutSize,
        elementSize,
        active,
        disableTransitions,
        absolute
      } = _ref2;
      priorities.set(id, order);
      positions.set(id, position);
      layoutSizes.set(id, layoutSize);
      activeItems.set(id, active);
      disableTransitions && disabledTransitions.set(id, disableTransitions);
      const instances = findChildrenWithProvide(VuetifyLayoutItemKey, rootVm == null ? void 0 : rootVm.vnode);
      const instanceIndex = instances.indexOf(vm);
      if (instanceIndex > -1) registered.value.splice(instanceIndex, 0, id);
      else registered.value.push(id);
      const index = computed(() => items.value.findIndex((i) => i.id === id));
      const zIndex = computed(() => rootZIndex.value + layers.value.length * 2 - index.value * 2);
      const layoutItemStyles = computed(() => {
        var _a;
        const isHorizontal = position.value === "left" || position.value === "right";
        const isOppositeHorizontal = position.value === "right";
        const isOppositeVertical = position.value === "bottom";
        const size = (_a = elementSize.value) != null ? _a : layoutSize.value;
        const unit = size === 0 ? "%" : "px";
        const styles = {
          [position.value]: 0,
          zIndex: zIndex.value,
          transform: `translate${isHorizontal ? "X" : "Y"}(${(active.value ? 0 : -(size === 0 ? 100 : size)) * (isOppositeHorizontal || isOppositeVertical ? -1 : 1)}${unit})`,
          position: absolute.value || rootZIndex.value !== ROOT_ZINDEX ? "absolute" : "fixed",
          ...transitionsEnabled.value ? void 0 : {
            transition: "none"
          }
        };
        if (!isMounted.value) return styles;
        const item = items.value[index.value];
        if (!item) throw new Error(`[Vuetify] Could not find layout item "${id}"`);
        const overlap = computedOverlaps.value.get(id);
        if (overlap) {
          item[overlap.position] += overlap.amount;
        }
        return {
          ...styles,
          height: isHorizontal ? `calc(100% - ${item.top}px - ${item.bottom}px)` : elementSize.value ? `${elementSize.value}px` : void 0,
          left: isOppositeHorizontal ? void 0 : `${item.left}px`,
          right: isOppositeHorizontal ? `${item.right}px` : void 0,
          top: position.value !== "bottom" ? `${item.top}px` : void 0,
          bottom: position.value !== "top" ? `${item.bottom}px` : void 0,
          width: !isHorizontal ? `calc(100% - ${item.left}px - ${item.right}px)` : elementSize.value ? `${elementSize.value}px` : void 0
        };
      });
      const layoutItemScrimStyles = computed(() => ({
        zIndex: zIndex.value - 1
      }));
      return {
        layoutItemStyles,
        layoutItemScrimStyles,
        zIndex
      };
    },
    unregister: (id) => {
      priorities.delete(id);
      positions.delete(id);
      layoutSizes.delete(id);
      activeItems.delete(id);
      disabledTransitions.delete(id);
      registered.value = registered.value.filter((v) => v !== id);
    },
    mainRect,
    mainStyles,
    getLayoutItem,
    items,
    layoutRect,
    rootZIndex
  });
  const layoutClasses = toRef(() => ["v-layout", {
    "v-layout--full-height": props.fullHeight
  }]);
  const layoutStyles = toRef(() => ({
    zIndex: parentLayout ? rootZIndex.value : void 0,
    position: parentLayout ? "relative" : void 0,
    overflow: parentLayout ? "hidden" : void 0
  }));
  return {
    layoutClasses,
    layoutStyles,
    getLayoutItem,
    items,
    layoutRect,
    layoutRef: resizeRef
  };
}
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const useNavLinks = () => useState("nav-links", () => [
  {
    prependIcon: "fa-solid:project-diagram",
    text: "Pojects",
    link: "/projects"
  },
  {
    prependIcon: "carbon:skill-level-advanced",
    text: "Skills",
    link: "/skills"
  },
  {
    prependIcon: "ix:about-filled",
    text: "About",
    link: "/about"
  },
  {
    prependIcon: "weui:contacts-filled",
    text: "Contact",
    link: "/contact"
  }
]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppLinks",
  __ssrInlineRender: true,
  props: {
    class: { type: String, required: false },
    classBtn: { type: String, required: false }
  },
  setup(__props) {
    const display = useDisplay();
    const navLinks = useNavLinks();
    const props = __props;
    const isMobile = computed(() => display.smAndDown.value);
    const computed_class = computed(() => {
      const arr = [];
      if (props.class) arr.push(props.class);
      return arr.join(" ");
    });
    const computed_classBtn = computed(() => {
      const arr = [];
      if (props.classBtn) arr.push(props.classBtn);
      if (isMobile.value) arr.push("justify-start");
      return arr.join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBtn = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `text-inverted d-flex ga-4 ${unref(computed_class)}`
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(navLinks), (navItem, index) => {
        _push(ssrRenderComponent(VHover, { key: index }, {
          default: withCtx(({ isHovering, props: props2 }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseBtn, mergeProps({
                width: `${unref(isMobile) ? "150" : "100"}`,
                class: `${unref(computed_classBtn)} ${isHovering ? "bg-grey-lighten-5" : ""}`,
                "prepend-icon": `${unref(isMobile) ? navItem.prependIcon : void 0}`,
                text: navItem.text,
                to: navItem.link
              }, { ref_for: true }, props2), null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseBtn, mergeProps({
                  width: `${unref(isMobile) ? "150" : "100"}`,
                  class: `${unref(computed_classBtn)} ${isHovering ? "bg-grey-lighten-5" : ""}`,
                  "prepend-icon": `${unref(isMobile) ? navItem.prependIcon : void 0}`,
                  text: navItem.text,
                  to: navItem.link
                }, { ref_for: true }, props2), null, 16, ["width", "class", "prepend-icon", "text", "to"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/navigation/AppLinks.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useNavDrawer = () => useState("nav-drawer", () => false);
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar-title", props.class]),
        "style": normalizeStyle(props.style)
      }, {
        default: () => {
          var _a;
          return [hasText && createElementVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const makeTransitionProps = propsFactory({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function createCssTransition(name, origin, mode) {
  return genericComponent()({
    name,
    props: makeTransitionProps({
      mode,
      origin
    }),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const functions = {
        onBeforeEnter(el) {
          if (props.origin) {
            el.style.transformOrigin = props.origin;
          }
        },
        onLeave(el) {
          if (props.leaveAbsolute) {
            const {
              offsetTop,
              offsetLeft,
              offsetWidth,
              offsetHeight
            } = el;
            el._transitionInitialStyles = {
              position: el.style.position,
              top: el.style.top,
              left: el.style.left,
              width: el.style.width,
              height: el.style.height
            };
            el.style.position = "absolute";
            el.style.top = `${offsetTop}px`;
            el.style.left = `${offsetLeft}px`;
            el.style.width = `${offsetWidth}px`;
            el.style.height = `${offsetHeight}px`;
          }
          if (props.hideOnLeave) {
            el.style.setProperty("display", "none", "important");
          }
        },
        onAfterLeave(el) {
          if (props.leaveAbsolute && (el == null ? void 0 : el._transitionInitialStyles)) {
            const {
              position,
              top,
              left,
              width,
              height
            } = el._transitionInitialStyles;
            delete el._transitionInitialStyles;
            el.style.position = position || "";
            el.style.top = top || "";
            el.style.left = left || "";
            el.style.width = width || "";
            el.style.height = height || "";
          }
        }
      };
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          ...props.group ? void 0 : {
            mode: props.mode
          },
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return genericComponent()({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      const tag = props.group ? TransitionGroup : Transition;
      return () => {
        return h(tag, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function ExpandTransitionGenerator() {
  let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const sizeProperty = x ? "width" : "height";
  const offsetProperty = camelize(`offset-${sizeProperty}`);
  return {
    onBeforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },
    onEnter(el) {
      const initialStyle = el._initialStyle;
      if (!initialStyle) return;
      el.style.setProperty("transition", "none", "important");
      el.style.overflow = "hidden";
      const offset = `${el[offsetProperty]}px`;
      el.style[sizeProperty] = "0";
      void el.offsetHeight;
      el.style.transition = initialStyle.transition;
      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset;
      });
    },
    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,
    onLeave(el) {
      el._initialStyle = {
        transition: "",
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = "hidden";
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight;
      requestAnimationFrame(() => el.style[sizeProperty] = "0");
    },
    onAfterLeave,
    onLeaveCancelled: onAfterLeave
  };
  function onAfterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el);
  }
  function resetStyles(el) {
    if (!el._initialStyle) return;
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null) el.style[sizeProperty] = size;
    delete el._initialStyle;
  }
}
createCssTransition("fab-transition", "center center", "out-in");
createCssTransition("dialog-bottom-transition");
createCssTransition("dialog-top-transition");
createCssTransition("fade-transition");
createCssTransition("scale-transition");
createCssTransition("scroll-x-transition");
createCssTransition("scroll-x-reverse-transition");
createCssTransition("scroll-y-transition");
createCssTransition("scroll-y-reverse-transition");
createCssTransition("slide-x-transition");
createCssTransition("slide-x-reverse-transition");
createCssTransition("slide-y-transition");
createCssTransition("slide-y-reverse-transition");
const VExpandTransition = createJavascriptTransition("expand-transition", ExpandTransitionGenerator());
createJavascriptTransition("expand-x-transition", ExpandTransitionGenerator("", true));
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(props.extended === null ? !!((_a = slots.extension) == null ? void 0 : _a.call(slots)) : props.extended);
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = props.extended === null ? !!extension : props.extended;
      return createVNode(props.tag, {
        "class": normalizeClass(["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([backgroundColorStyles.value, props.style])
      }, {
        default: () => [hasImage && createElementVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createElementVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createElementVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createElementVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createElementVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      previousScrollHeight = currentScrollHeight;
      return;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
function useSsrBoot() {
  const isBooted = shallowRef(false);
  const ssrBootStyles = toRef(() => !isBooted.value ? {
    transition: "none !important"
  } : void 0);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a2;
      var _a;
      const behavior = new Set((_a2 = (_a = props.scrollBehavior) == null ? void 0 : _a.split(" ")) != null ? _a2 : []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = toRef(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      var _a2, _b2;
      var _a, _b;
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = (_a2 = (_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) != null ? _a2 : 0;
      const extensionHeight = (_b2 = (_b = vToolbarRef.value) == null ? void 0 : _b.extensionHeight) != null ? _b2 : 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(() => !!props.scrollBehavior, () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(() => props.location),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(() => props.absolute)
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const display = useDisplay();
    const navDrawer = useNavDrawer();
    const isMobile = computed(() => display.smAndDown.value);
    const nuxtIconAlt = computed(() => `${navDrawer.value ? "Menu Opened" : "Menu Closed"}`);
    const toggleDrawer = () => navDrawer.value = !navDrawer.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_BaseBtn = _sfc_main$5;
      const _component_AppLinks = _sfc_main$4;
      _push(ssrRenderComponent(VAppBar, mergeProps({
        class: "px-4 bg-transparent d-flex",
        elevation: "0",
        "scroll-behavior": "hide"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "text-inverted text-button text-decoration-none",
              to: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dylan Warrener `);
                } else {
                  return [
                    createTextVNode(" Dylan Warrener ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            if (unref(isMobile)) {
              _push2(ssrRenderComponent(VHover, null, {
                default: withCtx(({ isHovering, props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseBtn, mergeProps({
                      icon: "mdi:hamburger-menu",
                      class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                      "icon-alt": unref(nuxtIconAlt)
                    }, props, { onClick: toggleDrawer }), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseBtn, mergeProps({
                        icon: "mdi:hamburger-menu",
                        class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                        "icon-alt": unref(nuxtIconAlt)
                      }, props, { onClick: toggleDrawer }), null, 16, ["class", "icon-alt"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AppLinks, { class: "mr-4" }, null, _parent2, _scopeId));
            }
            if (!unref(isMobile)) {
              _push2(ssrRenderComponent(VHover, null, {
                default: withCtx(({ isHovering, props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseBtn, mergeProps({
                      class: `${isHovering ? "" : ""}`,
                      color: "text-default",
                      variant: "outlined",
                      width: "150",
                      text: "Download CV"
                    }, props), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseBtn, mergeProps({
                        class: `${isHovering ? "" : ""}`,
                        color: "text-default",
                        variant: "outlined",
                        width: "150",
                        text: "Download CV"
                      }, props), null, 16, ["class"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_NuxtLink, {
                class: "text-inverted text-button text-decoration-none",
                to: "/"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dylan Warrener ")
                ]),
                _: 1
              }),
              createVNode(VSpacer),
              unref(isMobile) ? (openBlock(), createBlock(VHover, { key: 0 }, {
                default: withCtx(({ isHovering, props }) => [
                  createVNode(_component_BaseBtn, mergeProps({
                    icon: "mdi:hamburger-menu",
                    class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                    "icon-alt": unref(nuxtIconAlt)
                  }, props, { onClick: toggleDrawer }), null, 16, ["class", "icon-alt"])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_AppLinks, {
                key: 1,
                class: "mr-4"
              })),
              !unref(isMobile) ? (openBlock(), createBlock(VHover, { key: 2 }, {
                default: withCtx(({ isHovering, props }) => [
                  createVNode(_component_BaseBtn, mergeProps({
                    class: `${isHovering ? "" : ""}`,
                    color: "text-default",
                    variant: "outlined",
                    width: "150",
                    text: "Download CV"
                  }, props), null, 16, ["class"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/header/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const makeVDividerProps = propsFactory({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VDivider");
const VDivider = genericComponent()({
  name: "VDivider",
  props: makeVDividerProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    const dividerStyles = computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? "height" : "width"] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
      }
      return styles;
    });
    useRender(() => {
      const divider = createElementVNode("hr", {
        "class": normalizeClass([{
          "v-divider": true,
          "v-divider--inset": props.inset,
          "v-divider--vertical": props.vertical
        }, themeClasses.value, textColorClasses.value, props.class]),
        "style": normalizeStyle([dividerStyles.value, textColorStyles.value, {
          "--v-border-opacity": props.opacity
        }, props.style]),
        "aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
        "role": `${attrs.role || "separator"}`
      }, null);
      if (!slots.default) return divider;
      return createElementVNode("div", {
        "class": normalizeClass(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": props.vertical,
          "v-divider__wrapper--inset": props.inset
        }])
      }, [divider, createElementVNode("div", {
        "class": "v-divider__content"
      }, [slots.default()]), divider]);
    });
    return {};
  }
});
function useSticky(_ref) {
  let {
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    width,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    var _a2, _b2;
    var _a, _b;
    const transform = (_a2 = (_a = el.value) == null ? void 0 : _a.style.transform) != null ? _a2 : null;
    const transition = (_b2 = (_b = el.value) == null ? void 0 : _b.style.transition) != null ? _b2 : null;
    watchEffect(() => {
      var _a22, _b22, _c, _d;
      (_b22 = el.value) == null ? void 0 : _b22.style.setProperty("transform", ((_a22 = dragStyles.value) == null ? void 0 : _a22.transform) || "none");
      (_d = el.value) == null ? void 0 : _d.style.setProperty("transition", ((_c = dragStyles.value) == null ? void 0 : _c.transition) || null);
    });
    onScopeDispose(() => {
      var _a22, _b22;
      (_a22 = el.value) == null ? void 0 : _a22.style.setProperty("transform", transform);
      (_b22 = el.value) == null ? void 0 : _b22.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = toRef(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      width,
      touchless: toRef(() => props.touchless),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: readonly(isActive),
      disableTransitions: toRef(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    });
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createElementVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c;
          return [hasImage && createElementVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "alt": "",
            "cover": true,
            "height": "inherit",
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                alt: "",
                cover: true,
                height: "inherit",
                src: props.image
              }
            }
          }, slots.image)]), slots.prepend && createElementVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots)]), createElementVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createElementVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createElementVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const display = useDisplay();
    const navDrawer = useNavDrawer();
    const isMobile = computed(() => display.smAndDown.value);
    const iconAlt = computed(() => `${navDrawer.value ? "Menu Opened" : "Menu Closed"}`);
    const toggleDrawer = () => navDrawer.value = !navDrawer.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBtn = _sfc_main$5;
      const _component_AppLinks = _sfc_main$4;
      _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
        temporary: "",
        style: { height: `${unref(navDrawer) ? "100vh" : "0"}` },
        class: "bg-transparent above-everything",
        location: "bottom",
        modelValue: unref(navDrawer),
        "onUpdate:modelValue": ($event) => isRef(navDrawer) ? navDrawer.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-0 ma-0 h-100 rounded-0 d-flex flex-column" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VToolbar, {
                    class: "px-4 d-flex flex-shrink-1 flex-grow-0",
                    color: "blue-darken-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VHover, null, {
                          default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BaseBtn, mergeProps({
                                class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                                icon: "mdi:backburger",
                                "icon-alt": unref(iconAlt)
                              }, props, { onClick: toggleDrawer }), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_BaseBtn, mergeProps({
                                  class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                                  icon: "mdi:backburger",
                                  "icon-alt": unref(iconAlt)
                                }, props, { onClick: toggleDrawer }), null, 16, ["class", "icon-alt"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VHover, null, {
                            default: withCtx(({ isHovering, props }) => [
                              createVNode(_component_BaseBtn, mergeProps({
                                class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                                icon: "mdi:backburger",
                                "icon-alt": unref(iconAlt)
                              }, props, { onClick: toggleDrawer }), null, 16, ["class", "icon-alt"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, {
                    class: "flex-shrink-1 flex-grow-1 pa-4 d-flex flex-column overflow-y-auto",
                    style: { "border": "4px solid black" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(isMobile)) {
                          _push4(ssrRenderComponent(_component_AppLinks, { class: "flex-column align-center" }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(isMobile) ? (openBlock(), createBlock(_component_AppLinks, {
                            key: 0,
                            class: "flex-column align-center"
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, { class: "pa-0 d-flex flex-column flex-shrink-1 flex-grow-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, {
                          fluid: "",
                          class: "pa-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      class: "d-flex"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(` Action btn&#39;s go here `);
                                        } else {
                                          return [
                                            createVNode(VSpacer),
                                            createTextVNode(" Action btn's go here ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        class: "d-flex"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSpacer),
                                          createTextVNode(" Action btn's go here ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      class: "d-flex"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createTextVNode(" Action btn's go here ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, {
                            fluid: "",
                            class: "pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    class: "d-flex"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createTextVNode(" Action btn's go here ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VToolbar, {
                      class: "px-4 d-flex flex-shrink-1 flex-grow-0",
                      color: "blue-darken-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(_component_BaseBtn, mergeProps({
                              class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                              icon: "mdi:backburger",
                              "icon-alt": unref(iconAlt)
                            }, props, { onClick: toggleDrawer }), null, 16, ["class", "icon-alt"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, {
                      class: "flex-shrink-1 flex-grow-1 pa-4 d-flex flex-column overflow-y-auto",
                      style: { "border": "4px solid black" }
                    }, {
                      default: withCtx(() => [
                        unref(isMobile) ? (openBlock(), createBlock(_component_AppLinks, {
                          key: 0,
                          class: "flex-column align-center"
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, { class: "pa-0 d-flex flex-column flex-shrink-1 flex-grow-0" }, {
                      default: withCtx(() => [
                        createVNode(VContainer, {
                          fluid: "",
                          class: "pa-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "d-flex"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createTextVNode(" Action btn's go here ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "pa-0 ma-0 h-100 rounded-0 d-flex flex-column" }, {
                default: withCtx(() => [
                  createVNode(VToolbar, {
                    class: "px-4 d-flex flex-shrink-1 flex-grow-0",
                    color: "blue-darken-3"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VHover, null, {
                        default: withCtx(({ isHovering, props }) => [
                          createVNode(_component_BaseBtn, mergeProps({
                            class: `${isHovering ? "bg-grey-lighten-5" : "bg-transparent"}`,
                            icon: "mdi:backburger",
                            "icon-alt": unref(iconAlt)
                          }, props, { onClick: toggleDrawer }), null, 16, ["class", "icon-alt"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, {
                    class: "flex-shrink-1 flex-grow-1 pa-4 d-flex flex-column overflow-y-auto",
                    style: { "border": "4px solid black" }
                  }, {
                    default: withCtx(() => [
                      unref(isMobile) ? (openBlock(), createBlock(_component_AppLinks, {
                        key: 0,
                        class: "flex-column align-center"
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, { class: "pa-0 d-flex flex-column flex-shrink-1 flex-grow-0" }, {
                    default: withCtx(() => [
                      createVNode(VContainer, {
                        fluid: "",
                        class: "pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "d-flex"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSpacer),
                                  createTextVNode(" Action btn's go here ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/navigation/AppNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "border": "4px solid red" } }, _attrs))}>Footer</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/footer/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps({
    fullHeight: true
  }),
  ...makeThemeProps()
}, "VApp");
const VApp = genericComponent()({
  name: "VApp",
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _a;
      return createElementVNode("div", {
        "ref": layoutRef,
        "class": normalizeClass(["v-application", theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([props.style])
      }, [createElementVNode("div", {
        "class": "v-application__wrap"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class]),
      "style": normalizeStyle([mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style])
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createElementVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const display = useDisplay();
    const theme = ref("light");
    const isMobile = computed(() => display.smAndDown.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$3;
      const _component_AppNavigation = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_2;
      const _component_AppFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "site-bg-wrapper" }, _attrs))} data-v-23883a39><div class="site-bg-top-wrapper" data-v-23883a39><svg class="site-bg-svg" width="1920" height="4000" viewBox="0 0 1440 2999.999989" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-23883a39></svg></div>`);
      _push(ssrRenderComponent(VApp, {
        theme: unref(theme),
        style: { "position": "relative", "z-index": "1", "background": "transparent !important", "border": "4px solid blue" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppHeader, null, null, _parent2, _scopeId));
            if (unref(isMobile)) {
              _push2(ssrRenderComponent(_component_AppNavigation, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, {
                    fluid: "",
                    class: "d-flex flex-column ga-4",
                    style: { "border": "4px solid green" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage),
                          createVNode(_component_NuxtPage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, {
                      fluid: "",
                      class: "d-flex flex-column ga-4",
                      style: { "border": "4px solid green" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage),
                        createVNode(_component_NuxtPage)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppHeader),
              unref(isMobile) ? (openBlock(), createBlock(_component_AppNavigation, { key: 0 })) : createCommentVNode("", true),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    fluid: "",
                    class: "d-flex flex-column ga-4",
                    style: { "border": "4px solid green" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage),
                      createVNode(_component_NuxtPage)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_AppFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23883a39"]]);

export { _default as default };
//# sourceMappingURL=default-DC9X21dn.mjs.map
