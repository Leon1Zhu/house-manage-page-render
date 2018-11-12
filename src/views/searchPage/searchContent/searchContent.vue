 <!--
  @author zhuliang
  @date 2018/10/16 上午10:41
-->
<template>
  <div id="search-content" :class="{'border-class' : Object.keys(searchSelectObj).length > 0}">
    <div class="search-top-img-content">
      <div class="search-input-content">
        <div class="area">
            南京
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowdown-copy"></use>
          </svg>
        </div>
        <div class="search-input">
          <div class="mu-input ">
            <div class="mu-text-field mu-input-content">
            <input v-model="searchSelectObj.houseName" tabindex="0" class="mu-text-field-input" placeholder="楼盘名称搜索" @input ="inputFunc">
            </div>
          </div>
        </div>
        <div class="search-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chaxun"></use>
          </svg>
        </div>
      </div>
    </div>

    <div class="search-info-content">
      <ul class="search-info-list">
        <li v-for="item in searchConfig" @click="showSelect(item.field)">
          <span class="search-info-name">{{item.name}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowdown-copy"></use>
          </svg>
        </li>
      </ul>
    </div>
    <transition-page :show="show" :searchItem="searchItem" :searchSelectObj="searchSelectObj" @searchData="searchData"></transition-page>
    <ul class="seach-isselect-condition" >
      <li v-for="(item, index) in searchSelectObj">
        <mu-chip class="demo-chip" @delete="deleteSearchCondition(index)" delete>
          {{item.data}}
        </mu-chip>
      </li>
    </ul>
  </div>
</template>

<script>
import './searchContent.scss';
import transtion from './transitionPage/transitionPage';
import searchApi from '../../../api/searchPage';

let timer;
export default {
  name: 'search-content',
  data() {
    return {
      area: '南京',
      show: false,
      searchItem: 'regin',
      searchSelectObj: {
      },
      searchConfig: [
        {
          name: '区域',
          field: 'regin',
        },
        {
          name: '价格',
          field: 'price',
        },
        {
          name: '类型',
          field: 'building_type',
        },
        {
          name: '户型',
          field: 'house_type',
        },
      ],
    };
  },
  components: {
    'transition-page': transtion,
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
       this.initRouterSearchData();
       this.refreshData();
    })
  },
  methods: {
    initRouterSearchData() {
      const queryType = this.$route.query.building_type;
      if (queryType) {
        this.searchItem = 'building_type';
        this.searchSelectObj.building_type = {
          data: queryType,
          index: parseInt(this.$route.query.parIndex),
          childIndex: parseInt(this.$route.query.index),
        };
      }
    },
    searchData(parindex, childIndex, data) {
      this.show = false;
      this.searchSelectObj[this.searchItem] = {
        index: parindex,
        childIndex: childIndex,
        data: data,
      }
      this.refreshData();
    },
    showSelect(field) {
      if (this.searchItem === field ) {
        this.show = !this.show;
        this.searchItem = field;
      } else {
        this.show = true;
        this.searchItem = field;
      }
    },
    deleteSearchCondition(item) {
      let tempValue = JSON.parse(JSON.stringify(this.searchSelectObj));
      delete tempValue[item];
      this.searchSelectObj = tempValue;
      this.refreshData();
    },
    refreshData() {
      this.$emit('getSearchObject', this.searchSelectObj);
    },
    inputFunc() {
      clearTimeout(timer);
      timer = setTimeout(() => {
      },800)
    },
  },
};
</script>
