<template>
  <div>
    <VideoPreface2/>
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
import VideoPreface2 from './video_preface2.vue';
import Video11 from './video_11.vue';
import Video12 from './video_12.vue';
import img11 from './../../../assets/videoTitle/11.jpg';
import img12 from './../../../assets/videoTitle/12.jpg';


const tabs = [
  // {
  //   name: '藝術（當代創作）音樂(序)',
  //   autor: '',
  //   component: VideoPreface2,
  // },
  {
    name: '國樂',
    autor: '',
    component: Video11,
    path: 'videoRecord_11',
    img: img11
  },
  {
    name: '西樂及混合編制',
    autor: '',
    component: Video12,
    path: 'videoRecord_12',
    img: img12
  },
];

export default {
  components: { VideoPreface2 },
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