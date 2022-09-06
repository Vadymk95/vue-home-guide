<template>
  <form class="login" @submit.prevent>
    <h3 class="login__title">Login</h3>
    <fieldset class="login__wrap">
      <div class="login__username">
        <custom-input
          class="login__input input"
          type="text"
          placeholder="Login..."
          v-model="login"
          v-focus
        />
      </div>
      <div>
        <custom-input
          class="login__input"
          type="text"
          placeholder="Password..."
          v-model="password"
        />
      </div>
      <custom-button class="login__btn" @click="onLogin" variant="primary"
        >Sign In</custom-button
      >
    </fieldset>
    <p class="login__sign">
      or Sign Up
      <router-link class="login__link" to="/auth/signup">here</router-link>
    </p>
  </form>
</template>

<script lang="ts">
export default {
  name: 'SignIn',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    onLogin() {
      this.$store
        .dispatch('authModule/onLogin', {
          login: this.login,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: '/products' });
        });
    },
  },
};
</script>

<style scoped>
.login {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.login__wrap {
  border: none;
}
.login__wrap > div {
  width: 100%;
}

.login__btn {
  margin-top: 50px;
  margin-bottom: 20px;
}

.login__username {
  margin-bottom: 10px;
}

.login__title {
  margin-bottom: 10px;
}

.login__sign {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 8px;
  border-radius: 8px;
}

.login__link {
  color: #fff;
}
</style>
