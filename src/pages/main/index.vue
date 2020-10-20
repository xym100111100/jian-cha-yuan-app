<template>
  <div>
    <router-view></router-view>
    <div class="t-bottom-nav">
      <ul :class="{ home: true, active: homeStyle }" @click="goPage('/index')">
        <li></li>
        <li>首页</li>
      </ul>
      <ul :class="{ notice: true, active: noticeStyle }" @click="goPage('/notice')">
        <li></li>
        <li>公告动态</li>
        <!-- <li v-show="$store.state.notice.noticeData.length > 0" class="spot"></li> -->
      </ul>
      <ul
        :class="{ workbench: true, active: workbenchStyle }"
        @click="goPage('/workbench')"
      >
        <li></li>
        <li>工作台</li>
      </ul>
      <ul
        :class="{ calendar: true, active: calendarStyle }"
        @click="goPage('/calendar')"
      >
        <li></li>
        <li>日历</li>
      </ul>
      <ul :class="{ my: true, active: myStyle }" @click="goPage('/my')">
        <li></li>
        <li>我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      homeStyle: true,
      noticeStyle: false,
      myStyle: false,
      calendarStyle: false,
      workbenchStyle: false,
    };
  },
  methods: {
    goPage(url) {
      // 切记子主路由切换的时候使用replace
      this.$router.replace(url);
    },
    changeStyleNav(name) {
      switch (name) {
        case "index":
          this.homeStyle = true;
          this.noticeStyle = false;
          this.workbenchStyle = false;
          this.calendarStyle = false;
          this.myStyle = false;
          break;
        case "notice":
          this.homeStyle = false;
          this.noticeStyle = true;
          this.workbenchStyle = false;
          this.calendarStyle = false;
          this.myStyle = false;
          break;
        case "my":
          this.homeStyle = false;
          this.noticeStyle = false;
          this.workbenchStyle = false;
          this.calendarStyle = false;
          this.myStyle = true;
          break;
        case "calendar":
          this.homeStyle = false;
          this.noticeStyle = false;
          this.workbenchStyle = false;
          this.calendarStyle = true;
          this.myStyle = false;
          break;
        case "workbench":
          this.homeStyle = false;
          this.noticeStyle = false;
          this.workbenchStyle = true;
          this.calendarStyle = false;
          this.myStyle = false;
          break;
        default:
          this.homeStyle = true;
          this.noticeStyle = false;
          this.workbenchStyle = false;
          this.calendarStyle = false;
          this.myStyle = false;
          break;
      }
    },
  },
  created() {
    // 改变导航栏的标题
    document.title = this.$route.meta.title;
    this.changeStyleNav(this.$route.name);
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to);
    document.title = to.meta.title;
    this.changeStyleNav(to.name);
    next();
  },
  activated() {
    // 这个一般和created
    document.title = this.$route.meta.title;
    this.changeStyleNav(this.$route.name);
  },
};
</script>

<style scoped>
.t-bottom-nav {
  width: 100vw;
  height: 0.96rem;
  background-color: #ffffff;
  box-shadow: 0 0 10px #efefef;
  position: fixed;
  z-index: 10;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.5rem;
  box-sizing: border-box;
}
.t-bottom-nav ul {
  position: relative;
}
.t-bottom-nav ul li:nth-child(1) {
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 auto;
}
.t-bottom-nav ul li:nth-child(2) {
  font-size: 0.25rem;
  text-align: center;
}
.t-bottom-nav ul.active li:nth-child(2) {
  color:#3E80C3;
}



.t-bottom-nav ul.home li:nth-child(1) {
  background-image: url("../../assets/images/index@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.t-bottom-nav ul.home.active li:nth-child(1) {
  background-image: url("../../assets/images/index-active@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.t-bottom-nav ul.notice li:nth-child(1) {
  background-image: url("../../assets/images/notice@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.t-bottom-nav ul.notice.active li:nth-child(1) {
  background-image:  url("../../assets/images/notice-active@2x1.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.t-bottom-nav ul.calendar li:nth-child(1) {
  background-image: url("../../assets/images/calendar@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.t-bottom-nav ul.calendar.active li:nth-child(1) {
  background-image:  url("../../assets/images/calendar-active@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.t-bottom-nav ul.workbench li:nth-child(1) {
  background-image: url("../../assets/images/workbench@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.t-bottom-nav ul.workbench.active li:nth-child(1) {
  background-image: url("../../assets/images/workbench-active@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.t-bottom-nav ul.my li:nth-child(1) {
  background-image: url("../../assets/images/my@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
.t-bottom-nav ul.my.active li:nth-child(1) {
  background-image: url("../../assets/images/my-active@2x.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>