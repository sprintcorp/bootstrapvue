import Theheader from '../../navigation/navigation.vue';
import Thefooter from '../../footer/footer.vue';
import {mapGetters} from "vuex";
import {bus} from "../../../main";

export default {
  components:{
    Theheader,
    Thefooter
  },
  data() {
    return {
      cart:[],
      product:[],
      slide: 0,
      sliding: null,
        display:false,
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
        this.$bvToast.toast('Successful Operation!', {
            title: `${shop.name +' successfully added to cart' || 'default'}`,
            solid: true
        });
        window.setTimeout(()=>{this.toast = false;this.display = false},3000);
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
