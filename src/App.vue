<template>
  <div id="app">
    <div class="wrap">
      <SearchBar></SearchBar>
      <BreadCrumb></BreadCrumb>
      <div v-show="isOther" class="headerContent">
        <!-- <img src="./assets/header2.jpg" alt=""> -->
      </div>
      <Home v-show="isHome"></Home>
      <nav>
        <ul>
          <li><router-link :to="'/introduction'">序</router-link></li>
          <li><router-link :to="'/idea'">編輯理念<br>與體例說明</router-link></li>
          <li><router-link :to="'/observed'">年度活動<br>觀察與評介</router-link></li>
          <li><router-link :to="'/comment'">文化評論</router-link></li>
          <li><router-link :to="'/videoRecord'">影音紀錄</router-link></li>
          <li><router-link :to="'/indexDir'">附錄</router-link></li>
          <li><router-link :to="'/download'">2020臺灣音樂年鑑<br>全文下載</router-link></li>
        </ul>
      </nav>
      <MobileHomeNav v-show="isHome"/>
      <section ref="mainArea" v-show="isOther" class="mainArea">
        <div class="insideArea">
          <router-view></router-view>
        </div>
      </section>
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue';
import Home from './components/home.vue';
import BreadCrumb from './components/breadCrumb.vue';
import Footer from './components/footer.vue';
import MobileHomeNav from './components/mobileHomeNav.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    BreadCrumb,
    Footer,
    Home,
    MobileHomeNav,
  },
  data() {
    return {
      // color:''
      // isHome:true,
      // isOther:false
    };
  },
  watch: {
    $route() {
      // console.log('rorororor')
      this.rwdStyle();
      // if (this.$route.path.split('/').indexOf(this.now) !== -1) {
      //   this.color = 'color';
      // } else {
      //   this.color = '';
      // }
    },
  },
  updated() {
    this.rwdStyle();
  },
  computed: {
    isHome() {
      if (this.$route.path === '/home') {
        return true;
      }
      return false;
    },
    isOther() {
      if (this.$route.path !== '/home') {
        return true;
      }
      return false;
    },
  },
  mounted() {
    /**
     * 解决 css 引入图片在 github pages 无法获取的问题
     */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;

    // document.getElementById('gsc-i-id1').setAttribute('placeholder','搜尋')
    window.addEventListener('resize', this.rwdStyle);
    this.rwdStyle();
  },
  methods: {
    rwdStyle() {
      if (document.body.clientWidth <= 576) {
        if (!this.$route.meta.isPreface) {
          document.querySelector('.share').style.display = 'flex';
          document.querySelector('.viewRight').style.background = '#fff';
        } else {
          document.querySelector('.viewRight').style.background = 'none';
          document.querySelector('.share').style.display = 'none';
        }
      } else {
        document.querySelector('.viewRight').style.background = '#fff';
        document.querySelector('.share').style.display = 'flex';
      }
    },
    initScroll() {
      // this.$refs.mainArea.scrollTop = 0
      // this.$refs.mainArea.scrollLeft = 0
      document.documentElement.scrollTop = 0
    }
  },
  /**
   * 提供給任意子組件指向自身(AppMain) this 的 initScroll 方法
   * 而子組件可透過 inject: ['initScroll'] 使用
   */
  provide() {
    return {
      initScroll: this.initScroll
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
// @import "~bootstrap/scss/bootstrap";
*{
  // list-style: none;
  margin: 0 ;
  padding: 0;
  font-family: '微軟正黑體'
}
a{
  text-decoration: none;
}
body{
  // background: linear-gradient(to bottom, #a85757, #b96565);
  // background: #AA8E8E;
  background: linear-gradient(to bottom, #4F0A5D , #AC65BB);
}
nav .router-link-active{
  transition:.2s;
  color: #fff !important;
}
#___gcse_0 {
  position: relative;
  width: 270px;
  height: 27px;
  // padding: 5px 15px;
  background: #fff;
  border: none;
  border-radius: 20px;
  overflow: hidden;
}

.gsc-control-cse ,.gsc-control-cse-zh-TW{
  padding: 0 !important;
}
.gsib_a,#gs_tti50{
  padding: 0 15px;
}
.gsc-search-button, .gsc-search-button-v2{
  // width: 60px;
  // padding: 6px 13px;
  background: #fff;
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
}
#gsc-i-id1{
  background: #fff !important;
  width: 110% !important;
  text-indent:0 !important;
}
#gs_st50{
  display: none;
}

@media (max-width: 576px) {
  #___gcse_0 {
    width: 220px;
  }
  .gsc-search-button .gsc-search-button-v2{
    padding: 0 10px;
    margin-top: -8px;
  }
}
@import "./assets/styles/app.scss";
</style>
