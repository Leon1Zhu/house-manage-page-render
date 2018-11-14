<!--
  @author guochen
  @date 2018/10/21 上午15:00
  @desc 免费专业接送看房
-->
<template>
  <div class="free-professional-transfer">
    <div class="free-car">
        <div><span>免费专业接送看房</span></div>
        <div class="appointmen_buttong"  @click="showSubscribe('预约看房')">立即预约</div>
    </div>
    <div class="appointment-count">
      限时免费专车全城看房，已有<span>{{houseOrderNumber}}</span>人预约
    </div>
  </div>
</template>

<script>
import "./carAppointment.scss";

export default {
  name: "car-appointment",
  props: ['houseOrderNumber'],
  data() {
    return {};
  },
  computed: {
  },
  components: {

  },
  created() {},
  mounted() {},
  methods: {
    showSubscribe(type) {
      this.$emit('showDalog', type);
    },
  }
};
</script>
