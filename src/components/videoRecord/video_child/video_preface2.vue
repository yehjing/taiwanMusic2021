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
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2021年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2021臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2021臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄52支臺灣音樂影音紀錄，其中藝術（當代創作）篇共收錄8支影片。
    </p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td class="tableCenter">
            <p>子計畫</p>
          </td>
          <td class="tableCenter">
            <p>序號</p>
          </td>
          <td class="tableCenter">
            <p>標題名稱</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>國樂</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>桃園市國樂團2021年度回顧</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>臺灣國樂團2021年度回顧</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>臺南市民族管絃樂團精選演出片段</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>新竹青年國樂團「夢旋故都」音樂會精選演出片段</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>西樂及混合編制</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>《來自臺灣－呂紹嘉的原鄉情懷》專輯</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>「交響六堆心X NTSO」六堆300紀念音樂會</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>NTSO温隆信「撥雲見日」臺灣文化協會成立百週年系列</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>「音樂台灣2021作曲聯展」合唱場－詩與歌的當代迴響</p>
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
