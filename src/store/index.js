import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import app from './modules/app'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        app
    },
    state,
    mutations,
    actions,
    getters,
})