<template>
  <section class="mobileHomeNav">
    <ul style="list-style:none">
      <li><router-link :to="'/introduction'">序</router-link></li>
      <li><router-link :to="'/idea'">編輯理念<br>與體例說明</router-link></li>
      <li><router-link :to="'/observed'">年度活動<br>觀察與評介</router-link></li>
      <li><router-link :to="'/comment'">文化評論</router-link></li>
      <li><router-link :to="'/videoRecord'">影音紀錄</router-link></li>
      <li><router-link :to="'/indexDir'">附錄</router-link></li>
      <li><router-link :to="'/download'">2021臺灣音樂年鑑<br>全文下載</router-link></li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'MobileHomeNav',
  components: {
  },
  data() {
    return {
    };
  },
  watch: {
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "./../assets/styles/mobileHomeNav.scss";
</style>
