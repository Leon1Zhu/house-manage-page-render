<!--
  @desc 楼盘优势
-->
<template>
<div class="house-advantage">
    <div class="house-advantage-title">
        <span class="name">楼盘优势</span>
        <span class="temp-span"></span>
        <span class="view-all"></span>
    </div>
    <div class="advantage-type">
        <ul class="firse-nav">
            <li class="nav-li" v-for="item in advantages" :key="item.id" @click="advantageType(item)" :class="{'nav-name-active': advantageObj && advantageObj.id === item.id}">
                <span class="nav-name ">{{item.title}}</span>
            </li>
        </ul>
    </div>
    <div class="advantage-content">
        <p>{{advantageObj.content}}</p>
    </div>
</div>
</template>

<script>
import "./housingEstateAdvantage.scss";

export default {
  name: "house-advantage",
  props: ['advantages'],
  data() {
    return {
        advantageObj: {},
        advantageList: [
            {
                id: 1,
                type: '优质地产',
                title: '我是优质地产',
                typeDesc: '1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            }, {
                id: 2,
                title: '我是4A级风景区',
                type: '4A级风景区',
                typeDesc: '2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            }, {
                id: 3,
                title: '我是优质地产',
                type: '优质地产',
                typeDesc: '3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            }
        ]
    }
  },
  computed: {
    advantage() {
      return this.advantages;
    }
  },
  components: {
  },
  created() {
  },
  mounted() {},
  methods: {
    initData() {
      this.advantageObj = this.advantages[0];
    },
    advantageType (item) {
      this.advantageObj = item;
    },
  }
};
</script>
