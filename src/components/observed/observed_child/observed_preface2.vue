<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>藝術（當代創作）音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2021臺灣音樂年鑑》年度活動觀察與評介－藝術（當代創作）音樂篇，以藝術原創性為訴求，分為國樂、西樂及混合編制兩項目，依產生和傳播的樂種範疇和人文背景作為分類基礎，亦依所使用的樂器和音樂語彙做區分。由專家學者觀察以國樂器（含人聲）、西洋樂器或混合編制（含人聲）做為音樂表現載體的音樂活動，對於當代作品的創作、演奏（唱）提出年度評介，特別著重觀察國人作品以及臺灣傳統音樂素材在此類藝術創作領域中的應用、改寫與再製情況。藝術（當代創作）音樂篇子領域劃分，如下表所示：</p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td rowspan="2">
            藝術（當代創作）音樂
          </td>
          <td>
            國樂
          </td>
        </tr>
        <tr>
          <td>
            西樂及混合編制
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>
