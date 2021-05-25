<template>
  <panel title="每日" :class="$style.panel">
    <section :class="$style.content">
       <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
      </div>
      <div :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '../../../core/panel'
export default {
  name: 'RiseMore',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
    @import "../../../assets/styles/element.scss";

    .panel{
    @include panel;
    height: 135px;
    margin-bottom: 70px;
    position: relative;
    &:before{
      content:'专享福利';
      position: absolute;
      right: 25px;
      top: 25px;
      font-size: 13px;
      color: #666;
    }
    .content {
      @include flex(row);
      justify-content: space-between;
      background-color: #fff;
      .item {
        width: 30%;
        img {
          width: 95%;
        }
      }
    }
  }
</style>