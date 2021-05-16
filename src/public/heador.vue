<template>
  <div class="header">
    <!-- header 下 left 和 btnDownload 结构 中间为backgroun image -->
    <span class="left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
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
    height: 100px;
    line-height: 100px;
    // 使header固定在正上方
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // 设置字体大小为32px
    font-size: 32px;
    // 设置组件整体的图片，使图片以外背景为白色，设置京东logo图片，使图片上下左右居中 ，禁止图片重复
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    // 使图片居中
    background-size: auto 50%;
    // 提升Z坐标，避免被其他组件覆盖
    z-index: 100;
    .left{
      font-size: 28px;
      // 确保文字垂直居中
      height: 30px;
      line-height: 30px;
      margin: 0 0 0 18px;
    }
    .btnDownload{
      // 右浮动，实现左中右布局
      float: right;
      font-size: 24px;
      border-width: 0;
      // 使文字垂直居中
      height: 56px;
      line-height: 56px;
      // 设置最低宽度
      min-width: 120px;
      // 所有内边距为零
      padding: 0;
      // 设边半径为 4px
      border-radius: 4px;
      // 上边距28px，右边距24px 其他零，达成与屏幕边框的距离感
      margin: 28px 24px 0 0;
    }

  }
</style>
