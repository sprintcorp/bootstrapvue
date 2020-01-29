import {mapGetters} from "vuex";
import {bus} from "../../../main";

export default {
    data() {
        return {
            cart:[],
            product:[],
            shops: ''
        }
    },
    methods: {
        initialProduct(){
            this.shops = this.products.map(product =>{
                return product;
            })
        },
        addToCart(shop){
            this.cart.push(shop);
            bus.$emit('cart_product',shop);
        },
        removeProduct(index){
            this.cart.splice(index,1);
        }
    },
    computed:{
        ...mapGetters(['products', 'shop']),
    },
    mounted(){
        this.initialProduct();
    }
}
