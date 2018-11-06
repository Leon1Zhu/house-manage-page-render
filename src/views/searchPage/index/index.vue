 <!--
  @author zhuliang
  @date 2018/10/16 上午11:05
-->
<template>
  <div id="search-list-index" :class="{'hasSearchItem' : hasSelect}" >
    <search-content ref="searchContent"></search-content>
    <search-list></search-list>
  </div>
</template>

<script>
import './index';
import searchContent from '../searchContent/searchContent';
import searchList from '../searchList/searchList';

export default {
  name: 'index',
  data() {
    return {};
  },
  computed: {
    hasSelect() {
      console.log( this.$refs.searchContent && Object.keys(this.$refs.searchContent.searchSelectObj).length)
      return this.$refs.searchContent && Object.keys(this.$refs.searchContent.searchSelectObj).length > 0;
    },
  },
  components: {
    searchContent,
    searchList,
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {},
};
</script>
