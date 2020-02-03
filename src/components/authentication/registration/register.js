import Theheader from '../../navigation/navigation.vue';
import Thefooter from '../../footer/footer.vue';
export default {
    components:{
        Theheader,
        Thefooter
    },
    data(){
        return{
            terms:false,
            status: 'false'
        }
    },
    method:{
        termsValidate(){
            alert(this.terms);
            this.terms = !this.terms;

        }
    }
}