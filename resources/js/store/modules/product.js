import axios from 'axios'
// import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  product: [],
}

// getters
export const getters = {
  product: state => state.product,
  getProductById: (state) => (id) => {

    return state.product.find(_item => _item.BarCode === id)
  }
}

// mutations
export const mutations = {
  [types.FETCH_PRODUCT_SUCCESS] (state, { product }) {
    state.product = product
  }
}

// actions
export const actions = {
  async fetchProduct ({ commit }) {
    try {
      const { data } = await axios.get('/api/product')

      commit(types.FETCH_PRODUCT_SUCCESS, { product: data })
    } catch (e) {
      commit(types.FETCH_PRODUCT_FAILURE)
    }
  },
  async fetchProductPagination ({ commit },payload) {
    try {
      const { data } = await axios.get(`/api/product?page=${payload.page}`)

      commit(types.FETCH_PRODUCT_SUCCESS, { employee: data })
    } catch (e) {
      commit(types.FETCH_PRODUCT_FAILURE)
    }
  },
  async editProduct ({ commit }, payload) {

    try {
      await axios.put(`/api/product/${payload.id}`, payload)
      alert('edited')
    } catch (e) {

    }
  },
  async deleteProduct ({ commit, dispatch}, payload) {

    try {
      await axios.delete(`/api/product/${payload.id}`, payload)
      alert('deleted')
      dispatch('fetchProduct')
    } catch (e) {

    }
  },
  async addProduct ({ commit, dispatch }, payload) {

    try {
      await axios.post('/api/product', payload)
      dispatch('fetchProduct')
      alert('added')
    } catch (e) {

    }
  },
}
