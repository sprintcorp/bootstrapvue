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
        clearCart(index){
            this.display = true;
            this.carts.splice(index);
            this.$bvToast.toast('Successful Operation!', {
                title: `${'Products successfully removed from cart' || 'default'}`,
                solid: true
            });
            window.setTimeout(()=>{this.toast = false;this.display = false},3000);
        },
     removeProduct(index,product){
         // this.toast = true;
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

        bus.$on('remove_product',(value)=>{
            this.carts.splice(value,1);
        });
    }
}