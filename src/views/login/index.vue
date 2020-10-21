<template>
  <div class="jcy-page">
    <main class="jcy-page-main">
      <div class="jcy-page-main-user">
        <div class="jcy-page-main-user-icon-1"></div>
        <div>
          <input placeholder="请输入用户名" type="text" />
        </div>
      </div>
      <div class="jcy-page-main-user">
        <div class="jcy-page-main-user-icon-2"></div>
        <div>
          <input placeholder="请输入密码" type="text" />
        </div>
      </div>
      <div class="jcy-page-main-pwd">
        <div>记住密码</div>
        <div>忘记密码？</div>
      </div>
      <div class="jcy-page-main-btn" @click="goPage('/')">登录</div>
    </main>
  </div>
</template>

<script>
import { loginData } from "@/api/user";
export default {
  name: "login",
  methods: {
    userLogin() {},
    goPage(url) {
      // 切记子主路由切换的时候使用replace
      this.$router.replace(url);
    },
  },
};
</script>

<style scoped>
.jcy-page {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/images/deng-lu-ye@2x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  background-origin: border-box;
}
.jcy-page-main {
  width: 7.1rem;
  height: 8.8rem;
  background: #ffffff;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin: 3.9rem auto 0;
  font-size: 0.28rem;
  padding-top: 0.28rem;
}
.jcy-page-main-user {
  width: 6.5rem;
  height: 1.02rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e9e9e9;
}

.jcy-page-main-user-icon-1,
.jcy-page-main-user-icon-2 {
  height: 0.36rem;
  width: 0.36rem;
  margin-right: 0.2rem;
  background-size: 100%;
}

.jcy-page-main-user-icon-1 {
  background-image: url("../../assets/images/yong-hu-ming@2x.png");
}
.jcy-page-main-user-icon-2 {
  background-image: url("../../assets/images/mi-ma@2x.png");
}

.jcy-page-main-pwd {
  display: flex;
  width: 6.5rem;
  justify-content: space-between;
  margin: 0.16rem auto 0;
}
.jcy-page-main-pwd div:nth-child(1) {
  color: #666666;
}
.jcy-page-main-pwd div:nth-child(2) {
  color: #2a6cae;
}
.jcy-page-main-btn {
  width: 6.3rem;
  height: 0.8rem;
  background: linear-gradient(90deg, #468fd7 0%, #3372b1 100%);
  border-radius: 40px;
  margin: 1rem auto 0;
  line-height: 0.8rem;
  text-align: center;
  color: #ffffff;
  font-size: 0.36rem;
}
.jcy-page-main-btn:active {
  background: rgba(11, 85, 221, 0.759);
}
</style>
