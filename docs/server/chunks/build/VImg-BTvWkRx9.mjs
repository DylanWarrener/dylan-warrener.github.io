import { shallowRef, ref, computed, watch, nextTick, toRef, toValue, isRef, resolveDynamicComponent, reactive, toRefs, Text, createVNode, normalizeStyle, normalizeClass, createElementVNode, Transition, withDirectives, mergeProps, Fragment, vShow, TransitionGroup, h } from 'vue';
import { g as genericComponent, p as propsFactory, h as getCurrentInstance, G as getCurrentInstanceName, e as useRtl, Q as hasEvent, B as deepEqual, H as destructComputed, F as includes, i as convertToUnit, R as keyCodes, J as isCssColor, K as isParsableColor, L as parseColor, M as getForeground, S as isObject, q as provideDefaults, s as makeThemeProps, I as IconValue, N as useTheme, O as useIcon, P as flattenFragments, w as useProxiedModel, o as provideTheme, v as clamp, T as onlyDefinedProps } from './server.mjs';
import { u as useRender, m as makeComponentProps, c as makeDimensionProps, b as makeTagProps, a as useDimension } from './tag-D27N3-NH.mjs';

const block = ["top", "bottom"];
const inline = ["start", "end", "left", "right"];
function parseAnchor(anchor, isRtl) {
  let [side, align] = anchor.split(" ");
  if (!align) {
    align = includes(block, side) ? "start" : includes(inline, side) ? "top" : "center";
  }
  return {
    side: toPhysical(side, isRtl),
    align: toPhysical(align, isRtl)
  };
}
function toPhysical(str, isRtl) {
  if (str === "start") return isRtl ? "right" : "left";
  if (str === "end") return isRtl ? "left" : "right";
  return str;
}
const makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, "border");
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = props.border;
    if (border === true || border === "") {
      return `${name}--border`;
    } else if (typeof border === "string" || border === 0) {
      return String(border).split(" ").map((v) => `border-${v}`);
    }
    return [];
  });
  return {
    borderClasses
  };
}
const allowedDensities = [null, "default", "comfortable", "compact"];
const makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const densityClasses = toRef(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}
const makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, "elevation");
function useElevation(props) {
  const elevationClasses = toRef(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    if (elevation == null) return [];
    return [`elevation-${elevation}`];
  });
  return {
    elevationClasses
  };
}
const makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = computed(() => {
    const rounded = isRef(props) ? props.value : props.rounded;
    const tile = isRef(props) ? props.value : props.tile;
    const classes = [];
    if (rounded === true || rounded === "") {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === "string" || rounded === 0) {
      for (const value of String(rounded).split(" ")) {
        classes.push(`rounded-${value}`);
      }
    } else if (tile || rounded === false) {
      classes.push("rounded-0");
    }
    return classes;
  });
  return {
    roundedClasses
  };
}
function useColor(colors) {
  return destructComputed(() => {
    const _colors = toValue(colors);
    const classes = [];
    const styles = {};
    if (_colors.background) {
      if (isCssColor(_colors.background)) {
        styles.backgroundColor = _colors.background;
        if (!_colors.text && isParsableColor(_colors.background)) {
          const backgroundColor = parseColor(_colors.background);
          if (backgroundColor.a == null || backgroundColor.a === 1) {
            const textColor = getForeground(backgroundColor);
            styles.color = textColor;
            styles.caretColor = textColor;
          }
        }
      } else {
        classes.push(`bg-${_colors.background}`);
      }
    }
    if (_colors.text) {
      if (isCssColor(_colors.text)) {
        styles.color = _colors.text;
        styles.caretColor = _colors.text;
      } else {
        classes.push(`text-${_colors.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles
    };
  });
}
function useTextColor(color) {
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(() => ({
    text: toValue(color)
  }));
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(color) {
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(() => ({
    background: toValue(color)
  }));
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}
const allowedVariants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function genOverlays(isClickable, name) {
  return createElementVNode(Fragment, null, [isClickable && createElementVNode("span", {
    "key": "overlay",
    "class": normalizeClass(`${name}__overlay`)
  }, null), createElementVNode("span", {
    "key": "underlay",
    "class": normalizeClass(`${name}__underlay`)
  }, null)]);
}
const makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (v) => allowedVariants.includes(v)
  }
}, "variant");
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const variantClasses = toRef(() => {
    const {
      variant
    } = toValue(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(() => {
    const {
      variant,
      color
    } = toValue(props);
    return {
      [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
    };
  });
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}
const makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider");
const VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults,
      disabled,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    const size = props.size;
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, size)) {
      sizeClasses = `${name}--size-${size}`;
    } else if (size) {
      sizeStyles = {
        width: convertToUnit(size),
        height: convertToUnit(size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}
const makeVIconProps = propsFactory({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  opacity: [String, Number],
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "i"
  }),
  ...makeThemeProps()
}, "VIcon");
const VIcon = genericComponent()({
  name: "VIcon",
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = shallowRef();
    const {
      themeClasses
    } = useTheme();
    const {
      iconData
    } = useIcon(() => slotIcon.value || props.icon);
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    useRender(() => {
      var _a, _b;
      const slotValue = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (slotValue) {
        slotIcon.value = (_b = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _b.children;
      }
      const hasClick = !!(attrs.onClick || attrs.onClickOnce);
      return createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": normalizeClass(["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
          "v-icon--clickable": hasClick,
          "v-icon--disabled": props.disabled,
          "v-icon--start": props.start,
          "v-icon--end": props.end
        }, props.class]),
        "style": normalizeStyle([{
          "--v-icon-opacity": props.opacity
        }, !sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : void 0, textColorStyles.value, props.style]),
        "role": hasClick ? "button" : void 0,
        "aria-hidden": !hasClick,
        "tabindex": hasClick ? props.disabled ? -1 : 0 : void 0
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});
function useIntersectionObserver(callback, options) {
  const intersectionRef = ref();
  const isIntersecting = shallowRef(false);
  return {
    intersectionRef,
    isIntersecting
  };
}
const oppositeMap = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const makeLocationProps = propsFactory({
  location: String
}, "location");
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let offset = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl
  } = useRtl();
  const locationStyles = computed(() => {
    if (!props.location) return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset(side2) {
      return offset ? offset(side2) : 0;
    }
    const styles = {};
    if (side !== "center") {
      if (opposite) styles[oppositeMap[side]] = `calc(100% - ${getOffset(side)}px)`;
      else styles[side] = 0;
    }
    if (align !== "center") {
      if (opposite) styles[oppositeMap[align]] = `calc(100% - ${getOffset(align)}px)`;
      else styles[align] = 0;
    } else {
      if (side === "center") styles.top = styles.left = "50%";
      else {
        styles[{
          top: "left",
          bottom: "left",
          left: "top",
          right: "top"
        }[side]] = "50%";
      }
      styles.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[side];
    }
    return styles;
  });
  return {
    locationStyles
  };
}
const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VProgressLinear");
const VProgressLinear = genericComponent()({
  name: "VProgressLinear",
  props: makeVProgressLinearProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor || props.color);
    const {
      backgroundColorClasses: bufferColorClasses,
      backgroundColorStyles: bufferColorStyles
    } = useBackgroundColor(() => props.bufferColor || props.bgColor || props.color);
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseFloat(props.max));
    const height = computed(() => parseFloat(props.height));
    const normalizedBuffer = computed(() => clamp(parseFloat(props.bufferValue) / max.value * 100, 0, 100));
    const normalizedValue = computed(() => clamp(parseFloat(progress.value) / max.value * 100, 0, 100));
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    function handleClick(e) {
      if (!intersectionRef.value) return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": normalizeClass(["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
      "style": normalizeStyle([{
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...props.absolute ? locationStyles.value : {}
      }, props.style]),
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : Math.min(parseFloat(progress.value), max.value),
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createElementVNode("div", {
        "key": "stream",
        "class": normalizeClass(["v-progress-linear__stream", textColorClasses.value]),
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: parseFloat(props.bufferOpacity),
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createElementVNode("div", {
        "class": normalizeClass(["v-progress-linear__background", backgroundColorClasses.value]),
        "style": normalizeStyle([backgroundColorStyles.value, {
          opacity: parseFloat(props.bgOpacity),
          width: props.stream ? 0 : void 0
        }])
      }, null), createElementVNode("div", {
        "class": normalizeClass(["v-progress-linear__buffer", bufferColorClasses.value]),
        "style": normalizeStyle([bufferColorStyles.value, {
          opacity: parseFloat(props.bufferOpacity),
          width: convertToUnit(normalizedBuffer.value, "%")
        }])
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createElementVNode("div", {
          "class": normalizeClass(["v-progress-linear__determinate", barColorClasses.value]),
          "style": normalizeStyle([barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }])
        }, null) : createElementVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createElementVNode("div", {
          "key": bar,
          "class": normalizeClass(["v-progress-linear__indeterminate", bar, barColorClasses.value]),
          "style": normalizeStyle(barColorStyles.value)
        }, null))])]
      }), slots.default && createElementVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
const makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = toRef(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a;
  let {
    slots
  } = _ref;
  return createElementVNode("div", {
    "class": normalizeClass(`${props.name}__loader`)
  }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "absolute": props.absolute,
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}
const positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
const makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (v) => positionValues.includes(v)
    )
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = toRef(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}
function useRoute() {
  const vm = getCurrentInstance("useRoute");
  return computed(() => {
    var _a;
    return (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$route;
  });
}
function useRouter() {
  var _a, _b;
  return (_b = (_a = getCurrentInstance("useRouter")) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$router;
}
function useLink(props, attrs) {
  var _a, _b;
  const RouterLink = resolveDynamicComponent("RouterLink");
  const isLink = toRef(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
  });
  if (typeof RouterLink === "string" || !("useLink" in RouterLink)) {
    const href2 = toRef(() => props.href);
    return {
      isLink,
      isClickable,
      href: href2,
      linkProps: reactive({
        href: href2
      })
    };
  }
  const routerLink = RouterLink.useLink({
    to: toRef(() => props.to || ""),
    replace: toRef(() => props.replace)
  });
  const link = computed(() => props.to ? routerLink : void 0);
  const route = useRoute();
  const isActive = computed(() => {
    var _a3, _b3;
    var _a2, _b2, _c;
    if (!link.value) return false;
    if (!props.exact) return (_a3 = (_a2 = link.value.isActive) == null ? void 0 : _a2.value) != null ? _a3 : false;
    if (!route.value) return (_b3 = (_b2 = link.value.isExactActive) == null ? void 0 : _b2.value) != null ? _b3 : false;
    return ((_c = link.value.isExactActive) == null ? void 0 : _c.value) && deepEqual(link.value.route.value.query, route.value.query);
  });
  const href = computed(() => {
    var _a2;
    return props.to ? (_a2 = link.value) == null ? void 0 : _a2.route.value.href : props.href;
  });
  return {
    isLink,
    isClickable,
    isActive,
    route: (_a = link.value) == null ? void 0 : _a.route,
    navigate: (_b = link.value) == null ? void 0 : _b.navigate,
    href,
    linkProps: reactive({
      href,
      "aria-current": toRef(() => isActive.value ? "page" : void 0)
    })
  };
}
const makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
const stopSymbol = Symbol("rippleStop");
const DELAY_RIPPLE = 80;
function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}
function isTouchEvent(e) {
  return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
  return e.constructor.name === "KeyboardEvent";
}
const calculate = function(e, el) {
  var _a;
  let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }
  let radius = 0;
  let scale = 0.3;
  if ((_a = el._ripple) == null ? void 0 : _a.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }
  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};
const ripples = {
  /* eslint-disable max-statements */
  show(e, el) {
    var _a;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) {
      return;
    }
    const container = (void 0).createElement("span");
    const animation = (void 0).createElement("span");
    container.appendChild(animation);
    container.className = "v-ripple__container";
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = "v-ripple__animation";
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed2 = (void 0).getComputedStyle(el);
    if (computed2 && computed2.position === "static") {
      el.style.position = "relative";
      el.dataset.previousPosition = "static";
    }
    animation.classList.add("v-ripple__animation--enter");
    animation.classList.add("v-ripple__animation--visible");
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    animation.dataset.activated = String(performance.now());
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animation.classList.remove("v-ripple__animation--enter");
        animation.classList.add("v-ripple__animation--in");
        transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
      });
    });
  },
  hide(el) {
    var _a;
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) return;
    const ripples2 = el.getElementsByClassName("v-ripple__animation");
    if (ripples2.length === 0) return;
    const animation = ripples2[ripples2.length - 1];
    if (animation.dataset.isHiding) return;
    else animation.dataset.isHiding = "true";
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--in");
      animation.classList.add("v-ripple__animation--out");
      setTimeout(() => {
        var _a2;
        const ripples3 = el.getElementsByClassName("v-ripple__animation");
        if (ripples3.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }
        if (((_a2 = animation.parentNode) == null ? void 0 : _a2.parentNode) === el) el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple) || element._ripple.touched || e[stopSymbol]) return;
  e[stopSymbol] = true;
  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    if (element._ripple.isTouch) return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e)) {
    if (element._ripple.showTimerCommit) return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };
    element._ripple.showTimer = (void 0).setTimeout(() => {
      var _a;
      if ((_a = element == null ? void 0 : element._ripple) == null ? void 0 : _a.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}
function rippleStop(e) {
  e[stopSymbol] = true;
}
function rippleHide(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple)) return;
  (void 0).clearTimeout(element._ripple.showTimer);
  if (e.type === "touchend" && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;
    element._ripple.showTimer = (void 0).setTimeout(() => {
      rippleHide(e);
    });
    return;
  }
  (void 0).setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple)) return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  (void 0).clearTimeout(element._ripple.showTimer);
}
let keyboardRipple = false;
function keyboardRippleShow(e, keys) {
  if (!keyboardRipple && keys.includes(e.keyCode)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}
function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}
function focusRippleHide(e) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e);
  }
}
function updateRipple(el, binding, wasEnabled) {
  var _a, _b;
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el);
  }
  el._ripple = (_a = el._ripple) != null ? _a : {};
  el._ripple.enabled = enabled;
  el._ripple.centered = modifiers.center;
  el._ripple.circle = modifiers.circle;
  const bindingValue = isObject(value) ? value : {};
  if (bindingValue.class) {
    el._ripple.class = bindingValue.class;
  }
  const allowedKeys = (_b = bindingValue.keys) != null ? _b : [keyCodes.enter, keyCodes.space];
  el._ripple.keyDownHandler = (e) => keyboardRippleShow(e, allowedKeys);
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el.addEventListener("touchstart", rippleStop, {
        passive: true
      });
      el.addEventListener("mousedown", rippleStop);
      return;
    }
    el.addEventListener("touchstart", rippleShow, {
      passive: true
    });
    el.addEventListener("touchend", rippleHide, {
      passive: true
    });
    el.addEventListener("touchmove", rippleCancelShow, {
      passive: true
    });
    el.addEventListener("touchcancel", rippleHide);
    el.addEventListener("mousedown", rippleShow);
    el.addEventListener("mouseup", rippleHide);
    el.addEventListener("mouseleave", rippleHide);
    el.addEventListener("keydown", (e) => keyboardRippleShow(e, allowedKeys));
    el.addEventListener("keyup", keyboardRippleHide);
    el.addEventListener("blur", focusRippleHide);
    el.addEventListener("dragstart", rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}
function removeListeners(el) {
  var _a;
  el.removeEventListener("mousedown", rippleShow);
  el.removeEventListener("touchstart", rippleShow);
  el.removeEventListener("touchend", rippleHide);
  el.removeEventListener("touchmove", rippleCancelShow);
  el.removeEventListener("touchcancel", rippleHide);
  el.removeEventListener("mouseup", rippleHide);
  el.removeEventListener("mouseleave", rippleHide);
  if ((_a = el._ripple) == null ? void 0 : _a.keyDownHandler) {
    el.removeEventListener("keydown", el._ripple.keyDownHandler);
  }
  el.removeEventListener("keyup", keyboardRippleHide);
  el.removeEventListener("dragstart", rippleHide);
  el.removeEventListener("blur", focusRippleHide);
}
function mounted$1(el, binding) {
  updateRipple(el, binding, false);
}
function unmounted$1(el) {
  removeListeners(el);
  delete el._ripple;
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}
const Ripple = {
  mounted: mounted$1,
  unmounted: unmounted$1,
  updated
};
function useAspectStyles(props) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + "%"
      } : void 0;
    })
  };
}
const makeVResponsiveProps = propsFactory({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VResponsive");
const VResponsive = genericComponent()({
  name: "VResponsive",
  props: makeVResponsiveProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _a;
      return createElementVNode("div", {
        "class": normalizeClass(["v-responsive", {
          "v-responsive--inline": props.inline
        }, props.class]),
        "style": normalizeStyle([dimensionStyles.value, props.style])
      }, [createElementVNode("div", {
        "class": "v-responsive__sizer",
        "style": normalizeStyle(aspectStyles.value)
      }, null), (_a = slots.additional) == null ? void 0 : _a.call(slots), slots.default && createElementVNode("div", {
        "class": normalizeClass(["v-responsive__content", props.contentClass])
      }, [slots.default()])]);
    });
    return {};
  }
});
const makeTransitionProps = propsFactory({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (val) => val !== true
  }
}, "transition");
const MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    group,
    ...rest
  } = props;
  const {
    component = group ? TransitionGroup : Transition,
    ...customProps
  } = isObject(transition) ? transition : {};
  let transitionProps;
  if (isObject(transition)) {
    transitionProps = mergeProps(customProps, onlyDefinedProps({
      disabled,
      group
    }), rest);
  } else {
    transitionProps = mergeProps({
      name: disabled || !transition ? "" : transition
    }, rest);
  }
  return h(component, transitionProps, slots);
};
function mounted(el, binding) {
  return;
}
function unmounted(el, binding) {
  var _a;
  const observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[binding.instance.$.uid];
}
const Intersect = {
  mounted,
  unmounted
};
const makeVImgProps = propsFactory({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...makeVResponsiveProps(),
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeTransitionProps()
}, "VImg");
const VImg = genericComponent()({
  name: "VImg",
  directives: {
    vIntersect: Intersect
  },
  props: makeVImgProps(),
  emits: {
    loadstart: (value) => true,
    load: (value) => true,
    error: (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      roundedClasses
    } = useRounded(props);
    const vm = getCurrentInstance("VImg");
    const currentSrc = shallowRef("");
    const image = ref();
    const state = shallowRef(props.eager ? "loading" : "idle");
    const naturalWidth = shallowRef();
    const naturalHeight = shallowRef();
    const normalisedSrc = computed(() => {
      return props.src && typeof props.src === "object" ? {
        src: props.src.src,
        srcset: props.srcset || props.src.srcset,
        lazySrc: props.lazySrc || props.src.lazySrc,
        aspect: Number(props.aspectRatio || props.src.aspect || 0)
      } : {
        src: props.src,
        srcset: props.srcset,
        lazySrc: props.lazySrc,
        aspect: Number(props.aspectRatio || 0)
      };
    });
    const aspectRatio = computed(() => {
      return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
    });
    watch(() => props.src, () => {
      init(state.value !== "idle");
    });
    watch(aspectRatio, (val, oldVal) => {
      if (!val && oldVal && image.value) {
        pollForSize(image.value);
      }
    });
    function init(isIntersecting) {
      if (props.eager && isIntersecting) return;
      state.value = "loading";
      if (normalisedSrc.value.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = normalisedSrc.value.lazySrc;
        pollForSize(lazyImg, null);
      }
      if (!normalisedSrc.value.src) return;
      nextTick(() => {
        var _a;
        emit("loadstart", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
        setTimeout(() => {
          var _a2;
          if (vm.isUnmounted) return;
          if ((_a2 = image.value) == null ? void 0 : _a2.complete) {
            if (!image.value.naturalWidth) {
              onError();
            }
            if (state.value === "error") return;
            if (!aspectRatio.value) pollForSize(image.value, null);
            if (state.value === "loading") onLoad();
          } else {
            if (!aspectRatio.value) pollForSize(image.value);
            getSrc();
          }
        });
      });
    }
    function onLoad() {
      var _a;
      if (vm.isUnmounted) return;
      getSrc();
      pollForSize(image.value);
      state.value = "loaded";
      emit("load", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function onError() {
      var _a;
      if (vm.isUnmounted) return;
      state.value = "error";
      emit("error", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function getSrc() {
      const img = image.value;
      if (img) currentSrc.value = img.currentSrc || img.src;
    }
    let timer = -1;
    function pollForSize(img) {
      let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const poll = () => {
        clearTimeout(timer);
        if (vm.isUnmounted) return;
        const {
          naturalHeight: imgHeight,
          naturalWidth: imgWidth
        } = img;
        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth;
          naturalHeight.value = imgHeight;
        } else if (!img.complete && state.value === "loading" && timeout != null) {
          timer = (void 0).setTimeout(poll, timeout);
        } else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
          naturalWidth.value = 1;
          naturalHeight.value = 1;
        }
      };
      poll();
    }
    const containClasses = toRef(() => ({
      "v-img__img--cover": props.cover,
      "v-img__img--contain": !props.cover
    }));
    const __image = () => {
      var _a;
      if (!normalisedSrc.value.src || state.value === "idle") return null;
      const img = createElementVNode("img", {
        "class": normalizeClass(["v-img__img", containClasses.value]),
        "style": {
          objectPosition: props.position
        },
        "crossorigin": props.crossorigin,
        "src": normalisedSrc.value.src,
        "srcset": normalisedSrc.value.srcset,
        "alt": props.alt,
        "referrerpolicy": props.referrerpolicy,
        "draggable": props.draggable,
        "sizes": props.sizes,
        "ref": image,
        "onLoad": onLoad,
        "onError": onError
      }, null);
      const sources = (_a = slots.sources) == null ? void 0 : _a.call(slots);
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [withDirectives(sources ? createElementVNode("picture", {
          "class": "v-img__picture"
        }, [sources, img]) : img, [[vShow, state.value === "loaded"]])]
      });
    };
    const __preloadImage = () => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && createElementVNode("img", {
        "class": normalizeClass(["v-img__img", "v-img__img--preload", containClasses.value]),
        "style": {
          objectPosition: props.position
        },
        "crossorigin": props.crossorigin,
        "src": normalisedSrc.value.lazySrc,
        "alt": props.alt,
        "referrerpolicy": props.referrerpolicy,
        "draggable": props.draggable
      }, null)]
    });
    const __placeholder = () => {
      if (!slots.placeholder) return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && createElementVNode("div", {
          "class": "v-img__placeholder"
        }, [slots.placeholder()])]
      });
    };
    const __error = () => {
      if (!slots.error) return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [state.value === "error" && createElementVNode("div", {
          "class": "v-img__error"
        }, [slots.error()])]
      });
    };
    const __gradient = () => {
      if (!props.gradient) return null;
      return createElementVNode("div", {
        "class": "v-img__gradient",
        "style": {
          backgroundImage: `linear-gradient(${props.gradient})`
        }
      }, null);
    };
    const isBooted = shallowRef(false);
    {
      const stop = watch(aspectRatio, (val) => {
        if (val) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true;
            });
          });
          stop();
        }
      });
    }
    useRender(() => {
      const responsiveProps = VResponsive.filterProps(props);
      return withDirectives(createVNode(VResponsive, mergeProps({
        "class": ["v-img", {
          "v-img--absolute": props.absolute,
          "v-img--booting": !isBooted.value
        }, backgroundColorClasses.value, roundedClasses.value, props.class],
        "style": [{
          width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width)
        }, backgroundColorStyles.value, props.style]
      }, responsiveProps, {
        "aspectRatio": aspectRatio.value,
        "aria-label": props.alt,
        "role": props.alt ? "img" : void 0
      }), {
        additional: () => createElementVNode(Fragment, null, [createVNode(__image, null, null), createVNode(__preloadImage, null, null), createVNode(__gradient, null, null), createVNode(__placeholder, null, null), createVNode(__error, null, null)]),
        default: slots.default
      }), [[Intersect, {
        handler: init,
        options: props.options
      }, null, {
        once: true
      }]]);
    });
    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight
    };
  }
});

export { genOverlays as A, VIcon as B, LoaderSlot as L, Ripple as R, VImg as V, useBackgroundColor as a, useElevation as b, useRounded as c, useRouter as d, VDefaultsProvider as e, useTextColor as f, makeElevationProps as g, makeBorderProps as h, useDensity as i, useLoader as j, useLocation as k, usePosition as l, makeRoundedProps as m, useSize as n, useLink as o, useVariant as p, makeVariantProps as q, makeSizeProps as r, makeRouterProps as s, toPhysical as t, useBorder as u, makePositionProps as v, makeLocationProps as w, makeLoaderProps as x, makeDensityProps as y, useIntersectionObserver as z };
//# sourceMappingURL=VImg-BTvWkRx9.mjs.map
