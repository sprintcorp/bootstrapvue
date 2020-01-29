<template>
  <div class="container pt-3">
    <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
<!--      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">-->
<!--        <p>-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt-->
<!--          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.-->
<!--        </p>-->
<!--      </b-carousel-slide>-->
    </b-carousel>
  <!--body-->
    <main class="text-center my-5">

      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
        </div>
<!--        {{shops}}-->
<!--          {{cart.length}}-->
<!--        <div v-for="(carts,index) in cart" :key="index">-->
<!--            <button @click="removeProduct(index)">Remove {{carts.id}}</button>-->
<!--        </div>-->
        <div class="row">
          <div class=" col-md-12 row pt-5">
            <b-card class="container">
              <b-tabs>
                <b-tab no-body @click="filerProduct(1)" title="Tab 1">
                  <div class="pt-5 col">
                    <b-row>
                      <b-col col md="6" v-for="shop in shops" :key="shop.id">
                        <b-card no-body style="max-width: 500px;">
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
                                <b-button variant="outline-primary" @click="addToCart(shop)">Add to Cart</b-button>
                              </b-card-body>
                            </b-col>
                          </b-row>
                        </b-card>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>

                <b-tab no-body @click="filerProduct(2)" title="Tab 2">
                  <div class="pt-5">
                    <b-row>
                      <b-col col md="6" v-for="shop in shops" :key="shop.id">
                    <b-card no-body style="max-width: 500px;">
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
                            <b-button variant="outline-primary" @click="addToCart(shop)">Add to Cart</b-button>
                          </b-card-body>
                        </b-col>
                      </b-row>
                    </b-card>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>

    </main>

  </div>
</template>

<script src="./home.js"></script>

<style>
  @import "./home.css";
</style>