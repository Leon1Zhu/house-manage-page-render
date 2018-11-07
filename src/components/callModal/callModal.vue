<template>
  <transition name="modal">
    <div class="modal-mask" @click="cancel">
      <div class="modal-wrapper">
        <div class="modal-container">
        <span class="modal-header">
          {{hedaerInfo}}
          <span class="header-tips">我们将为您的个人信息保密,请填写您的个人信息!</span>
        </span>
          <div class="modal-body" @click="canPro">
            <mu-form :model="userInfo" class="mu-demo-form"  label-width="100">
              <mu-form-item  label="姓名">
                <mu-text-field v-model="userInfo.name"  ></mu-text-field>
              </mu-form-item>
            </mu-form>
            <mu-form  class="mu-demo-form"  label-width="100">
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

  export default {
    name: 'call-modal',
    props: {
      hedaerInfo: {
        type: String,
        default: '优惠通知',
      }
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
        this.$emit('close');
      },
      canPro(e) {
        e.stopPropagation();
      }
    },
  };
</script>
