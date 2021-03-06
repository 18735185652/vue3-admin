import { createApp } from 'vue'
import i18n from '@/i18n'

import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss' // 导入全局样式
import installIcons from '@/icons'
// 导入权限控制模块
import './permission'
import './mock'

const app = createApp(App)

installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
