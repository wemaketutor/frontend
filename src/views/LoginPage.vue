<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      message: '',
      successful: false
    };
  },
  methods: {
    async handleLogin() {
      await axios.post('/api/auth/login', this.user)
          .then(response => {
            const token = response.data;
            localStorage.setItem('token', token);
            this.message = 'Login successful!';
            this.successful = true;
            this.$router.push('/');
          })
          .catch(error => {
            this.message = error.response.data;
            this.successful = false;
          });
    }
  }
};
</script>

<template>
  <div class="container w-50">
    <h2 class="text-center mt-3">Вход</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group d-flex flex-column gap-2">
        <label for="username">Имя пользователя:</label>
        <input
            id="username"
            v-model="user.username"
            type="text"
            class="form-control"
            required
        />
        <label for="email">Пароль:</label>
        <input
            id="email"
            v-model="user.password"
            type="password"
            class="form-control"
            required
        />
        <button type="submit" class="btn btn-secondary">Войти</button>
      </div>

      <div v-if="message" :class="['alert', successful ? 'alert-success' : 'alert-danger']">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>