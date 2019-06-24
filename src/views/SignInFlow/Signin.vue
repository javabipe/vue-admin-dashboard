<template>
  <div class="container">
    <div class="request">
      Don’t have a Design+Code HQ account?
      <router-link
        class="request-link"
        to="/request"
      >Request an account</router-link>
    </div>

    <div class="login">
      <img
        alt
        src="@/assets/DCHQ.svg"
      >

      <h4>Sign into Design+Code HQ</h4>

      <form
        @submit.prevent
        class="form"
      >
        <input
          placeholder="Email"
          type="email"
        >
        <input
          placeholder="Password"
          type="password"
        >
        <button type="submit">Sign In</button>

        <router-link
          class="forgot-link"
          to="/recover"
        >Forgotten your password?</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin"
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);
}

.request-link {
  color: #ffffff;

  &:hover {
    text-decoration: none;
  }
}

.login {
  width: 400px;
}

h4 {
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
}

.form input {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  padding: 0 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.form button {
  width: 100%;
  height: 60px;
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  outline: none;
  margin-bottom: 40px;
  cursor: pointer;
}

.forgot-link {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
