<template>
  <div class="card">
    <div class="icons">
      <font-awesome-icon class="icon" :icon="data_service.icon" />
      <font-awesome-icon class="right-arrow" icon="fa-solid fa-arrow-right" />
    </div>
    <h4>{{ data_service.title }}</h4>
    <p>{{ data_service.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data_service: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  background-color: var(--quaternary-color);
  margin: 10px;

  h4 {
    padding: 10px 0;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }
  .icons {
    display: flex;
    justify-content: space-between;

    .icon {
      font-size: 24px;
      color: var(--primary-color);
    }
    .right-arrow {
      color: var(--primary-color-light);
    }
  }
}
</style>
