<template>
  <div @click="click">
    <heador/>
    <panel title="hehe" :class="$style.panel"/>
    <TheFooter title="a test"/>
    <navbar />
  </div>
</template>

<script>
import panel from '../../core/panel.vue'
import navbar from '../../public/navbar.vue'
import heador from '../../public/heador.vue'
import TheFooter from './components/footer.vue'
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
    heador,
    TheFooter
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>