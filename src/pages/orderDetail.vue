<template>
  <div>
    <div class="order-detail-top" v-bind:class="{'order-detail-quxiao':orderItem.ostatus === 0,'order-detail-yizhifu':orderItem.ostatus === 2}">
      <div class="order-detail-top-content" style="border-bottom: 1px solid rgb(242,242,242);padding-top: 15rpx;padding-bottom: 15rpx">
        <div class="order-detail-top-state">订单状态:</div>
        <div v-if="orderItem.ostatus === 1" style="color:rgb(254,129,75);" class="static">未支付</div>
        <div v-if="orderItem.ostatus === 2" style="color: rgb(99,179,246);" class="static">已支付</div>
        <div v-if="orderItem.ostatus === 3" style="color:#09BB07;" class="static">已完成</div>
        <div v-if="orderItem.ostatus === 0" style="color:rgb(153,153,153);" class="static">已取消</div>
      </div>
    </div>
<!--    <div style="height: 25rpx;background-color: whitesmoke"></div>-->
    <ordercard :orderObj="productItem"/>
    <div style="height: 25rpx;background-color: whitesmoke"></div>
    <div class="order-detail">
      <div class="order-detail-info">
<!--        <div class="order-detail-info-title">详细信息</div>-->
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">服务方式:</div>
          <div class="order-detail-info-con-te">上门服务</div>
        </div>
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">订单编号:</div>
          <div class="order-detail-info-con-te">{{orderItem.onumber}}</div>
        </div>
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">预约时间:</div>
          <div class="order-detail-info-con-te">{{orderItem.osubscribeTime}}点</div>
        </div>
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">服务地址:</div>
          <div class="order-detail-info-con-te" style="margin-top: -15rpx">{{addressItem.aaddress}}{{addressItem.aaddressDetail}}</div>
        </div>
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">下单时间:</div>
          <div class="order-detail-info-con-te">{{orderItem.ocreateTime}}</div>
        </div>
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">订单总价:</div>
          <div class="order-detail-info-con-te">{{orderItem.ototalPrice}}</div>
        </div>
        <div class="order-detail-info-con">
          <div class="order-detail-info-con-ti">联系人:</div>
          <div class="order-detail-info-con-te">{{addressItem.aname}}  {{addressItem.amobile}}</div>
        </div>
        <div class="order-detail-pay">
<!--          <span style="font-weight: bold">实际支付:</span>&nbsp;&nbsp;<span style="color: red">{{orderItem.opayPrice}}元</span>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ordercard from '@/components/order_card'
  export default {
    config: {
      navigationBarTitleText: '订单详情',
      usingComponents: {
        'i-tag': '../../static/iview/tag/index'
      }
    },
    components: {
      ordercard
    },
    mounted () {
      let r = JSON.parse(this.$route.query.item)
      this.orderItem = r
      this.productItem = r.product
      this.addressItem = r.address
    },
    data () {
      return {
        stateVal: 0,
        orderItem: {},
        productItem: {},
        addressItem: {}
      }
    }
  }
</script>
<style scoped>
  .order-detail {
    display: flex;
    justify-content: center;
  }
  .order-detail-top {
    padding-top: 10rpx;
    height: 55rpx;
    display: flex;
    justify-content: center;
    margin-bottom: 25rpx;
    border-top: 4px solid rgb(254,129,75);
  }

  .order-detail-quxiao{
    border-color: rgb(153,153,153);
  }

  .order-detail-yizhifu{
    border-color: rgb(99,179,246);
  }

  .order-detail-top-content {
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .order-detail-top-state {
    font-size: 30rpx;
    color: rgb(102,102,102);
    font-weight: bold;
  }
  .static {
    font-size: 30rpx;
    font-weight: bold;
  }
  .order-detail-info {
    width: 90%;
  }
  .order-detail-info-title {
    height: 95rpx;
    font-size: 13pt;
    color: #353535;
    display: flex;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    font-weight: bold;
  }
  .order-detail-info-con {
    margin-top: 20rpx;
    height: 60rpx;
    font-size: 11pt;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(242,242,242);
    padding-bottom: 15rpx;
    padding-top: 10rpx;
  }
  .order-detail-info-con-ti {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .order-detail-info-con-ti {
    width: 26%;
    color: #888;
  }
  .order-detail-info-con-te {
    width: 74%;
    text-align: right;
  }
  .order-detail-pay {
    margin-top: 25rpx;
    font-size: 9pt;
    display: flex;
    justify-content: flex-end;
    /*height: 50rpx;*/
    /*background-color: rgb(245,248,247);*/
  }
</style>
