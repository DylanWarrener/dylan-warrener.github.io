import { p as propsFactory, i as convertToUnit, h as getCurrentInstance } from './server.mjs';
import { computed } from 'vue';

const makeComponentProps = propsFactory({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function useRender(render) {
  const vm = getCurrentInstance("useRender");
  vm.render = render;
}
const makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function useDimension(props) {
  const dimensionStyles = computed(() => {
    const styles = {};
    const height = convertToUnit(props.height);
    const maxHeight = convertToUnit(props.maxHeight);
    const maxWidth = convertToUnit(props.maxWidth);
    const minHeight = convertToUnit(props.minHeight);
    const minWidth = convertToUnit(props.minWidth);
    const width = convertToUnit(props.width);
    if (height != null) styles.height = height;
    if (maxHeight != null) styles.maxHeight = maxHeight;
    if (maxWidth != null) styles.maxWidth = maxWidth;
    if (minHeight != null) styles.minHeight = minHeight;
    if (minWidth != null) styles.minWidth = minWidth;
    if (width != null) styles.width = width;
    return styles;
  });
  return {
    dimensionStyles
  };
}
const makeTagProps = propsFactory({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag");

export { useDimension as a, makeTagProps as b, makeDimensionProps as c, makeComponentProps as m, useRender as u };
//# sourceMappingURL=tag-D27N3-NH.mjs.map
