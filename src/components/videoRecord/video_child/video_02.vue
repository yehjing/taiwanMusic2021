<template>
  <div>
    <VideoPreface3/>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title rwdTitle">
        <h2>{{ tab.name }}</h2>
        <!-- <span>{{tab.autor}}</span> -->
        <span class="isMobile" style="padding-left: 0;"><img style="width: 100%;height: 100%;object-fit: cover;" :src="tab.img" alt=""></span>
      </div>
      <hr>
      <!-- <component  v-if="currentTab.name === tab.name" :is="currentTab.component"/> -->
    </div>
  </div>
</template>

<script>
import VideoPreface3 from './video_preface3.vue';
import Video13 from './video_13.vue';

import img13 from './../../../assets/videoTitle/13.jpg';

const tabs = [
  // {
  //   name: '流行音樂(序)',
  //   autor: '',
  //   component: VideoPreface3,
  // },
  {
    name: '流行音樂',
    autor: '',
    component: Video13,
    path: 'videoRecord_13',
    img: img13
  },
];

export default {
  components: { VideoPreface3 },
  inject: ['initScroll'],
  data() {
    return {
      currentTab: tabs[0],
      tabs,
    };
  },
  created() {
    // this.$router.push(`observed/${this.tabs[0].name}`);
  },
  methods: {
    changeView(tab) {
      // this.$router.push({
      //   params: {
      //     name: tab.name,
      //   },
      // });
      this.$router.push(`/videoRecord/${tab.path}`);
      this.currentTab = tab;
      this.initScroll()
    },
  },
};
</script>
<style lang="scss" scoped>
.isMobile {
  @media (min-width: 992px) {
    display: none !important;
  }
  
}
</style>