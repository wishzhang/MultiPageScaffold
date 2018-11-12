import "@/assets/base.scss";
import "@/assets/common.scss";
import Vue from 'vue'
import WsNavbarMainFooter from '@/components/base/layout/ws-navbar-main-footer.vue'

const app=new Vue({
  el:'#app',
  components:{
    WsNavbarMainFooter:WsNavbarMainFooter
  }
})
