<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color: #007bff;">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="offset-3">
          <b-nav-item :to="{name:'home'}" class="pr-4">Home</b-nav-item>
          <b-nav-item :to="{name:'about-us'}" href="about-us" class="pr-4">About us</b-nav-item>
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
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Cart" right>
            <b-dropdown-item>Products <b-button variant="outline-danger">X</b-button></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script src="./navigation.js"></script>

<style>
  @import "./navigation.css";
</style>