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
  methods: {
    async fetchItems() {
      await axios.get('http://localhost:8080/api/items', {
        headers: {Authorization: localStorage.getItem('token')}})
          .then(response => {
            this.items = response.data;
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    },
    mounted() {
      this.fetchItems();
    },
    async addItem() {
      await axios.post('http://localhost:8080/api/items', {
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
      await axios.delete(`http://localhost:8080/api/items/${id}`, {headers: {Authorization: `${localStorage.getItem('token')}`}})
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
      await axios.put(`http://localhost:8080/api/items/${id}`, {
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
    <h1 class="text-center">Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <span v-if="!isEditing(item.id)">{{ item.name }}</span>
        <input v-if="isEditing(item.id)" v-model="editedItemName" @keyup.enter="updateItem(item.id)"/>
        <button v-if="!isEditing(item.id)" @click="startEditing(item.id, item.name)">Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
    <form class="d-flex gap-1 justify-between">
      <input
          v-model="newItem"
          placeholder="Add new item"
          class="form-control"/>
      <button @click="addItem" class="btn btn-secondary w-10 text-nowrap">Add Item</button>
    </form>
  </div>
</template>

<style scoped>

</style>