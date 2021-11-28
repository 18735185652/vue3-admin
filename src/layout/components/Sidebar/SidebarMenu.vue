<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
    router
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import SidebarItem from './SidebarItem'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { generateMenus } from '@/utils/route'
import { privateRoutes, publicRoutes } from '@/router'

// eslint-disable-next-line no-unused-vars
const store = useStore()

const route = useRoute()

// 计算路由表结构
// const router = useRouter()
const routes = computed(() => {
  // const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus([...publicRoutes, ...privateRoutes])
})

// 计算高亮 menu 的方法
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss" scoped></style>
