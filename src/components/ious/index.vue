<template>
  <div class="wrapper">
    <heador/>
    <navbar />
  </div>
</template>

<script>
//import panel from '../../core/panel.vue'
import heador from '../../public/heador.vue'
import navbar from '../../public/navbar.vue'

export default{
  name: 'Thehome',
  components: {
    //panel,
    navbar,
    heador
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>