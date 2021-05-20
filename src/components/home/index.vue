<template>
  <div class="wrapper">
    <heador/>
    <home-slider/>
    <home-novice/>
    <home-borrow/>
    <home-money/>
    <home-product/>
    <home-life/>
    <TheFooter title="a test"/>
    <navbar />
  </div>
</template>

<script>
//import panel from '../../core/panel.vue'
import Bscroll from 'better-scroll'
import navbar from '../../public/navbar.vue'
import heador from '../../public/heador.vue'
import HomeSlider from './components/slider.vue'
import HomeNovice from './components/novice.vue'
import HomeBorrow from './components/borrow.vue'
import HomeMoney from './components/money.vue'
import HomeProduct from './components/product.vue'
import HomeLife from './components/life.vue'
import TheFooter from './components/footer.vue'
import { onMounted } from 'vue'

export default{
  name: 'Thehome',
  setup(prop){
    const click = () => {
      alert(1);
      console.log(prop)
    }
    onMounted(() => {
        let  bscroll = new Bscroll((document.querySelector('.wrapper')), {
          scrollX: true,
          probeType: 3,
          click: true
      })
      console.log(bscroll)
    })
    return {
      click,
      onMounted
    }
  },
  components: {
    //panel,
    navbar,
    heador,
    TheFooter,
    HomeSlider,
    HomeNovice,
    HomeBorrow,
    HomeProduct,
    HomeLife,
    HomeMoney
  }

}
</script>

<style lang="scss" module>
  @import '../../assets/styles/reset.scss';
</style>