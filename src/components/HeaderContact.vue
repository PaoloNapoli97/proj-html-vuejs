<template>
  <div class="container">
    <div class="open-hours">1</div>
    <div class="contacts">
      {{ infoChild.number }}
      {{ infoChild.email }}
      <div class="social" v-for="social in infoChild.socials">
        {{ social.link }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoChild: Object,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
