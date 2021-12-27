import axios from 'axios'
// import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  employee: null,
}

// getters
export const getters = {
  employee: state => state.employee,
}

// mutations
export const mutations = {
  [types.FETCH_EMPLOYEE_SUCCESS] (state, { employee }) {
    state.employee = employee
  }
}

// actions
export const actions = {
  async fetchEmployee ({ commit }) {
    try {
      const { data } = await axios.get('/api/employee')

      commit(types.FETCH_EMPLOYEE_SUCCESS, { employee: data })
    } catch (e) {
      commit(types.FETCH_EMPLOYEE_FAILURE)
    }
  },
  async fetchEmployeePagination ({ commit },payload) {
    try {
      const { data } = await axios.get(`/api/employee?page=${payload.page}`)

      commit(types.FETCH_EMPLOYEE_SUCCESS, { employee: data })
    } catch (e) {
      commit(types.FETCH_EMPLOYEE_FAILURE)
    }
  },
  async editEmployee ({ commit }, payload) {

    try {
      await axios.put(`/api/employee/${payload.id}`, payload)
      alert('edited')
    } catch (e) {

    }
  },
  async deleteEmployee ({ commit, dispatch}, payload) {

    try {
      await axios.delete(`/api/employee/${payload.id}`, payload)
      alert('deleted')
      dispatch('fetchEmployee')
    } catch (e) {

    }
  },
  async addEmployee ({ commit, dispatch }, payload) {

    try {
      await axios.post('/api/employee', payload)
      dispatch('fetchEmployee')
      alert('added')
    } catch (e) {

    }
  },
}
