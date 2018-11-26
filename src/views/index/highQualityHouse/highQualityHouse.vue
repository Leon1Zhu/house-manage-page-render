 <!--
  @author zhuliang
  @date 2018/10/8 下午11:57
-->
<template>
  <div class="high-quality-house">
    <h1>好房推荐</h1>
    <swiper :options="swiperOptionValue" ref="qualitySwiper" >
      <!-- slides -->
      <swiper-slide v-for="item in data">
        <img :src="$imgUrl + item.coverPhoto" @click="$router.push({path: '/housing-estate', query: {id: item.id}})"/>
        <span class="quality-name">
          {{item.houseName}}
        </span>
        <span class="quality-info">
          {{item.regin}}|{{ item.houseType.split(',')[0] }}| {{ item.area}}㎡
        </span>
        <span class="quality-price">
          {{item.price}}
        </span>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import './highQualityHouse.scss';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'high-quality-house',
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptionValue: {
        slidesPerView: 2.5,
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
  mounted() {
  },
  methods: {},
};
</script>
