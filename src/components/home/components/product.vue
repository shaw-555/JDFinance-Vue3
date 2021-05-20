<template>
  <panel title="人间极品" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多尖货></div>
      <swiper
        :options="swiperOptions"
        >
        <swiper-slide>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421" />
        </swiper-slide>
        <swiper-slide>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421" />
        </swiper-slide>
        <swiper-slide>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421" />
        </swiper-slide>
        <swiper-slide>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421" />
        </swiper-slide>
      </swiper>
    </section>
  </panel>
</template>

<script>
import panel from '../../../core/panel'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {  Scrollbar, A11y } from 'swiper'
SwiperCore.use([ Scrollbar, A11y])
export default {
  name: 'HomeProduct',
  components: {
    panel,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
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
    box-sizing: border-box;
    padding: 0 12px;
  }
  
  .swiper-slide {
    /* background-color: #fe0000; */
    color: #fff;
    font-size: 50px;
    text-align: center;
  }

  img {
    width: 200px;
  }
</style>

<style lang="scss" module>
  @import "../../../assets/styles/element.scss";
  .panel {
    @include panel;
    margin-top: 20px;
    position: relative;
    .content {
      @include flex(row);
      .arrow {
        color:#333;
        position: absolute;
        right: 10px;
        top: 40px;
      }
    }
  }
</style>