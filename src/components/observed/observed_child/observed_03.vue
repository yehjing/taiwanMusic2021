<template>
  <div>
    <ObservedPreface4/>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title rwdTitle">
        <h2>{{ tab.name }}</h2>
        <span>{{tab.autor}}</span>
      </div>
      <hr>
      <!-- <component v-if="currentTab.name === tab.name" :is="currentTab.component"></component> -->
    </div>
  </div>
</template>

<script>
import ObservedPreface4 from './observed_preface4.vue';
import Observed14 from './observed_14.vue';


const tabs = [
  // {
  //   name: '跨界音樂',
  //   autor: '',
  //   component: ObservedPreface4,
  // },
  {
    name: '2020年度跨界音樂與其他之活動觀察與評介',
    autor: '蔡宗德',
    component: Observed14,
    path: 'observed_14',
  },
];

export default {
  components: { ObservedPreface4 },
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
      this.$router.push(`/observed/${tab.path}`);
      this.currentTab = tab;
      this.initScroll()
    },
  },
};
</script>
