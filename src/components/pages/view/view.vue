<template>
  <div>
  <Theheader></Theheader>
  <div class="container pt-3 body">
<!--    <pre>{{shop}}</pre>-->
    <div>
      <b-row>
        <b-col>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-title>{{shop.name}}</b-card-title>
              <b-card-text>
                {{shop.description}}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
        </b-col>
        <b-col>
          <b-card
                  no-body
                  style="max-width: 20rem;"
          >
          <b-list-group flush>

            <b-list-group-item >Quantity : {{shop.qty}}</b-list-group-item>

            <b-list-group-item >Price : {{shop.price}}</b-list-group-item>
          </b-list-group>
          </b-card>
          <b-button pill variant="outline-secondary" class="mt-3 mr-2" >Buy</b-button>
          <b-button pill variant="outline-secondary" class="mt-3 mr-2" @click="addToCart(shop)" v-if="add === 1">Add To Cart</b-button>
          <b-button pill variant="outline-secondary" class="mt-3 mr-2" @click="removeProduct(0)" v-if="add === 0">Remove From Cart</b-button>
        </b-col>
      </b-row>
    </div>
    <b-toast visible="toast" v-if="display" no-fade="true" aria-live='assertive'></b-toast>
  </div>
  <Thefooter></Thefooter>
  </div>
</template>

<script src="./view.js"></script>

<style>
  @import "./view.css";
</style>