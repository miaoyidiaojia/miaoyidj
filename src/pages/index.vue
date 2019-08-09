<template>
  <div class="content">
    <div class="con">
      <div class="banner">
      <div class="localtion">
        <div class="city">
          <i-icon size="18" type="coordinates" style="color: white; "/>
          <div class="city-class">{{city}}</div>
        </div>
        <div class="top_font">您好，妙尚佳为您服务</div>

        </div>
      </div>
<!--      <myswiper :images="images"/>-->
      <div class="xinrenlibao">
        <div class="xinrenlibao-title">我有一个未领取礼包 ></div>
        <div data-index="1" @click="indexRouter" class="newcustomer">
        </div>
      </div>
<!--      <div class="nav_list">-->
<!--        <div data-index="1" @click="indexRouter">-->
<!--          <img src="../../static/img/new_man.png" class="nav_icon"/>-->
<!--          <div class="nav_text">新人优惠</div>-->
<!--        </div>-->
<!--        <div data-index="2" @click="indexRouter">-->
<!--          <img src="../../static/img/new_man.png" class="nav_icon"/>-->
<!--          <div class="nav_text">全场满减</div>-->
<!--        </div>-->
<!--        <div data-index="3" @click="indexRouter">-->
<!--          <img src="../../static/img/new_man.png" class="nav_icon"/>-->
<!--          <div class="nav_text">单项优惠</div>-->
<!--        </div>-->
<!--        <div data-index="4" @click="indexRouter">-->
<!--          <img src="../../static/img/new_man.png" class="nav_icon"/>-->
<!--          <div class="nav_text">会员八折</div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="tit-ti">热门服务</div>
      <div class="hot">
        <div v-for="(item,index) in hotInfo" :key="index" class="hot-con" @click="goDetails(item)">
          <div class="hot-item">
            <div class="hot-div" style="position: absolute;margin-top: 50rpx"><span>全场满减</span></div>
            <div class="hot-div" style="position: absolute;margin-top: 110rpx"><span>单项优惠</span></div>
            <img style="width: 80%;height: 48%;margin-left: 30rpx;margin-top: 40rpx" mode="aspectFill" :src="item.pcover" alt=""/>

            <span style="" class="hot-text">{{item.pname}}</span>

            <span style="color: rgb(254,128,73)" class="hot-text">已售卖:&nbsp;261人</span>

            <span style="color: rgb(254,128,73)" class="hot-text">好评率:&nbsp;99%</span>
          </div>
        </div>
      </div>
      <div class="tit-ti" style="margin-top: 250rpx">妙尚佳<span style="font-size: 30rpx;font-weight: normal;color: rgb(153,153,153);margin-left: 510rpx" @click="allproduct">更多&nbsp;></span></div>
      <div class="contro">

        <listcard v-for="(item,index) in pa" :key="index" :item="item"></listcard>
      </div>
      <div class="tit">推荐服务</div>
      <card v-for="(item,index) in info" :key="index" :info="item"/>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import card from '@/components/card'
