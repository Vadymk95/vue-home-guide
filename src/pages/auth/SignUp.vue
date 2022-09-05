<template>
  <form class="registry" @submit.prevent>
    <h3 class="registry__title">Registration</h3>
    <fieldset class="registry__wrap">
      <div class="registry__username">
        <custom-input
          class="registry__input input"
          type="text"
          placeholder="Login..."
          v-model="username"
          v-focus
        />
      </div>
      <div class="registry__password">
        <custom-input
          class="registry__input"
          type="text"
          placeholder="Password..."
          v-model="password"
        />
      </div>
      <div>
        <custom-input
          class="registry__input"
          type="text"
          placeholder="Repeat Password..."
          v-model="password"
        />
      </div>
      <custom-select
        class="registry__select"
        :nameOption="nameOption"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="selectOptions"
      />
      <custom-button
        class="registry__btn"
        @click="createProduct"
        variant="primary"
        >Sign Up</custom-button
      >
    </fieldset>
    <p class="registry__sign">
      or Sign In
      <router-link class="registry__link" to="/auth/signin">here</router-link>
    </p>
  </form>
</template>

<script lang="ts">
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
      nameOption: 'Are you Customer or Client?',
      selectOptions: [
        { value: 'Customer', name: 'Customer' },
        { value: 'Client', name: 'Client' },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.registry {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.registry__select {
  display: block;
  margin-top: 10px;
}

.registry__wrap {
  border: none;
}
.registry__wrap > div {
  width: 100%;
}

.registry__btn {
  margin-top: 50px;
  margin-bottom: 20px;
}

.registry__username {
  margin-bottom: 10px;
}

.registry__password {
  margin-bottom: 10px;
}

.registry__title {
  margin-bottom: 10px;
}

.registry__sign {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 8px;
  border-radius: 8px;
}

.registry__link {
  color: #fff;
}
</style>
