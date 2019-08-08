<template>
  <div>
    <div class="details-img">
      <img style="height: 100%;width: 100%" :src="productInfo.pcover"/>
    </div>
    <div class="details-i">
      <div class="details-info">

        <div class="details-info-price"><span style="font-size: 45rpx">￥{{productInfo.pprice}}</span>&nbsp;&nbsp;
          <div class="original-class">原价:{{productInfo.poriginalPrice}}</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <i-tag
            class="i-tags"
            name="单个标签"
            color="red">
            一口价
          </i-tag>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i-tag
            class="i-tags"
            name="单个标签"
            color="yellow">
            上门服务
          </i-tag>
        </div>
        <div class="details-info-title">{{productInfo.pname}}</div>
        <div class="details-info-remark">{{productInfo.pintroInfo}}</div>
        <div class="details-info-review"><img src="../../static/img/productdetail/icon_safe.png" style="width: 25rpx;height: 25rpx">&nbsp;&nbsp;为了用户和技师的安全着想，22:00之后一般不提供上门服务。</div>
      </div>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title3"/>
<!--    <div class="service-info">-->
<!--&lt;!&ndash;      <div class="service-info-content">&ndash;&gt;-->
<!--&lt;!&ndash;        {{productInfo.pname}}/{{productInfo.pprice}}元&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--      <wx-parse :content="productInfo.pdetailInfo"/>-->
<!--    </div>-->
    <div style="height: 15rpx;background-color: whitesmoke"></div>
<!--    <mytitle :title="title1"/>-->
<!--    <div class="estimate">-->
<!--      <review :review="reviewInfo"/>-->
<!--    </div>-->
<!--    <div class="more-estimate">-->
<!--      <button class="more-estimate-button" @click="moreReview">查看更多</button>-->
<!--    </div>-->
    <mytitle :title="title2"/>
    <div class="estimate">
      <div class="estimate-content">
        <span>
        1、本店严格拒绝一切形式的非正规服务，举报有奖；
        </span>
        <span>
        2、订单确认后修改订单或退款需提前2小时通知；
          </span>
        <span>
        3、预约时间前两小时退款将按30元/人扣取空单费；
        </span>
        <span>
        4、如商家接单后爽约将全额退款并向您额外赔付30元;
</span>
        <span>
        5、为保障您的权益，所有费用请通过妙尚佳平台支付；
</span>
        <span>
        6、本店24小时上门服务，需向技师支付30元车费；
          </span>
<span>
        7、最终解释权归本公司所有。
  </span>
<!--        <van-collapse v-model="activeNames">-->
<!--          <van-collapse-item title="标题1" name="1">内容</van-collapse-item>-->
<!--        </van-collapse>-->
      </div>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title5"/>
    <div class="store">
      <div>
        <img src="../../static/img/productdetail/pic_shoplogo.png" style="width: 140rpx;height: 140rpx;margin-left: 30rpx">
        <span style="display: inline-block;margin-left: 30rpx;position: relative;top: -40rpx">
          <span style="font-size: 35rpx">妙尚佳到家服务</span>
          <br>
          <img src="../../static/img/productdetail/icon_shop.png" style="width: 30rpx;height: 30rpx;position: relative;top: 5rpx">
          <span style="color: rgb(155,200,239);font-size: 22rpx">企业认证</span>
        </span>
      </div>

      <div class="storebottom">
        <div>
          <div class="storebottomnum">12</div>
          <div class="storebottomtext">全部服务</div>
        </div>

        <div>
          <div class="storebottomnum">233</div>
          <div class="storebottomtext">服务次数</div>
        </div>

        <div style="border: none">
          <div class="storebottomnum">96%</div>
          <div class="storebottomtext">好评率</div>
        </div>

      </div>
    </div>

    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title4"/>
    <div style="width: 95%;margin-left: 50rpx">
      <img src="../../static/img/combo/pic_599.png" v-if="productInfo.pprice == 599" style="height: 400px">
      <img src="../../static/img/combo/pic_499.png" v-if="productInfo.pprice == 499" style="height: 400px">
      <img src="../../static/img/combo/pic_399.png" v-if="productInfo.pprice == 399" style="height: 400px">
      <img src="../../static/img/combo/pic_299.png" v-if="productInfo.pprice == 299" style="height: 400px">
      <img src="../../static/img/combo/pic_199.png" v-if="productInfo.pprice == 199"vstyle="height: 400px">
      <img src="../../static/img/combo/pic_68.png" v-if="productInfo.pprice == 68" style="height: 400px">
    </div>
    <div style="width: 90%;margin-left: 50rpx">
      <img src="../../static/img/productdetail/img_spxq_01.png">
      <img src="../../static/img/productdetail/img_spxq_02.png" style="width: 95%;height: 800px;margin-top: 20rpx">
      <img src="../../static/img/productdetail/img_spxq_03.png" style="margin-top: 20rpx">

      <div style="width: 95%">
      <wx-parse :content="productHtmlImg"/>
      </div>
    </div>

    <div style="height: 15rpx;background-color: whitesmoke"></div>
