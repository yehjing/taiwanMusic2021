<template>
  <section>
    <div class="indexBg"></div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
$image-path: './../assets';
  .indexBg{
    width: 100%;
    height: calc(100vh - 152px);
    background:url('#{$image-path}/indexBg.jpg') no-repeat 0 0;
    background-size: cover;
  }
  @media (max-width: 576px) {
    .indexBg{
      height: 200px;
    }
  }
</style>
