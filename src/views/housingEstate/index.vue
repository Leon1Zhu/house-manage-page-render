 <!--
  @author guochen
  @date 2018/10/16 上午10.40
  @desc 住宅小区房型，行情介绍（第三张图）
-->
<template>
  <section id="index-content">
    <div class="house-content">
      <scroll class="wrapper"
              :pulldown="false"
              :pullUpLoad="false">
        <div class="housing-estate-page">
          <!--<return-house></return-house>-->
          <!-- 住宅图片展示 -->
          <div>
            <housing-estate-swiper :imgs="houseInfo.imgs"></housing-estate-swiper>
          </div>
          <!-- 选择按钮 -->
          <div class="default-margin button-nav">
            <housing-estate-nav  :houseInfo="houseInfo"></housing-estate-nav>
          </div>
          <!-- 楼盘信息 -->
          <div class="default-margin housing-estate-info">
            <housing-estate-name :houseInfo="houseInfo"></housing-estate-name>
          </div>
          <!-- 更多楼盘 -->
          <div class="default-margin housing-estate-mores">
            <housing-estate-more @showRedPackage="showRedPackage" @showDalog="showDalog"></housing-estate-more>
          </div>
          <!-- 免费专业接送看房 -->
          <div class="default-margin free-view-house">
            <car-appointment :houseOrderNumber="houseInfo.houseOrderNumber" @showDalog="showDalog"></car-appointment>
          </div>
          <!-- 户型介绍 -->
          <div class="default-margin house-type">
            <house-type :types="houseInfo.type" v-if="houseInfo.type.length > 0"></house-type>
          </div>
          <!--销售顾问-->
          <div class="default-margin house-type">
            <consultant :houseTel="houseInfo.houseTel"></consultant>
          </div>
          <!-- 楼盘优势 -->
          <div class="default-margin">
            <housing-estate-advantage :advantages="houseInfo.advantage" ref="houseAdvantage"></housing-estate-advantage>
          </div>
          <!-- 楼盘动态 -->
          <!--<div class="default-margin">-->
            <!--<housing-estate-dynamic></housing-estate-dynamic>-->
          <!--</div>-->
          <!-- 楼盘详情 -->
          <div class="default-margin">
            <housing-estate-detail :houseInfo="houseInfo" ref="houseDetail"></housing-estate-detail>
          </div>
          <!--红包领取-->
          <div class="default-margin">
            <ActivityRedPackage @showDalog="showRedPackage"></ActivityRedPackage>
          </div>
          <!--周边配套-->
          <div class="default-margin">
            <housing-esate-map :address="houseInfo.address"></housing-esate-map>
          </div>
          <!--猜你喜欢-->
          <div class="default-margin" v-if="$route.query.id !== '78453dd6-72d9-4848-9575-417acfbbb74e'">
            <guess-like :data="gusessLikeData"></guess-like>
          </div>
        </div>
      </scroll>
    </div>
    <div class="house-footer">
      <housing-estate-footer @showDalog="showDalog" :houseInfo="houseInfo"></housing-estate-footer>
    </div>
    <div>
    <!-- 弹出框 -->
    <call-modal :houseInfo="houseInfo" :hedaerInfo="dalogText" v-if="showModal" @close="$toast.success('预约成功，我们会在第一时间和您联系');showModal = false" :childContent="childContent">
    </call-modal>
    </div>
    <mu-dialog class="red-packet-content" :title="houseInfo.houseName" width="80%" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
      <div class="money-info">给您发了<span class="redpacket-content">{{houseInfo.redpacket}}</span>购房红包</div>
      <div class="call-info">{{houseInfo.redpacketDesc}}</div>
      <input v-model="redpacket_phone" name="phone" class="iphoneipnut"  placeholder="请输入手机号码" type="number">
      <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">我再看看</mu-button>
      <mu-button slot="actions" flat color="primary" @click="getRedpacket">立即领取</mu-button>
    </mu-dialog>
  </section>
</template>

