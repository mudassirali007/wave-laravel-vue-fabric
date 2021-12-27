<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('Product')">
        <table v-if="product && product.length" class="table">
          <thead>
            <tr>
              <th scope="col">
                Name
              </th>
              <th scope="col">
                Part Number
              </th>
              <th scope="col">
                Units On Hand
              </th>
              <th scope="col">
                Availability
              </th>
              <th scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in product" :key="index">
              <td>{{ item.Name }}</td>
              <td>{{ item.PartNumber }}</td>
              <td>{{ item.UnitsOnHand }}</td>
              <td >{{item.UnitsOnHand?'In Stock':'Not In Stock'}}</td>
              <td>
                <router-link :to="'/viewProduct/'+item.BarCode" class="btn btn-sm btn-primary">View</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <h4>No Data Found</h4>
        </div>

      </card>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  middleware: 'auth',
  data () {
    return {
    }
  },
  computed: mapGetters({
    product: 'product/product',

  }),
  mounted () {
    this.$store.dispatch('product/fetchProduct')
  },
  metaInfo () {
    return { title: this.$t('Product') }
  },
  methods: {

  },
}
</script>
