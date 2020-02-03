import Theheader from '../../navigation/navigation.vue';
import Thefooter from '../../footer/footer.vue';
import {mapGetters} from "vuex";
import {bus} from "../../../main";

export default {
    components:{
        Theheader,
        Thefooter
    },
    data(){
        return{
            product_id:'',
            shop:'',
            add: 1,
            display:false,
            cart:[]
        }
    },
    methods:{
      getProductDetails(){
          this.shop = this.products.find(product=>{
              return product.id === this.product_id;
          })
      },
        addToCart(shop){
            this.cart.push(shop);
            window.console.log(shop);
            this.add = 0;
            this.$bvToast.toast('Successful Operation!', {
                title: `${shop.name +' successfully added to cart' || 'default'}`,
                solid: true
            });
            window.setTimeout(()=>{this.toast = false;this.display = false},3000);
            bus.$emit('cart_product',shop);
        },
        removeProduct(index){
            this.cart.splice(index,1);
            bus.$emit('remove_product',index);
            this.$bvToast.toast('Successful Operation!', {
                title: 'Product successfully removed from cart' ,
                solid: true
            });
            window.setTimeout(()=>{this.toast = false;this.display = false},3000);
            this.add = 1;
        }
    },
    computed:{
      ...mapGetters(['products'])
    },
    mounted(){
        this.product_id =this.$route.params.id;
        this.getProductDetails();
        // alert(this.product_id);
    }
}