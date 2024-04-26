<template>
  <div class="page flex-col">
    <div class="box_1 flex-row">
      <div class="group_1 flex-col">
        <div class="section_1 flex-row">
          <div class="text-wrapper_1 flex-col justify-between">
            <span class="text_1">永不言败</span>
            <span class="text_2">店铺等级：暂无等级</span>
          </div>
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="./assets/img/pswxwg58z5wlj4i2sneh60za55eg9utgcp014dcb3d-313e-4d9c-88e4-4598876ed94b.png"
          />
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/pscjju2zvsrq9xl3j6822hkiuynmepswoopbaf636f3-53ed-42fa-9922-a63bcd3ac7b2.png"
          />
        </div>
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="./assets/img/psgs2g7w90yxglq5afwdtrjx2f31vxfjsdd29b7dd-7a57-4765-988d-6362d78c2209.png"
        />
        <div class="section_2 flex-row">
          <img
            class="label_1"
            referrerpolicy="no-referrer"
            src="./assets/img/ps2vsn833m4hj7fqmqaj9c8tcrsi6ptxlqi1e0a36f9-2e33-4679-8ebc-162d184a9591.png"
          />
          <span class="text_3">快速充值</span>
          <img
            class="label_2"
            referrerpolicy="no-referrer"
            src="./assets/img/psae77et7hx5dhhc22358h0o2nekab1j4mk68917623-464f-44b0-b6e4-821790275ec1.png"
          />
          <span class="text_4">快速提现</span>
          <img
            class="thumbnail_1"
            referrerpolicy="no-referrer"
            src="./assets/img/ps74risiertvt3zuqismhflj4uoo5h45q167fb1b76d-cb71-4be1-972c-46485c927c4f.png"
          />
        </div>
        <div class="section_3 flex-row">
          <div class="image-text_1 flex-row justify-between">
            <img
              class="label_3"
              referrerpolicy="no-referrer"
              src="./assets/img/ps40varnmsdb5qmkba9l2f8d78jnxs0ok8f7915df0-043c-45d2-a017-4ac242aa5572.png"
            />
            <span class="text-group_1">销售中商品</span>
          </div>
          <img
            class="label_4"
            referrerpolicy="no-referrer"
            src="./assets/img/ps09ggh18dwybd5rci3eiz1jc8thi3hqpepy158e8fe0-de56-4a98-af1e-7c8427579bf3.png"
          />
          <div class="image-text_2 flex-row justify-between">
            <img
              class="label_5"
              referrerpolicy="no-referrer"
              src="./assets/img/ps9e9y8o3up3qyd81qqrb2xjw87w6va12pn4e07a7d4-69e6-43a7-b1c6-df503d7c3eef.png"
            />
            <span class="text-group_2">余额宝</span>
          </div>
          <img
            class="label_6"
            referrerpolicy="no-referrer"
            src="./assets/img/psyf37mljev7ddw5312q5gtkzksy9rthxvb862046f0-bd53-45e1-bb27-7423f7b816db.png"
          />
        </div>
        <div class="text-wrapper_2 flex-row justify-between">
          <span class="text_5">1084</span>
          <span class="text_6">0</span>
        </div>
        <div class="section_4 flex-row justify-between">
          <div class="text-wrapper_3 flex-col"><span class="text_7">商品管理</span></div>
          <div class="text-wrapper_4 flex-col"><span class="text_8">收益率：1%</span></div>
        </div>
        <span class="text_9">今日账单</span>
        <div class="text-wrapper_5 flex-row">
          <span class="text_10">0</span>
          <span class="text_11">0</span>
          <span class="text_12">0</span>
        </div>
        <div class="text-wrapper_6 flex-row">
          <span class="text_13">营业额</span>
          <span class="text_14">成交订单</span>
          <span class="text_15">进店人数</span>
        </div>
        <div class="list_1 flex-row">
          <div class="text-wrapper_7 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
            <span class="text_16" v-html="item.lanhutext0"></span>
            <span class="text_17" v-html="item.lanhutext1"></span>
          </div>
        </div>
        <span class="text_18">店铺功能</span>
        <img
          class="image_4"
          referrerpolicy="no-referrer"
          src="./assets/img/pscku4s4eanawbcdzjdk3thjlr1pvmt86d16d6b2c-31f5-4fe8-a6cd-df8c87bc59b0.png"
        />
        <div class="image-wrapper_1 flex-row">
          <img
            class="label_7"
            referrerpolicy="no-referrer"
            :src="item.lanhuimage0"
            v-for="(item, index) in loopData1"
            :key="index"
          />
        </div>
        <div class="text-wrapper_8 flex-row">
          <span class="text_19">幸运抽奖</span>
          <span class="text_20">抢单</span>
          <span class="text_21">订单管理</span>
          <span class="text_22">账单明细</span>
        </div>
        <div class="section_5 flex-row justify-between">
          <div class="group_2 flex-col justify-between">
            <img
              class="label_8"
              referrerpolicy="no-referrer"
              src="./assets/img/psf243qvmc9ydxrmy39d5vvl8aosznjs9p63e9b854-0ba5-432f-8037-cde3edff1c92.png"
            />
            <span class="text_23">一键推广</span>
          </div>
          <div class="group_3 flex-col justify-between">
            <img
              class="label_9"
              referrerpolicy="no-referrer"
              src="./assets/img/psn2gkuyi4zdiwj0oa0p8honel1ihx2mena12a85491-df0e-4383-981d-afb7b695ae10.png"
            />
            <span class="text_24">等级权益</span>
          </div>
          <div class="group_4 flex-col justify-between">
            <img
              class="label_10"
              referrerpolicy="no-referrer"
              src="./assets/img/pslo00yxh0e8llg9b40acaujfj1muvk0ft82437060-8b11-4a6d-9806-2ca03aa088ff.png"
            />
            <span class="text_25">代理团队</span>
          </div>
          <div class="image-text_3 flex-col justify-between">
            <img
              class="label_11"
              referrerpolicy="no-referrer"
              src="./assets/img/psiv2dnqbgvgjng81m1blnpgbbdnkdc5hcm3449f842-1ae0-4e06-8532-77cca30722b6.png"
            />
            <span class="text-group_3">消息中心</span>
          </div>
        </div>
        <div class="section_6 flex-row">
          <div class="image-text_4 flex-col justify-between">
            <img
              class="label_12"
              referrerpolicy="no-referrer"
              src="./assets/img/psnn2jiaq2ygq9zkzwwtk3jjpa70xi3domf2f95a42c-dc5e-4dde-a58c-e002620aebca.png"
            />
            <span class="text-group_4">积分商城</span>
          </div>
          <div class="image-text_5 flex-col justify-between">
            <img
              class="label_13"
              referrerpolicy="no-referrer"
              src="./assets/img/psvh9jrcigwc2w1nzc74zz2uibvvix7ra9af2b51b-2abe-4a50-939e-e6c15ab318d7.png"
            />
            <span class="text-group_5">数据统计</span>
          </div>
          <div class="image-text_6 flex-col justify-between">
            <img
              class="label_14"
              referrerpolicy="no-referrer"
              src="./assets/img/psqda7adjvcznpdsd2tlsbtetyi0uflox6a693c0ad9-cab4-42e0-b730-e96de9e4c9a6.png"
            />
            <span class="text-group_6">商品货源</span>
          </div>
          <div class="image-text_7 flex-col justify-between">
            <img
              class="label_15"
              referrerpolicy="no-referrer"
              src="./assets/img/pspb067ezbci9glnwu3h4dz8napfmwr7fa5789f563-549b-4cfb-8fcf-1ade88faca77.png"
            />
            <span class="text-group_7">客服导师</span>
          </div>
        </div>
        <div class="image-text_8 flex-col justify-between">
          <img
            class="label_16"
            referrerpolicy="no-referrer"
            src="./assets/img/psduxcmsruflj3tqv6b5qmfljdi325iquh0ba1483a-9a74-4ffe-91b8-000a8058ef47.png"
          />
          <span class="text-group_8">商家推荐福利</span>
        </div>
        <span class="text_26">常用功能</span>
        <div class="section_7 flex-row justify-between">
          <div class="image-text_9 flex-col justify-between">
            <img
              class="label_17"
              referrerpolicy="no-referrer"
              src="./assets/img/psufev5g3v7f8gugu4t6y0vwwa48yinvwzp6e0e06ff-0bab-44c1-ae36-84ddabee937f.png"
            />
            <span class="text-group_9">关于我们</span>
          </div>
          <div class="image-text_10 flex-col justify-between">
            <img
              class="label_18"
              referrerpolicy="no-referrer"
              src="./assets/img/pslmzm7adpmjgso0c9j4fd737cw2qerjfv32105d6e-f8d5-4999-ae97-cca02a975db9.png"
            />
            <span class="text-group_10">下载APP</span>
          </div>
          <div class="image-text_11 flex-col justify-between">
            <img
              class="label_19"
              referrerpolicy="no-referrer"
              src="./assets/img/psplh1tsvob2qviownu0t8a4wrwhky7hxif9bf23b5-ac24-4cef-ad71-cfd4457ae4e4.png"
            />
            <span class="text-group_11">实名认证</span>
          </div>
          <div class="image-text_12 flex-col justify-between">
            <img
              class="label_20"
              referrerpolicy="no-referrer"
              src="./assets/img/ps1fsz2xrc5u7xn9yihbh4yrxzhy8lpyf0qeccf0198-4f91-4a56-a0d3-c9323d8e6f9f.png"
            />
            <span class="text-group_12">账户设置</span>
          </div>
        </div>
        <img
          class="image_5"
          referrerpolicy="no-referrer"
          src="./assets/img/0287ba54133c4c2abed33e54e15cf64e_mergeImage.png"
        />
      </div>
      <div class="group_5 flex-row">
        <div class="image-text_13 flex-col justify-between">
          <img
            class="image_6"
            referrerpolicy="no-referrer"
            src="./assets/img/psvsipvk5x9t6i18bp4rm5bpfjxyrmn6921ae975-8d06-48eb-8757-5b938614c2fb.png"
          />
          <span class="text-group_13">首页</span>
        </div>
        <div class="image-text_14 flex-col justify-between">
          <img
            class="image_7"
            referrerpolicy="no-referrer"
            src="./assets/img/psjvvd73lw3gam0b974rjmpus075tt8cng4e2bdb30-9079-484e-a880-008cad2dbaf1.png"
          />
          <span class="text-group_14">分类</span>
        </div>
        <div class="image-text_15 flex-col justify-between">
          <img
            class="image_8"
            referrerpolicy="no-referrer"
            src="./assets/img/psohczhox0vh9jpuesly8y7dphyvc7jlxtc18fdaab-210e-4080-99dc-6a28cc039618.png"
          />
          <span class="text-group_15">店铺</span>
        </div>
        <div class="image-text_16 flex-col justify-between">
          <img
            class="image_9"
            referrerpolicy="no-referrer"
            src="./assets/img/ps27nshh2x1hsrcofts079woj2oreqj2o3pa2372b7d-2321-43aa-b677-84cccb0cd20b.png"
          />
          <span class="text-group_16">客服</span>
        </div>
        <div class="image-text_17 flex-col justify-between">
          <img
            class="image_10"
            referrerpolicy="no-referrer"
            src="./assets/img/ps0dmbkbvgcqwpegzgx0jns7fylpdsomxf9lcf31544c-a615-43cb-bb39-a4caed78cb45.png"
          />
          <span class="text-group_17">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        { lanhutext0: '0', lanhutext1: '账户余额' },
        { lanhutext0: '0', lanhutext1: '待发货' },
        { lanhutext0: '0', lanhutext1: '待签收' }
      ],
      loopData1: [
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psey7h3u9anqq57b7ut97fe6afryvy1cjteb0794e2-baca-4cdb-818f-266139de27b9'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/pssbhn15idects4enyreo3mstcjwtkfifa522532-dbc6-475a-ba4e-f302513f11d3'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psbi29o7yt9gmlr2uxjg6g812gve2ldzcj0f90430f-82b3-4734-b1a7-d36d290414b5'
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psvwv41bwmukgsvs5db7h3t8dg5kvxxfs8d6e1736-0bbe-4ba4-a0e7-9783e30f759f'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.css" />