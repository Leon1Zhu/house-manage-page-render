 <!--
  @author zhuliang
  @date 2018/10/8 下午11:58
-->
<template>
  <div class="house-nav" >
    <ul class="firse-nav">
      <li class="nav-li" v-for="item in firstNav" @click="searchType(item)">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
        <span class="nav-name">{{item.name}}</span>
      </li>
    </ul>
    <ul class="second-nav">
      <li class="nav-li" v-for="item in sedondNav"  @click="searchType(item)">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
        <span class="nav-name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import './nav.scss';

export default {
  name: 'nav-content',
  data() {
    return {
      firstNav: [
        {
          name: '住宅',
          icon: 'icon-zhuzhai',
          link: '住宅',
          parIndex: '0',
          index: '0',
          type: ''
        },
        {
          name: '商铺',
          icon: 'icon-shangpu',
          link: '商铺',
          parIndex: '0',
          index: '4',
        },
        {
          name: '公寓',
          icon: 'icon-gongyu',
          link: '公寓',
          parIndex: '0',
          index: '6',
        },
      ],
      sedondNav: [
        {
          name: '写字楼',
          icon: 'icon-xiezilou',
          link: '写字楼',
          parIndex: '0',
          index: '5',
        },
        {
          name: '优质房源',
          icon: 'icon-youzhifangyuan',
          link: '优质房源',
          parIndex: '1',
          index: '0',
        },
      ],
    };
  },
  components: {},
  created() {


  },
  mounted() {},
  methods: {
    searchType(item) {
      this.$emit('toSearchPage', item);
    }
  },
};
</script>
