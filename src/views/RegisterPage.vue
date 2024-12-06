<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      message: '',
      successful: false
    };
  },
  methods: {
    handleRegister() {
      axios.post('/api/auth/register', this.user)
          .then(response => {
            this.message = response.data;
            this.successful = true;
            setTimeout(() => {
              this.$router.push('/login');
            }, 2000);
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
    <h2 class="text-center mt-3">Регистрация</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group d-flex flex-column gap-2">
        <label for="username">Имя пользователя:</label>
        <input
            id="username"
            v-model="user.username"
            type="text"
            class="form-control"
            required
        />
        <label for="email">Электронная почта:{{successful}}</label>
        <input
            id="email"
            v-model="user.email"
            type="email"
            class="form-control"
            required
        />
        <label for="password">Пароль:</label>
        <input
            id="password"
            v-model="user.password"
            type="password"
            class="form-control"
            required
        />
        <button type="submit" class="btn btn-secondary">Зарегистрироваться</button>
      </div>


      <div v-if="message" :class="['alert', successful ? 'alert-success' : 'alert-danger']">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>