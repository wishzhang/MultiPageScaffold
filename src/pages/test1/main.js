import "@/assets/css/base.scss";
import "@/assets/css/common.scss";
import Vue from 'vue';
import index from './index.vue'

const app=new Vue({
  el:'#app',
  components:{
    index
  },
  template:'<index/>'
})
