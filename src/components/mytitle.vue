<template>
  <div class="mytitle" @click="moreReview">
    <div style="width: 3%"></div>
    <div class="mytitle-icon"></div>
    <div style="width: 3%"></div>
    <div class="mytitle-text">{{title}}<span v-if="title=='评论'" style="color: rgb(153,153,153);font-size: 25rpx;font-weight:normal;"><span style="color: rgb(254,128,73);margin-left: 220rpx">95%好评,</span>&nbsp;&nbsp;共89个五星评价</span></div>

  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    methods: {
      moreReview () {
        this.$router.push({path: '/pages/appraise'})
      }
    }
  }
</script>
<style scoped>
  .mytitle {
    height: 55rpx;
    width: 100%;
    margin-top: 15rpx;
    margin-bottom: 15rpx;
    display: flex;
    flex-direction: row;
  }
  .mytitle-icon {
    /*width: 1.5%;*/
    border-radius: 30px;
    background-color: rgb(254,128,73);
    width: 12rpx;
    height: 40rpx;
    margin-top: 8rpx;
  }
  .mytitle-text {
    font-size: 30rpx;
    color: #353535;
    font-weight: bold;
    margin-top: 8rpx;

  }
</style>
