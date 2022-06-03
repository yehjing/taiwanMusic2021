<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem active noLeaf" @click="clickLink('')">2020臺灣音樂年鑑全文下載</div>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from '../share.vue';

export default {
  components: {
    Share,
  },
  data() {
    return {
    };
  },
  methods: {
    clickLink(data) {
      this.$router.push(`/download/${data}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
