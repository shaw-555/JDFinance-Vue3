<template>
  <panel title="slider">
    <swiper
      :class="$style.content"
      :options="swiperOptions"
      :autoPlay="true"
    >
      <swiper-slide><img src="//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320" alt=""></swiper-slide>
      <swiper-slide><img src="//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320" alt=""></swiper-slide>
      <swiper-slide><img src="//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320" alt=""></swiper-slide>
    </swiper>
  </panel>
</template>

<script>
// 使用swiper组件实现轮播
import { Swiper, SwiperSlide } from 'swiper/vue'
import panel from '../../../core/panel'
import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {  Scrollbar, A11y } from 'swiper'
SwiperCore.use([ Scrollbar, A11y])
export default {
  name: 'Homeslider',
  components: {
    panel,
    Swiper,SwiperSlide
  },
  data () {
    return {
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
      }],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoPlay: {
          autoplay: true,
          delay: 1000
        }
      }
    }
  }
}
</script>

<style scoped>  
  .swiper-container {
    height: 160px;
  }
  
  .swiper-slide {
    background-color: #fe0000;
    color: #fff;
    font-size: 50px;
    text-align: center;
  }

  img {
    width: 375px;
  }
</style>

<style lang="scss" module>
  @import "../../../assets/styles/element.scss";
  .panel{
    @include panel;
    >h4 {
      display: none;
    }
    .content {
      width: 350px;
      .img {
        width: 10% !important;
        height: 10% !important;
      }
    }
  }

</style>

