<template>
  <div class="all">
    <div class="top">
      <div style="width: 100rpx;height: 100rpx;position: relative;left: 80rpx;top:40rpx;">
        <img src="../../static/img/topup/pic_shoplogo.png" style="width: 100rpx;height: 100rpx;">
      </div>
      <div style="width: 150rpx;height: 140rpx;position: relative;left:490rpx;top:-47rpx;">
        <img src="../../static/img/topup/pic_shoplogobg.png" style="width: 150rpx;height: 140rpx;">
      </div>
      <span style="position: relative;left: 380rpx;top: -175rpx;color: rgb(180,150,93)">妙尚佳 尊贵VIP</span>
      <div class="cards">
        <div class="cardtext">余额:<span style="color: rgb(194,162,99)">{{user.umemberMoney}}</span></div>
        <div class="cardtext">卡号:<span>{{}}</span></div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-title">请选择充值金额</div>
      <div class="bottom-card">
<!--        isActive ? active : weiActive-->
        <span class="card" ref="c1" v-bind:class="{ active:isActive1}" @click="selectedmoney('c1')"><p>200元<span>/送50元</span></p></span>
          <span class="card" ref="c2" v-bind:class="{ active:isActive2}" style="margin-left: 83rpx" @click="selectedmoney('c2')"><p>300元<span>/送100元</span></p></span>
          <span class="card" ref="c3" v-bind:class="{ active:isActive3}" @click="selectedmoney('c3')"><p>500元<span>/送200元</span></p></span>
          <span class="card" ref="c4" v-bind:class="{ active:isActive4}" style="margin-left: 83rpx" @click="selectedmoney('c4')"><p>1000元<span>/送400元</span></p></span>
      </div>
      <div class="inputmoney">
        <span>自定义金额:</span>
        <input type="text" placeholder="请输入金额" name="money" v-model="money">
      </div>

      <div class="chongzhi">
        <span>充值</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .all{
    width: 90%;
    margin: 0px auto;
  }
  .top{
    width: 100%;
    height: 400rpx;
    border-radius: 7px;
    background-image: url(../../static/img/topup/bg_memberCard.png);
  }
  .bottom{
    width: 100%;
    margin-top: 80rpx;
  }
  .bottom-title{
    font-weight: bold;
    font-size: 32rpx;
    margin-top: 30rpx;
  }

  .bottom-card{
    width: 100%;
    margin-top: 45rpx;
  }
  .card{
    display: inline-block;
    width: 290rpx;
    height: 80rpx;
    border: 1px solid rgb(204,204,204);
    text-align: center;
    color: rgb(127,127,127);
    font-size: 30rpx;
    margin-top: 37rpx;
  }

  .cards {
    margin-left: 80rpx;
    position: relative;
    top: -70rpx;
  }
  .cardtext{
    font-size: 37rpx;
    margin-top: 20rpx;
    color: rgb(134,114,76);
  }

  .cardtext > span {
    margin-left: 20rpx;
    margin-top: 2rpx;
    position: relative;
    top: 2rpx;
  }

  .card > p{
    margin-top: 20rpx;
  }
.active {
  border: 1px solid rgb(254,128,73);
}

.weiActive{
  border: 1px solid rgb(204,204,204);
}
  .card  span{
    font-size: 30rpx;
    color: rgb(254,147,106);
  }

  .inputmoney{
    margin-top: 50rpx;
    width: 100%;
    height: 80rpx;
    background-color: rgb(245,248,247);
    border: 1px solid rgb(204,204,204);
    border-radius: 3px;
  }

  .inputmoney > span {
    position: relative;
    top: 15rpx;
    left: 20rpx;
  }

  .inputmoney > input{
    width: 60%;
    text-align: right;
    float: right;
    margin-top: 19rpx;
    margin-right: 30rpx;
  }

  .chongzhi{
    margin-top: 110rpx;
    width: 100%;
    height: 105rpx;
    background-color: rgb(254,137,86);
    text-align: center;
    border-radius: 6px;
  }

  .chongzhi > span {
    font-weight: bold;
    font-size: 30rpx;
    color: white;
    position: relative;
    top: 30rpx;
  }
</style>
<script>
    import api from '@/api/index'
    import { mapState } from 'vuex'
    export default {
      config: {
        navigationBarTitleText: '充值'
        // usingComponents: {
        //     'i-button': '../../static/iview/button/index',
        //     'van-icon': '../../static/vant/icon/index'
        // }
      },
      computed: {
        ...mapState([
          'miaoyiUser'
        ])
      },
      data () {
        return {
          money: 0,
          isActive1: false,
          isActive2: false,
          isActive3: false,
          isActive4: false,
          user: {}
        }
      },
      mounted () {
        this.getUser()
      },
      methods: {
        async getUser () {
          const res = await api.getUserDetail(this.$store.state.miaoyiUser.uopenid)
          if (res.code === 1) {
            this.user = res.data
          }
        },
        selectedmoney (ele) {
          // eslint-disable-next-line eqeqeq
          // eslint-disable-next-line eqeqeq
          if (ele === 'c1') {
            this.isActive1 = !this.isActive1
            this.isActive2 = false
            this.isActive3 = false
            this.isActive4 = false
            this.money = 200
          }
          // eslint-disable-next-line eqeqeq
          if (ele === 'c2') {
            this.isActive2 = !this.isActive2
            this.isActive1 = false
            this.isActive3 = false
            this.isActive4 = false
            this.money = 300
          }
          // eslint-disable-next-line eqeqeq
          if (ele === 'c3') {
            this.isActive3 = !this.isActive3
            this.isActive2 = false
            this.isActive4 = false
            this.isActive1 = false
            this.money = 500
          }
          // eslint-disable-next-line eqeqeq
          if (ele === 'c4') {
            this.isActive4 = !this.isActive4
            this.isActive2 = false
            this.isActive3 = false
            this.isActive1 = false
            this.money = 1000
          }
        }
      }
    }
</script>
