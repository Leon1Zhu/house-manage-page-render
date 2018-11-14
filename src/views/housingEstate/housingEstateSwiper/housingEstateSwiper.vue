 <!--
  @author guochen
  @date 2018/10/17 上午11.30
  @desc 小区图片展示swiper
-->

<template>
  <div class="swiper-option">
    <!--<div class="back_button">-->
      <!--<svg class="icon" aria-hidden="true" @click="push('/index')">-->
        <!--<use xlink:href="#icon-fanhui"></use>-->
      <!--</svg>-->
    <!--</div>-->
    <swiper class="swiper-slides" :options="swiperOptionValue" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide class="housingImg" v-for="item in imgs"><img :src="$imgUrl + item.imgsUrl"/></swiper-slide>
    </swiper>
    <div class="total-pages">
      <div>
        <span>共{{imgs.length}}张</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./housingEstateSwiper.scss";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "housing-estate-swiper",
  props: {
    imgs: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptionValue: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        },
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {},
  mounted() {},
  methods: {
    push(route) {
      this.$router.push({ path: route });
    }
  }
};
</script>
