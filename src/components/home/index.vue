<template>
  <div>
    <heador/>
    <home-slider/>
    <!-- <panel title="hehe" :class="$style.panel"/> -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <TheFooter title="a test"/>
    <navbar />
  </div>
</template>

<script>
//import panel from '../../core/panel.vue'
import navbar from '../../public/navbar.vue'
import heador from '../../public/heador.vue'
import HomeSlider from './components/slider.vue'
import TheFooter from './components/footer.vue'
export default{
  name: 'Thehome',
  // setup(prop){
  //   const click = () => {
  //     alert(1);
  //     console.log(prop)
  //   }

  //   return {
  //     click
  //   }
  // },
  components: {
    //panel,
    navbar,
    heador,
    TheFooter,
    HomeSlider
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>