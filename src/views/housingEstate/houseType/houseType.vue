<!--
  @author guochen
  @date 2018/10/21 上午15:00
  @desc 免费专业接送看房
-->
<template>
  <div class="house-type-info">
    <div class="house-type-title">
        <span class="name">户型介绍</span>
        <span class="temp-span"></span>
        <!--<span class="view-all">-->
          <!--全部户型 <svg class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-arrow-right-copy-copy-copy"></use>-->
      <!--</svg></span>-->
    </div>
    <div>

      <swiper :options="swiperOptionValue" ref="qualitySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item in types">
        <div class="house-type-content">
          <img class="content-top" :src="$imgUrl + item.typeImg">
          <div class="content-bottom">
            <div class="room-type">
              <span>{{item.typeName}}</span>
            </div>
            <div class="room-area">
              <span>{{item.typeMeasure}}</span>
            </div>
            <div class="room-price">
              <span>{{item.typePrice}}</span>
            </div>
            <div class="room-style">
              <ul class="firse-nav">
                <li class="nav-li" v-for="label in item.typeLabel.split(',')">
                    <span class="nav-name">{{label}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<script>
import "./houseType.scss";
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: "house-type",
  props: {
    types: {
      types: Array,
      default: () => {
        return [];
      },
    }
  },
  data() {
    return {
      swiperOptionValue: {
        slidesPerView: 1.39,
        spaceBetween: 15,
      },

    };
  },
  computed: {
    swiper() {
      return this.$refs.qualitySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
