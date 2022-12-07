<template>
  <div class="card">
    <img :src="`src/assets/img/${info.image}`" :alt="info.image" />
    <div class="text">{{ info.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  img {
    width: 100%;
    border-radius: 14px;
    filter: brightness(60%);
  }

  .text {
    padding: 0 10px;
    font-size: 20px;
    font-weight: 800;
    color: var(--quaternary-color);
    position: absolute;
    bottom: 60px;
    text-align: center;
  }
}
</style>
