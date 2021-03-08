import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
// import VueQuillEditor from 'e:/LoanTack1/loantack-project/node_modules/vue-quill-editor/dist/vue-quill-editor'
import VueApexCharts from 'vue-apexcharts'
import '@morioh/v-quill-editor/dist/editor.css';
import Editor from '@morioh/v-quill-editor'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

// global register
Vue.use(Editor);
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  //VueQuillEditor,
  VueApexCharts,
  render: h => h(App),
}).$mount('#app')
//Vue.component('quilleditor',VueQuillEditor);
Vue.component('my-component',VueApexCharts);

export default new Vuetify({
  icons:{
    iconfont: 'md',
  },
})