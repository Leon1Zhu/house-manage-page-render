 <!--
  @author zhuliang
  @date 2019-07-28 18:34
-->
<template>
  <div class="housing-estate-activity">
    <div class="activity_left">
      <div class="semi-circle"></div>
    </div>
    <div class="activity_center">
      <div class="youhui">优惠</div>
      <div class="activity_desc">
        <span>一键咨询更多打折优惠</span>
      </div>
      <div class="lijlingqu" @click="showSubscribe('')">立即领取</div>
    </div>
    <div class="activity_right">
      <div class="semi-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity-red-package',
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    showSubscribe(type) {
      this.$emit('showDalog', type);
    },
  },
}
</script>

<style lang=less>

</style>
