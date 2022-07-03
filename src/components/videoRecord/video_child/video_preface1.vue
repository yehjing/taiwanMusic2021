<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>傳統音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"> </p>-->

    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2021年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2021臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2021臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄52支臺灣音樂影音紀錄，其中傳統音樂篇共收錄38支影片。
    </p>
    <table rules="all" style="border:1px solid" cellpadding="5">
      <tbody>
        <tr>
          <td width="20%" class="tableCenter">
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
            <p>南管音樂</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>逍遙清音．聚英200－鹿港聚英社南樂團200週年全國整絃大會</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>靜影沉璧－劉憶靜南管畢業音樂會</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>台南市南聲社「南廠水門宮辛丑年金籙謝恩祈安五朝建醮」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>右昌光安南樂社「戲苑．遊藝－樂在鹿港冬至聲」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>北管音樂</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>2021「北港迎媽祖」遶境活動</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>
              「藝湛登峯－110年重要傳統藝術暨文化資產保存技術保存者授證典禮」王慶芳、彭繡靜二位藝師演出亂彈戲片段
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>2021辛丑正科東港迎王平安祭典</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>
              大頭金來鼓亭「下廍太子蒞臺360週年－佳里下廍鎮安宮辛丑科謝恩祈安五朝清醮大典」遶境出陣
            </p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>福佬歌謠</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>
              屏東縣滿州鄉民謠協進會「接班人好戲台－110年傳統藝術接班人駐園演出計畫《親屬關係表》」
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>「第四十屆行政院文化獎頒獎典禮」說唱藝術家楊秀卿</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>
              「藝湛登峯－110年重要傳統藝術暨文化資產保存技術保存者授證典禮」
              陳英領獎暨恆春民謠進鄉團演出
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>旭陽民俗車鼓劇團「臺灣唸歌節x舊物盛典x原創盛典」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>客家音樂</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>田屋北管八音團「慶祝褒忠亭義民節輪值枋寮聯庄祭典」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>
              榮興客家採茶劇團「2021世代之聲－臺灣世代族群音樂紀實系列《客韻薪聲．撮把戲再現》」
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>台灣客家山歌團「2021臺客傳奇－客家歌舞劇」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>美濃客家八音團「2021新竹縣客家藝術節－水圳．共下來竂」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>原住民音樂－賽夏族、阿美族、卑南族、雅美（達悟）族</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>賽夏族 「pa'inrowa'翻轉－賽夏青年的迴返」演出暨展覽開幕</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>阿美族 2021杵音文化藝術團活動展演</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>卑南族 2021世代之聲－臺灣族群音樂紀實系列「百．下賓朗」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>雅美（達悟）族 部落教室「拍手歌會」教唱</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>原住民音樂－泰雅族、太魯閣族、鄒族、撒奇萊雅族</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>泰雅族 傳源文化藝術團《源流Qinplan》</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>太魯閣族 《還能當多久原住民》專輯音樂會</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>鄒族 2021世代之聲－臺灣族群音樂紀實系列「聆聽．鄒」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>撒奇萊雅族 2021世代之聲－臺灣族群音樂紀實系列「火神祭－與祢相遇」</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>原住民音樂－排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>排灣族 文樂部落pusau送祖靈祭</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>魯凱族 「2021春遊霧臺櫻花季」阿禮部落迎賓歌舞</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>拉阿魯哇族 2021拉阿魯哇聖貝祭</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>馬卡道族 屏東縣馬卡道族聯合夜祭</p>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <p>原住民音樂－邵族、布農族、噶瑪蘭族、賽德克族</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>布農族 Lileh之聲合唱團「陣勢登台－鬥陣看鬧熱」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>噶瑪蘭族 110年社區林業「新社半島海底世界」成果發表會</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>佛教音樂</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>新店竹林禪寺「啟建新春梁皇、華嚴大法會」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>法雲禪寺「藥師佛七法會」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>果碩大慈普利寺「藥師佛千供法會」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>清雲寺《慈悲道場懺法》祈福報恩法會</p>
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            <p>道、法、釋教音樂</p>
          </td>
          <td>
            <p class="tableCenter">1</p>
          </td>
          <td>
            <p>頭城龜山里簡府「大補運延壽法場翻土收煞」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">2</p>
          </td>
          <td>
            <p>西堡威震天門「岳府元帥千秋二朝醮會過布橋」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">3</p>
          </td>
          <td>
            <p>外垵溫王宮「一朝中元醮道場入醮」</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="tableCenter">4</p>
          </td>
          <td>
            <p>烏日聖母宮「普度植福法會頒赦」</p>
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
