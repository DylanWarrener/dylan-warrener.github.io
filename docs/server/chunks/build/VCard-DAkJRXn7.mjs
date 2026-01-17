import { capitalize, h, camelize, createVNode, normalizeStyle, normalizeClass, createElementVNode, Fragment, toDisplayString, withDirectives, mergeProps } from 'vue';
import { a as useDimension, u as useRender, b as makeTagProps, c as makeDimensionProps, m as makeComponentProps } from './tag-D27N3-NH.mjs';
import { g as genericComponent, p as propsFactory, o as provideTheme, s as makeThemeProps, I as IconValue, q as provideDefaults } from './server.mjs';
import { R as Ripple, u as useBorder, p as useVariant, i as useDensity, b as useElevation, j as useLoader, k as useLocation, l as usePosition, c as useRounded, o as useLink, q as makeVariantProps, s as makeRouterProps, m as makeRoundedProps, v as makePositionProps, w as makeLocationProps, x as makeLoaderProps, g as makeElevationProps, y as makeDensityProps, h as makeBorderProps, r as makeSizeProps, n as useSize, A as genOverlays, V as VImg, B as VIcon, e as VDefaultsProvider, L as LoaderSlot } from './VImg-BTvWkRx9.mjs';

function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name != null ? name : capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      },
      ...makeComponentProps()
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: [klass, props.class],
          style: props.style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const VCardActions = genericComponent()({
  name: "VCardActions",
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createElementVNode("div", {
        "class": normalizeClass(["v-card-actions", props.class]),
        "style": normalizeStyle(props.style)
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVCardSubtitleProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardSubtitle");
const VCardSubtitle = genericComponent()({
  name: "VCardSubtitle",
  props: makeVCardSubtitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-card-subtitle", props.class]),
      "style": normalizeStyle([{
        "--v-card-subtitle-opacity": props.opacity
      }, props.style])
    }, slots));
    return {};
  }
});
const VCardTitle = createSimpleFunctional("v-card-title");
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class]),
      "style": normalizeStyle([colorStyles.value, sizeStyles.value, props.style])
    }, {
      default: () => [!slots.default ? props.image ? createVNode(VImg, {
        "key": "image",
        "src": props.image,
        "alt": "",
        "cover": true
      }, null) : props.icon ? createVNode(VIcon, {
        "key": "icon",
        "icon": props.icon
      }, null) : props.text : createVNode(VDefaultsProvider, {
        "key": "content-defaults",
        "defaults": {
          VImg: {
            cover: true,
            src: props.image
          },
          VIcon: {
            icon: props.icon
          }
        }
      }, {
        default: () => [slots.default()]
      }), genOverlays(false, "v-avatar")]
    }));
    return {};
  }
});
const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeDensityProps()
}, "VCardItem");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      return createElementVNode("div", {
        "class": normalizeClass(["v-card-item", props.class]),
        "style": normalizeStyle(props.style)
      }, [hasPrepend && createElementVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? createElementVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "image": props.prependAvatar
      }, null), props.prependIcon && createVNode(VIcon, {
        "key": "prepend-icon",
        "density": props.density,
        "icon": props.prependIcon
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, slots.prepend)]), createElementVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.title) == null ? void 0 : _a2.call(slots)) != null ? _a3 : toDisplayString(props.title)];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a3;
          var _a2;
          return [(_a3 = (_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) != null ? _a3 : toDisplayString(props.subtitle)];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createElementVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? createElementVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
        "key": "append-icon",
        "density": props.density,
        "icon": props.appendIcon
      }, null), props.appendAvatar && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "image": props.appendAvatar
      }, null)]) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const makeVCardTextProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VCardText");
const VCardText = genericComponent()({
  name: "VCardText",
  props: makeVCardTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": normalizeClass(["v-card-text", props.class]),
      "style": normalizeStyle([{
        "--v-card-text-opacity": props.opacity
      }, props.style])
    }, slots));
    return {};
  }
});
const makeVCardProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VCard");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    vRipple: Ripple
  },
  props: makeVCardProps(),
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
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
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
    const link = useLink(props, attrs);
    useRender(() => {
      const isLink = props.link !== false && link.isLink.value;
      const isClickable = !props.disabled && props.link !== false && (props.link || link.isClickable.value);
      const Tag = isLink ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title != null);
      const hasSubtitle = !!(slots.subtitle || props.subtitle != null);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text != null);
      return withDirectives(createVNode(Tag, mergeProps({
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "onClick": isClickable && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, link.linkProps), {
        default: () => {
          var _a;
          return [hasImage && createElementVNode("div", {
            "key": "image",
            "class": "v-card__image"
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
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a3;
              var _a2;
              return [(_a3 = (_a2 = slots.text) == null ? void 0 : _a2.call(slots)) != null ? _a3 : props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable, "v-card")];
        }
      }), [[Ripple, isClickable && props.ripple]]);
    });
    return {};
  }
});

export { VCard as V, VCardText as a, VCardActions as b, createSimpleFunctional as c };
//# sourceMappingURL=VCard-DAkJRXn7.mjs.map
