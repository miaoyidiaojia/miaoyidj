<template>
  <div>
    <div class="info-top" v-if="miaoyiUser.uname !== undefined" v-bind:class="{active:  miaoyiUser.ustatus}">

      <div class="info-top-content" >
        <div class="info-top-content-tx">
          <div class="touxiang">
            <div class="tupian">
              <img style="width: 74%;height: 51%;border-radius: 50px;margin-top: 15rpx" :src="miaoyiUser.uavatar"/>
            </div>
            <div class="na">
              <div style="width: 90%;height: 80%;margin-left: -25rpx;margin-top: 30rpx">
                <div class="na-name">{{miaoyiUser.uname}}</div>
                <div class="na-tag">
                  <i-tag v-if="miaoyiUser.ustatus"
                    class="i-tags"
                    name="单个标签"
                    color="yellow">
                    尊贵VIP
                  </i-tag>
                  <i-tag v-else
                         class="i-tags"
                         name="单个标签"
                         color="yellow">
                    普通会员
                  </i-tag>
                </div>
<!--                <div class="na-point">积分:{{miaoyiUser.upoints}}</div>-->
              </div>
            </div>
          </div>
        </div>
        <div class="info-top-content-top-up" v-if="miaoyiUser.ustatus">
          <button class="top-up" @click="topup" >充值 </button>
        </div>
        <div class="info-top-content-co" v-else>
          <button class="get-points" @click="getPoints" >成为VIP ＞ </button>
        </div>

      </div>
    </div>
    <div class="info-top" v-else>
      <div class="info-top-content" >
        <div class="else-touxing">
          <div class="else-tupian">
            <img style="width: 74%;height: 51%;border-radius: 50px;margin-top: 80rpx;margin-left: 30rpx" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3489251037,1613284493&fm=15&gp=0.jpg"/>
          </div>
        </div>
        <div style="width: 10%"></div>
        <div class="na-no">
          <div @click="userGetLogin">点击登录</div>
        </div>
      </div>
    </div>
    <div class="card" v-if="miaoyiUser.uname !== undefined">
      <div style="position: absolute;left: 65%;top:5%;font-size: 20rpx; font-weight: bold;color: rgb(254,128,73);">充500送100!</div>
      <div class="card-content">

        <div>
          <div>{{miaoyiUser.upoints}}</div>
          <div>余额</div>
        </div>

        <div>
          <div>{{miaoyiUser.upoints}}</div>
          <div>卡劵</div>
        </div>

        <div>
          <div>{{miaoyiUser.upoints}}</div>
          <div>积分</div>
        </div>
      </div>
    </div>
    <div class="myorder" v-if="miaoyiUser.uname !== undefined">
      <div>我的订单</div>
      <div class="nav_list">
        <div data-index="1" @click="myRouter">
          <img src="../../static/img/me/icon_dzf.png" class="nav_icon"/>
          <div class="nav_text">待支付</div>
        </div>
        <div data-index="2" @click="myRouter">
          <img src="../../static/img/me/icon_yzf.png" class="nav_icon"/>
          <div class="nav_text">已支付</div>
        </div>
        <div data-index="3" @click="myRouter">
          <img src="../../static/img/me/icon_dpj.png" class="nav_icon"/>
          <div class="nav_text">待评价</div>
        </div>
        <div data-index="4" @click="myRouter">
          <img src="../../static/img/me/icon_ypj.png" class="nav_icon"/>
          <div class="nav_text">已评价</div>
        </div>
      </div>
    </div>
    <div class="splitBlock"></div>
    <div class="info-bottom">
      <div class="info-bottom-content">
        <titlecard :tit="t1" :url="t1url" :timeVal="t1timeVal">
         <i class="iconfont icon-weibiaoti---copy-copy"></i>
        </titlecard>
        <titlecard :tit="t2" :url="t2url">
          <i class="iconfont icon-youhui"></i>
        </titlecard>
        <titlecard :tit="t3" :url="t3url">
          <i class="iconfont icon-dizhi"></i>
        </titlecard>
        <buttoncard :tit="t4" :openType="openTypeVal">
          <i class="iconfont icon-huabankafu"></i>
        </buttoncard>
        <div class="address-card" @click="callPhone">
          <div class="address-card-back">
            <div class="address-card-icon">
              <i class="iconfont icon-rexian"></i>
            </div>
            <div class="address-text-else">
              妙尚佳热线
            </div>
            <div class="address-text-show">
            </div>
            <div class="address-card-bottom-icon">
              <i-icon type="enter" size="20" color="lightgrey"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import titlecard from '@/components/title_card'
  import buttoncard from '@/components/button_card'
  import { mapState } from 'vuex'
  import Dialog from '../../static/vant/dialog/dialog'
  export default {
    config: {
      navigationBarTitleText: '我的',
      usingComponents: {
        'i-tag': '../../static/iview/tag/index',
        'i-icon': '../../static/iview/icon/index',
        'i-button': '../../static/iview/button/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index'
      }
    },
    computed: {
      ...mapState([
        'miaoyiUser',
        'phone'
      ])
    },
    components: {
      titlecard,
      buttoncard
    },
    data () {
      return {
        t1: '我的会员',
        t1url: '/pages/member',
        t1timeVal: '充500送100!',
        t2: '我的优惠',
        t2url: '/pages/coupon?isInfo=true',
        t3: '我的地址',
        t3url: '/pages/address',
        t4: '妙尚佳客服',
        openTypeVal: 'contact'
      }
    },
    mounted () {

    },
    methods: {
      getPoints () {
        // Dialog.alert({
        //   message: '积分只在会员充值时赠送,充值多少送多少积分'
        // }).then(() => {
        //   // on close
        // })
        this.$router.push({path: '/pages/member'})
      },
      topup () {
        this.$router.push({path: '/pages/topup'})
      },
      myRouter (e) {
        this.$router.push({path: '/pages/order', isTab: true, query: {actives: e.mp.currentTarget.dataset.index}})
      },
      callPhone () {
        Dialog.confirm({
          message: '是否拨打电话'
        }).then(() => {
          wx.makePhoneCall({
            phoneNumber: this.$store.state.phone
          })
        }).catch(() => {
        })
      },
      userGetLogin () {
        this.$router.push({path: '/pages/authorize'})
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../static/assets/iconfont.css";

  .info-top {
    width: 100%;
    height: 425rpx;
    display: flex;
    align-items: center;
    margin-bottom: 15rpx;
    background-image: url(../../static/img/me/bg_mybg.png);
    /*border-bottom: 1px solid whitesmoke;*/
  }
  .active {
    background-image: url(../../static/img/me/bg_mybg_vip.png);
  }
  .info-top-content {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: -150rpx;
  }
  .info-top-content-tx {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
  }
  .info-top-content-co {
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .info-top-content-top-up{
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .top-up{
    width: 55%;
    height: 70rpx;
    border: 1px solid rgb(145,116,52);
    border-radius: 40px;
    margin-left: 100rpx;
    color: rgb(200,155,36);
    font-size: 30rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100rpx;
    background: none;
  }

  .card {
    width: 80%;
    height: 140rpx;
    background-color: white;
    color: black;
    align-items: center;
    border: 1px solid white;
    border-radius: 50px;
    box-shadow: 0rpx 20rpx 0rpx rgb(244,244,244) ;
    display: flex;
    position: relative;
    top: -155rpx;
    margin: 0px auto;
  }

  .card-content {
    width: 100%;
    justify-content: center;
  }

  .card-content > div{
    justify-content: center;
    float: right;
    align-items: center;
    margin-right: 115rpx;
  }
.card-content > div{
  margin-top: 25rpx;
}
  .card-content div div:first-of-type{
    font-size: 46rpx;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .card-content div div:last-child{
    font-size: 25rpx;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .myorder{
    width: 100%;
    margin-top: -120rpx;
  }
  .myorder > div:first-of-type {
    font-size: 35rpx;
    color: black;
    font-weight: bold;
    margin-left: 70rpx;
    margin-top: 60rpx;
  }

  /*.myorder > div:last-child {*/
  /*  margin-top: 20rpx;*/
  /*  font-size: 20rpx;*/
  /*}*/
/*.myorder div:last-child span {*/
/*  margin-left: 70rpx;*/
/*}*/

  .nav_list {
    margin-top: 30rpx;
    color: #404040;
    display: flex;
    font-size: 26rpx;
    justify-content: space-between;
    padding: 17rpx 50rpx;
    .nav_icon {
      height: 80rpx;
      margin: 0 auto;
      width: 80rpx;
      margin-bottom: 14rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav_text {
      font-size: 28rpx;
      text-align: center;
      font-weight: 300;
    }
  }

.splitBlock{
  width: 100%;
  height: 50rpx;
  background-color: rgb(245,248,247)
}
  .touxiang {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .tupian, .na {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tupian {
    width: 60%;
  }
  .na {
    width: 40%;
  }
  .na-name, .na-tag, .na-point {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: -10rpx;
  }
  .na-name {
    height: 35%;
    margin-top: 30rpx;
    font-size: 12pt;/*原来14*/
    color: white;

  }
  .na-tag {
    height: 25%;
    margin-bottom: 15rpx;
  }
  .na-point {
    height: 30%;
    font-size: 9pt;
    color: #888;
  }
  .get-points {
    width: 70%;
    height: 26%;
    font-size: 30rpx;
    color: white;
    border-radius: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: rgba(54, 54, 52, 0.36);
    margin-right: -8%;
    margin-bottom: 35%;
  }
  .info-bottom {
    display: flex;
    justify-content: center;
  }
  .info-bottom-content {
    width: 93%;
  }
  .address-card {
    height: 106rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rpx;
  }
  .address-card-back {
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 100%;
    border-bottom: 1px solid whitesmoke;
  }
  .address-text-else {
    width: 33%;
    color: #888;
  }
  .address-text-show,.address-text-else {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 13pt;
  }
  .address-text-show {
    width: 50%;
    color: red;
    justify-content: flex-end;
  }
  .address-card-icon {
    width: 7%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .address-card-bottom-icon {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .na-no {
    display: flex;
    align-items: center;
    width: 80%;
    margin-top: 30rpx;
    color: white;
  }
  .else-touxing {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .else-tupian {
    width: 80%;
    height: 90%;
  }
</style>
