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

    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有鑑於本年鑑所記載的內容主要為2020年度臺灣音樂活動，影音紀錄更能幫助民眾理解以音樂為主體的各項音樂動態，《2020臺灣音樂年鑑》工作團隊擇選具有代表性的音樂活動影像，以做為《2020臺灣音樂年鑑》的保存與補充資料。本年鑑共收錄51支臺灣音樂影音紀錄，其中傳統音樂篇共收錄36支影片。
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
            南管音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            謝伃筑南管碩士畢業音樂會
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            109年度合和藝苑孟府郎君秋祭暨整絃會奏
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            灣裡慶安堂和聲社恭祝水仙尊王聖誕南管演唱祝壽
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            白砂崙萬福宮庚子科五朝王醮王船出廠大典－南管祀神
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            北管音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            北港朝天宮天上聖母聖誕暨聖父母春祭－金聲順排場演出
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            漢陽北管劇團「109年度重要傳統表演藝術傳習計畫」期中審查
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            靈安社150週年子弟戲《出京都》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            2020新北市林口子弟戲文化節
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            福佬歌謠
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            2020唸歌年度製作－《呂蒙正》巡迴演出
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            2020玩聚場夏日藝術節Play Arts－微笑唸歌團《百變添丁》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            貓頭鷹圖書館移至新莊十周年紀念音樂會－微笑唸歌團《雪梅教子》
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            客家音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            祭河江敬義塚祭典
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            週末聽八音－和成八音團
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            109年傳統藝術接班人－駐團演訓計畫《錯無錯（錯冇錯）》
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            2020世代之聲－臺灣族群音樂紀實系列「伙房傳奇」
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            原住民音樂－賽夏族、阿美族、卑南族、雅美（達悟）族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            賽夏族 南群矮靈祭（paSta'ay）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            阿美族 長光部落（Ciwkangan）豐年祭（illisn）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            卑南族 下賓朗部落（Pinaski）小米除草祭暨完工儀（misa'ur、muhamut）
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            雅美（達悟）族 109年度蘭嶼鄉婦女傳統舞蹈表演暨鬼頭刀拖釣技賽頒獎活動
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            原住民音樂－泰雅族、太魯閣族、鄒族、撒奇萊雅族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            泰雅族 109年度發祥部落（Pinsbkan）Smyus祖靈祭
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            太魯閣族 2020太魯閣族峽谷音樂節
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            鄒族 2020世代之聲－臺灣族群音樂紀實系列「聆聽．鄒」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            撒奇萊雅族 109年度Sakul部落Malalikid豐年祭
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            原住民音樂－排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            排灣族 斜坡上的藝術節
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            排灣族 「kakudan祭．敘」藝術行動策展計畫
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            魯凱族 2020「活力．E起舞動」母語歌舞劇競賽－大學（專）暨高中（職）組
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            馬卡道族 加蚋埔阿姆寮夜祭
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            原住民音樂－邵族、布農族、噶瑪蘭族、賽德克族
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            布農族 臺東海端鄉布農族射耳祭
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            噶瑪蘭族 宜蘭壯圍奇立板社噶瑪蘭族豐年祭
          </td>
        </tr>
        <tr>
          <td rowspan="3">
            佛、釋教音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            佛光山基隆極樂寺「觀音法會暨大悲懺法會」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            南山觀音寺「中元普度地藏法會」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            接雲寺「水懺、梁皇寶懺、法華經大法會」
          </td>
        </tr>
        <tr>
          <td rowspan="4">
            道、法教音樂
          </td>
          <td class="tableCenter">
            1
          </td>
          <td>
            馬祖北竿「擺暝文化祭」
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            2
          </td>
          <td>
            恭祝濟公活佛師尊千秋聖誕 啟建太上慈悲普度收圓濟幽十二永日大法會
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            3
          </td>
          <td>
            代天巡狩天池千歲與境主保生大帝護民和瘟祈福法會
          </td>
        </tr>
        <tr>
          <td class="tableCenter">
            4
          </td>
          <td>
            第二十二屆上登刀梯法師武考暨文奏授籙陞職醮會
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
