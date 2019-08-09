<template>
  <div class="cont">
    <div style="width: 100%;height: 25rpx; background-color: rgb(245,248,247);"></div>
    <div class="intro-container" :data-item="orderVal" @click="checkOrderDetail">
      <div class="intro-content">
        <div class="intro-top">
          <div class="intro-top-name">
<!--            <div class="intro-top-name-img">-->
<!--              <div style="height: 80%;width: 70%;">-->
<!--                <img style="height: 100%;width: 100%" src="/static/img/sj.png" alt=""/>-->

<!--              </div>-->
<!--            </div>-->
            <div class="intro-top-name-name">订单编号:&nbsp;&nbsp;{{orderVal.onumber}}</div>

          </div>
          <div class="intro-top-state" v-bind:class="{active: isActive}">{{payState}}</div>
        </div>
        <div class="intro-content-middle">
          <div class="intro-content-middle-content">

            <img :src="orderVal.product.pcover" style="width: 230rpx;height: 180rpx;border-radius: 8px " >
<!--            <van-icon name="clock-o" size="11"/>-->
<!--            <div style="width: 2%;"></div>-->
<!--            <div class="middle-content-text">{{orderVal.osubscribeTime}}点</div>-->
            <div style="width: 80%; margin-left: 40rpx;">
              <div style="width: 70%">{{orderVal.product.pname}}</div>
              <div class="middle-content-text">{{orderVal.address.aname}} {{orderVal.address.aaddress}}{{orderVal.address.aaddressDetail}}</div>
            </div>
            </div>

          <div class="intro-button">
            <span style="position: relative;right: 325rpx;font-weight: normal;color: rgb(160,160,160);">￥{{orderVal.ototalPrice}}</span>
            <van-button  v-if="orderVal.ostatus===1"  hairline type="warning" style="position: relative;right: 70rpx;top: -10rpx" size="small" @click="buttonClick" >{{buttonVal}}</van-button>
            <van-button  v-if="orderVal.ostatus===2" plain  hairline type="warning" style="position: relative;right: 70rpx;top: -10rpx" size="small" @click="buttonClick" >{{buttonVal}}</van-button>
            <van-button  v-if="orderVal.ostatus===3" plain   hairline type="warning" style="position: relative;right: 70rpx;top: -10rpx" size="small" @click="buttonClick" >{{buttonVal}}</van-button>
          </div>

        </div>
      </div>
    </div>
    <div style="height: 10rpx"></div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Dialog from '../../static/vant/dialog/dialog'
  export default {
    props: {
      orderVal: {
        type: Object
      }
    },
    computed: {
      ...mapState([
        'phone'
      ])
    },
    data () {
      return {
        payState: '',
        buttonVal: '',
        isActive: false
      }
    },
    mounted () {
      switch (this.orderVal.ostatus) {
        case 0:
          this.payState = '已取消'
          this.buttonVal = '联系商家'
          this.isActive = false
          break
        case 1:
          this.payState = '待付款'
          this.buttonVal = '去支付'
          this.isActive = true
          break
        case 2:
          this.payState = '已支付'
          this.buttonVal = '联系商家'
          this.isActive = false
          break
        case 3:
          this.payState = '已完成'
          this.buttonVal = '去评价'
          this.isActive = false
          break
      }
    },
    methods: {
      checkOrderDetail (e) {
        console.log('订单:', e.mp.currentTarget.dataset.item)
        this.$router.push({path: '/pages/orderDetail', query: {item: JSON.stringify(e.mp.currentTarget.dataset.item)}})
      },
      buttonClick () {
        switch (this.orderVal.ostatus) {
          case 0:
          case 2:
            Dialog.confirm({
              message: '是否拨打电话'
            }).then(() => {
              wx.makePhoneCall({
                phoneNumber: this.$store.state.phone
              })
            }).catch(() => {
            })
            break
          case 1:
            this.$router.push({path: '/pages/pay', query: {orderNo: this.orderVal.onumber}})
            break
          case 3:
            this.$router.push({path: '/pages/appraiseAdd'})
            break
        }
      }
    }
  }
</script>
<style scoped>
  .intro-container {
    margin-top: 35rpx;
    display: flex;
    justify-content: center;
  }
  .intro-content {
    width: 93%;
    padding-bottom: 7rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .intro-top {
    width: 100%;
    height: 65rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .intro-top-name {
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: row;
  }
  .intro-top-state {
    height: 100%;
    width: 14%;
    font-size: 27rpx;
    color: rgb(153,153,153);
    margin-right: -20rpx;
    font-weight: bold;
  }

  .active{
    color: rgb(254,129,75);
    font-weight: normal;
  }

  .intro-top-name-img {
    width: 15%;
    height: 100%;
  }
  .intro-top-name-name {
    width: 90%;
    height: 100%;
    font-size: 27rpx;
    color: rgb(160,160,160);
  }
  .intro-content-middle {
    padding-top: 15rpx;
    height: 170rpx;
    margin-bottom: 30rpx;
  }
  .intro-content-middle-content {
    height: 50%;
    width: 100%;
    margin-bottom: 15rpx;
    display: flex;
  }

  /*.intro-content-middle-content2 {*/
  /*  height: 40%;*/
  /*  width: 100%;*/
  /*  !*display: flex;*!*/
  /*  position: relative;*/
  /*  top: 40rpx;*/
  /*  left: 200rpx;*/
  /*}*/

  .middle-content-text {
    width: 300rpx;
    font-size: 11pt;
    color: #888;
    /*display: flex;*/
    align-items: flex-start;
    margin-top: 30rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  van-icon {
    display: flex;
    align-items: center;
  }
  .intro-button {
    width: 96.5%;
    display: flex;
    /*justify-content: flex-end;*/
    margin-top: 50rpx;
    /*margin-right: 30rpx;*/
    margin-left: 80%;
  }
</style>
