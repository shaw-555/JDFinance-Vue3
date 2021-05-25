<template>
  <div class="wrapper">
    <heador/>
    <ious-slider/>
    <ious-service/>
    <ious-welfare/>
    <ious-footer/>
    <navbar />
  </div>
</template>

<script>
//import panel from '../../core/panel.vue'
import heador from '../../public/heador.vue'
import navbar from '../../public/navbar.vue'
import IousFooter from './components/footer.vue'
import IousService from './components/service.vue'
import IousWelfare from './components/welfare.vue'
import IousSlider from './components/slider.vue'

export default{
  name: 'Thehome',
  components: {
    //panel,
    navbar,
    heador,
    IousFooter,
    IousService,
    IousWelfare,
    IousSlider
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>