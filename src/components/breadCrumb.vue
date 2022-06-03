<template>
  <div class="breadCrumb">
    <div>
      <span>
        <router-link :to="'/home'">首頁&nbsp;&nbsp; <span v-if="$route.path!== '/home'">/ </span>&nbsp;&nbsp;</router-link>
      </span>
      <span v-for="(item,index) in bread" :key="item.path">
        <router-link v-if="item.path!== '/home'" :to="item.path">{{name(item.name)}}</router-link>
        <!-- <router-link :to="item.path">/ 傳統音樂 </router-link> -->
        <!-- {{item.name}} -->
        <span v-if="item.name && index !== bread.length - 1">&nbsp;&nbsp; / &nbsp;&nbsp;</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
    };
  },
  created() {
    // console.log(this.$route)
  },
  computed: {
    bread() {
      return this.$route.matched;
    },
  },
  methods: {
    name(itemName) {
      // console.log('ccc',itemName.indexOf('/'))
      if (itemName && itemName.indexOf('/') !== -1) {
        const nameList = itemName.split('/');
        return `${nameList[0]}\xa0\ / \xa0\ ${nameList[1]}`;
      }
      return itemName;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import './../assets/styles/breadCrumb.scss';
</style>
