import Theheader from '../../navigation/navigation.vue';
import Thefooter from '../../footer/footer.vue';
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  components:{
    Theheader,
    Thefooter
  },
  data(){
    return{
      terms:false,
      status: 'false',
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      address:'',
      city:'',
      state:'',
      zip:''
    }
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(1)
    },
    email:{
      required
    },
    lastname: {
      required,
      between: between(1)
    }
  },
  method:{
    termsValidate(){
      alert(this.terms);
      this.terms = !this.terms;

    }
  }
}