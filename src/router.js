/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home';
import Know from './components/know';
// intro
import Introduction from './components/introduction';
import Introduction_1 from './components/introduction/intro/intro_1';
import Introduction_2 from '@/components/introduction/intro/intro_2';
import Introduction_3 from '@/components/introduction/intro/intro_3';
// idea
import Idea from '@/components/idea';
import Idea_1 from '@/components/idea/idea_child/idea_1';
// observed
import Observed from '@/components/observed';
import Observed_00 from '@/components/observed/observed_child/observed_00';
import Observed_01 from '@/components/observed/observed_child/observed_01';
import Observed_02 from '@/components/observed/observed_child/observed_02';
import Observed_03 from '@/components/observed/observed_child/observed_03';
import Observed_1 from '@/components/observed/observed_child/observed_1';
import Observed_2 from '@/components/observed/observed_child/observed_2';
import Observed_3 from '@/components/observed/observed_child/observed_3';
import Observed_4 from '@/components/observed/observed_child/observed_4';
import Observed_5 from '@/components/observed/observed_child/observed_5';
import Observed_6 from '@/components/observed/observed_child/observed_6';
import Observed_7 from '@/components/observed/observed_child/observed_7';
import Observed_8 from '@/components/observed/observed_child/observed_8';
import Observed_9 from '@/components/observed/observed_child/observed_9';
import Observed_10 from '@/components/observed/observed_child/observed_10';
import Observed_11 from '@/components/observed/observed_child/observed_11';
import Observed_12 from '@/components/observed/observed_child/observed_12';
import Observed_13 from '@/components/observed/observed_child/observed_13';
import Observed_14 from '@/components/observed/observed_child/observed_14';
import Observed_15 from '@/components/observed/observed_child/observed_15';

