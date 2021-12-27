<template>
    <div class="row">
        <div class="col-sm-10">
            <div v-if="product" class="card text-center col-sm-6" style="width: 50rem;">
                <div class="card-body">
                    <img class="card-img-top" :src="product.Image" alt="Product Image">
                    <h5 class="card-title">{{product.Name}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"> {{product.Category}}</h6>
                    <p class="card-text">{{product.Description}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{product.UnitsOnHand?'In Stock':'Not In Stock'}}</li>
                    <li class="list-group-item">PartNumber: {{product.PartNumber}}</li>
                    <li class="list-group-item">BarCode: {{product.BarCode}}</li>
                    <li class="list-group-item">ModelYear: {{product.ModelYear}}</li>
                    <li class="list-group-item">Date: {{product.Date}}</li>
                    <li class="list-group-item">Manufacturer: {{product.Manufacturer}}</li>
                    <li class="list-group-item">Location: {{product.Location}}</li>
                    <li class="list-group-item">UnitCost: {{product.UnitCost}}</li>
                    <li class="list-group-item">UnitsOnHand: {{product.UnitsOnHand}}</li>
                    <li class="list-group-item">StockValue: {{product.StockValue}}</li>
                </ul>
            </div>
        </div>
        <div class="col-sm-2">
            <router-link :to="'/product-list/'" class="btn btn-sm btn-primary">Back</router-link>
        </div>


    </div>
</template>

<script>
    // import axios from 'axios'
    import { mapGetters } from 'vuex'
    export default {
        name: "viewProduct",
        middleware: 'auth',
        data () {
            return {
                BarCode: null,
            }
        },
        computed: {
            ...mapGetters({
                getProductById: 'product/getProductById',
            }),
            product () {
                return this.getProductById(this.BarCode)
            }

        },
        mounted () {

        },
        metaInfo () {
            return { title: this.$t('View Product') }
        },
        methods: {

        },
        created() {
            if(!this.$store.state.product.product.length){
                this.$store.dispatch('product/fetchProduct')
            }
            if (this.$route.params.id !== undefined) {
                this.BarCode = this.$route.params.id;
            }
        },
    }
</script>

<style scoped>

</style>