<script>
import "./index.scss";
import scroll from "../../components/scroll/scroll";
import CallModal from "../../components/callModal/callModal";
import HousingEstateNnav from "./nav/nav";
import HousingEstateSwiper from "./housingEstateSwiper/housingEstateSwiper";
import HousingEstateName from "./housingEstateName/housingEstateName";
import HousingEstateMore from "./housingEstateMore/housingEstateMore";
import CarAppointment from "./carAppointment/carAppointment";
import HouseType from "./houseType/houseType";
import HousingEstateDynamic from "./housingEstateDynamic/housingEstateDynamic";
import HousingEstateAdvantage from "./housingEstateAdvantage/housingEstateAdvantage";
import HousingEstateDetail from "./housingEstateDetail/housingEstateDetail";
import housingEsateMap from './housingEsateMap/housingEsateMap';
import guessLike from '../../components/guessLike/guessLike.vue';
import indexApi from '../../api/indexPage';
import Footer from './footer/footer';
import returnHouse from '../../components/retutrnHouse/returnHouse';
import getHouseApi from '../../api/detailPage';
import consultant from './consultant/consultant';
import ActivityRedPackage from './housingEstateMore/ActivityRedPackage';

export default {
  name: "HousingEstate",
  data() {
    return {
      redpacket_phone: null,
      openAlert: false,
      index: 0,
      pagesize: 5,
      showModal: false,
      id: null,
      dalogText: null,
      houseInfo: {
        advantage: [{}],
        type: [],
      },
      gusessLikeData: null,
      childContent: this.$callModelDetaultValue,
    };
  },
  components: {
    scroll: scroll,
    "housing-estate-nav": HousingEstateNnav,
    "housing-estate-swiper": HousingEstateSwiper,
    "housing-estate-name": HousingEstateName,
    "housing-estate-more": HousingEstateMore,
    "car-appointment": CarAppointment,
    "house-type": HouseType,
    "housing-estate-dynamic": HousingEstateDynamic,
    "housing-estate-advantage": HousingEstateAdvantage,
    "housing-estate-detail": HousingEstateDetail,
    "housing-estate-footer": Footer,
    "call-modal": CallModal,
    "ActivityRedPackage": ActivityRedPackage,
    housingEsateMap,
    guessLike,
    returnHouse,
    consultant
  },
  created() {
    const  id = this.$route.query.id;
    if (id) {
      this.id = id;
      this.initData();
    } else {
      this.$router.push({path: '/index'});
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!localStorage.getItem('REDPACKET')) {
        setTimeout(() => {
          this.openAlert = true;
        }, 6000)
      }
    })
  },
  methods: {
    showRedPackage() {
      this.openAlert = true;
    },
    getRedpacket () {
      this.openAlert = false;
      if(!(/^1[3456789]\d{9}$/.test(this.redpacket_phone))){
        this.$toast.warning('请填写您正确的联系方式');
        return ;
      }
      getHouseApi.addSubscribe(this.$encryption(this.redpacket_phone), '', this.houseInfo.id, this.houseInfo.redpacket+'红包领取', 'MOBILE').then((response) => {
        localStorage.setItem('REDPACKET', true);
        this.$toast.success('领取成功，我们会在第一时间和您联系');
      }).catch(() => {})
    },
    closeAlertDialog () {
      this.openAlert = false;
    },
    initData() {
      getHouseApi.getHouseById(this.id).then((response) => {
        this.houseInfo = response.data;
        this.initGuessLikeData();
        this.$nextTick(() => {
          this.$refs.houseDetail.initData();
          this.$refs.houseAdvantage.initData();
        })
      })
    },
    initGuessLikeData() {
      indexApi.getLikeHouse(this.index, this.pagesize).then((response) => {
        this.gusessLikeData = this.gusessLikeData || [];
        this.gusessLikeData = response.data.content.filter((item) => {
          if (item.houseName !== this.houseInfo.houseName) {
            return item;
          }
        });
      }).catch(() => {});
    },
    showDalog: function(type, content) {
      this.childContent = content ? content : this.$callModelDetaultValue;
      this.showModal = true;
      this.dalogText = type;
    }
  }
};
</script>

