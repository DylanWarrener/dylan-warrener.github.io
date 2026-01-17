import __nuxt_component_0 from './index-CmbwL4p3.mjs';
import { defineComponent, computed, mergeProps, createSlots, withCtx, createBlock, createCommentVNode, renderSlot, openBlock, toDisplayString, toRef, useId, provide, inject, watch, nextTick, ref, readonly, createVNode, normalizeStyle, normalizeClass, watchEffect, createElementVNode, withDirectives, useSSRContext, reactive, unref } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { R as Ripple, V as VImg, u as useBorder, i as useDensity, b as useElevation, j as useLoader, k as useLocation, l as usePosition, c as useRounded, n as useSize, o as useLink, p as useVariant, q as makeVariantProps, r as makeSizeProps, s as makeRouterProps, m as makeRoundedProps, v as makePositionProps, w as makeLocationProps, x as makeLoaderProps, g as makeElevationProps, y as makeDensityProps, h as makeBorderProps, f as useTextColor, z as useIntersectionObserver, A as genOverlays, B as VIcon, e as VDefaultsProvider } from './VImg-BTvWkRx9.mjs';
import { a as useDimension, u as useRender, b as makeTagProps, c as makeDimensionProps, m as makeComponentProps } from './tag-D27N3-NH.mjs';
import { g as genericComponent, p as propsFactory, w as useProxiedModel, o as provideTheme, s as makeThemeProps, I as IconValue, h as getCurrentInstance, E as defer, A as templateRef, q as provideDefaults, v as clamp, i as convertToUnit, B as deepEqual, C as wrapInArray, D as consoleWarn, m as findChildrenWithProvide } from './server.mjs';

