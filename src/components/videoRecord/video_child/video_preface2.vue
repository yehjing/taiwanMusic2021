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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2020年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2020臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2020臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄51支臺灣音樂影音紀錄，其中藝術（當代創作）篇共收錄9支影片。
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
          <td class="tableCenter">
            <p>1</p>
          </td>
          <td>
            <p>桃園市國樂團2020年度回顧</p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>2</p>
          </td>
          <td>
            <p>臺北市立國樂團「望春風－網路直播音樂會」《絲路樂舞》演出片段</p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>3</p>
          </td>
          <td>
            <p>台南樂集2020年度回顧</p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>4</p>
          </td>
          <td>
            <p>臺灣國樂團「破繭重生」音樂會《破繭重生》第三樂章〈起靈〉</p>
          </td>
        </tr>
        <tr>
          <td rowspan="5">
            <p>西樂及混合編制</p>
          </td>
          <td class="tableCenter">
            <p>1</p>
          </td>
          <td>
            <p>
              2020臺灣音樂憶像「來自故鄉的思念」蕭泰然逝世五周年紀念系列選粹：蕭泰然《原住民組曲》
            </p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>2</p>
          </td>
          <td>
            <p>2020臺北市音樂季音樂劇場「燈．影」選粹：潘皇龍《大燈對》管弦交響協奏曲</p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>3</p>
          </td>
          <td>
            <p>2020臺灣音樂憶像「聲迴臺灣」合唱專場選粹：余忠元《梅落》為混聲合唱</p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>4</p>
          </td>
          <td>
            <p>
              2020中華民國聖樂促進會「台灣之聲：管弦樂篇」選粹：陳茂萱《一言九鼎》第一號鋼琴協奏曲
            </p>
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            <p>5</p>
          </td>
          <td>
            <p>亞洲作曲家聯盟台灣總會「音樂台灣2020作曲聯展」選粹：林進祐《台中頌》</p>
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
