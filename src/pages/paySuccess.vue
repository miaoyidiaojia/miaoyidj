<template>
  <div>
    <div class="top">
      <img src="../../static/img/paysuccess/icon_welldone.png" style="width: 60rpx;height: 60rpx;position: relative;left: 47%;margin-top: 80rpx">
      <div>支付成功!</div>
    </div>

    <div class="bottom-content">

    <div class="middle">
      <span>499</span>
      <div>支付完成，本次消费将返还积分<span></span>,可抵扣45元现金</div>
    </div>

    <div class="bottom">

        <span class="returnindex" @click="returnindex1"><p>返回首页</p></span>
        <span style="display: inline-block;width: 50rpx;height: 80rpx"></span>
        <span class="returnorder" @click="returnorder">
          <p>查看订单</p>
        </span>

    </div>

    <div class="anquantixing">
      <img src="../../static/img/paysuccess/icon_03.png" style="width: 30rpx;height: 30rpx">
      <span>
      安全提醒:&nbsp;妙尚佳平台不会以系统维护，订单异常等任何方式向您收取额外费用。
        </span>
    </div>

    </div>
  </div>
</template>

<script>
    export default {
      config: {
        navigationBarTitleText: '支付成功'
        // usingComponents: {
        //     'i-button': '../../static/iview/button/index',
        //     'van-icon': '../../static/vant/icon/index'
        // }
      },
      methods: {
        returnindex1 () {
          this.$router.push({path: '/pages/index', isTab: true})
        },
        returnorder () {
          this.$router.push({path: '/pages/order', isTab: true})
        }
      }
    }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 250rpx;
    background-color: rgb(254,135,84);
  }

  .top > div {
    color: white;
    position: relative;
    left: 42%;
  }

  .bottom-content{
    padding-top: 50rpx;
    height: 900rpx;
    background-color: rgb(245,248,247);
  }

  .middle {
    text-align: center;
    margin-top: 50rpx;
  }

  .middle > span:first-of-type {
    font-size: 40rpx;
    color: rgb(254,128,73);
  }


  .middle > div {
    color: rgb(153,153,153);
    font-size: 25rpx;
    margin-top: 10rpx;
  }

  .bottom {
    justify-content: center;
    text-align: center;
    margin-top: 70rpx;
  }

  .returnindex,.returnorder {
    display: inline-block;
    width: 300rpx;
    height: 100rpx;
    border-radius: 5px;
    text-align: center;
  }

  .returnindex {
    border: 1px solid rgb(254,128,73);
    color: rgb(254,128,73);
  }

  .returnorder {
    border: 1px solid rgb(153,153,153);
    color: rgb(153,153,153);
  }

  .returnorder > p,.returnindex >p {
    margin-top: 30rpx;
  }

  .anquantixing {
    color: rgb(153,153,153);
    font-size: 25rpx;
    margin: 0px auto;
    width: 90%;
    margin-top: 40rpx;
  }

  .anquantixing > span{
    position: relative;
    top: -6rpx;
  }
</style>
