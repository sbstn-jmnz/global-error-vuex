import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    error: {}
  },
  mutations: {
    SET_PRODUCTS (store, products) {
      store.products = products
    },
    SET_ERROR (store, error) {
      store.error = error
    }
  },
  actions: {
    async getProducts (actionContext) {
      const { commit } = actionContext
      try {
        const products = await ProductService.getProducts()
        commit('SET_PRODUCTS', products)
      } catch (error) {
        commit('SET_ERROR', error)
      }
    },
    setError (actionContext, error) {
      const { commit } = actionContext
      commit('SET_ERROR', error)
    }
  }
})
