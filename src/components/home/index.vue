<template>
  <div>
    <heador/>
    <home-slider/>
    <home-Ada/>
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
import HomeAda from './components/ada.vue'
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
    HomeAda,
    HomeSlider
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>