<!--
  @desc 楼盘详情
-->
<template>
<div class="house-detail">
    <div class="house-detail-title">
        <span class="name">楼盘详情</span>
        <span class="temp-span"></span>
        <span class="view-all"></span>
    </div>
    <div class="house-detail-content">
        <ul>
            <li v-for="item in detailList" :key="item.id">{{item.type}}：<strong>{{item.typeValue}}</strong></li>
        </ul>
    </div>
    <div class="house-deatail-more" v-on:click="viewMoreFun">
        <span>
            {{detailMoreBut.butTitle}}
        </span>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="detailMoreBut.icon"></use>
        </svg>
    </div>
</div>
</template>

<script>
import "./housingEstateDetail.scss";

export default {
  name: "house-detail",
  props: ['houseInfo'],
  data() {
    return {
        detailMoreBut: {
            butTitle: '展开更多',
            icon: '#icon-jiantouxia',
            status: 1
        },
        detailList: [],
    }
  },
  computed: {
  },
  components: {
  },
  created() {},
  mounted() {},
  methods: {
      initData() {
        this.detailList = [
          {
            id: 1,
            type: '物业类型',
            typeValue: this.houseInfo.buildingType,
          }, {
            id: 2,
            type: '装修情况',
            typeValue: this.houseInfo.renovation,
          }, {
            id: 3,
            type: '开盘时间',
            typeValue: require('moment')(this.houseInfo.openTime).format('YYYY年MM月DD日'),
          },
        ];
      },
      viewMoreFun () {
          if (this.detailMoreBut.status === 1) {
              this.detailMoreBut.butTitle = '收起更多';
              this.detailMoreBut.status = 0;
              this.detailMoreBut.icon = '#icon-jiantoushang';
              const demoList = [
                {
                    id: 5,
                    type: '房屋面积',
                    typeValue: this.houseInfo.area,
                }, {
                    id: 6,
                    type: '销售状况',
                    typeValue:  this.houseInfo.salesStatus,
                }
              ];
              this.detailList = this.detailList.concat(demoList);

          } else {
              this.detailMoreBut.butTitle = '展开更多';
              this.detailMoreBut.status = 1;
              this.detailList.splice(3, 5);
              this.detailMoreBut.icon = '#icon-jiantouxia';
          }

      }
  }
};
</script>
