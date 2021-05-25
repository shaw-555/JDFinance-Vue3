<template>
  <panel title="in货推荐" :class="$style.panel">
    <section :class="$style.content">
      <ul v-for="item in items" :key="item.id" :class="$style.item">
        <img :src="item.catory" alt="">
        <div v-for="obj in item.list" :key="obj.img" :class="$style.list">
          <img :src="obj.img" alt=""/>
          <div :class="$style.title">{{obj.title}}</div>
          <div :class="$style.price"><em>{{obj.price}}</em>起</div>
          <article>
            <div :class="$style.wrapper">
                <div :class="$style.inner">
                </div>
                <p>{{obj.progress}}</p>
            </div>
          </article>
        </div>
      </ul>
    </section>
  </panel>
</template>

<script>
import panel from '../../../core/panel.vue'
export default {
  name: 'RiseIn',
  data () {
    return {
      items: [
        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
              title: '双响炮蓝牙音箱',
              price: '29.00',
              progress: 172
            },
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
              title: '脑波相机',
              price: '998.00',
              progress: 259
            }
          ]
        },
        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
              title: '智能电动牙刷',
              price: '19.00',
              progress: 481
            },
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
              title: '烟草加热电子烟',
              price: '258.00',
              progress: 105
            }
          ]
        },
        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
              title: '赖公高淮封藏老酒',
              price: '99.00',
              progress: 199
            },
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
              title: '泗洪花雕醉蟹',
              price: '58.00',
              progress: 222
            }
          ]
        }
      ]
    }
  },
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
@import "../../../assets/styles/element.scss";

.panel {
  @include panel;
  height: 100%;
  position: relative;
  .content {
    .item {
      padding: 5px;
      width: 100%;
      img {
        width: 95%;
      }
      .list {
        display: inline-block;
        text-align: center;
        width: 50%;
        box-sizing: border-box;
        background-color: rgba(0,0,0, 0.02);
        img {
          margin-top: 10px;
          width: 104px;
          height: 104px;
          margin: 22px auto 10px
        }
        .title {
          color: #444;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 20px;
        }
        .price {
          em {
            color:red;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 15px;
            &::before {
              content:"￥";
            }
          }
          color: #444;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 17px;
        }
        article {
          @include flex(row);
          background-color: #F6E6E6;
          margin-top: 15px;
          .wrapper{
            width: 72px;
            height: 5px;
            background-color: red;
          }
          p {
            height: 15px;
            line-height: 15px;
            font-size: 15px;
            position: relative;
            margin-right: -125px;
          }
        }
      }
    }
  }
}
</style>
