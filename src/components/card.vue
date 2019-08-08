<template>
  <div class="contain" @click="goInfo(info)">
    <div class="imgg">
      <img style="width: 80%;height: 80%;border-radius: 10px;margin-top: 30rpx;margin-left: 30rpx" :src="info.pcover" mode="aspectFill" alt=""/>
    </div>
    <div style="width: 5%"></div>
    <div class="content">
      <div class="content_ti">{{info.pname}}</div>
      <div class="hot-div" style=" margin-top: 5rpx;margin-left: -1rpx"><span>全场满减</span></div>
      <div class="hot-div" style="margin-top: 5rpx;margin-left: 115rpx"><span>单项优惠</span></div>

      <div class="content_price">
        <div class="pri">
          <span style="align-self: flex-end">￥</span>
          <span style="font-size: 30rpx;">{{info.pprice}}</span>
<!--          <span style="align-self: flex-end">元</span>-->
        </div>
        <div class="po"><span style="color: #888888;">原价:&nbsp;</span>￥{{info.poriginalPrice}}</div>
        <div class="com">好评率99%</div>
      </div>
      <div class="content_info">{{info.pintroInfo}}</div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      info: {
        type: Object
      }
    },
    methods: {
      ...mapMutations([
        'saveProductInfo'
      ]),
      goInfo (info) {
        this.saveProductInfo(info)
        this.$router.push({path: '/pages/details'})
      }
    }
  }
</script>

<style scoped>
  .contain {
    margin-top: 10rpx;
    margin-bottom: 30rpx;
    height: 265rpx;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    border-radius: 10px;
  }
  .imgg {
    width: 40%;
    height: 100%;
    border-radius: 10px;
  }
  .content {
    width: 65%;
    height: 90%;
    margin-top: 20rpx;
  }
  .content_ti,.content_info{
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow:hidden;

  }
  .content_ti {
    height: 20%;
    font-size: 30rpx;
    font-weight: 500;
    white-space: nowrap;
  }
  .content_info {
    height: 50%;
    font-size: 23rpx;
    color: rgb(195,195,195);
    margin-top: 13rpx;
  }
  .content_price {
    height: 24%;
    width: 100%;
    display: flex;
    flex-direction: row;
    /*justify-content: space-between;*/
    margin-top: 30rpx;
  }

  .hot-div{
    width: 105rpx;
    height: 30rpx;
    color: white;
    font-size: 19rpx;
    background-color: rgb(254,128,73);
    margin-left: 30rpx;
    border-top-left-radius: 15rpx;
    border-bottom-right-radius: 15rpx;
    position: absolute;

  }

  .hot-div > span{
    display: inline-block;
    margin-left: 15rpx;
    margin-top: 3rpx;
  }
  .pri,.po,.com {
    display: flex;
    align-self: flex-end;
    font-size: 23rpx;
  }
  .po,.com {
    margin-left: 26rpx;
    margin-top: 35rpx;
  }

  .pri {
    color: rgb(254,128,73);
  }
  .po {
    color: rgb(254,128,73);
    text-decoration: line-through;
  }
  .com {
    color: #888888;
  }
</style>
