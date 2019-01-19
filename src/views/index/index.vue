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
            <swiper-content ></swiper-content>
          </li>
          <li class="like-content" >
            <nav-content @toSearchPage="toSearchPage($event)"></nav-content>
          </li>
          <li class="like-content" >
            <highQualityHouse :data="goodHouseData"></highQualityHouse>
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
  metaInfo: {
    title: '南京最新房产信息_南京楼盘_南京在售楼盘_南京买房_南京新盘_南京楼盘价格走势_华云庭房产', // set a title
  },
  data() {
    return {
      index: 0,
      pagesize: 10,
      total: 0,
      gusessLikeData: [],
      goodHouseData: [],
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
    this.initGoodHouseData();
  },
  mounted() {
      console.log(this.gusessLikeData)
    console.log(JSON.parse(JSON.stringify(this.gusessLikeData)))
  },
  methods: {
    initGoodHouseData() {
      indexApi.getGoodHouse(0, 10).then((response) => {
        this.goodHouseData = response.data.content;
      }).catch(() => {})
    },
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
      if (this.index >= this.total) {
        return ;
      }
      this.loadingData = true;
      this.index++;
      this.initGuessLikeData();
    },
    refreshData() {
      this.index = 0;
      this.gusessLikeData = [];
      this.initGuessLikeData();
    },
    judgeLast() {
      if (this.index >= this.total) {
        this.loadingData = false;
      }
    },
    toSearchPage(item) {
      this.$router.push({path: '/search', query: {building_type : item.link, parIndex: item.parIndex, index: item.index}});
    }
  },
};
</script>
