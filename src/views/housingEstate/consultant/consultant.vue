 <!--
  @author zhuliang
  @date 2019-07-28 16:58
-->
<template>
  <div class="consultant">
    <h1>案场销售顾问</h1>
    <div class="consultant-content">
      <img src="../../../assets/kf2.jpg" class="kf-img">
      <div class="kf-text">
        <div class="top">在线资深案场销售顾问</div>
        <div class="bottom">提供最专业的楼盘解答</div>
      </div>
      <a :href="`tel:${houseTel}`" @click="addPersonCall()">
        <span class="tel-content">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-phone"></use>
          </svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import './consultant.scss';


export default {
  name: 'consultant',
  props:['houseTel'],
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang=less>

</style>
