<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>跨界音樂與其他</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png">
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2020臺灣音樂年鑑》年度活動觀察與評介－跨界音樂與其他篇，為能深入觀察臺灣音樂的跨界現象，特將跨界音樂獨立成項，同時亦包容其他若干音樂項目，如世界音樂在臺灣的流播影響以及新住民音樂的存見和發展等趨勢。由專家學者以專文進行質性討論，由此趨近觀察上述音樂項目的流佈實況，希冀翔實呈現臺灣音樂的時代特質和地域性表徵，突出臺灣音樂與世界音樂的交流對話內容及音樂人文場域流動的趨勢脈絡。
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
