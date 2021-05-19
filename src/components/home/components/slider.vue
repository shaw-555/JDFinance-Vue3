<template>
  <panel title="slider">
    <swiper
      :direction="horizontal"
      :class="$style.content"
      :options="swiperOptions"
      :autoPlay="true"
    >
      <swiper-slide><img src="//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400" alt=""></swiper-slide>
      <swiper-slide><img src="//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400" alt=""></swiper-slide>
    </swiper>
  </panel>
</template>

<script>
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
    height: 200px;
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

