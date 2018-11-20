 <!--
  @author zhuliang
  @date 2018/10/8 下午11:58
-->
<template>
  <div class="swiper-option">
    <swiper :options="swiperOptionValue" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide  ><img  @click="$router.push({path: '/housing-estate', query: {id: 1}})" src="../../../assets/2.jpg"/></swiper-slide>
      <swiper-slide ><img @click="$router.push({path: '/housing-estate', query: {id: 2}})"  src="../../../assets/1.jpg"/></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import './swiperContent.scss';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'swiper-content',
  data() {
    return {
      swiperOptionValue: {
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
