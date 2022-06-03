<template>
  <section class="share">
    <span class="back" @click="back">回上一頁</span>
    <span>&nbsp;&nbsp;｜&nbsp;&nbsp;</span>
    <img @click="shareToTwitter" src="./../assets/twitter.png" alt="">
    <img @click="shareToGoogle" src="./../assets/google.png" alt="">
    <img @click="shareToFb" src="./../assets/facebook.png" alt="">
  </section>
</template>

<script>
export default {
  name: 'Share',
  data() {
    return {
      baseUrl: 'https://taiwanmusicyearbook.ncfta.gov.tw',
    };
  },
  methods: {
    shareToFb() {
      // console.log(this.$route)
      location.href = `https://www.facebook.com/sharer/sharer.php?u=${this.baseUrl}${this.$route.path}`;
    },
    shareToTwitter() {
      location.href = `https://twitter.com/intent/tweet?url=${this.baseUrl}${this.$route.path}`;
    },
    shareToGoogle() {
      location.href = `https://plus.google.com/share?url=${this.baseUrl}${this.$route.path}`;
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.share{
  // display: block;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // text-align: right;
  margin-top: 10px;
  img{
    margin-right: 10px;
  }
  .back{
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
