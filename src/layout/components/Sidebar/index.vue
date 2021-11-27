<template>
  <div class="sidebar-container">
    <div class="memu-list">SideBar</div>
    <div class="footer-button">底部折叠按钮</div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useStore } from 'vuex'

const store = useStore()
console.log('store: ', store.getters.userInfo)
</script>

<style lang="scss" scoped>
.sidebar-container {
  .memu-list {
    height: calc(100% - 50px);
  }
  .footer-button {
    text-align: center;
    color: #fff;
  }
}
</style>
