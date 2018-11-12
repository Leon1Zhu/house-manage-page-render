<template>
  <div id="app">
    <!--<svg class="icon" aria-hidden="true" v-if="$route.path !== '/index'" @click="$router.go(-1)">-->
      <!--<use xlink:href="#icon-fanhui"></use>-->
    <!--</svg>-->

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created(){
    }
  }
</script>

<style scoped lang="scss">
  @import "./styles/globalscss.scss";
  .icon {
    position: absolute;
    top: vm(5);
    left: vm(5);
    height: 18px;
    width: 18px;
    z-index: 99;
    color: white;
  }
  .return-house {
    position: fixed;
    top: vm(5);
    left: vm(5);
    z-index: 99;
    font-size: 12px;
    background: #ECECEC;
    border-radius: 2px;
    padding: 3px;
  }
</style>
