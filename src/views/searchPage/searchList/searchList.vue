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
              <img :src="$imgUrl + item.cover_photo" >
            </div>
            <div class="car-realy" v-if="item.is_specialcar" @click="specialCar()">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chezi"></use>
              </svg>
              <span>免费专车看房</span>
            </div>
          </div>
          <div class="right-content">
            <h1>{{item.house_name}}</h1>
            <div class="house-ts">{{item.characteristic}}</div>
            <div class="other-infos">
              <span class="house-type">{{item.building_type}}</span>
              <span class="house-aresa">{{item.regin}}</span>
              <span class="house-aresa">{{item.housetype.split(',')[0] || ''}}</span>
              <span class="house-other">{{item.housetype.split(',')[1] || '' }}</span>
            </div>
            <div class="tel-content">
              <a style="background: #0284DC;color: white;" @click="freeCall()">免费通话</a>
              <a href="tel:18752002039" style="background: #48BDA9;color: white;" @click="addPersonCall()">咨询热线</a>
            </div>
            <div class="price-area">
              <span class="price">{{item.price}}</span>
              <span class="area">{{item.area}}</span>
            </div>
          </div>
        </li>
      </ul>
    </scroll>

    <!-- 弹出框 -->
    <call-modal :hedaerInfo="dalogText" :childContent="childContent" v-if="showModal" @close="showModal = false">
    </call-modal>
  </div>
</template>

<script>
import './searchList.scss';
import scroll  from '../../../components/scroll/scroll';
import searchApi from '../../../api/searchPage';
import CallModal from "../../../components/callModal/callModal";

export default {
  name: 'search-list',
  props: ['searchData'],
  data() {
    return {
      showModal: false,
      loadingData: true,
      index: 0,
      total: 0,
      pageSize: 10,
      searchInfo: [],
      dalogText: '',
      childContent: '',
    };
  },
  components: {
    'scroll': scroll,
    "call-modal": CallModal,
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
    },
    freeCall() {
      this.showModal = true;
      this.dalogText = '免费通话';
      this.childContent = '请填写您的联系信息，我们将在第一时间给您回电';
    },
    specialCar() {
      this.showModal = true;
      this.dalogText = '专车看房';
      this.childContent = '我们将为您的个人信息保密,请填写您的个人信息!';
    },
    addPersonCall(tel) {
    }
  },
};
</script>
