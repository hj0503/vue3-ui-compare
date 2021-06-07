<template>
  <div class="left-collapse-menu">
    <i :class="menuCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    <el-scrollbar class="left-collapse-menu_wrap">
      <el-menu
        :router="true"
        :collapse="menuCollapse"
        :default-active="activeIndex"
        :collapse-transition="false"
      >
        <el-submenu v-for="menu in menus" :key="menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { matchRouter } from '@/utils/route'
interface MenuLeftProps {
  collapse: boolean
  menus: Array<{ a: string }>
}
export default defineComponent({
  name: 'MenuLeft',
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
    menus: {
      type: Array,
      default: () => [],
    },
  },
  setup(props: MenuLeftProps, ctx) {
    const menuCollapse = ref(false)
    const route = useRoute()

    const activeIndex = computed(() => {
      let name = matchRouter(props.menus, route.name || '')
      return name || route.name
    })

    return {
      menuCollapse,
      activeIndex,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
