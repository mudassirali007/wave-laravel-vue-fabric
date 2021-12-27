<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('company')">
        <b-form>
          <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
          >
            <b-form-input
                    id="input-1"
                    v-model="editData.email"
                    type="email"
                    placeholder="Enter email"
                    required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Company Name:" label-for="input-2">
            <b-form-input
                    id="input-2"
                    v-model="editData.name"
                    placeholder="Enter name"
                    required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Logo:" label-cols-sm="2" label-size="sm">
            <b-form-file v-on:change="handleFileUpload" id="file" ref="file" size="sm" accept=".jpg, .png, .gif"></b-form-file>
          </b-form-group>

          <b-form-group id="input-group-2" label="Company Website:" label-for="input-2">
            <b-form-input
                    id="input-2"
                    v-model="editData.website"
                    placeholder="Enter Website"
            ></b-form-input>
          </b-form-group>

          <b-button variant="primary"  v-on:click="onsubmit" >{{stage}}</b-button>
          <b-button  variant="danger" v-on:click="onReset">Reset</b-button>
        </b-form>

        <table v-if="company && company.data" class="table">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Logo</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in company.data" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td><img :src="'/storage/'+item.logo" style="width: 120px;height: auto;"></td>
            <td>{{ item.website }}</td>
            <td>
              <button v-on:click="editRow(item.id)">Edit</button>
              <button v-on:click="deleteRow(item.id)">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div v-else>
          <h4>No Data Found</h4>
        </div>
        <div v-if="company">
          <div class="float-right">
            <p> Showing Records {{company.to}} of {{company.total}}</p>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li v-if="company.prev_page_url" class="page-item">
                <button class="page-link" v-on:click="pagePrev(company.current_page)">
                  Previous
                </button>
              </li>
              <li v-if="company.next_page_url" class="page-item">
                <button class="page-link"  v-on:click="pageNext(company.current_page)">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </card>
    </div>

  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import VButton from "../components/Button";
export default {
  components: {VButton},
  middleware: 'auth',

  data () {
    return {
      stage: 'Add',
      file: '',
      editData: {
        email: null,
        id: null,
        logo: null,
        name: null,
        website: null
      }
    }
  },

  computed: mapGetters({
    company: 'company/company'
  }),
  mounted () {
    this.$store.dispatch('company/fetchCompany')
  },

  metaInfo () {
    return { title: this.$t('company') }
  },
  methods: {
    editRow (id) {
      console.log(id)
      this.editData = this.company.data.find((data) => {
        return data.id === id
      })
      this.stage = 'Update'

    },
    deleteRow (id) {
      console.log(id)
      this.$store.dispatch('company/deleteCompany', {
        id:id
      })
    },

    onReset () {
      this.editData = {
        email: null,
        id: null,
        logo: null,
        name: null,
        website: null
      }
      this.stage = 'Add'
    },
    onsubmit () {
      if (this.editData.id) {
        this.$store.dispatch('company/editCompany', this.editData)
      } else {
        this.$store.dispatch('company/addCompany', this.editData)
      }
    },
    pageNext (page) {
      this.$store.dispatch('company/fetchCompanyPagination', {
        page:page++
      })
    },
    pagePrev (page) {
      this.$store.dispatch('company/fetchCompanyPagination', {
        page:page--
      })
    },
    handleFileUpload (e) {
      this.file = e.target.files[0];
      this.editData.logo = this.file.name
      if (!this.file) {
        alert('not uploaded. Try Again')
        return
      }
      this.$store.dispatch('company/submitFile', {
        file: this.file
      })
    }
  }
}
</script>
