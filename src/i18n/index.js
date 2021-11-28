import { createI18n } from 'vue-i18n'
import store from '@/store'
import zh from './lang/zh'
import en from './lang/en'

const messages = {
  en: {
    msg: {
      test: 'hello world',
      ...en
    }
  },
  zh: {
    msg: {
      test: '你好世界',
      ...zh
    }
  }
}

/**
 * 返回当前 lang
 */
function getLanguage() {
  // console.log('store.getters', store.getters)
  return store && store.getters && store.getters.language
}
console.log('getLanguage', getLanguage())

// const locale = 'en'
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
