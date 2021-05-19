<template>
  <div :class="$style.panel">
    <!-- <router-link :to="{ name: 'home'}" tag="div"> -->
    <div>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66" alt="">
      <p>首页</p>
     </div> 
    <!-- </router-link> -->
    <!-- <router-link :to="{ name: 'money'}" tag="div"> -->
    <div>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="">
      <p>理财</p>
    </div>
    <!-- </router-link> -->
    <!-- <router-link :to="{ name: 'ious'}" tag="div"> -->
    <div>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
      <p>白条</p>
    </div>
    <!-- </router-link> -->
    <!-- <router-link :to="{ name: 'rise'}" tag="div"> -->
    <div>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66" alt="">
      <p>众筹</p>
    </div>
    <!-- </router-link> -->
    <!-- <router-link :to="{ name: 'home'}" tag="div"> -->
    <div>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
      <p>我的</p>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" module>
  @import '../assets/styles/element.scss';
  .panel {
    @include flex(row);
    position: fixed;
    bottom: 0;
    // 参考学习到的代码
    left: 0;
    right: 0;
    //
    width: 100%;
    height: 70px;
    z-index: 100;
    background-color: #fff;
    div {
      // 可以通过 justify-content: space-around 来实现等距，
      // 但是会改变现有dom结构
      //justify-content: space-around;
      width: 20%;
      text-align: center;
      img {
        box-sizing: border-box;
        margin-top: 10px;
        width: 40px;
        height: 40px;
      }
      p {
        height: 20px;
        line-height: 20px;
        font-size: 20px;
      }
    }
  }
</style>
