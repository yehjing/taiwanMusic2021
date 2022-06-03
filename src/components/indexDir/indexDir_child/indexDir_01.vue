<template>
  <div>
    <IndexDirPreface1/>
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
import IndexDirPreface1 from './indexDir_preface1.vue';
import IndexDir1 from './indexDir_1.vue';
import IndexDir2 from './indexDir_2.vue';
import IndexDir3 from './indexDir_3.vue';
import IndexDir4 from './indexDir_4.vue';
import IndexDir5 from './indexDir_5.vue';
import IndexDir6 from './indexDir_6.vue';
import IndexDir7 from './indexDir_7.vue';
import IndexDir8 from './indexDir_8.vue';
import IndexDir9 from './indexDir_9.vue';
import IndexDir10 from './indexDir_10.vue';
import IndexDir11 from './indexDir_11.vue';
import IndexDir24 from './indexDir_24.vue';

import img1 from './../../../assets/videoTitle/1.jpg';
import img2 from './../../../assets/videoTitle/2.jpg';
import img3 from './../../../assets/videoTitle/3.jpg';
import img4 from './../../../assets/videoTitle/4.jpg';
import img5 from './../../../assets/videoTitle/5.jpg';
import img9 from './../../../assets/videoTitle/9.jpg';
import img10 from './../../../assets/videoTitle/10.jpg';
import img11 from './../../../assets/videoTitle/11.jpg';
import img12 from './../../../assets/videoTitle/12.jpg';
import img13 from './../../../assets/videoTitle/13.jpg';
import img14 from './../../../assets/videoTitle/14.jpg';
import img15 from './../../../assets/videoTitle/15.jpg';


const tabs = [
  // {
  //   name: '序',
  //   autor: '',
  //   component: IndexDirPreface1,
  // },
  {
    name: '南管音樂篇',
    autor: '',
    component: IndexDir1,
    path: 'indexDir_1',
    img: img1
  },
  {
    name: '北管音樂篇',
    autor: '',
    component: IndexDir2,
    path: 'indexDir_2',
    img: img2
  },
  {
    name: '福佬歌謠篇',
    autor: '',
    component: IndexDir3,
    path: 'indexDir_3',
    img: img3
  },
  {
    name: '客家音樂篇',
    autor: '',
    component: IndexDir4,
    path: 'indexDir_4',
    img: img4
  },
  {
    name: '原住民音樂篇',
    autor: '',
    component: IndexDir5,
    path: 'indexDir_5',
    img: img5
  },
  {
    name: '佛、釋教音樂篇',
    autor: '',
    component: IndexDir6,
    path: 'indexDir_6',
    img: img9
  },
  {
    name: '道、法教音樂篇',
    autor: '',
    component: IndexDir7,
    path: 'indexDir_7',
    img: img10
  },
  {
    name: '釋奠樂及其他篇',
    autor: '',
    component: IndexDir24,
    path: 'indexDir_24',
    img: img15
  },
  {
    name: '國樂篇',
    autor: '',
    component: IndexDir8,
    path: 'indexDir_8',
    img: img11
  },
  {
    name: '西樂及混合編制篇',
    autor: '',
    component: IndexDir9,
    path: 'indexDir_9',
    img: img12
  },
  {
    name: '流行音樂篇',
    autor: '',
    component: IndexDir10,
    path: 'indexDir_10',
    img: img13
  },
  {
    name: '跨界音樂與其他篇',
    autor: '',
    component: IndexDir11,
    path: 'indexDir_11',
    img: img14
  },
];

export default {
  components: { IndexDirPreface1 },
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
      this.$router.push(`/indexDir/${tab.path}`);
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