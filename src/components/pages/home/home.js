export default {
  data() {
    return {
      cart:[],
      slide: 0,
      sliding: null,
      products: [
        {
          id:1,
          name: 'books',
          description:'This is a wider card with supporting text as a natural lead-in to additional' +
            ' content. This content is a little bit longer',
          qty: 5,
          type:2,
          price: 400
        },
        {
          id:2,
          name: 'card',
          description:'This is a wider card with supporting text as a natural lead-in to additional' +
            ' content. This content is a little bit longer',
          qty: 3,
          type:1,
          price: 550
        },
        {
          id:3,
          name: 'pen',
          description:'This is a wider card with supporting text as a natural lead-in to additional' +
            ' content. This content is a little bit longer',
          qty: 15,
          type:2,
          price: 200
        },
        {
          id:4,
          name: 'bag',
          description:'This is a wider card with supporting text as a natural lead-in to additional' +
            ' content. This content is a little bit longer',
          qty: 6,
          type:1,
          price: 700
        }
      ],
      shops:''
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
    }
  },
  created(){
    this.initialProduct();
  }
}
