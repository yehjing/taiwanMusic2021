<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem noLeaf" :class="activeName === '' ? 'active' :''"  @click="clickLink('')">2020年度臺灣傳統音樂文化與生態論述</div>
      <div class="middleItem noLeaf" :class="activeName === 'comment_2' ? 'active' :''"  @click="clickLink('comment_2')">2020年度臺灣藝術（當代創作）音樂文化與生態論述</div>
      <div class="middleItem noLeaf" :class="activeName === 'comment_3' ? 'active' :''"  @click="clickLink('comment_3')">2020年度臺灣流行音樂文化與生態論述</div>
      <div class="middleItem noLeaf" :class="activeName === 'comment_4' ? 'active' :''"  @click="clickLink('comment_4')">2020年度臺灣跨界音樂文化與生態論述</div>
    </aside>
    <div class="viewRight">
      <div>
        <router-view></router-view>
      </div>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from './../share.vue';
export default {
  components:{
    Share
  },
  inject: ['initScroll'],
  data() {
    return {
      activeName:''
    };
  },
  methods: {
    clickLink (data) {
      this.activeName = data
      this.$router.push(`/comment/${data}`)
      this.initScroll();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.middleItem{
  font-size: .9rem !important;
}
</style>
