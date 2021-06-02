<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  ></div>
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    :style="styleSet"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
interface SvgIconProps {
  iconClass: string
  className: string
  styleSet?: Record<string, unknown>
}
export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    styleSet: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: SvgIconProps) {
    const isExternal = computed(() =>
      /^(https?:|mailto:|tel:)/.test(props.iconClass),
    )
    const iconName = computed(() => props.iconClass)
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })
    const styleExternalIcon = computed(() => ({
      mask: `url(${props.iconClass}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`,
    }))
    return {
      isExternal,
      iconName,
      svgClass,
      styleExternalIcon,
    }
  },
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  font-size: 16px;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
