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
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2020年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2020臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2020臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄51支臺灣音樂影音紀錄，其中跨界音樂其他篇收錄3支影片。</p>
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
          <td rowspan="3">
            跨界音樂與其他
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            大聲音樂季－連珮如與漩指樂團
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            2020國立臺南藝術大學暨國際傳統音樂學會臺灣分會民族音樂學國際學術研討會「迎賓晚會暨音樂會」－圓仔花樂團《土》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            傾聽他們的聲音：臺灣東南亞新移民的表演藝術發展與困境座談會暨匯演－臺灣安克隆樂團《丟丟銅仔》、《Rasa Sayang》
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