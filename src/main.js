import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/Message.vue'
Vue.component ('AppMessage', AppMessage);

import AppQuestion from './components/Question.vue'
Vue.component ('AppQuestion', AppQuestion);

import AppResultScreen from './components/ResultScreen.vue'
Vue.component ('AppResultScreen', AppResultScreen);

import AppStartScreen from './components/StartScreen.vue'
Vue.component ('AppStartScreen', AppStartScreen);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
