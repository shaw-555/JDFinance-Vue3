<template>
  <panel title="理财专享" :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </section>
  </panel>
</template>

<script>
import panel from '../../../core/panel'
export default {
  name: 'MoneyAdc',
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
  @import "../../../assets/styles/element.scss";
  .panel {
    @include panel;
    >h4 {
      display: none;
    }
    .content {
      img {
        width: 100%;
        display: block;
        height: 102px;
      }
    }
  }
</style>