 <!--
  @author guochen
  @date 2018/10/18 上午12:00
  @desc 更多楼盘信息
-->
<template>
  <div class="housing-estate-more">
    <Activity-red-package  @showDalog="showRedPackage()"></Activity-red-package>
    <div class="more-housing-estate">
      <span>更多楼盘信息</span>
    </div>
    <div class="remind">
      <div class="price_change" @click="showSubscribe('变价提醒')">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bianjia"></use>
            </svg>
        <span>变价提醒我</span>
      </div>
      <div class="open_change" @click="showSubscribe('开盘提醒')">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaipan"></use>
            </svg>
        <span>开盘提醒我</span>
      </div>
    </div>
    <call-modal v-if="showModal" @close="showModal = false">
    </call-modal>
  </div>

</template>

<script>
import "./housingEstateMore.scss";
import CallModal from "../../../components/callModal/callModal";
import ActivityRedPackage from './ActivityRedPackage';

export default {
  name: "housing-estate-more",
  data() {
    return {
      showModal: false
    };
  },
  computed: {
  },
  components: {
    "call-modal": CallModal,
    "Activity-red-package": ActivityRedPackage
  },
  created() {},
  mounted() {},
  methods: {
    showSubscribe(type) {
      this.$emit('showDalog', type);
    },
    showRedPackage() {
      this.$emit('showRedPackage')
    }
  }
};
</script>
