<template>
  <div class="page flex-col">
    <div class="box_1 flex-row">
      <div class="block_1 flex-col">
        <div class="box_2 flex-row">
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="./assets/img/ps3s79esobr5ui5b2ewdwqktpm6y1dwcdead2536c-a25d-4b07-8294-1605fbc0f371.png"
          />
          <div class="section_1 flex-col justify-between">
            <span class="text_1">用户1234567</span>
            <div class="section_2 flex-row">
              <span class="text_2">会员ID：1234567</span>
              <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="./assets/img/psvx7yueo6meqavrdepeyxgu6osvhlfao0qc96fbee6-7849-4df3-9509-eb5e59cd1302.png"
              />
            </div>
          </div>
          <img
            class="label_1"
            referrerpolicy="no-referrer"
            src="./assets/img/ps4mrhm4kz12lbp0wp2u5s7n21vgvqtzxxg8b4d507e-d2a2-4fb7-8a98-6f7eaea7e34c.png"
          />
        </div>
        <div class="box_3 flex-row justify-between">
          <div class="list_1 flex-row">
            <div class="text-wrapper_1 flex-col" v-for="(item, index) in loopData0" :key="index">
              <span v-if="item.slot1 === 1" class="text_3" v-html="item.specialSlot1.lanhutext0"></span>
              <span v-if="item.slot2 === 2" class="text_4">0</span>
              <span class="text_5" v-html="item.lanhutext0"></span>
            </div>
          </div>
          <div class="text-wrapper_2 flex-col justify-between">
            <span class="text_6">0</span>
            <span class="text_7">购物车</span>
          </div>
        </div>
        <div class="box_4 flex-row">
          <div class="image-text_1 flex-row justify-between">
            <img
              class="label_2"
              referrerpolicy="no-referrer"
              src="./assets/img/psydpn81tldrkdiipmbwa8u9ffwcyuueq1v990b1c66-1ffe-4071-8a47-1bd024ec8256.png"
            />
            <span class="text-group_1">账户充值</span>
          </div>
          <img
            class="label_3"
            referrerpolicy="no-referrer"
            src="./assets/img/ps6aasm52kao973cec0wq12h69cemonuh138e552d-df30-4766-a3d9-d971a8cfb3b1.png"
          />
          <div class="image-text_2 flex-row justify-between">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="./assets/img/psg8nsv17rc1mejnwxvm86ti4gqy6haefzl685fea8c-f471-40e7-b2df-6b9d0ce67754.png"
            />
            <span class="text-group_2">快速提现</span>
          </div>
          <img
            class="label_5"
            referrerpolicy="no-referrer"
            src="./assets/img/ps1wxeug2r5q3d5medaprio5uzyfj9ayj292e0377f-3004-436a-a92f-1ef55abea2e3.png"
          />
        </div>
        <div class="box_5 flex-row justify-between">
          <span class="text_8">订单中心</span>
          <div class="image-text_3 flex-row justify-between">
            <span class="text-group_3">全部订单</span>
            <img
              class="image_2"
              referrerpolicy="no-referrer"
              src="./assets/img/psns40skyfkbbsqp1pv0xwskjyfhwd1rks9f7fb4ed-ea57-4297-aee2-8cf5b246297d.png"
            />
          </div>
        </div>
        <div class="box_6 flex-row">
          <div class="image-text_4 flex-col justify-between">
            <img
              class="label_6"
              referrerpolicy="no-referrer"
              src="./assets/img/psqds7md7fu9d093e4hwqswnaa9ifbcvvlbf20976d1-12eb-4132-86da-cffecdcc31fb.png"
            />
            <span class="text-group_4">待付款</span>
          </div>
          <div class="section_3 flex-col justify-between">
            <img
              class="label_7"
              referrerpolicy="no-referrer"
              src="./assets/img/psrobege4o2aez2fclnjexa8yqwa5ujb7rb3617931-eb1a-40ee-a296-f3e0b734c0f0.png"
            />
            <span class="text_9">待发货</span>
          </div>
          <div class="image-text_5 flex-col justify-between">
            <img
              class="label_8"
              referrerpolicy="no-referrer"
              src="./assets/img/psb7jcvs89zlvlfukm5av7vm9e2zp9xe0lp3caea33f-8d49-4e8f-a7bc-77a5910556f0.png"
            />
            <span class="text-group_5">待收货</span>
          </div>
          <div class="image-text_6 flex-col justify-between">
            <img
              class="label_9"
              referrerpolicy="no-referrer"
              src="./assets/img/ps8nixy3q9majzb9mmviyo8gx5ns50pqy95b9ed0e-b455-4de6-a688-c94d0ca3eab3.png"
            />
            <span class="text-group_6">待评价</span>
          </div>
          <div class="image-text_7 flex-col justify-between">
            <img
              class="label_10"
              referrerpolicy="no-referrer"
              src="./assets/img/pssd09ooh6f2hagwjxexyje4sx82nc9unb71d9b1ca-00b1-4676-acf2-9c956322c9f5.png"
            />
            <span class="text-group_7">售后/退款</span>
          </div>
        </div>
        <span class="text_10">我的服务</span>
        <div class="box_7 flex-row justify-between">
          <div class="image-text_8 flex-col justify-between">
            <img
              class="label_11"
              referrerpolicy="no-referrer"
              src="./assets/img/ps9dc4ndf8g0a8gtq5qqtfcts9n1a177r39aa636bb-7ca3-4c3f-a03f-1126a004ec75.png"
            />
            <span class="text-group_8">消息中心</span>
          </div>
          <div class="image-text_9 flex-col justify-between">
            <img
              class="label_12"
              referrerpolicy="no-referrer"
              src="./assets/img/pslpspmj37hlkz7m9m6n12q5s7nkw2uy4w7c62bbce-a2ff-44f0-af06-22e2c5b6f568.png"
            />
            <span class="text-group_9">我的店铺</span>
          </div>
          <div class="image-text_10 flex-col justify-between">
            <img
              class="label_13"
              referrerpolicy="no-referrer"
              src="./assets/img/psh763ki88k8i372y5bzy5unst7xgjctrsm29097d17-bdad-4a2d-9e69-69231ae020a7.png"
            />
            <span class="text-group_10">隐私协议</span>
          </div>
          <div class="image-text_11 flex-col justify-between">
            <img
              class="label_14"
              referrerpolicy="no-referrer"
              src="./assets/img/psafo5pyzwys8cbrjpe768vr8xupadbgfy56d4c25c-9079-4852-a29a-2e22bda2b80a.png"
            />
            <span class="text-group_11">服务协议</span>
          </div>
        </div>
        <div class="box_8 flex-row">
          <div class="image-text_12 flex-col justify-between">
            <img
              class="label_15"
              referrerpolicy="no-referrer"
              src="./assets/img/psh40vubioniv4gubvl9fajok137xg4ba47f23f6f-56d4-4a43-b41d-c2a655bdb7ec.png"
            />
            <span class="text-group_12">APP下载</span>
          </div>
          <div class="image-text_13 flex-col justify-between">
            <img
              class="label_16"
              referrerpolicy="no-referrer"
              src="./assets/img/pspcm33j2fc8q1chjfyaq91jtpnpfpw0djbd0edff6c-2c1b-4114-b530-e8ce0b970895.png"
            />
            <span class="text-group_13">账号注销</span>
          </div>
          <div class="image-text_14 flex-col justify-between">
            <img
              class="image_3"
              referrerpolicy="no-referrer"
              src="./assets/img/psytc35sy1kyfchkw9zuiep5f0tqam314yjb757c6e8-5fee-4531-b4cb-c50aecd95051.png"
            />
            <span class="text-group_14">地址信息</span>
          </div>
          <div class="image-text_15 flex-col justify-between">
            <img
              class="label_17"
              referrerpolicy="no-referrer"
              src="./assets/img/psxaeks9cp0qbpvn5bcjeynp5vzecyiezkm1470bd2d-d21f-4cf1-9e2d-d86066f5ad50.png"
            />
            <span class="text-group_15">代理团队</span>
          </div>
        </div>
        <div class="text-wrapper_3 flex-col"><span class="text_11">退出登录</span></div>
      </div>
      <div class="block_2 flex-row">
        <div class="image-text_16 flex-col justify-between">
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="./assets/img/psxq4r8kkuegb5x21lsqxcxu1qxaqitkrfxd376bfca-7459-43c8-bbe3-74f09fcc6348.png"
          />
          <span class="text-group_16">首页</span>
        </div>
        <div class="image-text_17 flex-col justify-between">
          <img
            class="image_5"
            referrerpolicy="no-referrer"
            src="./assets/img/ps54cbuywd5x61cbgurv04yvggkwv0xapav14375918-e7c8-43f1-8d44-098c79e33d75.png"
          />
          <span class="text-group_17">分类</span>
        </div>
        <div class="image-text_18 flex-col justify-between">
          <img
            class="image_6"
            referrerpolicy="no-referrer"
            src="./assets/img/psgaurfmdm1bupleng5au2f5q45dvlktcb60f6306d-4213-412b-aba6-dda5f2d8d448.png"
          />
          <span class="text-group_18">店铺</span>
        </div>
        <div class="image-text_19 flex-col justify-between">
          <img
            class="image_7"
            referrerpolicy="no-referrer"
            src="./assets/img/psdi9ghyebnd6zmc6km40w4qdhjbm3zq5cd9594c8-1e1f-4b8b-b871-7c755219a6ea.png"
          />
          <span class="text-group_19">客服</span>
        </div>
        <div class="image-text_20 flex-col justify-between">
          <img
            class="image_8"
            referrerpolicy="no-referrer"
            src="./assets/img/psj452tqu0nbp72evhs95b0iuj4mwuts0s4fb2ac8f-f016-4049-b287-4f24c32aa4ae.png"
          />
          <span class="text-group_20">我的</span>
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
        { lanhutext0: '余额', specialSlot1: { lanhutext0: '0' }, slot1: 1 },
        { lanhutext0: '积分', specialSlot1: { lanhutext0: '0' }, slot1: 1 },
        { lanhutext0: '优惠券', slot2: 2 }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.css" />