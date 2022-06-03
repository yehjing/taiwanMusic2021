<template>
  <div>
    <ObservedPreface1/>
    <div v-for="tab in tabs" :key="tab.name" @click="changeView(tab)">
      <div class="title rwdTitle">
        <h2>{{ tab.name }}</h2>
        <span>{{tab.autor}}</span>
      </div>
      <hr>
      <!-- <component  v-if="currentTab.name === tab.name" :is="currentTab.component"/> -->
    </div>
  </div>
</template>

<script>
import ObservedPreface1 from './observed_preface1.vue';
import Observed1 from './observed_1.vue';
import Observed2 from './observed_2.vue';
import Observed3 from './observed_3.vue';
import Observed4 from './observed_4.vue';
import Observed5 from './observed_5.vue';
import Observed6 from './observed_6.vue';
import Observed7 from './observed_7.vue';
import Observed8 from './observed_8.vue';
import Observed9 from './observed_9.vue';
import Observed10 from './observed_10.vue';
import Observed15 from './observed_15.vue';


const tabs = [
  // {
  //   name: '傳統音樂',
  //   autor: '',
  //   component: ObservedPreface1,
  // },
  {
    name: '2021年度南管音樂活動觀察與評介',
    autor: '黃瑤慧',
    component: Observed1,
    path: 'observed_1',
  },
  {
    name: '2021年度北管音樂活動觀察與評介',
    autor: '范揚坤',
    component: Observed2,
    path: 'observed_2',
  },
  {
    name: '2021年度福佬歌謠活動觀察與評介',
    autor: '黃玲玉',
    component: Observed3,
    path: 'observed_3',
  },
  {
    name: '2021年度客家音樂活動觀察與評介',
    autor: '林曉英',
    component: Observed4,
    path: 'observed_4',
  },
  {
    name: '2021年度賽夏族、阿美族、卑南族、雅美（達悟）族音樂活動觀察與評介',
    autor: '呂鈺秀',
    component: Observed5,
    path: 'observed_5',
  },
  {
    name: '2021年度泰雅族、太魯閣族、鄒族、撒奇萊雅族音樂活動觀察與評介',
    autor: '錢善華',
    component: Observed6,
    path: 'observed_6',
  },
  {
    name: '2021年度排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族音樂活動觀察與評介',
    autor: '周明傑',
    component: Observed7,
    path: 'observed_7',
  },
  {
    name: '2021年度邵族、布農族、噶瑪蘭族、賽德克族音樂活動觀察與評介',
    autor: '魏心怡',
    component: Observed8,
    path: 'observed_8',
  },
  {
    name: '2021年度佛、釋教音樂活動觀察與評介',
    autor: '蔡秉衡',
    component: Observed9,
    path: 'observed_9',
  },
  {
    name: '2021年度道、法教音樂活動觀察與評介',
    autor: '李秀琴',
    component: Observed10,
    path: 'observed_10',
  },
  {
    name: '2021年度釋奠樂及其他活動觀察與評介',
    autor: '蔡秉衡',
    component: Observed15,
    path: 'observed_15',
  },
];

export default {
  components: { ObservedPreface1 },
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
      this.$router.push(`/observed/${tab.path}`);
      this.currentTab = tab;
      this.initScroll()
    },
  },
};
</script>
