<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!--
        <div class="modal-header">
          <slot name="header">
            请输入电话号码
          </slot>
        </div>
-->
          <div class="modal-body">
            <div class="mu-form-item mu-form-item__has-label">
              <div class="mu-form-item-label" style="width: 100px;">Input</div><!---->
              <div class="mu-form-item-content">
                <mu-text-field v-model="form.input"></mu-text-field>
              </div>
            </div>
            <input type="text" placeholder="  请输入电话号码" v-model="call" @input="handleFirstNameUpdate()"/>
          </div>


          <div class="modal-footer">
            <mu-button color="#ffffff" @click="cancel">取消</mu-button>
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
    data() {
      return {
        call: null,
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
      }
    },
  };
</script>
