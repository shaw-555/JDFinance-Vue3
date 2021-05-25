<template>
  <div class="wrapper">
    <heador/>
    <navbar />
    <ious-service/>
    <ious-welfare/>
    <ious-footer/>
  </div>
</template>

<script>
//import panel from '../../core/panel.vue'
import heador from '../../public/heador.vue'
import navbar from '../../public/navbar.vue'
import IousFooter from './components/footer.vue'
import IousService from './components/service.vue'
import IousWelfare from './components/welfare.vue'

export default{
  name: 'Thehome',
  components: {
    //panel,
    navbar,
    heador,
    IousFooter,
    IousService,
    IousWelfare
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>