<template>
    <!-- 登录页面 -->
    <div class="page flex-col">
      <div class="box_1 flex-col">
      <div class="text-wrapper_1 flex-col"></div>
        <!-- 登录内容区域 -->
        <div class="box_2 flex-col">
          <div class="login-options">
            <div
              class="login-item"
              v-for="(item, index) in loginitems"
              :key="item.id"
              :class="current === index ? 'move' : ''"
              @click="change(index)"
            >
              {{ item.text }}
            </div>
          </div>
          <div class="con">
            <div class="con-item" v-if="current == 1">
              <div class="input-items">
                <input
                  type="text"
                  v-model="phonevalue"
                  placeholder="输入手机号"
                />
              </div>
              <div class="input-items">
                <input type="text" v-model="codevalue" placeholder="输入验证码" />
                <div class="getcode" @click="getcode">
                  <p v-if="isok == 1">获取验证码</p>
                  <p v-else>{{ countTime }}</p>
                </div>
              </div>
              <div class="login-btn" @click="login">登录</div>
            </div>
            <div class="con-item" v-if="current == 0">
              <div class="input-items">
                <input
                  type="text"
                  v-model="phonevalue"
                  placeholder="输入手机号"
                />
              </div>
              <div class="input-items">
              <input
                v-model="passwordinput"
                type="password"
                placeholder="输入密码"
                show-password
              />
            </div>
              <div class="reset" @click="gotoforgetPassword">重置密码></div>
              <div class="login-btn" @click="login">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
   
  <script>


export default {
  data() {
return {
   loginitems :[
    {
      id: 2,
      text: "密码登录",
    },
    {
      id: 1,
      text: "验证码登录",
    },],
    ountTime:60,
    isok:1,
    phonevalue:"",
    codevalue :"",
    passwordinput:"",
    current:1,
    };
  },
  methods: {
    login(){
        this.router.push({path: "/notice",});
    },

  change (index) {
  this.current= index;
},
    getcode (){
    this.isok.value = 0;
    var Timer = setInterval(() => {
      this.countTime.value--;
      if (this.countTime.value <= 0) {
        clearInterval(Timer);
        this.isok.value = 1;
        this.countTime.value = 60;
      }
    }, 1000);
  },
  gotoforgetPassword () {
  this.router.push({ path: "/forgetPassword",});
  },
}
};
</script>

  
 

  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .head {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .head .title {
    font-size: 22px;
    font-weight: 600;
  }
  .head img {
    width: 300px;
    height: 200px;
  }
  .move {
    color: #f5b90f;
    padding-bottom: 5px;
    font-weight: 600;
    border-bottom: 2px solid #f5b90f;
  }
  .login-options {
    margin: 20px 0 10px 0;
    display: flex;
    align-items: center;
  }
  .login {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  .login-item {
    box-sizing: border-box;
    padding-bottom: 5px;
    margin-right: 10px;
  }
  .input-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 40px;
    margin: 10px 0;
  }
  input {
    padding-left: 10px;
    outline: none;
    padding-right: 10px;
    border: 0;
    font-size: 14px;
  }
  .getcode {
    margin-right: 5px;
  }
  .con-item {
    position: relative;
  }
  .getcode p {
    width: 80px;
    height: 25px;
    text-align: center;
    background-color: #f5b90f;
    color: #fff;
    font-size: 12px;
    line-height: 25px;
    border-radius: 5px;
    cursor: pointer;
  }
  .login-btn {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin: 45px 0;
    background-color: #f5b90f;
    cursor: pointer;
  }
  .reset {
    position: absolute;
    right: 0;
    color: #f5b90f;
    font-size: 12px;
    margin: 10px 0;
  }
  </style>
  <style scoped lang="css" src="./assets/index.css" />