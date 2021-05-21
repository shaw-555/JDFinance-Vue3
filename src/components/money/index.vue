<template>
  <div>
    <heador/>
    <money-slider/>
    <money-ada/>
    <money-money/>
    <money-adb/>
    <money-finance/>
    <money-adc/>
    <money-footer cname="money-footer"/>
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
import MoneyFooter from './components/footer.vue'
import MoneyFinance from './components/finance.vue'
export default {
  name: 'Money',
  components: {
    navbar,
    heador,
    MoneyAda,
    MoneyAdb,
    MoneySlider,
    MoneyAdc,
    MoneyMoney,
    MoneyFooter,
    MoneyFinance
  }
}
</script>

<style lang="scss">
  @import '../../assets/styles/reset.scss';
  .money-footer {
    ul {
      li:first-child {
        display: none;
      }
    }
  }
</style>