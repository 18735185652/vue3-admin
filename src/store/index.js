import { createStore } from 'vuex'
import app from './modules/app.js'
import user from './modules/user.js'
import permission from './modules/permission.js'

import getters from './getters'

export default createStore({
  getters,
  modules: {
    user,
    app,
    permission
  }
})
