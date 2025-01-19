<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: [],
      studentEmail: '',
    }
  },
  methods: {
    async loadStudents() {
      await axios.get('/teacher/students', {
        headers: {
          'Authorization': `Bearer ${localStorage.accessToken}`
        }
      }).then(response => {
        this.students = response.data.students;
      })
    },
    async addStudent($evt) {
      $evt.preventDefault()
      await axios.post('/teacher/add/student', {
        email: this.studentEmail,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.accessToken}`
        }
      }).then(response => {
        this.loadStudents()
      })
    }
  },
  mounted() {
    this.loadStudents()
  }
}
</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4">Список учеников</h1>
    <form class="mb-4">
      <input
          v-model="studentEmail"
          type="email"
          class="form-control"
          placeholder="Введите почту">
      <button
          class="btn btn-primary"
          @click="addStudent">Добавить ученика</button>
    </form>
    <div class="d-flex flex-column gap-3">
      <div class="row fw-bold">
        <div class="col-3">Почта</div>
        <div class="col-3">Имя</div>
        <div class="col-3">Фамилия</div>
        <div class="col-3">Дополнительная информация</div>
      </div>
      <div class="row" v-for="student in students">{{}}
        <div class="col-3">{{student.user.email}}</div>
        <div class="col-3">{{student.user.firstName}}</div>
        <div class="col-3">{{student.user.lastName}}</div>
        <div class="col-3">{{student.user.extraInfo}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>