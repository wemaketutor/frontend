<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      newItem: '',
      editingItemId: null,
      editedItemName: ''
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    goPage(name) {
      this.$router.push({
        'name': name
      })
    },
    async fetchItems() {
      await axios.get('/api/items', {
        headers: {Authorization: localStorage.getItem('token')}})
          .then(response => {
            this.items = response.data;
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    },
    async addItem() {
      await axios.post('/api/items', {
        name: this.newItem
      }, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`}})
          .then(response => {
            this.items.push(response.data);
            this.newItem = '';
          })
          .catch(error => {
            console.error('There was an error adding the item!', error);
          });
    },
    async deleteItem(id) {
      await axios.delete(`/api/items/${id}`, {headers: {Authorization: `${localStorage.getItem('token')}`}})
          .then(() => {
            this.items = this.items.filter(item => item.id !== id);
          })
          .catch(error => {
            console.error('There was an error deleting the item!', error);
          });
    },
    startEditing(id, name) {
      this.editingItemId = id;
      this.editedItemName = name;
    },
    isEditing(id) {
      return this.editingItemId === id;
    },
    async updateItem(id) {
      await axios.put(`/api/items/${id}`, {
        name: this.editedItemName
      }, {headers: {Authorization: `${localStorage.getItem('token')}`}})
          .then(response => {
            const index = this.items.findIndex(item => item.id === id);
            if (index !== -1) {
              this.items[index].name = response.data.name;
            }
            this.editingItemId = null;
            this.editedItemName = '';
          })
          .catch(error => {
            console.error('There was an error updating the item!', error);
          });
    }
  }
};
</script>

<template>
  <div class="container">
    <h2 class="text-center my-5">Ближайшие занятия</h2>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between">
        <span>8:00-9:30</span>
        <span>Матан</span>
        <a
            class="teacher"
            @click="goPage('teacher')">Иванова</a>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>17:00-18:30</span>
        <span>Физика</span>
        <a
            class="teacher"
            @click="goPage('teacher')">Сосновских</a>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <span>19:00-21:30</span>
        <span>Информатика</span>
        <a
            class="teacher"
            @click="goPage('teacher')">Тимохин</a>
      </li>
    </ul>
    <h2 class="text-center my-5">Расписание</h2>
    <table class="table">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Понедельник</th>
        <th scope="col">Вторник</th>
        <th scope="col">Среда</th>
        <th scope="col">Четверг</th>
        <th scope="col">Пятница</th>
        <th scope="col">Суббота</th>
        <th scope="col">Воскресенье</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="time" scope="row">8:00-9:30</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">9:45-11:15</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">11:30-13:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">13:15-14:45</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">15:00-16:30</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">16:45-18:15</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">18:30-20:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th class="time" scope="row">20:15-21:45</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.time {
  border-right: 1px solid #dee2e6;
}
</style>