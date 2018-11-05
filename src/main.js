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



import { Button, Select, TextField, Icon, ExpansionPanel, Chip, Slider, Helpers,Progress} from 'muse-ui';
import Toast from 'muse-ui-toast';


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



new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
