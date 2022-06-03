<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem active noLeaf" @click="clickLink('')">編輯理念與體例說明</div>
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
  data() {
    return {
    };
  },
  methods: {
    clickLink (data) {
      this.$router.push(`/idea/${data}`)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
// .wrap{

// }
</style>