<!--    <mytitle :title="title2"/>-->
<!--    <div class="estimate">-->
<!--      <div class="estimate-content">-->
<!--        1、本店严格拒绝一切形式的非正规服务，举报有奖；<br/>-->
<!--        2、订单确认后修改订单或退款需提前两小时通知；<br/>-->
<!--        3、预约时间前两小时退款将按30元/人扣取空单费；<br/>-->
<!--        4、如商家接单后爽约将全额退款并向您额外赔付30元；<br/>-->
<!--        5、为保障您的权益，所有费用请通过妙尚佳平台支付；<br/>-->
<!--        6、本店24小时上门服务，因夜间交通不便，晚21:00-7:00之间服务的订单，-->
<!--        须向技师支付30元车费。<br>-->
<!--        7、最终解释权归本公司所有。-->
<!--      </div>-->
<!--    </div>-->
    <div class="foot">
      <button class="foot-icon" @click="callMerchant">
        <div class="foot-icon-img">
          <i-icon type="mobilephone" size="32" color="#FF9912"/>
        </div>
        <div class="foot-icon-text">热线</div>
      </button>
      <button class="foot-icon" open-type="share">
        <div class="foot-icon-img">
          <i-icon type="share" size="32" color="#FF9912"/>
        </div>
        <div class="foot-icon-text">分享</div>
      </button>
      <!---->
      <div class="foot-button">
        <div style="height: 10%"></div>
        <i-button class="foot-button" @click="placeOrder" type="error" long="true">立即预约</i-button>
      </div>
      <div style="width: 5%;background-color: white;height: 100%"></div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import mytitle from '@/components/mytitle'
  import review from '@/components/review'
  import { mapState } from 'vuex'
  import wxParse from 'mpvue-wxparse'
  import Dialog from '../../static/vant/dialog/dialog'
  import api from '@/api/index'
  export default {
    config: {
      navigationBarTitleText: '',
      usingComponents: {
        'i-icon': '../../static/iview/icon/index',
        'i-tag': '../../static/iview/tag/index',
        'i-avatar': '../../static/iview/avatar/index',
        'i-button': '../../static/iview/button/index',
        'i-rate': '../../static/iview/rate/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index'
      }
    },
    computed: {
      ...mapState([
        'phone',
        'productInfo'
      ])
    },
    components: {
      mytitle,
      review,
      wxParse
    },
    async mounted () {
      await Promise.all([
        this.getListImage(this.$store.state.productInfo.pid),
        this.getNowReview()
      ])
      wx.setNavigationBarTitle({
        title: this.$store.state.productInfo.pname
      })
    },
    data () {
      return {
        title1: '用户评价',
        title2: '订购须知',
        title3: '评论',
        title4: '商品详情',
        title5: '店铺相关',
        productHtmlImg: '',
        activeNames: ['1'],
        reviewInfo: {
          user: {
            uavatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            uname: '卡萨'
          },
          rrate: 5,
          rreviewTime: '2019-07-17 19:49:08',
          rcontent: '哈哈哈哈'
        },
        productItem: ''
      }
    },
    methods: {
      callMerchant () {
        Dialog.confirm({
          message: '是否拨打电话'
        }).then(() => {
          wx.makePhoneCall({
            phoneNumber: this.$store.state.phone
          })
        }).catch(() => {
        })
      },
      placeOrder () {
        const url = '/pages/placeOrder'
        this.$router.push(url)
      },
      moreReview () {
        this.$router.push({path: '/pages/appraise'})
      },
      async getListImage (id) {
        const res = await api.getHtmlCode(id)
        if (res.code === 1) {
          this.productHtmlImg = res.data
        }
      },
      async getNowReview () {
        const data = await api.getDetailReview()
        if (data.code === 1) {
          this.reviewInfo = data.data
        }
      }
    }
  }
