 <!--
  @author zhuliang
  @date 2018/10/8 下午11:57
-->
<template>
  <footer class="housing-estate-footer">
     <span class="text-icon">
            <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yuyueguanli"></use>
                </svg>
          </span>
      <span class="text-desc" @click="freeCall()">
        预约看房
      </span>
      <span class="text-button">
        <a :href="`tel:${houseInfo && houseInfo.houseTel}`" @click="addPersonCall()">
          <span class="">
            <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-phone"></use>
                </svg>
          </span>
          免费通话
        </a>
      </span>
      <!--

      -->

  </footer>
</template>

<script>
import './footer.scss';
import indexApi from '../../../api/indexPage';

export default {
  name: 'house-estate-footer',
  props:['houseInfo'],
  data() {
    return {
      hasTel: false,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    freeCall() {
      this.$emit('showDalog', '预约看房', '请填写您的联系信息，我们将在第一时间给您回电')
    },
    addPersonCall() {
      if (!this.hasTel) {
        indexApi.addCallList('MOBILE', this.houseInfo.houseTel, this.houseInfo.id).then(() => {
          this.hasTel = true;
        })
      }
    }
  },
};
</script>
