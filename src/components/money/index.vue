<template>
  <div>
    <heador/>
    <money-slider/>
    <money-ada/>
    <money-money/>
    <money-adb/>
    <money-adc/>
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
    <navbar/>
  </div>
</template>

<script>
import navbar from '../../public/navbar.vue'
import heador from '../../public/heador.vue'
import MoneyAda from './components/ada.vue'
import MoneyAdb from './components/adb.vue'
import MoneyAdc from './components/adc.vue'
import MoneySlider from './components/slider.vue'
import MoneyMoney from './components/money.vue'
export default {
  name: 'Money',
  components: {
    navbar,
    heador,
    MoneyAda,
    MoneyAdb,
    MoneySlider,
    MoneyAdc,
    MoneyMoney
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/reset.scss';
</style>