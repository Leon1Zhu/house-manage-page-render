 <!--
  @author zhuliang
  @date 2018/10/16 上午10:42
-->
<template>
  <div id="search-list">
    <scroll class="wrapper"
            :pulldown="true"
            :pullup="true"
            @pulldown="refreshData()"
            @pullup="loadDataMore()"
            :loadingData="loadingData"
            ref="searchContent">
      <ul class="search-house-list">
        <li class="search-house-content" v-for="item in searchInfo">
          <div class="left-content">
            <div class="img-content" @click="$router.push('/housing-estate')">
              <img src="../../../assets/guessLike.png" >
            </div>
            <div class="car-realy">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chezi"></use>
              </svg>
              <span>免费专车看房</span>
            </div>
          </div>
          <div class="right-content">
            <h1>金地格林line</h1>
            <div class="house-ts">1号线底站，总价低</div>
            <div class="other-infos">
              <span class="house-type">住宅</span>
              <span class="house-aresa">江宁</span>
              <span class="house-aresa">江宁其他</span>
              <span class="house-other">绿化高</span>
            </div>
            <div class="tel-content">
              <mu-button color="#0284DC" @click="$router.push('/housing-estate')">免费通话</mu-button>
              <mu-button color="#48BDA9" @click="$router.push('/housing-estate')">咨询热线</mu-button>
            </div>
            <div class="price-area">
              <span class="price">12000元/㎡</span>
              <span class="area">建面 110-128㎡</span>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import './searchList.scss';
import scroll  from '../../../components/scroll/scroll';
import searchApi from '../../../api/searchPage';

export default {
  name: 'search-list',
  props: ['searchData'],
  data() {
    return {
      loadingData: true,
      index: 0,
      total: 0,
      pageSize: 10,
      searchInfo: [],
    };
  },
  components: {
    'scroll': scroll,
  },
  created() {},
  mounted() {
  },
  methods: {
    loadDataMore() {
      if (this.index >= this.total) {
        return ;
      }
      this.index++;
      this.loadData();
    },
    loadData() {
      searchApi.getSelectedHouse(this.searchData, this.index, this.pageSize).then((response) => {
        this.searchInfo = this.searchInfo.concat(response.data.result);
        this.total = Math.ceil(response.data.total / this.pageSize) - 1;
        this.judgeLast();
        this.$nextTick(() => {
          this.$refs.searchContent.refresh();
        })
      })
    },
    refreshData() {
      this.index = 0;
      this.loadingData = true;
      this.searchInfo = [];
      this.loadData();
    },
    judgeLast() {
      if (this.index >= this.total) {
        this.loadingData = false;
      }
    }
  },
};
</script>
