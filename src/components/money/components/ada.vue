<template>
  <panel title="满减神卷" :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
    </section>
  </panel>
</template>

<script>
import panel from '../../../core/panel'
export default {
  name: 'HomeAda',
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
        height: 120px;
      }
    }
  }
</style>