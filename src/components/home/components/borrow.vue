<template>
  <panel title="极速借贷" :class="$style.panel">
    <section :class="$style.content">
        <img @click="toHome" src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
    </section>
  </panel>
</template>

<script>
import panel from '../../../core/panel'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    console.log(router)
    const toHome = () => {
      router.push("/money")
    }
    return {
      toHome
    }
  },
  name: 'HomeBorrow',
  components: {
    panel
  }
}

</script>

<style lang="scss" module>
  @import "../../../assets/styles/element.scss";
  .panel {
    @include panel;
    height: 50px;
    .content {
      margin-top: -30px;
      img {
        width: 100%;
        display: block;
        height: 120px;
      }
    }
  }
</style>