import Vue from 'vue';
import App from './App';
import router from './router';
import MetaInfo from 'vue-meta-info';
import 'muse-ui/dist/muse-ui.css';
import aesjs from 'aes-js';
import './interceptor/index';
import './styles/googleFont.scss';
import './styles/reset.css';
import './styles/styles.scss';
import 'swiper/dist/css/swiper.css';
import './styles/iconFont-symbol';



import {Form, Button, Select, TextField, Icon, ExpansionPanel, Chip, Slider, Helpers, Progress, Dialog} from 'muse-ui';
import Toast from 'muse-ui-toast';

Vue.use(Form);
Vue.use(Button);
Vue.use(Select);
Vue.use(TextField);
Vue.use(Icon);
Vue.use(ExpansionPanel);
Vue.use(MetaInfo);
Vue.use(Chip);
Vue.use(Slider);
Vue.use(Progress);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Helpers);



new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
const key = [ 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
Vue.prototype.$imgUrl = 'http://njyfdc.com:9081/dummypath';
Vue.prototype.$callModelDetaultValue = '我们将为您的个人信息保密,请填写您的个人信息!';
Vue.prototype.$encryption = (value) => {
  //  将文本转换为字节
  const textBytes = aesjs.utils.utf8.toBytes(value);

  //  计数器是可选的，如果省略则从1开始
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const encryptedBytes = aesCtr.encrypt(textBytes);

  //  要打印或存储二进制数据，您可以将其转换为十六进制
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
}

Vue.prototype.$decrypt = (encryptedHex) => {
  //  准备解密十六进制字符串时，将其转换回字节
  const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
  //  计数器操作模式保持内部状态，所以
  //  解密新实例必须实例化。
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);

  //  将我们的字节转换回文本
  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}
