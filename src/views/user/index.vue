<template>
  <div class="jcy-page">
    <header class="jcy-page-header">
      <div class="jcy-page-header-user-icon">
        <img
          height="100%"
          width="100%"
          src="../../assets/images/tou-xiang@2x.png"
          alt=""
        />
      </div>
      <div class="jcy-page-header-user-info">
        <p class="jcy-page-header-user-info_name">admin</p>
        <p class="jcy-page-header-user-info_email">123@qq.com</p>
      </div>
      <i class="jcy-page-header-edit_icon"></i>
    </header>
    <main class="jcy-page-main">
      <div class="jcy-page-main-list-item">
        <div class="jcy-page-main-list-item_icon1"></div>
        <div class="jcy-page-main-list-item_text">个人信息</div>
        <div class="jcy-page-main-list-item-edit_icon">
          <i></i>
        </div>
      </div>
      <div class="jcy-page-main-list-item">
        <div class="jcy-page-main-list-item_icon2"></div>
        <div class="jcy-page-main-list-item_text">修改密码</div>
        <div class="jcy-page-main-list-item-edit_icon">
          <i></i>
        </div>
      </div>
      <div class="jcy-page-main-list-item">
        <div class="jcy-page-main-list-item_icon3"></div>
        <div class="jcy-page-main-list-item_text">工资条</div>
        <div class="jcy-page-main-list-item-edit_icon"></div>
      </div>
      <div class="jcy-page-footer_btn" @click="goPage('/login')">退出登录</div>
    </main>
  </div>
</template>

<script>
export default {
  name: "user",
  methods: {
    goPage(url) {
      // 切记子主路由切换的时候使用replace
      this.$router.replace(url);
    },
  },
};
</script>

<style scoped >
.jcy-page {
  width: 100vw;
  height: 100vh;
  font-size: 0.28rem;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
}
.jcy-page-header {
  height: 3.4rem;
  width: 100vw;
  background: #307bc5;
  display: flex;
  align-items: center;
}
.jcy-page-header-user-icon {
  height: 1.4rem;
  width: 1.4rem;
  margin: 0 0.3rem;
}
.jcy-page-header-user-info {
  flex-grow: 1;
}
.jcy-page-header-user-info_name {
  color: #ffffff;
  font-size: 0.32rem;
  height: 0.5rem;
}
.jcy-page-header-user-info_email {
  color: #cecccc;
  font-size: 0.28rem;
}
.jcy-page-header-edit_icon {
  height: 0.4rem;
  width: 0.28rem;
  margin-right: 0.34rem;
  background-image: url("../../assets/images/zuo-bian@2x.png");
  background-size: 100%;
}

.jcy-page-main {
  flex-grow: 1;
  margin-top: 0.2rem;
  background: #ffffff;
  padding-top: 0.28rem;
}

.jcy-page-main-list-item {
  height: 1.02rem;
  width: 7.2rem;
  display: flex;
  margin-left: 0.3rem;
  border-bottom: 1px #eeeeee solid;
  align-items: center;
}
.jcy-page-main-list-item_icon1,
.jcy-page-main-list-item_icon2,
.jcy-page-main-list-item_icon3 {
  height: 0.6rem;
  width: 0.6rem;
  margin-right: 0.34rem;
}

.jcy-page-main-list-item_icon1 {
  background-image: url("../../assets/images/ge-ren-xin-xi@2x.png");
  background-size: 100%;
}
.jcy-page-main-list-item_icon2 {
  background-image: url("../../assets/images/chong-zhi-mi-ma@2x.png");
  background-size: 100%;
}
.jcy-page-main-list-item_icon3 {
  background-image: url("../../assets/images/gong-zi-tiao@2x.png");
  background-size: 100%;
}

.jcy-page-main-list-item_text {
  flex-grow: 1;
  color: #333333;
  font-size: 0.28rem;
}
.jcy-page-main-list-item-edit_icon {
  height: 100%;
  width: 1rem;
  text-align: center;
}
.jcy-page-main-list-item-edit_icon {
  height: 100%;
  width: 0.58rem;
  padding-right: 0.32rem;
  background-image: url("../../assets/images/zhan-kai@2x.png");
  background-repeat: no-repeat;
  background-size: 0.16rem;
  background-position: center center;
}

.jcy-page-footer_btn {
  height: 0.8rem;
  width: 6.92rem;
  border-radius: 0.48rem;
  border: 2px solid #3372b2;
  line-height: 0.8rem;
  text-align: center;
  color: #3372b2;
  font-size: 0.36rem;
  margin: 1.36rem auto 0;
}

.jcy-page-footer_btn:active {
  background: rgba(225, 225, 225, 0.5);
}
</style>