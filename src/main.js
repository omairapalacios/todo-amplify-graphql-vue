import Vue from 'vue';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import awsconfig from './aws-exports';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;
Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(BootstrapVue, BootstrapVueIcons);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
