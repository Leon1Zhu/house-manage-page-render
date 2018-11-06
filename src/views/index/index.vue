 <!--
  @author zhuliang
  @date 2018/10/8 下午11:55
-->
<template>
  <section id="index-content-item">
    <house-header></house-header>
    <div class="introduce-content">
      <scroll class="wrapper"
              :pulldown="true"
              :pullup="true"
              @pulldown="refreshData()"
              @pullup="loadData()"
              :loadingData="loadingData"
              ref="indexScroll">
        <ul >
          <li class="like-content" >
            <swiper-content></swiper-content>
          </li>
          <li class="like-content" >
            <nav-content></nav-content>
          </li>
          <li class="like-content" >
            <highQualityHouse></highQualityHouse>
          </li>
          <li class="like-content" >
            <guess-like :data="gusessLikeData"></guess-like>
          </li>
        </ul>
      </scroll>
    </div>
  </section>
</template>

<script>
import './index.scss';
import scroll  from '../../components/scroll/scroll';
import header from './header/header';
import swiper from './swiperContent/swiperContent';
import nav from './nav/nav';
import highQualityHouse from './highQualityHouse/highQualityHouse';
import guessLike from '../../components/guessLike/guessLike.vue';
import indexApi from '../../api/indexPage';


export default {
  name: 'index',
  data() {
    return {
      index: 1,
      pagesize: 10,
      total: 0,
      gusessLikeData: [],
      loadingData: true,
    };
  },
  components: {
    'scroll': scroll,
    'house-header': header,
    'swiper-content': swiper,
    'nav-content': nav,
    highQualityHouse,
    'guess-like': guessLike,
  },
  created() {
    this.initGuessLikeData();
  },
  mounted() {
  },
  methods: {
    initGuessLikeData() {
      indexApi.getLikeHouse(this.index, this.pagesize).then((response) => {
        const data = response.data;
        this.gusessLikeData = this.gusessLikeData.concat(data.content);
        this.index = data.number;
        this.total = data.totalPages;
        this.judgeLast();
        this.$nextTick(() => {
          this.$refs.indexScroll.refresh();
        })
      }).catch(() => {});
    },
    loadData() {
      if (this.index === this.total) {
        return ;
      }
      this.loadingData = true;
      this.index++;
      this.initGuessLikeData();
    },
    refreshData() {
      this.index = 0;
      this.loadMore= true;
      this.gusessLikeData = [];
      this.initGuessLikeData();
    },
    judgeLast() {
      if (this.index === this.total) {
        this.loadingData = false;
      }
    }
  },
};
</script>
