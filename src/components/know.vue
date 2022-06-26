<template>
  <section class="know">
    <div class="title">
      <h2>著作權聲明</h2>
    </div>
    <hr>
    <ul>
      <li>「2021臺灣音樂年鑑」（下稱本年鑑）為國立傳統藝術中心（下稱傳藝中心）委託中華民國國樂學會編輯、製作，著作財產權屬於傳藝中心所享有，並依本聲明透過「2021臺灣音樂年鑑」網站（以下稱「本網站」）提供予公眾利用，非依本聲明之授權或符合著作權法有關合理使用情形，不得任意重製、改作、轉載、公開播送、公開傳輸或其他利用本年鑑全部或部分內容。</li>
      <li>傳藝中心同意授權使用者得於下列情形利用本年鑑：<br>
(1) 透過本網站瀏覽或下載本年鑑全文，但使用者就下載之重製物僅得作為非營利之使用；<br>
(2) 為學校教學之目的於課堂上公開使用本年鑑，包括將本年鑑所含之影音素材於課堂上公開演出或公開上映，並應註明出處。</li>
      <li>除前項之授權外，使用者就本年鑑之利用應符合著作權法關於「合理使用」之規定，舉例說明如下：<br>
(1) 為報導、評論、研究或其他正當目的之必要，在合理範圍內，得引用本年鑑之內容，引用時，並應註明出處。（著作權法第五十二條參照）<br>
(2) 其他合理使用情形，均請詳參著作權法第四十四條至第六十五條之規定。</li>
      <li>著作權法第八十條之一禁止移除或變更權管理電子資訊，除符合前開條文例外非移除或變更權利管理電子資訊， 否則無法合法利用著作，或者因為錄製或傳輸系統轉換時，技術上必須要移除或變更的情況之外，本網站或本年鑑所標示之權利管理電子資訊，未經許可，不得移除或變更。</li>
      <li>若有除本聲明授權或符合著作權法有關合理使用情形以外利用本年鑑之需求，請與傳藝中心聯絡授權事宜。</li>
      <li>如您認為本網站或本年鑑內容有侵害您著作權或其他權益之情事者，請與傳藝中心聯絡，傳藝中心將儘速釐清並依法處理，以維護您的權益。</li>
    </ul>
  </section>
</template>

<script>
export default {
  name:'Home',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.know{
  width: calc(100% - 200px);
  min-height: 720px;
  max-height: 1000px;
  background: #fff;
  line-height: 1.5;
  box-shadow: 5px 7px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 100px;
}
.title{
  text-align: center;
  margin-bottom: 20px;
}
li{
  list-style:decimal;
  margin-bottom: 30px;
}
hr{
  margin-bottom: 40px;
}
@media (max-width: 576px) {
  @media (max-width: 576px) {
  h1{
    font-size:1em ; //2
  }
  h2{
    font-size:.9em ; //1.5
  }
  h3{
    font-size: .8em;
  }
  h4{
    font-size: .7em;
  }
  p,span,strong,small,b{
    font-size: 12px !important;
  }
  sup{
    font-size: 10px !important;
  }
  li{
    font-size: 12px;
  }
  .viewRight li{
    font-size: 12px;
  }
  iframe{
    width: 95%;
    height: 230px;
  }
}
.know{
  padding: 8%;
  width: auto;
  max-height: initial;
}
}
</style>
