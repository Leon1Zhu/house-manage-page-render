 <!--
  @author zhuliang
  @date 2018/10/16 上午11:05
-->
<template>
  <div id="search-list-index" :class="{'hasSearchItem' : hasSelect}" >
    <return-house></return-house>
    <search-content ref="searchContent" @getSearchObject="getSearchObject"></search-content>
    <search-list :searchData="searchListParam" ref="searchListContent"></search-list>
  </div>
</template>

<script>
import './index';
import searchContent from '../searchContent/searchContent';
import searchList from '../searchList/searchList';
import returnHouse from '../../../components/retutrnHouse/returnHouse';

export default {
  name: 'index',
  data() {
    return {
      searchListParam: {},
    };
  },
  computed: {
    hasSelect() {
      return this.$refs.searchContent && Object.keys(this.$refs.searchContent.searchSelectObj).length > 0;
    },
  },
  components: {
    searchContent,
    searchList,
    returnHouse,
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getSearchObject(searchSelectObj) {
      this.searchListParam = searchSelectObj;
      // 等待展示组件的渲染完成
      this.$nextTick(() => {
        this.$refs.searchListContent.refreshData(searchSelectObj);
      })

    },
  },
};
</script>
