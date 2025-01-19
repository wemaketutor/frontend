<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    goPage(name) {
      this.$router.push({
        'name': name
      })
    }
  },
  mounted() {
    this.email = localStorage.getItem('email');
  }
}

</script>

<template>
  <header class="p-3 text-bg-dark" data-v-inspector="src/components/AppHeader.vue:23:3">
    <div class="container" data-v-inspector="src/components/AppHeader.vue:24:5">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
           data-v-inspector="src/components/AppHeader.vue:25:7">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
           data-v-inspector="src/components/AppHeader.vue:26:9">
          <div class="logo d-flex align-items-center" data-v-inspector="src/components/AppHeader.vue:27:11">
            <img
                src="/src/assets/logo-white.svg"
                class="logo-img"
                width="50px" data-v-inspector="src/components/AppHeader.vue:28:13">
            <span class="fs-4" data-v-inspector="src/components/AppHeader.vue:32:13">Tutoring assistant</span>
          </div>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0 gap-5"
            data-v-inspector="src/components/AppHeader.vue:36:9">
          <li data-v-inspector="src/components/AppHeader.vue:37:11">
            <a
                class="nav-link px-2"
                @click="goPage('main')"
                :class="{
                  'text-secondary': $route.name === 'main',
                  'text-white': $route.name !== 'main'
                }" data-v-inspector="src/components/AppHeader.vue:38:13"
            >Главная</a>
          </li>
          <li data-v-inspector="src/components/AppHeader.vue:47:11">
            <a
                v-if="this.$cookies.get('role') === 'ROLE_TEACHER'"
                class="nav-link px-2"
                @click="goPage('students')"
                :class="{
                  'text-secondary': $route.name === 'students',
                  'text-white': $route.name !== 'students'
                }" data-v-inspector="src/components/AppHeader.vue:48:13"
            >Ученики</a>
            <a
                v-else
                class="nav-link px-2"
                @click="goPage('teachers')"
                :class="{
                  'text-secondary': $route.name === 'teachers',
                  'text-white': $route.name !== 'teachers'
                }" data-v-inspector="src/components/AppHeader.vue:57:13"
            >Учителя</a>
          </li>
          <li data-v-inspector="src/components/AppHeader.vue:67:11">
            <a
                class="nav-link px-2"
                @click="goPage('resources')"
                :class="{
                  'text-secondary': $route.name === 'resources',
                  'text-white': $route.name !== 'resources'
                }" data-v-inspector="src/components/AppHeader.vue:68:13"
            >Материалы</a>
          </li>
        </ul>

        <div class="text-end" v-if="!email" data-v-inspector="src/components/AppHeader.vue:79:9">
          <button
              type="button"
              class="btn btn-outline-light me-2"
              @click="goPage('login')" data-v-inspector="src/components/AppHeader.vue:80:11">Войти
          </button>
          <button
              type="button"
              class="btn btn-secondary"
              @click="goPage('register')" data-v-inspector="src/components/AppHeader.vue:85:11">Зарегистрироваться
          </button>
        </div>
        <div v-else data-v-inspector="src/components/AppHeader.vue:91:9">
          <span data-v-inspector="src/components/AppHeader.vue:92:11">{{ email }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>