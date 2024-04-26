<template>
  <div class="page flex-col">
    <div class="block_1 flex-col">
      <div class="section_1 flex-col">
        <div class="block_2 flex-row justify-between">
          <span class="text_1">logo</span>
          <div class="group_1 flex-row">
            <img
              class="label_1"
              referrerpolicy="no-referrer"
              src="./assets/img/ps5f908l3mfiemwafdlqg84rtoihqtk22gp814b345d-db98-414b-842c-492147f2946c.png"
            />
            <span class="text_2">请输入关键词</span>
            <div class="text-wrapper_1 flex-col"><span class="text_3">搜索</span></div>
          </div>
        </div>
        <div class="text-wrapper_2 flex-row justify-between">
          <span class="text_4">首页</span>
          <span class="text_5">服饰</span>
          <span class="text_6">手机</span>
          <span class="text_7">数码</span>
          <span class="text_8">家电</span>
          <span class="text_9">美妆</span>
          <span class="text_10">百货</span>
          <span class="text_11">奢品</span>
        </div>
        <div class="block_3 flex-row"><div class="group_2 flex-col"></div></div>
      </div>
      <div class="section_2 flex-col">
        <div class="list_1 flex-col">
          <div class="list-items_1 flex-row" v-for="(item, index) in loopData0" :key="index">
            <div class="section_3 flex-col"></div>
            <div class="section_4 flex-col">
              <span class="text_12" v-html="item.lanhutext0"></span>
              <span class="text_13" v-html="item.lanhutext1"></span>
              <img class="image_1" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
              <div class="text-group_1 flex-col justify-between">
                <div class="text-wrapper_3">
                  <span class="text_14" v-html="item.lanhutext2"></span>
                  <span class="text_15" v-html="item.lanhutext3"></span>
                </div>
                <span class="text_16" v-html="item.lanhutext4"></span>
              </div>
              <div class="text-wrapper_4 flex-col" :style="{ background: item.lanhuBg5 }">
                <span class="text_17" v-html="item.lanhutext5"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_5 flex-row">
        <div class="image-text_1 flex-col justify-between">
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/pskwpxt2tkegsr2jculhbzq9vrj1zna3c8b4464c-2da5-4a89-a90d-67239136b0b3.png"
          />
          <span class="text-group_2">首页</span>
        </div>
        <div class="image-text_2 flex-col justify-between">
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="./assets/img/psrf6xi3tq15k26arui39yvnaaxupup5iyo67188484-b462-4b41-8136-a44c4f0be985.png"
          />
          <span class="text-group_3">分类</span>
        </div>
        <div class="image-text_3 flex-col justify-between">
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="./assets/img/psmc9o6wljlibmkxldp4vmvom60s7w05qoe761e702-83bf-4f76-a404-4961a9757c8b.png"
          />
          <span class="text-group_4">店铺</span>
        </div>
        <div class="image-text_4 flex-col justify-between">
          <img
            class="image_5"
            referrerpolicy="no-referrer"
            src="./assets/img/psrbpcia3w0nfdxwr2rh8i5xhfc210sip89d8690d-f203-4978-a9df-c08c45bff2a8.png"
          />
          <span class="text-group_5">客服</span>
        </div>
        <div class="image-text_5 flex-col justify-between">
          <img
            class="image_6"
            referrerpolicy="no-referrer"
            src="./assets/img/psmrmowjih1qrxlpc6mtbf5dwlwmnwwgac03b5cb01-26f5-4d91-bf24-2e9e16e13fac.png"
          />
          <span class="text-group_6">我的</span>
        </div>
      </div>
      <div class="section_6 flex-col">
        <div class="group_3 flex-row justify-between">
          <img
            class="image_7"
            referrerpolicy="no-referrer"
            src="./assets/img/ps2mj1fn91rstgrjkjp4w82us6zv6nfkrd4b9911b2-588a-4240-8500-c66a2e25bc64.png"
          />
          <span class="text_18">欢迎登录！</span>
        </div>
        <div class="group_4 flex-row justify-between">
          <div class="image-text_6 flex-col justify-between">
            <img
              class="image_8"
              referrerpolicy="no-referrer"
              src="./assets/img/ps2wj4u7a91o87zawn2slvz25eg1muiscmh6ede630d-1d7e-4499-8e1f-7c59f6d77721.png"
            />
            <span class="text-group_7">幸运抽奖</span>
          </div>
          <div class="image-text_7 flex-col justify-between">
            <img
              class="image_9"
              referrerpolicy="no-referrer"
              src="./assets/img/psm1mw2pyhqnari7i9cwsalsefq57ztupm7fd68448-2b54-44fd-89f8-836397b8b22a.png"
            />
            <span class="text-group_8">每日签到</span>
          </div>
          <div class="image-text_8 flex-col justify-between">
            <img
              class="image_10"
              referrerpolicy="no-referrer"
              src="./assets/img/psxmg40aqcnjemdjvbcwv5a9qld8e7gtv86fce939-f25f-48e0-bce0-c8f101f72d0f.png"
            />
            <span class="text-group_9">积分商城</span>
          </div>
          <div class="image-text_9 flex-col justify-between">
            <img
              class="image_11"
              referrerpolicy="no-referrer"
              src="./assets/img/pshkc0am7zjrt84xu1upshkjtz434d3bt82a4824be-df7b-4e63-87e0-81399ff11622.png"
            />
            <span class="text-group_10">站内信</span>
          </div>
          <div class="image-text_10 flex-col justify-between">
            <img
              class="image_12"
              referrerpolicy="no-referrer"
              src="./assets/img/psay11dhuuhd7vf2tjy4rzc8oq2panle4wc8f05747-a2bc-4e21-840f-cc20773d2b36.png"
            />
            <span class="text-group_11">抢单活动</span>
          </div>
        </div>
        <img
          class="image_13"
          referrerpolicy="no-referrer"
          src="./assets/img/pscw8deykwi9ahemq2rnbprfabigxljxq2oa5ad5d7d-efcc-4573-a903-a68876800f89.png"
        />
        <div class="group_5 flex-row justify-between">
          <span class="text_19">分类</span>
          <div class="image-text_11 flex-row justify-between">
            <span class="text-group_12">全部分类</span>
            <img
              class="image_14"
              referrerpolicy="no-referrer"
              src="./assets/img/psplr2us59ge6w9zvj3pfv3merlw5digyf3a186c6e-3970-4940-8f58-093823f389d8.png"
            />
          </div>
        </div>
        <div class="image-wrapper_1 flex-row">
          <img
            class="image_15"
            referrerpolicy="no-referrer"
            src="./assets/img/psqqpr3475oji73hb56iy97u4t0xnim1fca97d5584a-2c7b-403d-9f38-381787d1df27.png"
          />
          <img
            class="image_16"
            referrerpolicy="no-referrer"
            src="./assets/img/psecqvfqrmbomes2n6g8d1p7phwc9swcubae90ee583-de2a-4381-8769-1a6f9127d7cb.png"
          />
          <img
            class="image_17"
            referrerpolicy="no-referrer"
            src="./assets/img/psy7seo4jcyfyy6q22oqavk1pk96zkriuna0714127-a4fc-458e-aba7-a6e39b0e143f.png"
          />
        </div>
        <div class="image-wrapper_2 flex-row justify-between">
          <img
            class="image_18"
            referrerpolicy="no-referrer"
            src="./assets/img/psamuh4l2wvd90jgmst1n8kc8fqhw3g0n8bh940ecd00-959e-4973-a649-1a5a59a674f6.png"
          />
          <img
            class="image_19"
            referrerpolicy="no-referrer"
            src="./assets/img/psi5geq88efgauu0fgaaw8qjif9lwqngtr3007b479-ade8-40d3-ac3c-07c81acd29d1.png"
          />
          <img
            class="image_20"
            referrerpolicy="no-referrer"
            src="./assets/img/psst1o1vuo3k5iz4t11rxnhdwueltm2u8n0d908ec7-b036-4599-973e-af46a3e546ec.png"
          />
        </div>
        <div class="group_6 flex-row">
          <span class="text_20">限时秒杀</span>
          <span class="text_21">倒计时</span>
          <div class="text-wrapper_5 flex-col"><span class="text_22">01</span></div>
          <span class="text_23">:</span>
          <div class="text-wrapper_6 flex-col"><span class="text_24">01</span></div>
          <span class="text_25">:</span>
          <div class="text-wrapper_7 flex-col"><span class="text_26">01</span></div>
          <div class="image-text_12 flex-row justify-between">
            <span class="text-group_13">限时秒杀</span>
            <img
              class="image_21"
              referrerpolicy="no-referrer"
              src="./assets/img/pshxehtgnm4qge0qo30s85etr0mphsxiz437d2b054-b1b9-4a7e-bda0-406a95d8eac4.png"
            />
          </div>
        </div>
        <div class="image-text_13 flex-col justify-between">
          <img
            class="image_22"
            referrerpolicy="no-referrer"
            src="./assets/img/ps7wbpv99jgxmoxbjo6atumjam42p435zypc34288ed-4a91-411d-81a4-621ad8f9b779.png"
          />
          <span class="text-group_14">小米平板5</span>
        </div>
        <div class="text-wrapper_8 flex-row justify-between">
          <span class="text_27">¥1810</span>
          <span class="text_28">¥1910</span>
        </div>
        <img
          class="image_23"
          referrerpolicy="no-referrer"
          src="./assets/img/pstyaro89fyuclpqda3nna3rgs98uh8ym866ff6e57-17e4-42ae-9523-e1d67b30621d.png"
        />
        <img
          class="image_24"
          referrerpolicy="no-referrer"
          src="./assets/img/psotjcj6yqxnnzczt4zopztoc5225hzvirde7fc433-5e88-4b96-b3b4-660a36570c2b.png"
        />
        <img
          class="image_25"
          referrerpolicy="no-referrer"
          src="./assets/img/psgnd19s03fjnu67c0doh91mkaok2qx5vr0b25f8c5-50a9-4955-b277-312ed4b30d2e.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '友臣肉松条',
          lanhutext1: '¥56',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/pso6j1wsibipcxtaoyew26cemkvygx4werc9dd3134-b710-4c46-b9da-2326790163c3',
          lanhutext2: '¥26',
          lanhutext3: '+300积分',
          lanhutext4: '热销：234082',
          lanhuBg5:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps216jsns2oiu5j1vcpgnw8bndztha4b1vn3b81c325-ebb8-4e15-9e0d-109cb9966635) 100% no-repeat',
          lanhutext5: '立即抢购'
        },
        {
          lanhutext0: '友臣肉松条',
          lanhutext1: '¥56',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/ps0383m5ubxtymp7fm1970ejfjodv3ziij3l4e4d8c0f-5602-4bac-8078-c0b97010e96d',
          lanhutext2: '¥26',
          lanhutext3: '+300积分',
          lanhutext4: '热销：234082',
          lanhuBg5:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/psjeu4pyr8l8510iblqusnmv3j5kkl5j26a71f6f-aa0e-485a-b8ec-223a2dd70774) 0px -1px no-repeat',
          lanhutext5: '立即抢购'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.css" />