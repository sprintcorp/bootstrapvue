import {bus} from "../../main";

export default {
 data() {
     return{
         show: false,
         carts:[],
         toast:'',
         display:false,
     }
 },
    methods:{
     removeProduct(index,product){
         this.toast = true;
         this.display = true;
         this.carts.splice(index,1);
         this.$bvToast.toast('Successful Operation!', {
             title: `${product.name +' successfully removed from cart' || 'default'}`,
             solid: true
         });
         window.setTimeout(()=>{this.toast = false;this.display = false},3000);
     }
    },
    mounted(){
     this.toast = false;
     bus.$on('cart_product',(value)=>{
         this.carts.push(value);
     });
    }
}