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
  <h1 class="text-center my-3">Репетитор</h1>
  <section class="container d-flex flex-row">
    <div class="me-5">
      <img
          class="media-object mw150"
          src="https://www.meme-arsenal.com/memes/06ddb418ee477809334760a3c8d9a0e1.jpg"
          alt=""
          width="300px">
    </div>
    <div>
      <h2>Иванова Светлана Владимировна</h2>

      <p class="text-secondary">Стаж: 52 года</p>
      <div class="d-flex">
        <p class="text-secondary">Предметы:</p>
        <ul>
          <li class="text-secondary list-group-item">математический анализ</li>
          <li class="text-secondary list-group-item">аналитическая геометрия</li>
          <li class="text-secondary list-group-item">математическая логика</li>
        </ul></div>
    </div>
  </section>
  <h2 class="text-center my-2">Свободные ячейки</h2>
  <section class="container">
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
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">9:45-11:15</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">11:30-13:00</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">13:15-14:45</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">15:00-16:30</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">16:45-18:15</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">18:30-20:00</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      <tr>
        <th class="time" scope="row">20:15-21:45</th>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-success"><a href="">Записаться</a></td>
        <td class="table-primary text-secondary">Мест нет</td>
        <td class="table-secondary text-secondary">Нет занятий</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>

</style>