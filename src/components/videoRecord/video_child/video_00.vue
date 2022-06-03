<template>
  <div>
    <VideoPreface1/>
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
import VideoPreface1 from './video_preface1.vue';
import Video1 from './video_1.vue';
import Video2 from './video_2.vue';
import Video3 from './video_3.vue';
import Video4 from './video_4.vue';
import Video5 from './video_5.vue';
import Video6 from './video_6.vue';
import Video7 from './video_7.vue';
import Video8 from './video_8.vue';
import Video9 from './video_9.vue';
import Video10 from './video_10.vue';

import img1 from './../../../assets/videoTitle/1.jpg';
import img2 from './../../../assets/videoTitle/2.jpg';
import img3 from './../../../assets/videoTitle/3.jpg';
import img4 from './../../../assets/videoTitle/4.jpg';
import img5 from './../../../assets/videoTitle/5.jpg';
import img6 from './../../../assets/videoTitle/6.jpg';
import img7 from './../../../assets/videoTitle/7.jpg';
import img8 from './../../../assets/videoTitle/8.jpeg';
import img9 from './../../../assets/videoTitle/9.jpg';
import img10 from './../../../assets/videoTitle/10.jpg';



const tabs = [
  // {
  //   name: '傳統音樂 (序)',
  //   autor: '',
  //   component: VideoPreface1,
  // },
  {
    name: '南管音樂',
    autor: '',
    component: Video1,
    path: 'videoRecord_1',
    img: img1
  },
  {
    name: '北管音樂',
    autor: '',
    component: Video2,
    path: 'videoRecord_2',
    img: img2
  },
  {
    name: '福佬歌謠',
    autor: '',
    component: Video3,
    path: 'videoRecord_3',
    img: img3
  },
  {
    name: '客家音樂',
    autor: '',
    component: Video4,
    path: 'videoRecord_4',
    img: img4
  },
  {
    name: '原住民音樂－賽夏族、阿美族、卑南族、雅美（達悟）族',
    autor: '',
    component: Video5,
    path: 'videoRecord_5',
    img: img5
  },
  {
    name: '原住民音樂－泰雅族、太魯閣族、鄒族、撒奇萊雅族',
    autor: '',
    component: Video6,
    path: 'videoRecord_6',
    img: img6
  },
  {
    name: '原住民音樂－排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族',
    autor: '',
    component: Video7,
    path: 'videoRecord_7',
    img: img7
  },
  {
    name: '原住民音樂－邵族、布農族、噶瑪蘭族、賽德克族',
    autor: '',
    component: Video8,
    path: 'videoRecord_8',
    img: img8
  },
  {
    name: '佛教音樂',
    autor: '',
    component: Video9,
    path: 'videoRecord_9',
    img: img9
  },
  {
    name: '道、法、釋教音樂',
    autor: '',
    component: Video10,
    path: 'videoRecord_10',
    img: img10
  },
];

export default {
  components: { VideoPreface1 },
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