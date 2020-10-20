<template>
  <div class="jcy-page">
    <header class="jcy-page-header">
      <div class="jcy-page-header-item">
        <div class="jcy-page-header-item-1"></div>
        <div>我的待办</div>
      </div>
      <div class="jcy-page-header-item">
        <div class="jcy-page-header-item-2"></div>
        <div>我的已办</div>
      </div>
      <div class="jcy-page-header-item">
        <div class="jcy-page-header-item-3"></div>
        <div>我的申请</div>
      </div>
    </header>
    <main class="jcy-page-main">
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-1"></div>
        <div class="jcy-page-main-item-content">
          <div>放假通知</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 端午节放假通知</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-1"></div>
        <div class="jcy-page-main-item-content">
          <div>请假通知</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 张三三请假通知</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-1"></div>
        <div class="jcy-page-main-item-content">
          <div>会议公告</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 2019年度干部述职工作总结</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-1"></div>
        <div class="jcy-page-main-item-content">
          <div>外出公告</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 政治科张与宁外出SDK包括该方式都不敢看房读书报告开发板上课水底纳瓜开发你得空公告</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jcy-page {
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  margin-bottom: 0.96rem;
  background-image: url("../../assets/images/index-banner@2x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 2.76rem;
  font-family: PingFangSC-Medium, PingFang SC;
}

.jcy-page-header {
  width: 6.76rem;
  height: 1.92rem;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  font-size: 0.28rem;
  margin: 0 auto;
  color: #333333;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.jcy-page-header-item {
  text-align: center;
}

.jcy-page-header-item-1,
.jcy-page-header-item-2,
.jcy-page-header-item-3 {
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin: 0.22rem 0 0.1rem 0;
}

.jcy-page-header-item-1 {
  background-image: url("../../assets/images/wo-de-dai-ban@2x.png");
  background-size: 100%;
}

.jcy-page-header-item-2 {
  background-image: url("../../assets/images/wo-de-yi-ban@2x.png");
  background-size: 100%;
}

.jcy-page-header-item-3 {
  background-image: url("../../assets/images/wo-de-shen-qing@2x.png");
  background-size: 100%;
}

.jcy-page-main {
  width: 100vw;
  font-size: 0.28rem;
  color: #333333;

  font-weight: bold;
}

.jcy-page-main-item {
  display: flex;
  height: 1.48rem;
  width: 6.76rem;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 0 auto;
  align-items: center;
  margin-top: 0.36rem;
}

.jcy-page-main-item-icon {
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 0.2rem 0 0.14rem;
}

.jcy-page-main-item-content {
  flex-grow: 1;
}

.jcy-page-main-item-content-detail {
  display: flex;
  align-items: center;
  margin-top: 0.1rem;

}

.jcy-page-main-item-content-detail span,
.jcy-page-main-item-content-detail i {
  display: block;
  font-size: 0.26rem;
  color: #666666;
  width: 4rem;

  white-space:nowrap; 
  overflow:hidden; 
  text-overflow:ellipsis;
}

.jcy-page-main-item-content-detail span {
  width: 0.28rem;
  height: 0.28rem;
  background-image: url("../../assets/images/tong-zhi@2x.png");
  background-size: 100%;
  margin-right: 0.15rem;
}

.jcy-page-main-item-icon-1 {
  background-image: url("../../assets/images/fang-jia-tong-zhi@2x.png");
  background-size: 100%;
}

.jcy-page-main-item-right {
  height: 100%;
  width: 0.6rem;
  padding-top: 0.6rem;
}

.jcy-page-main-item-right span {
  display: block;
  height: 0.36rem;
  width: 0.36rem;
  background: #e63e3e;
  text-align: center;
  line-height: 0.36rem;
  color: white;
  border-radius: 100%;
  font-size: 0.2rem;
}
</style>