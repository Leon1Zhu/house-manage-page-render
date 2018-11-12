 <!--
  @author zhuliang
  @date 2018/10/16 上午11:05
-->
<template>
  <div id="search-list-index" :class="{'hasSearchItem' : hasSelect}" >
    <return-house></return-house>
    <search-content ref="searchContent"></search-content>
    <search-list></search-list>
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
    return {};
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
  created() {},
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {},
};
</script>
