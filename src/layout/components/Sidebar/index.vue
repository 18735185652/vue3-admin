<template>
  <div class="sidebar">
    <!-- <h1>权限管理系统</h1> -->
    <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
      {{ $t('msg.test') }}
    </h1>
    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
    <div class="collapsed" @click="onCollapsed">
      <i :class="icon" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import SidebarMenu from './SidebarMenu'
import { computed } from 'vue'

const store = useStore()
const onCollapsed = () => {
  store.commit('app/triggerSidebarOpened')
}
const icon = computed(() => {
  return store.getters.sidebarOpened
    ? 'el-icon-arrow-left'
    : 'el-icon-arrow-right'
})
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  .logo-title {
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding: 12px;
  }
  .el-scrollbar {
    flex: 1;
  }
  .collapsed {
    width: 100%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    background-color: #525252;
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
