<template>
  <div v-if="show" class="preface">
    <div class="title">
      <h2>傳統音樂</h2>
      <span @click="close" class="cross">
        <img width="20" src="./../../../assets/cross.png" />
      </span>
    </div>
    <!-- <hr> -->
    <!-- <p class="firstRow"></p> -->
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《2021臺灣音樂年鑑》年度活動觀察與評介－傳統音樂篇，著重於考察各類傳統音樂在其原生環境的活動情形，觀察存見於生態場域的傳承發展現狀；共包含南管音樂、北管音樂、福佬歌謠、客家音樂、原住民音樂、佛教、道法釋教、釋奠樂領域之11篇專文，由專家學者針對其觀察活動之成果撰寫年度評介，期能對臺灣現階段的常民生活、民間團體活動、傳統信仰和文化娛樂生活等面向深入書寫，呈現2021臺灣音樂活動之實質樣貌。傳統音樂篇子領域劃分，如下表所示：</p>
<table rules="all" border="1" style="border:1px solid" cellpadding="5">
<tbody>
<tr>
<td rowspan="12" width="85">
<p>傳統音樂</p>
</td>
<td colspan="2" width="312">
<p>族群/分項</p>
</td>
<td width="245">
<p>樂種/樂類</p>
</td>
</tr>
<tr>
<td rowspan="7" width="95">
<p>漢族音樂</p>
</td>
<td rowspan="3" width="217">
<p>福佬音樂</p>
</td>
<td width="245">
<p>南管音樂</p>
</td>
</tr>
<tr>
<td width="245">
<p>北管音樂</p>
</td>
</tr>
<tr>
<td width="245">
<p>福佬歌謠</p>
</td>
</tr>
<tr>
<td colspan="2" width="463">
<p>客家音樂</p>
</td>
</tr>
<tr>
<td rowspan="3" width="217">
<p>宗教與祀典音樂</p>
</td>
<td width="245">
<p>佛教音樂</p>
</td>
</tr>
<tr>
<td width="245">
<p>道、法、釋教音樂</p>
</td>
</tr>
<tr>
<td width="245">
<p>釋奠樂</p>
</td>
</tr>
<tr>
<td rowspan="4" width="95">
<p>原住民音樂</p>
</td>
<td colspan="2" width="463">
<p>賽夏族、阿美族、卑南族、雅美（達悟）族</p>
</td>
</tr>
<tr>
<td colspan="2" width="463">
<p>泰雅族、太魯閣族、鄒族、撒奇萊雅族</p>
</td>
</tr>
<tr>
<td colspan="2" width="463">
<p>排灣族、魯凱族、卡那卡那富族、拉阿魯哇族、平埔族</p>
</td>
</tr>
<tr>
<td colspan="2" width="463">
<p>邵族、布農族、噶瑪蘭族、賽德克族</p>
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
