<template>
  <panel title="slider" :class="$style.panel">
    <swiper
      :class="$style.content"
      :options="swiperOptions"
      :autoPlay="true"
    >
      <swiper-slide>百万白条券免费送，速来领取！！ <em>></em></swiper-slide>
      <swiper-slide>签到领流量，1元500M！ <em>></em></swiper-slide>
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
  name: 'RiseSlider',
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


<style lang="scss" scoped>
  .swiper-container-horizontal {
    height: 40px;
    .swiper-slide {
      font-family: PingFangSC-Medium;
      font-size: 20px;
      line-height: 20px;
      margin-top: 10px;
      color: #333;
      em {
        color: #ccc;
        float: right;
        margin-right: 20px;
      }
    }
  }

</style>

<style lang="scss" module>
  @import "../../../assets/styles/element.scss";
  .panel{
    @include panel;
    margin-top: 60px;
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

