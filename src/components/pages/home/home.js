import {mapGetters} from "vuex";
import {bus} from "../../../main";

export default {
  data() {
    return {
      cart:[],
      product:[],
      slide: 0,
      sliding: null,
     shops: ''
    }
  },
  methods: {
    // onSlideStart(slide) {
    //   this.sliding = true
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false
    // },
    initialProduct(){
      this.shops = this.products.filter(product =>{
        return product.type === 1;
      })
    },
    filerProduct(type){
      this.shops = this.products.filter(product =>{
        return product.type === type;
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
