<template>
  <div>
    <heador/>
    <rise-slider/>
    <rise-daily/>
    <rise-in/>
    <rise-footer/>
    <navbar />
  </div>
</template>

<script>
//import panel from '../../core/panel.vue'
import heador from '../../public/heador.vue'
import navbar from '../../public/navbar.vue'
import RiseFooter from './components/footer.vue'
import RiseSlider from './components/slider.vue'
import RiseDaily from './components/daily.vue'
import RiseIn from './components/in.vue'

export default{
  name: 'Rise',
  components: {
    //panel,
    navbar,
    heador,
    RiseFooter,
    RiseSlider,
    RiseDaily,
    RiseIn
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>