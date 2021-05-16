<template>
  <div @click="click">
    <heador/>
    <navbar />
  </div>
</template>

<script>
import panel from '../../core/panel.vue'
import navbar from '../../public/navbar.vue'
import heador from '../../public/heador.vue'
export default{
  name: 'Thehome',
  setup(prop){
    const click = () => {
      alert(1);
    }

    return {
      click
    }
  },
  components: {
    panel,
    navbar,
    heador
  }

}
</script>

<style lang="scss">
  @import '../../assets/styles/reset.scss';
</style>