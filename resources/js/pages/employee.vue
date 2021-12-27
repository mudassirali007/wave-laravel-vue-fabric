<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('employee')">
        <b-form>
          <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
          >
            <b-form-input
                    id="input-1"
                    v-model="editData.first_name"
                    type="text"
                    placeholder="Enter First Name"
                    required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
            <b-form-input
                    id="input-2"
                    v-model="editData.last_name"
                    placeholder="Enter Last Name"
                    required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Email:" label-for="input-2"
                        description="We'll never share your email with anyone else."
          >
            <b-form-input
                    id="input-2"
                    type="email"
                    v-model="editData.email"
                    placeholder="Enter Email"
                    required

            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Phone:" label-for="input-2">
            <b-form-input
                    id="input-2"
                    type="number"
                    v-model="editData.phone"
                    placeholder="Enter Phone"
            ></b-form-input>
          </b-form-group>

          <b-form-group v-if="companyOption" id="input-group-2" label="Company:" label-for="input-2">
            <b-form-select v-model="editData.company_id" :required="true" :options="companyOption"  size="sm" class="mt-3"></b-form-select>
          </b-form-group>

          <b-button variant="primary"  v-on:click="onsubmit" >{{stage}}</b-button>
          <b-button  variant="danger" v-on:click="onReset">Reset</b-button>
        </b-form>

        <table v-if="employee && employee.data" class="table">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in employee.data" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.company.name }}</td>
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
        <div v-if="employee">
          <div class="float-right">
            <p> Showing Records {{employee.to}} of {{employee.total}}</p>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li v-if="employee.prev_page_url" class="page-item">
                <button class="page-link" v-on:click="pagePrev(employee.current_page)">
                  Previous
                </button>
              </li>
              <li v-if="employee.next_page_url" class="page-item">
                <button class="page-link"  v-on:click="pageNext(employee.current_page)">
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
        first_name: null,
        last_name: null,
        phone: null,
        company_id:null,
      },

    }
  },

  computed: mapGetters({
    employee: 'employee/employee',
    company: 'company/company',
    companyOption: 'company/companyOption',
  }),

  mounted () {
    this.$store.dispatch('employee/fetchEmployee')
    this.$store.dispatch('company/fetchCompany')
  },

  metaInfo () {
    return { title: this.$t('employee') }
  },
  methods: {
    editRow (id) {
      console.log(id)
      this.editData = this.employee.data.find((data) => {
        return data.id === id
      })
      this.stage = 'Update'

    },
    deleteRow (id) {
      console.log(id)
      this.$store.dispatch('employee/deleteEmployee', {
        id:id
      })
    },

    onReset () {
      this.editData = {
        email: null,
        id: null,
        first_name: null,
        last_name: null,
        phone: null,
        company_id:null,
      }
      this.stage = 'Update'
    },
    onsubmit () {
      if (this.editData.id) {
        this.$store.dispatch('employee/editEmployee', this.editData)
      } else {
        this.$store.dispatch('employee/addEmployee', this.editData)
      }
    },
    pageNext (page) {
      this.$store.dispatch('employee/fetchEmployeePagination', {
        page:page++
      })
    },
    pagePrev (page) {
      this.$store.dispatch('employee/fetchEmployeePagination', {
        page:page--
      })
    },
  }
}
</script>
