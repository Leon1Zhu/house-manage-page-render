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
      <no-data-com v-if="searchInfo.length < 1"></no-data-com>
      <ul class="search-house-list" v-else>
        <li class="search-house-content" v-for="item in searchInfo">
          <div class="left-content">
            <div class="img-content" @click="$router.push({path: '/housing-estate', query: {id: item.id}})">
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
            <ul class="nav-ul">
              <li class="nav-onsale-li">
                <span class="nav-name">{{item.sales_status}}</span>
              </li>
            </ul>
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
              <a href="tel:18752002039" style="background: #48BDA9;color: white;" @click="addPersonCall(item.house_tel, item.id)">咨询热线</a>
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
import noDataCom from '../../../components/noDataCom/noDataCom';
import indexApi from '../../../api/indexPage';

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
      // 是否已经拨打过电话
      hasTel: false,
    };
  },
  components: {
    'scroll': scroll,
    "call-modal": CallModal,
    noDataCom,
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
      this.childContent = this.$callModelDetaultValue;
    },
    addPersonCall(tel, id) {
      if (!this.hasTel) {
        indexApi.addCallList('PC', tel, id).then(() => {
          this.hasTel = true;
        })
      }
    },
  },
};
</script>
