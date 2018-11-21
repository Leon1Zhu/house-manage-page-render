 <!--
  @author zhuliang
  @date 2018/10/8 下午11:57
-->
<template>
  <footer class="housing-estate-footer">
      <span class="text-icon">
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaipan"></use>
            </svg>
      </span>
      <span class="text-desc" @click="freeCall()">
        免费通话
      </span>
      <span class="text-button">
        <a :href="`tel:${houseInfo && houseInfo.houseTel}`">预约看房</a>
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
      this.$emit('showDalog', '免费通话', '请填写您的联系信息，我们将在第一时间给您回电')
    },
    addPersonCall(tel, id) {
      if (!this.hasTel) {
        indexApi.addCallList('MOBILE', this.houseInfo.houseTel, this.houseInfo.id).then(() => {
          this.hasTel = true;
        })
      }
    }
  },
};
</script>
