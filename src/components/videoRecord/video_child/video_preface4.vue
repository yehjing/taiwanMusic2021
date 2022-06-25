<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>跨界音樂與其他</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2021年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2021臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2021臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄52支臺灣音樂影音紀錄，其中跨界音樂其他篇收錄4支影片。
    </p>

    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td class="tableCenter">
            子計畫
          </td>
          <td class="tableCenter">
            序號
          </td>
          <td class="tableCenter">
            標題名稱
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>跨界音樂與其他</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>「流光傳奇STREAM LEGEND」專輯發表會</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>2021春之祭印度文化節</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>2021年世界音樂精選合輯</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>2021李寶春魔幻新京劇《魔笛》</p>
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
