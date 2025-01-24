<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      user: {
        email: '',
        firstName: '',
        lastName: '',
        avatar: '',
        extraInfo: '',
      },
      avatarPreview: '',
      isEditing: false,
      notification: {
        message: '',
        type: ''
      },
      backgroundColor: '#f8f9fa',
      textColor: 'black',
    };
  },
  methods: {
    checkAuthorization() {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        this.$router.push('/login');
        return false;
      }
      return true;
    },

    async loadProfile() {
      if (!this.checkAuthorization()) {
        return;
      }

      try {
        const response = await axios.get('/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.accessToken}`
          }
        });
        this.user = response.data.user;
        if (this.user.avatar) {
          this.avatarPreview = `http://localhost:8081/images/avatars/${this.user.avatar}`;
          this.setBackgroundColorFromAvatar();
        }
      } catch (error) {
        console.error('Ошибка загрузки профиля:', error);
      }
    },

    getTextColorFromBackground(rgb) {
      const [r, g, b] = rgb;
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return brightness > 128 ? 'black' : 'white';
    },

    setBackgroundColorFromAvatar() {
      if (!this.avatarPreview) return;
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = this.avatarPreview;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, 1, 1).data;
        const [r, g, b] = imageData;
        this.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        this.textColor = this.getTextColorFromBackground([r, g, b]);
      };
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.user.avatar = file;
        this.avatarPreview = URL.createObjectURL(file);
        this.setBackgroundColorFromAvatar();
      }
    },

    async updateProfile($evt) {
      $evt.preventDefault();

      const formData = new FormData();
      formData.append('firstName', this.user.firstName);
      formData.append('lastName', this.user.lastName);
      formData.append('extraInfo', this.user.extraInfo);

      if (this.user.avatar instanceof File) {
        formData.append('avatar', this.user.avatar);
      }

      try {
        await axios.put('/profile/update', formData, {
          headers: {
            'Authorization': `Bearer ${localStorage.accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        this.notification = {
          message: 'Профиль успешно обновлён!',
          type: 'success'
        };
        await this.loadProfile();
        this.isEditing = false;
      } catch (error) {
        this.notification = {
          message: error.response?.data?.message || 'Ошибка обновления профиля!',
          type: 'error'
        };
        console.error('Ошибка обновления профиля:', error);
      } finally {
        setTimeout(() => {
          this.notification.message = '';
        }, 3000);
      }
    }
  },
  mounted() {
    this.loadProfile();
  }
};
</script>


<template>
  <div class="container mt-5" :style="{ backgroundColor: backgroundColor }">
    <h2 class="mb-4 text-center" :style="{ color: textColor }">Профиль пользователя</h2>

    <div v-if="!isEditing" class="profile-view text-center">
      <div class="mb-4">
        <img :src="avatarPreview || 'default-avatar.png'" 
             alt="аватар" 
             class="rounded-circle img-thumbnail avatar-image">
      </div>
      <div class="profile-details" :style="{ color: textColor }">
        <p class="fw-bold">Email:</p>
        <p>{{ user.email }}</p>

        <p class="fw-bold">Имя:</p>
        <p>{{ user.firstName }}</p>

        <p class="fw-bold">Фамилия:</p>
        <p>{{ user.lastName }}</p>

        <p class="fw-bold">Роль:</p>
        <p>{{ user.role === 'ROLE_STUDENT' ? 'Ученик' : 'Учитель' }}</p>

        <p class="fw-bold">Дополнительная информация:</p>
        <p>{{ user.extraInfo }}</p>
      </div>
      <button class="btn btn-secondary btn-styled" @click="isEditing = true">Редактировать профиль</button>
    </div>

    <form v-else @submit="updateProfile">
      <div class="mb-4 text-center">
        <label for="avatar" class="avatar-label">
          <img :src="avatarPreview || 'default-avatar.png'" 
               alt="аватар" 
               class="rounded-circle img-thumbnail avatar-image" 
               @click="$refs.fileInput.click()">
        </label>
        <input type="file" 
               id="avatar" 
               ref="fileInput" 
               class="d-none" 
               @change="handleFileUpload">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label fw-bold">Email:</label>
        <input type="email" id="email" class="form-control input-styled" v-model="user.email" disabled>
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label fw-bold">Имя:</label>
        <input type="text" id="firstName" class="form-control input-styled" v-model="user.firstName">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label fw-bold">Фамилия:</label>
        <input type="text" id="lastName" class="form-control input-styled" v-model="user.lastName">
      </div>
      <div class="mb-3">
        <label for="role" class="form-label fw-bold">Роль:</label>
        <select
            v-model="user.role"
            class="form-select input-styled"
            id="role"
            required
            disabled>
          <option value="ROLE_STUDENT">Ученик</option>
          <option value="ROLE_TEACHER">Учитель</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="additionalInfo" class="form-label fw-bold">Дополнительная информация:</label>
        <textarea id="additionalInfo" class="form-control input-styled" rows="3" v-model="user.extraInfo"></textarea>
      </div>
      <button class="btn btn-secondary btn-styled" type="submit">Обновить профиль</button>
      <button class="btn btn-light btn-styled ms-2" type="button" @click="isEditing = false">Отмена</button>
    </form>

    <div v-if="notification.message" 
         :class="['notification', notification.type === 'success' ? 'notification-success' : 'notification-error']">
      {{ notification.message }}
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

.container {
  padding: 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s;
}
.profile-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
.profile-details {
  margin-top: 20px;
  font-size: 1.1rem;
}
.avatar-label {
  cursor: pointer;
}
.avatar-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #ddd;
  transition: border-color 0.3s;
}
.avatar-image:hover {
  border-color: #aaa;
}
.rounded-circle {
  border-radius: 50%;
}
.input-styled {
  border: 2px solid #ced4da;
  border-radius: 8px;
  padding: 10px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.input-styled:focus {
  border-color: #6c757d;
  box-shadow: 0 0 8px rgba(108, 117, 125, 0.2);
}
.btn-styled {
  background-color: #6c757d;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;
}
.btn-styled:hover {
  background-color: #5a6268;
  transform: translateY(-2px);
}
.btn-styled:active {
  transform: translateY(0);
}
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.notification-success {
  background-color: #28a745;
}
.notification-error {
  background-color: #dc3545;
}
</style>
