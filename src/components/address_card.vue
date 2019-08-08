<template>
  <div class="address-card" @click="chooseAddress">
    <div class="address-card-back">
      <div class="address-card-icon" v-show="showVal">
<!--        <i-icon size="18" type="coordinates"/>-->
        <img src="../../static/img/placeorder/icon_location.png" style="width:40rpx;height: 40rpx">
      </div>
<!--      <div class="address-text-else">-->
<!--        服务地址-->
<!--      </div>-->
      <div v-if="addressObj.aaddress !== undefined" class="address-text">
        <div style="margin-top: 30rpx;margin-left: 20rpx">
          <span style="font-weight:bold">{{addressObj.aname}}</span> <span style="float: right">{{addressObj.amobile}}</span>
        </div>
        <div class="address-text-top">
          {{addressObj.aaddress}} {{addressObj.aaddressDetail}}
        </div>
<!--        <div class="address-text-bottom">-->
<!--         -->
<!--        </div>-->
      </div>
      <div v-else class="address-text-e">
        {{city}}
      </div>

      <div class="address-card-bottom-icon">
        <slot></slot>
      </div>
    </div>

  </div>

</template>
<script>
  export default {
    props: {
      showVal: {
        type: Boolean
      },
      addressObj: {
        type: Object
      },
      city: {
        type: String
      }
    },
    data () {
      return {
      }
    },
    methods: {
      chooseAddress () {
        this.$router.push({path: '/pages/address', query: {id: 1}})
      }
    }
  }
</script>
<style scoped>
  .address-card {
    height: 186rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .address-card-back {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  .address-text, .address-text-e {
    margin-top: 10rpx;
    width: 50%;
    height: 100%;
  }
  .address-text{
    width: 80%;
  }
  .address-text-top,.address-text-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    /*float: left;*/
  }
  .address-text-top {
    font-size: 25rpx;
    color: rgb(153,153,153);
    height: 30%;
    margin-top: 20rpx;
    margin-left: 17rpx;
  }
  .address-text-bottom {
    font-size: 11pt;
    color: #888;
    height: 50%;
  }
  .address-text-else {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 13pt;
    color: #888;
    width: 33%;
  }
  .address-card-icon {
    width: 7%;
    display: flex;
    align-items: center;
    margin-left: 40rpx;
  }
  .address-card-bottom-icon {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .address-text-e {
    width: 93%;
    font-size: 13pt;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -3rpx;
  }
</style>
