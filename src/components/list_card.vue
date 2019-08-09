<template>
  <div class="list-card" @click="goToDetails(item)">
    <div class="hot-div"><span>单项优惠</span></div>
    <div class="list-card-img">
      <img style="width: 100%;height: 100%" mode="aspectFill" :src="item.pcover" alt=""/>
    </div>
    <div class="list-card-tit">{{item.pname}}</div>
    <div>
      <span class="list-card-pr"><span style="color: rgb(182,182,182)">现价：</span>{{item.pprice}} </span>
      <span class="list-card-pi"><span style="color: rgb(182,182,182)">原价：</span>{{item.poriginalPrice}} </span>
    </div>
<!--    <div class="list-card-pi">原价：{{item.poriginalPrice}}</div>-->
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      ...mapMutations([
        'saveProductInfo'
      ]),
      goToDetails (item) {
        this.saveProductInfo(item)
        this.$router.push({path: '/pages/details'})
      }
    }
  }
</script>
<style scoped>
  .list-card {
    width: 48%;
    height: 310rpx;
    margin-bottom: 30rpx;
    background-color: white;
    border-radius: 10px;
  }
  .list-card-img {
    height: 53%;
    width: 85%;
    margin-top: 30rpx;
    margin-left: 27rpx;
  }
  .list-card-tit {
    height: 15%;
    font-size: 11pt;
    color: #353535;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow:hidden;
    margin-top: 12rpx;

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
    position: absolute;
    margin-top: 55rpx;
    margin-left: 26rpx;
  }

  .hot-div > span{
    display: inline-block;
    margin-left: 13rpx;
    margin-top: 6rpx;
    justify-content: center;
    align-items: center;
    vertical-align: center;
  }
  .list-card-pr,.list-card-pi {
    height: 10%;
    font-size: 11pt;
    color: rgb(254,128,73);
    margin-top: 10rpx;
  }
  .list-card-pi {
    text-decoration: line-through;
  }
  .list-card-pr,.list-card-pi,.list-card-tit {
    /*width: 100%;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    margin-left: 20rpx;
  }
</style>
