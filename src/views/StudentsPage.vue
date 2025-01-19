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
    },
    async deleteStudent(studentId) {
      await axios.delete('/teacher/delete/student/' + studentId, {
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
  <div class="container my-5" data-v-inspector="src/views/StudentsPage.vue:50:3">
    <h1 class="mb-4" data-v-inspector="src/views/StudentsPage.vue:51:5">Список учеников</h1>
    <form class="mb-4" data-v-inspector="src/views/StudentsPage.vue:52:5">
      <input
          v-model="studentEmail"
          type="email"
          class="form-control"
          placeholder="Введите почту" data-v-inspector="src/views/StudentsPage.vue:53:7">
      <button
          class="btn btn-primary"
          @click="addStudent" data-v-inspector="src/views/StudentsPage.vue:58:7">Добавить ученика</button>
    </form>
    <div class="d-flex flex-column gap-3" data-v-inspector="src/views/StudentsPage.vue:62:5">
      <div class="row fw-bold" data-v-inspector="src/views/StudentsPage.vue:63:7">
        <div class="col-3" data-v-inspector="src/views/StudentsPage.vue:64:9">Почта</div>
        <div class="col-3" data-v-inspector="src/views/StudentsPage.vue:65:9">Имя</div>
        <div class="col-3" data-v-inspector="src/views/StudentsPage.vue:66:9">Фамилия</div>
        <div class="col-3" data-v-inspector="src/views/StudentsPage.vue:67:9">Дополнительная информация</div>
      </div>
      <div class="row" v-for="student in students" data-v-inspector="src/views/StudentsPage.vue:69:7">{{}}
        <div class="col-2" data-v-inspector="src/views/StudentsPage.vue:70:9">{{student.user.email}}</div>
        <div class="col-2" data-v-inspector="src/views/StudentsPage.vue:71:9">{{student.user.firstName}}</div>
        <div class="col-2" data-v-inspector="src/views/StudentsPage.vue:72:9">{{student.user.lastName}}</div>
        <div class="col-4" data-v-inspector="src/views/StudentsPage.vue:73:9">{{student.user.extraInfo}}</div>
        <div class="col-2" @click="deleteStudent(student.studentId)" data-v-inspector="src/views/StudentsPage.vue:74:9">Удалить</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>