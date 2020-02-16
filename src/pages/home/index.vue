<template>
  <div>
    <Header></Header>
    <div style="height:65vh"></div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../shared/home/header/header.vue";
import Footer from "../../shared/home/footer/footer.vue";
export default {
  name: "layout Page",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
body {
  font-family: "Inter", Arial, "Helvetica Neue", "Segoe UI", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #343a40;
  text-align: left;
  background-color: #fff;
}
</style>