import myswiper from '@/components/my_swiper'
import listcard from '@/components/list_card'
import api from '@/api/index'
import Details from './details'
import { mapMutations } from 'vuex'
import Toast from '../../static/vant/toast/toast'
import QQMapWX from '../../static/libs/qqmap-wx-jssdk.js'
import { APPID } from '@/utils/constant'
export default {
  mpType: 'page',
  config: {
    usingComponents: {
      'i-icon': '../../static/iview/icon/index',
      'van-popup': '../../static/vant/popup/index',
      'van-toast': '../../static/vant/toast/index'
    }
  },
  onLoad () {
    wx.getSetting({
      success: (res) => {
        if ((res.authSetting)['scope.userInfo']) {
          wx.login({
            success: (res) => {
              if (res.code) {
                this.userLogin(res.code)
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
        }
      }
    })
  },
  async mounted () {
    await Promise.all([
      this.getData()
    ])
    this.getIndexLocation()
  },
  data () {
    return {
      city: '成都',
      pa: [],
      images: [],
      hotInfo: [],
      info: []
    }
  },

  components: {
    Details,
    card,
    myswiper,
    listcard
  },

  methods: {
    ...mapMutations([
      'saveMiaoyiUser',
      'saveCity',
      'saveOpenid',

      'saveProductInfo'
    ]),
    indexRouter (e) {
      if (e.currentTarget.dataset.index === '1') {
        this.$router.push({path: '/pages/getCoupon'})
      } else {

        console.log('获取到的id：', e.currentTarget.dataset.index)

        this.$router.push({path: '/pages/discounts'})
      }
    },
    goDetails (item) {
      this.saveProductInfo(item)
      this.$router.push({path: '/pages/details'})
    },

    async getData () {
      // eslint-disable-next-line no-unused-vars
      const res = await api.getAllProduct()
      // this.pa = res.data

      const r = await api.getClassifyData()
      for (let i in r.data) {
        if (this.pa.length < 4) { this.pa.push(r.data[i].product) }
        this.info.push(r.data[i].product)
        switch (r.data[i].istatus) {
          case 1:
            this.images.push(r.data[i].product)
            break
          case 2:
            this.hotInfo.push(r.data[i].product)
            break
          case 3:
            // this.info.push(r.data[i].product)
            break
        }
      }
    },
    async userLogin (code) {
      const data = await api.wxLogin({appid: APPID, code: code})
      if (data.openid) {
        this.saveOpenid(data.openid)
        const res = await api.getUserDetail(data.openid)
        if (res.code === 1) {
          this.saveMiaoyiUser(res.data)
        }
      } else {
        Toast.fail('获取小程序openid失败')
      }
    },
    getIndexLocation () {
      const location = new QQMapWX({
        key: 'OY4BZ-MX36W-FCQR2-OWEPM-ABXKQ-ACBWZ'
      })
      wx.getSetting({
        success: (res) => {
          console.log(res.authSetting)
          if ((res.authSetting)['scope.userLocation']) {
            wx.getLocation({
              type: 'gcj02',
              success: (res) => {
                location.reverseGeocoder({
                  location: {
                    latitude: res.latitude,
                    longitude: res.longitude
                  },
                  success: (res) => {
                    this.city = res.result.address_component.street_number
                    this.saveCity(res.result.address_component.street_number)
                  },
                  fail: (err) => {
                    console.log(err)
                    Toast.fail('获取地理位置失败')
                  }
                })
              }
            })
          }
          wx.authorize({
            scope: 'scope.userLocation',
            success: () => {
              wx.getLocation({
                type: 'gcj02',
                success: (res) => {
                  location.reverseGeocoder({
                    location: {
                      latitude: res.latitude,
                      longitude: res.longitude
                    },
                    success: (res) => {
                      this.city = res.result.address_component.street_number
                      this.saveCity(res.result.address_component.street_number)
                    },
                    fail: (err) => {
                      console.log(err)
                      Toast.fail('获取地理位置失败')
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .content {
    display: flex;
    justify-content: center;
    background-color: rgb(245,248,247);
  }
  .con {
    width: 95%;
  }
.city-class{
  color: white;
  margin-left: -15rpx;
}
  .banner{
    width: 752rpx;
    height: 425rpx;
    position: relative;
    left: -20rpx;
    background-image: url(../../static/img/index/banner_p1.png);
  }

  .xinrenlibao-title{
    font-weight: bold;
  }

  .newcustomer{
    margin-top: 30rpx;
    width: 691rpx;
    height: 170rpx;
    margin-left: 10rpx;
    background-image: url(../../static/img/index/newcustomer_png.png);
  }
  .localtion {
    margin-bottom: 15rpx;
    height: 55rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .top_font {
    font-size: 25rpx;
    color: white;
    display: flex;
    opacity: 0.8;
    align-items: center;
    margin-right: 30rpx;
  }
  .tit {
    margin-top: 15rpx;
    margin-bottom: 15rpx;
    height: 55rpx;
    font-size: 36rpx;
    font-weight: 700;
  }
  .tit-ti {
    margin-top: 65rpx;
    margin-bottom: 15rpx;
    height: 55rpx;
    font-size: 32rpx;
    font-weight: 700;
    display: flex;
    align-items: center;

  }

  .hot-div{
    width: 110rpx;
    height: 40rpx;
    color: white;
    font-size: 20rpx;
    background-color: rgb(254,128,73);
    margin-left: 30rpx;
    border-top-right-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
  }

  .hot-div > span{
    display: inline-block;
    margin-left: 13rpx;
    margin-top: 7rpx;
  }

  .hot-text{
    display: block;
    font-size: 22rpx;
    font-weight: bold;
    margin-left: 30rpx;
    margin-top: 8rpx;
  }
  .city {
    display: flex;
    flex-direction: row;
    width: 50%;
    i-icon {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div {
      width: 80%;
      font-weight: 300;
      font-size: 30rpx;
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  .hot {
    height: 195rpx;
    display: flex;
    justify-content: center;
  }

  .hot-item {
    width: 100%;
    height: 400rpx;
    background-color: white;
    border-top-left-radius:20px;
    border-bottom-right-radius: 30px;
  }

  .hot-con {
    height: 100%;
    width: 48%;
    /*background-color: rebeccapurple;*/
    margin: 0px 10rpx;
    border-radius: 10px;
  }

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
  .contro {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .popup-class {
    height: 850rpx;
    width: 600rpx;
  }
</style>
