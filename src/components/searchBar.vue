<template>
  <section class="searchBar">
    <div class="webMenu">
      <div @click="toggleYears = !toggleYears"  class="webYear">
        <span>歷年臺灣音樂年鑑</span>
        <span>▾</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2022)">
        <span>2022臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2021)">
        <span>2021臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2020)">
        <span>2020臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2019)">
        <span>2019臺灣音樂年鑑</span>
      </div>
      <div v-if="toggleYears" class="webYear" @click="toLastYear(2018)">
        <span>2018臺灣音樂年鑑</span>
      </div>
    </div>
    <div @click="openMenu" class="burger">
      <img src="./../assets/burger.svg" alt="">
    </div>
    <!-- <input class="blackBar" type="text" placeholder="搜尋"> -->
    <div class="searchIcon">
      <!-- <img src="./../assets/search.png" alt=""> -->
    </div>
    <gcse:search></gcse:search>
    <!-- google 站內搜尋 -->
    <!-- <div class="gcse-search"></div> -->

    <!-- <gcse:search></gcse:search> -->
    <!-- rwd menu start -->
    
    <div v-if="isOpen" class="burgerMenu">
      <div class="toggleYears">
        <div @click="toggleYears = !toggleYears" class="years">
          <span>歷年臺灣音樂年鑑</span>
          <span>▾</span>
        </div>
        <div v-if="toggleYears" class="years" @click="toLastYear(2022)">
          <span>2022臺灣音樂年鑑</span>
        </div>
        <div v-if="toggleYears" class="years" @click="toLastYear(2021)">
          <span>2021臺灣音樂年鑑</span>
        </div>
        <div v-if="toggleYears" class="years" @click="toLastYear(2020)">
          <span>2020臺灣音樂年鑑</span>
        </div>
        <div v-if="toggleYears" class="years" @click="toLastYear(2019)">
          <span>2019臺灣音樂年鑑</span>
        </div>
        <div v-if="toggleYears" class="years" @click="toLastYear(2018)">
          <span>2018臺灣音樂年鑑</span>
        </div>
      </div>
      <ul>
        <li @click="hiddenMenu"><router-link :to="'/introduction'">序</router-link></li>
        <li @click="hiddenMenu"><router-link :to="'/idea'">編輯理念<br>與體例說明</router-link></li>
        <li @click="hiddenMenu"><router-link :to="'/observed'">年度活動<br>觀察與評介</router-link></li>
        <li @click="hiddenMenu"><router-link :to="'/comment'">文化評論</router-link></li>
        <li @click="hiddenMenu"><router-link :to="'/videoRecord'">影音紀錄</router-link></li>
        <li @click="hiddenMenu"><router-link :to="'/indexDir'">附錄</router-link></li>
        <li @click="hiddenMenu"><router-link :to="'/download'">2021臺灣音樂年鑑<br>全文下載</router-link></li>
      </ul>
    </div>
    <div @click="hiddenMenu" v-if="isOpen" class="mask"></div>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      isOpen: false,
      toggleYears: false,
    };
  },
  methods: {
    hiddenMenu() {
      this.isOpen = false;
      const html = document.querySelector('html');
      const body = document.querySelector('body');
      html.classList.remove('noscroll');
      body.classList.remove('noscroll');
    },
    openMenu() {
      this.isOpen = true;
      const html = document.querySelector('html');
      const body = document.querySelector('body');
      html.classList.add('noscroll');
      body.classList.add('noscroll');
    },
    toLastYear(year) {
      document.location.href = `https://taiwanmusicyearbook.ncfta.gov.tw/${year}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .searchBar{
    // width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    height: 50px;
    background: #000;
    .blackBar{
      position: relative;
      width: 270px;
      height: 16px;
      padding: 5px 15px;
      background: #fff;
      border: none;
      border-radius: 20px;
      overflow: hidden;
      &:focus{
        outline: none;
      }
    }
    .searchIcon{
      position: absolute;
      right: 35px;
      &:hover{
        cursor: pointer;
      }
    }
  }
  .burger,.burgerMenu{
    display: none;
  }
  @media (max-width: 576px) {
    .burgerMenu{
      display: block;
    }
    .searchBar{
      justify-content: space-between;
    }
    .burger{
      width: 25px;
      height: 25px;
      display: block;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .burgerMenu{
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100vh;
      background: #79bab6;
      padding: 10% 4% 0 4%;
      z-index: 2;
      // overflow: hidden;
      .toggleYears{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 30px);
        background: #363636;
        color: #fff;
        padding: 10px 15px;
        .years{
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          &:first-child{
            margin-top: 0;
          }
          // position: absolute;
        }
      }
      ul{
        li{
          display: flex;
          align-items: center;
          color: #fff;
          padding: 5%;
          min-height: 40px;
          border-bottom: 1px solid #000;
          &:last-child{
            border-bottom: none;
          }
          a{
            font-size: 14px;
            color: #747474;
          }
        }
      }
    }
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100vh;
      height: 100vh;
      background: rgba(0, 0, 0,0.8);
      z-index: 1;
    }
  }


  .webMenu{
    display: none;
    .webYear{
      display: none;
    }
  }
  // @include pc
  @media (min-width: 992px) {
    .webMenu{
      display: block;
      background: #000;
      position: absolute;
      top: 0;
      left: 0;
      color:#fff;
      &:hover{
        cursor: pointer;
      }
      .webYear{
        display: block;
        margin-left: 20px;
        height: 50px;
        line-height: 50px;
      }
    }
  }
</style>
