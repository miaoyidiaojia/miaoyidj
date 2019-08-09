<template>
  <div>
    <div class="coupon-item">
      <div class="coupon-item-con" v-bind:class="{active:couponItem.cstatus===2}">
        <div class="coupon-item-info">
          <div class="item-left"></div>
          <div class="coupon-item-ti">
<!--            <div class="coupon-title">{{couponItem.cname}}</div>-->
            <div v-if="couponItem.cstatus === 1" class="coupon-title" style="color: rgb(236,138,94)">{{couponItem.cvalue}}&nbsp;<span style="font-weight: normal;font-size: 26rpx;margin-left: -6rpx;margin-top: 32rpx;color: rgb(236,138,94)">元</span></div>
            <div v-if="couponItem.cstatus === 2" class="coupon-title">{{couponItem.cvalue}}&nbsp;<span style="font-weight: normal;font-size: 26rpx;margin-left: -6rpx;margin-top: 32rpx">折</span></div>
            <div class="coupon-text">有效期:{{couponItem.caging}}</div>
            <div class="coupon-text" style="margin-top: -20rpx;height: 28%;color: rgb(204,204,204)">最终解释权归本店所有</div>
          </div>
          <div class="coupon-item-to">
            <div>
              <button v-if="couponItem.cstatus === 1" style="color: rgb(236,138,94);border: 1px solid rgb(236,138,94);" class="in" @click="onClickCoupon" >{{buVal}}</button>
              <button v-if="couponItem.cstatus === 2" class="in" @click="onClickCoupon" >{{buVal}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      couponItem: {
        type: Object
      },
      buContro: {
        type: Boolean
      }
    },
    mounted () {
      if (this.buContro) {
        this.buVal = '使用'
      } else {
        this.buVal = '选择'
      }
    },
    data () {
      return {
        buVal: ''
      }
    },
    methods: {
      ...mapMutations([
        'saveCouponInfo'
      ]),
      onClickCoupon () {
        if (this.buContro) {
          this.$router.push({path: '/pages/index', isTab: true})
        } else {
          this.saveCouponInfo(this.couponItem)
          this.$router.back(-1)
        }
      }
    }
  }
</script>
<style scoped>
  .coupon-item {
    height: 325rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
  }

  .coupon-item-con {
    height: 80%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../../static/img/coupon/pic_dxyhq.png);
  }

  .active{
    background-image: url(../../static/img/coupon/pic_mjq.png);
  }

  .coupon-item-info {
    height: 80%;
    width: 90%;
    display: flex;
    flex-direction: row;
  }
  .coupon-item-ti {
    width: 60%;
    height: 100%;
    border-right: 1px dashed whitesmoke;
    position: relative;
    left: 100rpx;
  }
  .coupon-item-to {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 122rpx;
  }
  .in {
    height: 53rpx;
    width: 135rpx;
    background-color: white;
    font-size: 34rpx;
    color: rgb(240,175,62);
    display: flex;
    align-items: center;
    border: 1px solid rgb(240,175,62);
    justify-content: center;
    margin-right: -70rpx;
  }
  .coupon-text,.coupon-title {
    width: 90%;
    display: flex;
    align-items: center;
  }
  .coupon-title {

    height: 40%;
    font-size: 60rpx;
    color: rgb(240,175,62);
    font-weight: bold;
    position: relative;
    top: 30rpx;
  }
  .coupon-text {
    height: 33%;
    font-size: 23rpx;
    color: #888;
    font-weight: 300;
    margin-top: 25rpx;
  }
  .coupon-zhekou {
    font-size: 15pt;
    font-weight: bold;
    text-align: center;
    color: red;
  }
</style>
