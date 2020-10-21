<template>
  <div class="jcy-page">
    <button @click="userLogin">登录</button>
  </div>
</template>

<script>
import { loginData } from "@/api/user";
export default {
  name: "login",
  methods: {
    userLogin() {
      loginData({ name: "aa" })
        .then((res) => {
            alert("SSS")
          console.log(res);
        })
        .then((err) => {
          alert("SSS")
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.jcy-page {
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
}
</style>
