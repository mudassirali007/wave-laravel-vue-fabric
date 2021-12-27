import axios from 'axios'
// import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  company: null,
  companyOption: null,
}

// getters
export const getters = {
  company: state => state.company,
  companyOption: state => state.companyOption,
}

// mutations
export const mutations = {
  [types.FETCH_COMPANY_SUCCESS] (state, { company }) {
    state.company = company
    state.companyOption = company.data.map((item) => {
      return {
        "value" : item.id,
        "text" : item.name,
      }
    })

  }
}

// actions
export const actions = {
  async fetchCompany ({ commit }) {
    try {
      const { data } = await axios.get('/api/company')

      commit(types.FETCH_COMPANY_SUCCESS, { company: data })
    } catch (e) {
      commit(types.FETCH_COMPANY_FAILURE)
    }
  },
  async fetchCompanyPagination ({ commit }, payload) {
    try {
      const { data } = await axios.get(`/api/company?page=${payload.page}`)

      commit(types.FETCH_COMPANY_SUCCESS, { company: data })
    } catch (e) {
      commit(types.FETCH_COMPANY_FAILURE)
    }
  },
  async editCompany ({ commit }, payload) {

    try {
      await axios.put(`/api/company/${payload.id}`, payload)
      alert('edited')
    } catch (e) {

    }
  },
  async deleteCompany ({ commit, dispatch}, payload) {

    try {
      await axios.delete(`/api/company/${payload.id}`, payload)
      alert('deleted')
      dispatch('fetchCompany')
    } catch (e) {

    }
  },
  async addCompany ({ commit, dispatch }, payload) {

    try {
      await axios.post('/api/company', payload)
      dispatch('fetchCompany')
      alert('added')
    } catch (e) {
      alert(e.message)
    }
  },
  async submitFile ({ commit, dispatch }, payload) {

    try {
      let formData = new FormData();
      formData.append('file', payload.file);
      axios.post( '/api/company/uploadFile',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(function(){
        console.log('SUCCESS!!');
      })
          .catch(function(){
            console.log('FAILURE!!');
          });

    } catch (e) {

    }
  },


}
