<template>
  <div class="pt-5">
    <!-- Footer -->
    <footer class="page-footer font-small blue pt-4">

      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3">

            <!-- Content -->
            <h5 class="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none pb-3">

          <!-- Grid column -->
          <div class="col-md-3 offset-3 mb-md-0 mb-3">

            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <b-link :to="{name:'home'}">Home</b-link>
              </li>
              <li>
                <b-link :to="{name:'about-us'}">About us</b-link>
              </li>
              <li>
                <b-link :to="{name:'shop'}">Product</b-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- Grid row -->

      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="mailto:Sprintcorp@gmail.com">Mail us Sprintcorp@gmail.com</a>
      </div>
      <!-- Copyright -->

    </footer>
    <!-- Footer -->
  </div>
</template>

<script src="./footer.js"></script>

<style>
  @import "./footer.css";
</style>