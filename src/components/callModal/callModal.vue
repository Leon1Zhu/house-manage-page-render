<template>
  <transition name="modal">
    <div class="modal-mask" @click="cancel">
      <div class="modal-wrapper">
        <div class="modal-container" @click="canPro">
        <span class="modal-header">
          {{hedaerInfo}}
          <span class="header-tips">{{childContent}}</span>
        </span>
          <div class="modal-body" >
            <mu-form :model="userInfo" class="mu-demo-form"  label-width="100">
              <mu-form-item  label="姓名">
                <mu-text-field v-model="userInfo.name"  ></mu-text-field>
              </mu-form-item>
              <mu-form-item  label="电话号码">
                <mu-text-field v-model="userInfo.call"  ></mu-text-field>
              </mu-form-item>
            </mu-form>
          </div>

          <div class="modal-footer">
            <mu-button color="#0284DC" @click="save">保存</mu-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import './callModal.scss';
  import detailApi from '../../api/detailPage';

  export default {
    name: 'call-modal',
    props: {
      hedaerInfo: {
        type: String,
        default: '优惠通知',
      },
      childContent: {
        types: String,
        default: this.$callModelDetaultValue,
      },
      houseInfo: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    data() {
      return {
        userInfo: {
          name: null,
          call: null,
        }
      };
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
      cancel() {
        this.$emit('close');
      },
      save() {
        if(!this.userInfo.name){
          this.$toast.warning('姓名不能为空哦！');
          return ;
        }
        if(!(/^1[3456789]\d{9}$/.test(this.userInfo.call))){
          this.$toast.warning('请填写您正确的联系方式');
          return ;
        }
        detailApi.addSubscribe(this.$encryption(this.userInfo.call), this.userInfo.name, this.houseInfo.id, this.hedaerInfo, 'MOBILE').then((response) => {
          this.$emit('close');
        }).catch(() => {})

      },
      canPro(e) {
        e.stopPropagation();
      }
    },
  };
</script>
