<template>
  <div>
    <Theheader></Theheader>
      <router-view></router-view>
    <Thefooter></Thefooter>
  </div>
</template>

<script>
    import Theheader from './components/navigation/navigation.vue';
    import Thefooter from './components/footer/footer.vue';
    export default {
      components:{
          Theheader,
          Thefooter
      }
}
</script>

<style>

</style>