<template>
    <div>
    <Theheader></Theheader>
  <div class="container body">
<!--    {{products}}-->
    <div class="row">
      <div class=" col-md-12 row pt-3">
        <b-card class="container">
          <div>
            <b-row>
              <b-card

                      img-src="https://picsum.photos/600/300/?image=25"
                      img-alt="Image"
                      img-top
                      tag="article"
                      style="max-width: 20rem;"
                      class="mb-2 ml-4"
                      v-for="(shop,index) in shops" :key="index"
              >
                <b-card-text>
                  <h2 class="card-title">{{shop.name}}</h2>
                  {{shop.description}}.
                </b-card-text>
                <b-button :to="{name:'view',params:{id:shop.id}}"  size="sm" class="float-left mr-5">View Details</b-button>

                <b-button @click="addToCart(shop)" size="sm" variant="primary">Add To Cart</b-button>
              </b-card>
            </b-row>
          </div>
        </b-card>
      </div>
    </div>
    <b-toast visible="toast" v-if="display" no-fade="true" aria-live='assertive'></b-toast>
  </div>
    <Thefooter></Thefooter>
    </div>
</template>

<script src="./shop.js"></script>

<style>
  @import "./shop.css";
</style>