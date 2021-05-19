<template>
  <div class="header">
    <!-- header 下 left 和 btnDownload 结构 中间为backgroun image -->
    <span class="left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <span class="middle">
      <img src="//m.jr.jd.com/spe/qyy/main/images/jr-logo.png" alt="">
    </span>
    <btn class="btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
  name: 'heador',
  components: {
    btn
  }
}
</script>

<style lang="scss">
  .header{
    // 使字体为灰色
    color: #666;
    // 使文字在改行居中
    height: 50px;
    line-height: 100px;
    // 使header固定在正上方
    position: fixed;
    top: 0;
    left: -200px;
    right: 0;
    // 设置字体大小为32px
    font-size: 0.1rem;
    // 设置组件整体的图片，使图片以外背景为白色，设置京东logo图片，使图片上下左右居中 ，禁止图片重复
    //background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    // 使图片居中
    //background-size: auto 50%;
    // 提升Z坐标，避免被其他组件覆盖
    z-index: 100;
    text-align: center;
    .left{
      position: relative;
      top: -20px;
      font-size: 14px;
      // 确保文字垂直居中
      height: 15px;
      line-height: 15px;
      margin: -50px 0 0 18px;
    }
    .middle{
      img {
        position: relative;
        right: -100px;
        width: 110px;
        height: 28px;
        margin: auto;
      }
    }
    .btnDownload{
      // 右浮动，实现左中右布局
      float: right;
      font-size: 12px;
      border-width: 0;
      // 使文字垂直居中
      height: 28x;
      line-height: 28px;
      // 设置最低宽度
      min-width: 60px;
      // 所有内边距为零
      padding: 0;
      // 设边半径为 4px
      border-radius: 4px;
      // 上边距28px，右边距24px 其他零，达成与屏幕边框的距离感
      margin: 10px 24px 0 0;
    }

  }
</style>
