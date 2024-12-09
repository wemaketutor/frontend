<script>
export default {
  methods: {
    goPage(name) {
      this.$router.push({
        'name': name
      })
    }
  }
}

</script>

<template>
  <footer class="container my-5">
  <div class="row py-5 mx-4 border-top">
    <div class="col col-3 mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img
            src="/src/assets/logo-black.svg"
            alt=""
            width="50px">

        <span class="fs-5 text-nowrap">Tutoring assistant</span>
      </a>
    </div>

    <div class="col col-1 mb-3">

    </div>

    <div class="col col-2 mb-3">
      <h5>Навигация</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a
              href="#"
                @click="goPage('main')"
              class="nav-link p-0 text-body-secondary">Главная</a>
        </li>
        <li class="nav-item mb-2">
          <a
              href="#"
                @click="goPage('main')"
              class="nav-link p-0 text-body-secondary">Расписание</a>
        </li>
        <li class="nav-item mb-2">
          <a
              href="#"
                @click="goPage('main')"
              class="nav-link p-0 text-body-secondary">Профиль</a>
        </li>
      </ul>
    </div>

    <div class="col col-3 mb-3">
      <h5>О нас</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a
              @click="goPage('main')"
              class="nav-link p-0 text-body-secondary">История создания</a>
        </li>
        <li class="nav-item mb-2">
          <a
              @click="goPage('main')"
              href="#"
              class="nav-link p-0 text-body-secondary">Частые вопросы</a>
        </li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">email: info@tutoring-assistant.ru</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">tel: +7(952)812-00-01</a></li>
      </ul>
    </div>

    <div class="col col-3 mb-3">
      <h5>Наши соцсети</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">tg: @TutoringAssistant</a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link p-0 text-body-secondary">vk: Tutoring Assistant</a>
        </li>
      </ul>
    </div>
  </div>
  <p class="text-body-secondary text-center">© tutoring-assistant.ru 2024</p>
</footer>
</template>

<style scoped>

</style>