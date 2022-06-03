<template>
  <section class="wrapContain">
    <aside class="linkLeft">
      <div class="middleItem noLeaf" :class="activeName === '' ? 'active' :''" @click="clickLink('')">
        <span>傳統音樂</span>
        <img v-if="activeName === ''" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === ''">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs1" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template>
      <div class="middleItem noLeaf" :class="activeName === 'videoRecord_01' ? 'active' :''" @click="clickLink('videoRecord_01')">
        <span>藝術（當代創作）音樂</span>
        <img v-if="activeName === 'videoRecord_01'" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === 'videoRecord_01'">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs2" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template>
      <div class="middleItem noLeaf" :class="activeName === 'videoRecord_02' ? 'active' :''" @click="clickLink('videoRecord_02')">
        <span>流行音樂</span>
        <img v-if="activeName === 'videoRecord_02'" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === 'videoRecord_02'">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs3" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template>
      <div class="middleItem noLeaf" :class="activeName === 'videoRecord_03' ? 'active' :''" @click="clickLink('videoRecord_03')">
        <span>跨界音樂與其他</span>
        <img v-if="activeName === 'videoRecord_03'" src="./../../assets/arrowUp.png" alt="">
        <img v-else src="./../../assets/arrowDown.png" alt="">
      </div>
      <template v-if="activeName === 'videoRecord_03'">
        <div class="middleItem noLeaf webMenuItem"
          :class="{'active': subActive === tab}"
          v-for="(tab,i) in tabs4" :key="i"
          @click="changeView(tab)"
        >
          {{tab.name}}
        </div>
      </template>
    </aside>
    <div class="viewRight">
      <router-view></router-view>
      <Share></Share>
    </div>
  </section>
</template>

<script>
import Share from '../share.vue';
import { tabs1, tabs2, tabs3, tabs4 } from './video_child/tab';

export default {
  components: {
    Share,
  },
  inject: ['initScroll'],
  data() {
    return {
      tabs1,
      tabs2,
      tabs3,
      tabs4,
      activeName: '',
      subActive: '',
    };
  },
  created() {
  },
  methods: {
    clickLink(data) {
      if (this.activeName === data) {
        this.activeName = 'a';
      } else {
        this.activeName = data;
        this.$router.push(`/videoRecord/${data}`);
      }
    },
    changeView(tab) {
      this.$router.push(`/videoRecord/${tab.path}`);
      this.subActive = tab;
      this.initScroll();
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
