 <!--
  @author guochen
  @date 2018/10/18 上午11:20
  @desc 小区名称及基本信息
-->
<template>
  <div class="housing-estate-name">
    <span>{{houseInfo.houseName}}</span>
    <h4 class="house-price">
      <span>住宅：</span>
      <strong>{{houseInfo.price}}</strong>
      <span class="price-date" style="display: block;float: right;">&nbsp;&nbsp;{{updateTime}}天前更新</span>
    </h4>
    <h4 class="house-open-sale">
      <span>开盘：</span>
      <span class="sale-time">{{moment(houseInfo.openTime).format('YYYY年MM月DD日')}}</span>
    </h4>
    <h4 class="house-address">
      <span>地址：</span>
      <span class="address-detail">{{houseInfo.address}}</span>
    </h4>
  </div>
</template>
<script>
import "./housingEstateName.scss";
const moment = require('moment');

export default {
  name: "housing-estate-name",
  props: ['houseInfo'],
  data() {
    return {
      moment: moment,
    };
  },
  computed: {
    updateTime() {
      const du = moment.duration(moment() - moment(this.houseInfo.createTime), 'ms');
      return du.get('day');

    }
  },
  components: {

  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
