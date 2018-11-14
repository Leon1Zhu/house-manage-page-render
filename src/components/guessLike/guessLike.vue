 <!--
  @author zhuliang
  @date 2018/10/8 下午11:58
-->
<template>
  <div class="guess-like">
    <h1>猜你喜欢</h1>
      <ul class="content">
        <li class="like-content" v-for="item in data">
          <img :src="$imgUrl+item.imgs[0].imgsUrl" @click="$router.push({path: '/housing-estate', query: {id: item.id}})"/>
          <div class="text-content">
            <div class="name-price">
              <span class="name"> {{item.houseName}}</span>
              <span class="temp-span"></span>
              <span class="price">{{item.price}}</span>
            </div>
            <span class="region">{{item.regin}}</span>
            <ul class="house-type ">
              <li class="nav-li" v-for="typeItem in item.houseType.split(',')"><span class="nav-name">{{typeItem}}</span></li>
              </ul>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import './guessLike.scss';
import scroll  from '../scroll/scroll';

export default {
  name: 'guess-like',
  props:{
    data: {
      type: Array,
    }
  },
  data() {
    return {
      pulldown: true,
    };
  },
  components: {
    'scroll': scroll,
  },
  created() {},
  mounted() {
  },
  methods: {
  },
};
</script>
