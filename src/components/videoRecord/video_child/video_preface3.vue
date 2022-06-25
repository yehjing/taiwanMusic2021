<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>流行音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2021年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2021臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2021臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄52支臺灣音樂影音紀錄，其中流行音樂篇收錄2支影片。
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
          <td rowspan="3">
            <p>流行音樂</p>
          </td>
          <td class="tableCenter">
            <p>1</p>
          </td>
          <td>
            <p>臺北爵士大樂隊「臺中爵士音樂節」</p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>2</p>
          </td>
          <td>
            <p>山之歌，海之戀</p>
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
