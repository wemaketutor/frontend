<script>
import axios from 'axios';

export default {
  data() {
    return {
      teachers: [],
    }
  },
  methods: {
    async loadTeachers() {
      await axios.get('/student/teachers', {
        headers: {
          'Authorization': `Bearer ${localStorage.accessToken}`
        }
      }).then(response => {
        this.teachers = response.data.teachers;
      })
    }
  },
  mounted() {
    this.loadTeachers()
  }
}
</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4">Список учителей</h1>
    <div class="d-flex flex-column gap-3">
      <div class="row fw-bold">
        <div class="col-3">Почта</div>
        <div class="col-3">Имя</div>
        <div class="col-3">Фамилия</div>
        <div class="col-3">Дополнительная информация</div>
      </div>
      <div class="row" v-for="teacher in teachers">{{}}
        <div class="col-3">{{teacher.user.email}}</div>
        <div class="col-3">{{teacher.user.firstName}}</div>
        <div class="col-3">{{teacher.user.lastName}}</div>
        <div class="col-3">{{teacher.user.extraInfo}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>