</script>
<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
  .details-img {
    height: 395rpx;
    margin-bottom: 15rpx;
  }
  .details-info {
    height: 265rpx;
    width: 95%;
    margin-top: 15rpx;
  }
  .details-i {
    display: flex;
    justify-content: center;
    height: 300rpx;
  }
  .details-info-title,.details-info-review,.details-info-price,.details-info-remark {
    display: flex;
    align-items: center;
    height: 45rpx;
    width: 100%;
    margin-bottom: 10rpx;
    /*letter-spacing:1px;*/
  }
  .details-info-title {
    font-size: 35rpx;
    color: #353535;
    /*margin-bottom: 10rpx;*/
    margin-top: 20rpx;
  }
  .details-info-review {
    font-size: 9pt;
    color: #888;
    justify-content: flex-start;
  }
  .details-info-remark {
    font-size: 11pt;
    color: #888;
    flex-wrap: wrap;
    border-bottom: 1px solid rgb(242,242,242);
    height: 100rpx;
  }
  .details-info-price {
    font-size: 14pt;
    color: rgb(254,128,73);
  }
  .foot {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 5rpx;
    width: 100%;
    z-index: 9999;
    border-top: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .foot-icon {
    width: 20%;
    height: 100%;
  }
  .foot-icon-img {
    height: 65%;
    width: 100%;
  }
  .foot-icon-text {
    height: 35%;
    width: 100%;
    font-size: 9pt;
    color: #888;
  }
  .foot-icon-img,.foot-icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .foot-button {
    width: 55%;
    height: 100%;
    background-color: white;
  }
  button::after {
    border: none;
  }
  button {
    background-color: #fff;
    border-radius:0;
  }
  .estimate,.service-info {
    display: flex;
    justify-content: center;
  }

  .estimate{
    height: 330rpx;
  }
  .estimate-content {
    width: 90%;
    font-size: 25rpx;
    color: #888;
    /*margin-bottom: 25rpx;*/
  }

  .estimate-content span{
    display: inline-block;
    margin-top: 10rpx;
  }
  .more-estimate {
    margin-top: 5rpx;
    height: 75rpx;
    display: flex;
    justify-content: center;
  }
  .more-estimate-button {
    width: 30%;
    height: 90%;
    font-size: 11pt;
    color: red;
    border: 1px solid red;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .estimate-content {
    padding-bottom: 155rpx;
  }
  .service-info-content {
    width: 90%;
    font-size: 12pt;
    color: #353535;
  }
  .original-class {
    font-size: 11pt;
    text-decoration: line-through;
    color: rgb(153,153,153);
  }

  .storebottom{
    margin-left: 50rpx;
    padding-bottom: 20rpx;
    padding-top: 10rpx;
  }

  .storebottomtext {
    color: rgb(153,153,153);
    font-size: 25rpx;
    padding-top: 5rpx;
  }
  .storebottomnum{
    font-size: 40rpx;
    color: rgb(102,102,102);
  }


  .storebottom > div{
    display: inline-block;
    width: 150rpx;
    border-right: 1px solid rgb(245,248,247);
    padding-left: 30rpx;
    padding-right: 30rpx;
    text-align: center;
  }


</style>
