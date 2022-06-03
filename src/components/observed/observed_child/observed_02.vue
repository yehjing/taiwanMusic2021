<template>
  <div>
    <ObservedPreface3/>
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
import ObservedPreface3 from './observed_preface3.vue';
import Observed13 from './observed_13.vue';


const tabs = [
  // {
  //   name: '流行音樂',
  //   autor: '',
  //   component: ObservedPreface3,
  // },
  {
    name: '2021年度流行音樂活動觀察與評介',
    autor: '徐玫玲',
    component: Observed13,
    path: 'observed_13',
  },
];

export default {
  components: { ObservedPreface3 },
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
