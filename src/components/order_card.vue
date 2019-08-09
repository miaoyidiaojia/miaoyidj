<template>
  <div class="order-card">
    <div class="order-content">
      <div class="order-card-img">
        <img style="height: 85%;width: 100%;border-radius: 10px" :src="orderObj.pcover" alt=""/>
      </div>
      <div style="width: 5%;height: 100%"></div>
      <div class="order-card-content">
        <div class="order-card-content-title">{{orderObj.pname}}</div>
        <div style="font-size: 25rpx;width: 500rpx;margin-top: -10rpx;color: rgb(153,153,153)">妙手关注健康，服务愉悦身心。专业上门到家，提供酒店，居家服务。</div>
<!--        <div class="order-card-content-tag">-->
<!--          <i-tag-->
<!--            class="i-tags"-->
<!--            name="单个标签"-->
<!--            color="yellow">-->
<!--            上门服务-->
<!--          </i-tag>-->
<!--        </div>-->
        <div class="order-card-content-price">￥&nbsp;{{orderObj.pprice}}</div>
      </div>
      <div class="order-card-num">
        x&nbsp;1
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      orderObj: {
        type: Object
      }
    }
  }
</script>
<style scoped>
  .order-card {
    height: 245rpx;
    display: flex;
    justify-content: center;
    margin-bottom: 25rpx;
  }
  .order-content {
    margin-top: 25rpx;
    width: 90%;
    display: flex;
    flex-direction: row;

    margin-left: -20rpx;

  }
  .order-card-img {
    width: 30%;
    height: 100%;

    margin-top: 20rpx;

  }
  .order-card-content {
    width: 45%;
    height: 100%;
  }
  .order-card-num {
    width: 20%;
    height: 20%;
    display: flex;
    align-items: flex-end;
    font-size: 35rpx;
    color: #888;
    margin-top: 170rpx;

  }
  .order-card-content-title,.order-card-content-tag,.order-card-content-price {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .order-card-content-title {
    height: 40%;

    font-size: 35rpx;
    width: 400rpx;

    color: #353535;
  }
  .order-card-content-tag {
    height: 30%;
  }
  .order-card-content-price {
    height: 30%;
    font-size: 13pt;
    color: red;

    width: 200rpx;
    margin-top: 15rpx;
    color: rgb(255,153,21);

  }
</style>
