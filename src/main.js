// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

  var config = {
    apiKey: "AIzaSyB61R5LgQolQBA1sWxPsVuqW5zbEBJuPEA",
    authDomain: "vueauth-273f6.firebaseapp.com",
    databaseURL: "https://vueauth-273f6.firebaseio.com",
    projectId: "vueauth-273f6",
    storageBucket: "vueauth-273f6.appspot.com",
    messagingSenderId: "317203249524"
  };
  firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
