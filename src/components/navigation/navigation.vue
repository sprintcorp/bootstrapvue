<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav-header">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="offset-3">
          <b-nav-item :to="{name:'home'}" class="pr-4">Home</b-nav-item>
<!--          <b-nav-item :to="{name:'view'}" href="about-us" class="pr-4">About us</b-nav-item>-->
          <b-nav-item :to="{name:'shop'}" href="#" class="pr-4">Shop</b-nav-item>
          <b-nav-item :to="{name:'contact'}" href="#" class="pr-4">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>

          </b-nav-item-dropdown>

          <div class="text-center">
            <b-nav-item @click="show=true" variant="primary">
              My Cart <b-badge variant="light">{{carts.length}}</b-badge>
            </b-nav-item>
          </div>

<!--          <b-nav-item-dropdown variant="primary" text="My Cart" right v-if="carts.length">-->
<!--            <b-dropdown-item v-for="(cart,index) in carts" :key="index">{{cart.name}}<button variant="outline-danger" @click="removeProduct(index)">X</button></b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->

<!--          <b-nav-item-dropdown text="Cart" right v-if="!carts.length" >-->
<!--            <b-dropdown-item>No Item Added To Cart Yet</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item  :to="{name:'login'}">Sign in</b-dropdown-item>
            <b-dropdown-item  :to="{name:'register'}">Sign up</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal
            v-model="show"
            title="Modal Variants"
    >
      <b-container fluid v-if="carts.length">
        <b-row class="mb-1 text-center" v-for="(cart,index) in carts" :key="index">
          <b-col>
            <b-card-img src="https://picsum.photos/400/400/?image=20" style="width: 80px;height: 50px" class="rounded-circle"></b-card-img>
          </b-col>
          <b-col cols="3">{{cart.name}}</b-col>
          <b-col>{{cart.price}}</b-col>
          <b-col><button class="btn btn-danger" size="sm" @click="removeProduct(index,cart)">Remove</button></b-col>
          <hr/>
        </b-row>
      </b-container>


      <b-container fluid v-if="!carts.length">
        <b-row class="mb-1 text-center">
          <b-col>
            No Item Available on cart
          </b-col>
        </b-row>
      </b-container>

      <template v-slot:modal-footer>
        <div class="w-100">
          <button class="btn btn-light float-left ml-2" @click="clearCart(index,carts)" v-if="carts.length">Clear cart</button>
          <button class="btn btn-light float-right ml-2">Check out</button>

          <b-button
                  variant="primary"

                  class="float-right"
                  @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>

    <b-toast visible="toast" v-if="display" no-fade="true" aria-live='assertive'></b-toast>
  </div>

</template>

<script src="./navigation.js"></script>

<style>
  @import "./navigation.css";
</style>