// comment
import Comment from '@/components/comment';
import Comment_1 from '@/components/comment/comment_child/comment_1';
import Comment_2 from '@/components/comment/comment_child/comment_2';
import Comment_3 from '@/components/comment/comment_child/comment_3';
import Comment_4 from '@/components/comment/comment_child/comment_4';
// video
import VideoRecord_00 from '@/components/videoRecord/video_child/video_00';
import VideoRecord_01 from '@/components/videoRecord/video_child/video_01';
import VideoRecord_02 from '@/components/videoRecord/video_child/video_02';
import VideoRecord_03 from '@/components/videoRecord/video_child/video_03';
import VideoRecord from '@/components/videoRecord';
import VideoRecord_1 from '@/components/videoRecord/video_child/video_1';
import VideoRecord_2 from '@/components/videoRecord/video_child/video_2';
import VideoRecord_3 from '@/components/videoRecord/video_child/video_3';
import VideoRecord_4 from '@/components/videoRecord/video_child/video_4';
import VideoRecord_5 from '@/components/videoRecord/video_child/video_5';
import VideoRecord_6 from '@/components/videoRecord/video_child/video_6';
import VideoRecord_7 from '@/components/videoRecord/video_child/video_7';
import VideoRecord_8 from '@/components/videoRecord/video_child/video_8';
import VideoRecord_9 from '@/components/videoRecord/video_child/video_9';
import VideoRecord_10 from '@/components/videoRecord/video_child/video_10';
import VideoRecord_11 from '@/components/videoRecord/video_child/video_11';
import VideoRecord_12 from '@/components/videoRecord/video_child/video_12';
import VideoRecord_13 from '@/components/videoRecord/video_child/video_13';
import VideoRecord_14 from '@/components/videoRecord/video_child/video_14';
// indexDir
import IndexDir from '@/components/indexDir';
import IndexDir_00 from '@/components/indexDir/indexDir_child/indexDir_00';
import IndexDir_01 from '@/components/indexDir/indexDir_child/indexDir_01';
import IndexDir_1 from '@/components/indexDir/indexDir_child/indexDir_1';
import IndexDir_2 from '@/components/indexDir/indexDir_child/indexDir_2';
import IndexDir_3 from '@/components/indexDir/indexDir_child/indexDir_3';
import IndexDir_4 from '@/components/indexDir/indexDir_child/indexDir_4';
import IndexDir_5 from '@/components/indexDir/indexDir_child/indexDir_5';
import IndexDir_6 from '@/components/indexDir/indexDir_child/indexDir_6';
import IndexDir_7 from '@/components/indexDir/indexDir_child/indexDir_7';
import IndexDir_8 from '@/components/indexDir/indexDir_child/indexDir_8';
import IndexDir_9 from '@/components/indexDir/indexDir_child/indexDir_9';
import IndexDir_10 from '@/components/indexDir/indexDir_child/indexDir_10';
import IndexDir_11 from '@/components/indexDir/indexDir_child/indexDir_11';
import IndexDir_12 from '@/components/indexDir/indexDir_child/indexDir_12';
import IndexDir_13 from '@/components/indexDir/indexDir_child/indexDir_13';
import IndexDir_14 from '@/components/indexDir/indexDir_child/indexDir_14';
import IndexDir_15 from '@/components/indexDir/indexDir_child/indexDir_15';
import IndexDir_16 from '@/components/indexDir/indexDir_child/indexDir_16';
import IndexDir_17 from '@/components/indexDir/indexDir_child/indexDir_17';
import IndexDir_18 from '@/components/indexDir/indexDir_child/indexDir_18';
import IndexDir_19 from '@/components/indexDir/indexDir_child/indexDir_19';
import IndexDir_20 from '@/components/indexDir/indexDir_child/indexDir_20';
import IndexDir_21 from '@/components/indexDir/indexDir_child/indexDir_21';
import IndexDir_22 from '@/components/indexDir/indexDir_child/indexDir_22';
// import IndexDir_23 from '@/components/indexDir/indexDir_child/indexDir_23';
// import IndexDir_24 from '@/components/indexDir/indexDir_child/indexDir_24';
// download
import Download from '@/components/download';
import Download_1 from '@/components/download/download_child/download_1';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '*',
      redirect: '/home',
      hidden: true,
    },
    {
      name: '??????',
      path: '/home',
      component: Home,
    },
    {
      name: '???????????????',
      path: '/know',
      component: Know,
    },
    {
      name: '???',
      path: '/introduction',
      component: Introduction,
      children: [
        {
          name: '?????????????????????????????????',
          path: '/',
          component: Introduction_1,
        },
        {
          name: '?????????????????????????????????',
          path: 'introduction_2',
          component: Introduction_2,
        },
        {
          name: '?????????',
          path: 'introduction_3',
          component: Introduction_3,
        },
      ],
    },
    {
      name: '???????????????????????????',
      path: '/idea',
      component: Idea,
      children: [
        {
          name: '???????????????????????????',
          path: '/',
          component: Idea_1,
        },
      ],
    },
    {
      name: '???????????????????????????',
      path: '/observed',
      component: Observed,
      children: [
        {
          name: '????????????',
          path: '/',
          component: Observed_00,
          meta: { isPreface: true },
        },
        {
          name: '??????????????????????????????',
          path: 'Observed_01',
          component: Observed_01,
          meta: { isPreface: true },
        },
        {
          name: '????????????',
          path: 'Observed_02',
          component: Observed_02,
          meta: { isPreface: true },
        },
        {
          name: '?????????????????????',
          path: 'Observed_03',
          component: Observed_03,
          meta: { isPreface: true },
        },
        {
          name: '???????????? / ????????????',
          path: 'Observed_1',
          component: Observed_1,
        },
        {
          name: '???????????? / ????????????',
          path: 'Observed_2',
          component: Observed_2,
        },
        {
          name: '???????????? / ????????????',
          path: 'Observed_3',
          component: Observed_3,
        },
        {
          name: '???????????? / ????????????',
          path: 'Observed_4',
          component: Observed_4,
        },
        {
          name: '???????????? / ?????????????????????????????????????????????????????????????????????',
          path: 'Observed_5',
          component: Observed_5,
        },
        {
          name: '???????????? / ?????????????????????????????????????????????????????????????????????????????????????????????',
          path: 'Observed_6',
          component: Observed_6,
        },
        {
          name: '???????????? / ??????????????????????????????????????????????????????????????????????????????????????????',
          path: 'Observed_7',
          component: Observed_7,
        },
        {
          name: '???????????? / ??????????????????????????????????????????????????????????????????',
          path: 'Observed_8',
          component: Observed_8,
        },
        {
          name: '???????????? / ????????????',
          path: 'Observed_9',
          component: Observed_9,
        },
        {
          name: '???????????? / ????????????????????????',
          path: 'Observed_10',
          component: Observed_10,
        },
        {
          name: '?????????????????????????????? / ??????',
          path: 'Observed_11',
          component: Observed_11,
        },
        {
          name: '?????????????????????????????? / ?????????????????????',
          path: 'Observed_12',
          component: Observed_12,
        },
        {
          name: '???????????? / ????????????',
          path: 'Observed_13',
          component: Observed_13,
        },
        {
          name: '????????????????????? / ?????????????????????',
          path: 'Observed_14',
          component: Observed_14,
        },
        {
          name: '2021????????????????????????????????????',
          path: 'Observed_15',
          component: Observed_15,
        },
      ],
    },
    {
      name: '????????????',
      path: '/comment',
      component: Comment,
      children: [
        {
          name: '2021?????????????????????????????????????????????',
          path: '/',
          component: Comment_1,
        },
        {
          name: '2021???????????????????????????????????????????????????????????????',
          path: 'comment_2',
          component: Comment_2,
        },
        {
          name: '2021?????????????????????????????????????????????',
          path: 'comment_3',
          component: Comment_3,
        },
        {
          name: '2021?????????????????????????????????????????????',
          path: 'comment_4',
          component: Comment_4,
        },
      ],
    },
    {
      name: '????????????',
      path: '/videoRecord',
      component: VideoRecord,
      children: [
        {
          name: '????????????',
          path: '/',
          component: VideoRecord_00,
          meta: { isPreface: true },
        },
        {
          name: '??????????????????????????????',
          path: 'videoRecord_01',
          component: VideoRecord_01,
          meta: { isPreface: true },
        },
        {
          name: '????????????',
          path: 'videoRecord_02',
          component: VideoRecord_02,
          meta: { isPreface: true },
        },
        {
          name: '????????????',
          path: 'videoRecord_03',
          component: VideoRecord_03,
          meta: { isPreface: true },
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_1',
          component: VideoRecord_1,
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_2',
          component: VideoRecord_2,
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_3',
          component: VideoRecord_3,
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_4',
          component: VideoRecord_4,
        },
        {
          name: '???????????? / ???????????????????????????????????????????????????????????????',
          path: 'videoRecord_5',
          component: VideoRecord_5,
        },
        {
          name: '???????????? / ?????????????????????????????????????????????????????????????????????????????????????????????',
          path: 'videoRecord_6',
          component: VideoRecord_6,
        },
        {
          name: '???????????? / ??????????????????????????????????????????????????????????????????????????????????????????',
          path: 'videoRecord_7',
          component: VideoRecord_7,
        },
        {
          name: '???????????? / ??????????????????????????????????????????????????????',
          path: 'videoRecord_8',
          component: VideoRecord_8,
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_9',
          component: VideoRecord_9,
        },
        {
          name: '???????????? / ????????????????????????',
          path: 'videoRecord_10',
          component: VideoRecord_10,
        },
        {
          name: '?????????????????????????????? / ??????',
          path: 'videoRecord_11',
          component: VideoRecord_11,
        },
        {
          name: '?????????????????????????????? / ?????????????????????',
          path: 'videoRecord_12',
          component: VideoRecord_12,
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_13',
          component: VideoRecord_13,
        },
        {
          name: '???????????? / ????????????',
          path: 'videoRecord_14',
          component: VideoRecord_14,
        },
      ],
    },
    {
      name: '??????',
      path: '/indexDir',
      component: IndexDir,
      children: [
        {
          name: '??????',
          path: '/',
          component: IndexDir_00,
          meta: { isPreface: true },
        },
        {
          name: '??????',
          path: 'indexDir_01',
          component: IndexDir_01,
          meta: { isPreface: true },
        },
        {
          name: '????????????????????? / ???????????????',
          path: 'indexDir_12',
          component: IndexDir_12,
        },
        {
          name: '????????????????????? / ???????????????',
          path: 'indexDir_13',
          component: IndexDir_13,
        },
        {
          name: '????????????????????? / ???????????????',
          path: 'indexDir_14',
          component: IndexDir_14,
        },
        {
          name: '????????????????????? / ???????????????',
          path: 'indexDir_15',
          component: IndexDir_15,
        },
        {
          name: '????????????????????? / ??????????????????',
          path: 'indexDir_16',
          component: IndexDir_16,
        },
        {
          name: '????????????????????? / ???????????????',
          path: 'indexDir_17',
          component: IndexDir_17,
        },
        {
          name: '????????????????????? / ???????????????????????????',
          path: 'indexDir_18',
          component: IndexDir_18,
        },
        // {
        //   name: '????????????????????? / ????????????',
        //   path: 'indexDir_23',
        //   component: IndexDir_23,
        // },
        {
          name: '????????????????????? / ?????????',
          path: 'indexDir_19',
          component: IndexDir_19,
        },
        {
          name: '????????????????????? / ????????????????????????',
          path: 'indexDir_20',
          component: IndexDir_20,
        },
        {
          name: '????????????????????? / ???????????????',
          path: 'indexDir_21',
          component: IndexDir_21,
        },
        {
          name: '????????????????????? / ????????????????????????',
          path: 'indexDir_22',
          component: IndexDir_22,
        },
        {
          name: '??????????????????????????? / ???????????????',
          path: 'indexDir_1',
          component: IndexDir_1,
        },
        {
          name: '??????????????????????????? / ???????????????',
          path: 'indexDir_2',
          component: IndexDir_2,
        },
        {
          name: '??????????????????????????? / ???????????????',
          path: 'indexDir_3',
          component: IndexDir_3,
        },
        {
          name: '??????????????????????????? / ???????????????',
          path: 'indexDir_4',
          component: IndexDir_4,
        },
        {
          name: '??????????????????????????? / ??????????????????',
          path: 'indexDir_5',
          component: IndexDir_5,
        },
        {
          name: '??????????????????????????? / ???????????????',
          path: 'indexDir_6',
          component: IndexDir_6,
        },
        {
          name: '??????????????????????????? / ???????????????????????????',
          path: 'indexDir_7',
          component: IndexDir_7,
        },
        // {
        //   name: '??????????????????????????? / ????????????',
        //   path: 'indexDir_24',
        //   component: IndexDir_24,
        // },
        {
          name: '??????????????????????????? / ?????????',
          path: 'indexDir_8',
          component: IndexDir_8,
        },
        {
          name: '??????????????????????????? / ????????????????????????',
          path: 'indexDir_9',
          component: IndexDir_9,
        },
        {
          name: '??????????????????????????? / ???????????????',
          path: 'indexDir_10',
          component: IndexDir_10,
        },
        {
          name: '??????????????????????????? / ????????????????????????',
          path: 'indexDir_11',
          component: IndexDir_11,
        },
      ],
    },
    {
      name: '2021??????????????????????????????',
      path: '/download',
      component: Download,
      children: [
        {
          path: '/',
          name: '2021??????????????????????????????',
          component: Download_1,
        },
      ],
    },
  ],
});
