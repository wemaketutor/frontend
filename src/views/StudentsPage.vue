<script>

</script>

<template>

  <div class="container my-5">
    <h1 class="mb-4">Список учеников</h1>
    <div class="mb-4">
      <input type="text" class="form-control" id="searchInput" placeholder="Поиск книг...">
    </div>
    <div class="d-flex flex-column gap-3">
      <div class="row fw-bold">
        <div class="col-3">Имя ученика</div>
        <div class="col-3">Кол-во занятий в неделю</div>
        <div class="col-3">Тип оплаты</div>
        <div class="col-3">Долг</div>
      </div>
      <div class="row">
        <div class="col-3"><a href="/">Иванов Иван</a></div>
        <div class="col-3">6</div>
        <div class="col-3">Абонемент</div>
        <div class="col-3 text-danger">3000</div>
      </div>
      <div class="row">
        <div class="col-3"><a href="/">Лорем Ипсум</a></div>
        <div class="col-3">3</div>
        <div class="col-3">Поурочно</div>
        <div class="col-3 text-secondary">0</div>
      </div>
      <div class="row">
        <div class="col-3"><a href="/">Иванов Иван</a></div>
        <div class="col-3">6</div>
        <div class="col-3">Абонемент</div>
        <div class="col-3 text-danger">4000</div>
      </div>
      <div class="row">
        <div class="col-3"><a href="/">Лорем Ипсум</a></div>
        <div class="col-3">3</div>
        <div class="col-3">Поурочно</div>
        <div class="col-3 text-secondary">0</div>
      </div>
      <div class="row">
        <div class="col-3"><a href="/">Иванов Иван</a></div>
        <div class="col-3">6</div>
        <div class="col-3">Абонемент</div>
        <div class="col-3 text-danger">300</div>
      </div>
      <div class="row">
        <div class="col-3"><a href="/">Лорем Ипсум</a></div>
        <div class="col-3">3</div>
        <div class="col-3">Поурочно</div>
        <div class="col-3 text-secondary">0</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>