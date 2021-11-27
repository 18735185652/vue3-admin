<template>
  <div class="sidebar">
    <h1>学生管理系统</h1>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import {} from 'vue'
</script>

<style lang="scss">
.sidebar h1 {
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 3px;
}
</style>