function useResizeObserver(callback) {
  const resizeRef = templateRef();
  const contentRect = ref();
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}
const makeVBtnGroupProps = propsFactory({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, "VBtnGroup");
const VBtnGroup = genericComponent()({
  name: "VBtnGroup",
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: toRef(() => props.direction === "horizontal" ? "auto" : null),
        baseColor: toRef(() => props.baseColor),
        color: toRef(() => props.color),
        density: toRef(() => props.density),
        flat: true,
        variant: toRef(() => props.variant)
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": normalizeClass(["v-btn-group", `v-btn-group--${props.direction}`, {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
        "style": normalizeStyle(props.style)
      }, slots);
    });
  }
});
const makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
const makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = useId();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject(injectKey, null);
  if (!group) {
    if (!required) return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(() => props.value);
  const disabled = computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const isFirst = computed(() => {
    return group.items.value[0].id === id;
  });
  const isLast = computed(() => {
    return group.items.value[group.items.value.length - 1].id === id;
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  }, {
    flush: "sync"
  });
  return {
    id,
    isSelected,
    isFirst,
    isLast,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v) => {
    if (v == null) return [];
    return getIds(items, wrapInArray(v));
  }, (v) => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index = children.indexOf(vm);
    if (unref(unwrapped.value) == null) {
      unwrapped.value = index;
      unwrapped.useIndexAsValue = true;
    }
    if (index > -1) {
      items.splice(index, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    forceMandatoryValue();
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && (item == null ? void 0 : item.disabled)) return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index = internalValue.findIndex((v) => v === id);
      const isSelected = ~index;
      value = value != null ? value : !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1) return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max) return;
      if (index < 0 && value) internalValue.push(id);
      else if (index >= 0 && !value) internalValue.splice(index, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected) return;
      if (!isSelected && !value) return;
      selected.value = (value != null ? value : !isSelected) ? [id] : [];
    }
  }
  function step(offset) {
    if (props.multiple) consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i) => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled) return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(() => props.disabled),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: toRef(() => props.selectedClass),
    items: toRef(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length) return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach((value) => {
    const item = items.find((item2) => deepEqual(value, item2.value));
    const itemByIndex = items[value];
    if ((item == null ? void 0 : item.value) != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach((id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}
const VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
const makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, "VBtnToggle");
genericComponent()({
  name: "VBtnToggle",
  props: makeVBtnToggleProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const btnGroupProps = VBtnGroup.filterProps(props);
      return createVNode(VBtnGroup, mergeProps({
        "class": ["v-btn-toggle", props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            next,
            prev,
            select,
            selected
          })];
        }
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});
const makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "div"
  }),
  ...makeThemeProps()
}, "VProgressCircular");
const VProgressCircular = genericComponent()({
  name: "VProgressCircular",
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(() => props.bgColor);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = toRef(() => clamp(parseFloat(props.modelValue), 0, 100));
    const width = toRef(() => Number(props.width));
    const size = toRef(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = toRef(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = toRef(() => width.value / size.value * diameter.value);
    const strokeDashOffset = toRef(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": normalizeClass(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class]),
      "style": normalizeStyle([sizeStyles.value, textColorStyles.value, props.style]),
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createElementVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createElementVNode("circle", {
        "class": normalizeClass(["v-progress-circular__underlay", underlayColorClasses.value]),
        "style": normalizeStyle(underlayColorStyles.value),
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createElementVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createElementVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});
function useSelectLink(link, select) {
  watch(() => {
    var _a;
    return (_a = link.isActive) == null ? void 0 : _a.value;
  }, (isActive) => {
    if (link.isLink.value && isActive != null && select) {
      nextTick(() => {
        select(isActive);
      });
    }
  }, {
    immediate: true
  });
}
const makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VBtn");
const VBtn = genericComponent()({
  name: "VBtn",
  props: makeVBtnProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        return (_a = link.isActive) == null ? void 0 : _a.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const color = toRef(() => {
      var _a;
      return isActive.value ? (_a = props.activeColor) != null ? _a : props.color : props.color;
    });
    const variantProps = computed(() => {
      var _a2;
      var _a, _b;
      const showColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a = link.isActive) == null ? void 0 : _a.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
      return {
        color: showColor ? (_a2 = color.value) != null ? _a2 : props.baseColor : props.baseColor,
        variant: props.variant
      };
    });
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = toRef(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0 || typeof props.value === "symbol") return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e) {
      var _a;
      if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank")) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      return withDirectives(createVNode(Tag, mergeProps({
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--readonly": props.readonly,
          "v-btn--slim": props.slim,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "aria-busy": props.loading ? true : void 0,
        "disabled": isDisabled.value || void 0,
        "tabindex": props.loading || props.readonly ? -1 : void 0,
        "onClick": onClick,
        "value": valueAttr.value
      }, link.linkProps), {
        default: () => {
          var _a2;
          var _a;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createElementVNode("span", {
            "key": "prepend",
            "class": "v-btn__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.prependIcon,
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, slots.prepend)]), createElementVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [!slots.default && hasIcon ? createVNode(VIcon, {
            "key": "content-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !hasIcon,
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.default) == null ? void 0 : _a22.call(slots)) != null ? _a3 : toDisplayString(props.text)];
            }
          })]), !props.icon && hasAppend && createElementVNode("span", {
            "key": "append",
            "class": "v-btn__append"
          }, [!slots.append ? createVNode(VIcon, {
            "key": "append-icon",
            "icon": props.appendIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !props.appendIcon,
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, slots.append)]), !!props.loading && createElementVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [(_a2 = (_a = slots.loader) == null ? void 0 : _a.call(slots)) != null ? _a2 : createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "width": "2"
          }, null)])];
        }
      }), [[Ripple, !isDisabled.value && props.ripple, "", {
        center: !!props.icon
      }]]);
    });
    return {
      group
    };
  }
});
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  let clearDelay = () => {
  };
  function runDelay(isOpening) {
    clearDelay == null ? void 0 : clearDelay();
    const delay = Number(isOpening ? props.openDelay : props.closeDelay);
    return new Promise((resolve) => {
      clearDelay = defer(delay, () => {
        cb == null ? void 0 : cb(isOpening);
        resolve(isOpening);
      });
    });
  }
  function runOpenDelay() {
    return runDelay(true);
  }
  function runCloseDelay() {
    return runDelay(false);
  }
  return {
    clearDelay,
    runOpenDelay,
    runCloseDelay
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseBtn",
  __ssrInlineRender: true,
  props: {
    variant: { type: String, required: false },
    size: { type: String, required: false },
    class: { type: String, required: false },
    width: { type: String, required: false },
    rippleColor: { type: String, required: false, default: "text-accent" },
    // Append
    appendIconClass: { type: String, required: false },
    appendIconSize: { type: String, required: false, default: "24" },
    appendIconAlt: { type: String, required: false },
    appendIcon: { type: String, required: false },
    iconAppendColor: { type: String, required: false },
    // Default
    textClass: { type: String, required: false },
    textStyle: { type: String, required: false },
    text: { type: String, required: false },
    iconClass: { type: String, required: false },
    iconSize: { type: String, required: false, default: "24" },
    icon: { type: String, required: false },
    iconAlt: { type: String, required: false },
    iconColor: { type: String, required: false },
    src: { type: String, required: false },
    alt: { type: String, required: false },
    // Loader
    loader: { type: String, required: false },
    // Prepend
    prependIconClass: { type: String, required: false },
    prependIconSize: { type: String, required: false, default: "24" },
    prependIcon: { type: String, required: false },
    prependIconColor: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const computed_variant = computed(() => {
      if (props.variant) return props.variant;
      else if (props.text) return "text";
      else if (props.icon) return "flat";
      return void 0;
    });
    const computed_size = computed(() => {
      if (props.size) return props.size;
      return "small";
    });
    const computed_class = computed(() => {
      const arr = ["d-flex"];
      if (props.class) arr.push(props.class);
      if (props.text) arr.push("pa-4");
      else if (props.icon) arr.push("pa-2");
      return arr.join(" ");
    });
    const computed_width = computed(() => {
      if (props.width) return props.width;
      else if (props.text) return "100";
      return void 0;
    });
    const computed_prependIconClass = computed(() => {
      const arr = [];
      if (props.prependIconClass) arr.push(props.prependIconClass);
      return arr.join(" ");
    });
    const computed_iconClass = computed(() => {
      const arr = [];
      if (props.iconClass) arr.push(props.iconClass);
      return arr.join(" ");
    });
    const computed_appendIconClass = computed(() => {
      const arr = [];
      if (props.appendIconClass) arr.push(props.appendIconClass);
      return arr.join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(VBtn, mergeProps({
        class: computed_class.value,
        variant: computed_variant.value,
        size: computed_size.value,
        width: computed_width.value,
        icon: !!__props.icon
      }, _attrs, ssrGetDirectiveProps(_ctx, Ripple, { class: __props.rippleColor })), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.text) {
              _push2(`<span class="${ssrRenderClass(__props.textClass)}" style="${ssrRenderStyle(__props.textStyle)}"${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.icon) {
              _push2(ssrRenderComponent(_component_Icon, {
                class: computed_iconClass.value,
                size: __props.iconSize,
                name: __props.icon,
                alt: __props.iconAlt
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.src && __props.alt) {
              _push2(ssrRenderComponent(VImg, {
                src: __props.src,
                alt: __props.alt
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "custom-svg", { class: "custom-svg" }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.text ? (openBlock(), createBlock("span", {
                key: 0,
                class: __props.textClass,
                style: __props.textStyle,
                textContent: toDisplayString(__props.text)
              }, null, 14, ["textContent"])) : createCommentVNode("", true),
              __props.icon ? (openBlock(), createBlock(_component_Icon, {
                key: 1,
                class: computed_iconClass.value,
                size: __props.iconSize,
                name: __props.icon,
                alt: __props.iconAlt
              }, null, 8, ["class", "size", "name", "alt"])) : createCommentVNode("", true),
              __props.src && __props.alt ? (openBlock(), createBlock(VImg, {
                key: 2,
                src: __props.src,
                alt: __props.alt
              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "custom-svg", { class: "custom-svg" })
            ];
          }
        }),
        _: 2
      }, [
        __props.prependIcon ? {
          name: "prepend",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.prependIcon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  class: computed_prependIconClass.value,
                  size: __props.prependIconSize,
                  name: __props.prependIcon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.prependIcon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  class: computed_prependIconClass.value,
                  size: __props.prependIconSize,
                  name: __props.prependIcon
                }, null, 8, ["class", "size", "name"])) : createCommentVNode("", true)
              ];
            }
          }),
          key: "0"
        } : void 0,
        __props.appendIcon ? {
          name: "append",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.appendIcon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  class: computed_appendIconClass.value,
                  size: __props.appendIconSize,
                  name: __props.appendIcon,
                  alt: __props.appendIconAlt
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.appendIcon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  class: computed_appendIconClass.value,
                  size: __props.appendIconSize,
                  name: __props.appendIcon,
                  alt: __props.appendIconAlt
                }, null, 8, ["class", "size", "name", "alt"])) : createCommentVNode("", true)
              ];
            }
          }),
          key: "1"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/button/BaseBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const makeVHoverProps = propsFactory({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...makeDelayProps()
}, "VHover");
const VHover = genericComponent()({
  name: "VHover",
  props: makeVHoverProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isHovering = useProxiedModel(props, "modelValue");
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => !props.disabled && (isHovering.value = value));
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots, {
        isHovering: isHovering.value,
        props: {
          onMouseenter: runOpenDelay,
          onMouseleave: runCloseDelay
        }
      });
    };
  }
});

export { VHover as V, _sfc_main as _, useDelay as a, makeDelayProps as m, useResizeObserver as u };
//# sourceMappingURL=VHover-C4SUKLlx.mjs.map
