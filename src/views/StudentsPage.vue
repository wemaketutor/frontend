<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: [],
      studentEmail: '',
      events: []
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
    },
    async getTable(studentId) {
      await axios.get('/mystudent/' + studentId + '/events', {
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
    <div class="d-flex flex-column gap-3">
      <h2 class="mb-4">Расписание выбранного пользователя</h2>
      <div v-for="event in events">
        <div class="row fw-bold">
          <div class="col-2">Организатор</div>
          <div class="col-2">Название</div>
          <div class="col-4">Описание</div>
          <div class="col-2">Гость</div>
          <div class="col-1">Начало</div>
          <div class="col-1">Окончание</div>
        </div>
        <div class="row">
          <div class="col-2">{{ event.user.email }}</div>
          <div class="col-2">{{ event.name }}</div>
          <div class="col-4">{{ event.description }}</div>
          <div class="col-2">{{ event.folowed_user.email }}</div>
          <div class="col-1">{{ event.date_created }}</div>
          <div class="col-1">{{ event.duration }}</div>
        </div>
      </div>
    </div>
    <h2 class="mb-4">Список учеников</h2>
    <form class="mb-4 row">
      <div class="col-9">
        <input
            v-model="studentEmail"
            type="email"
            class="form-control"
            placeholder="Введите почту">
      </div>
      <button
          class="btn btn-secondary col-3"
          @click="addStudent" data-v-inspector="src/views/StudentsPage.vue:58:7">Добавить ученика
      </button>
    </form>
    <div class="d-flex flex-column gap-3">
      <div class="row fw-bold">
        <div class="col-2">Почта</div>
        <div class="col-2">Имя</div>
        <div class="col-2">Фамилия</div>
        <div class="col-4">Дополнительная информация</div>
      </div>
      <div class="row" v-for="student in students">
        <div class="col-2">{{ student.user.email }}</div>
        <div class="col-2">{{ student.user.firstName }}</div>
        <div class="col-2">{{ student.user.lastName }}</div>
        <div class="col-4">{{ student.user.extraInfo }}</div>
        <div class="col-2">
          <div class="text-danger" @click="deleteStudent(student.studentId)">Удалить</div>
          <div class="text-success" @click="getTable(student.studentId)">Открыть расписание</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>