<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      message: '',
      successful: false
    };
  },
  methods: {
    async login() {
      await axios.post('/auth/login', this.user)
          .then(response => {
            this.message = response.data;
            console.log(response.data)
            localStorage.setItem('accessToken', response.data.accessToken);
            this.successful = true;
            axios.get('/profile', {
              headers: {
                'Authorization': `Bearer ${localStorage.accessToken}`
              }
            }).then(response => {
              localStorage.setItem('role', response.data.user.role);
              localStorage.setItem('email', response.data.user.email);
            })
            this.$router.push({'name': 'main'});
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
    <form @submit.prevent="login">
      <div class="form-group d-flex flex-column gap-2">
        <label for="username">Почта:</label>
        <input
            id="username"
            v-model="user.email"
            type="email"
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
        {{ message.message }}
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
