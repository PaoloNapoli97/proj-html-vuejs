<script>
import HeaderContact from "./HeaderContact.vue";

export default {
  name: "AppHeader",
  components: {
    HeaderContact,
  },
  props: {
    info: Object,
  },
};
</script>

<template>
  <header>
    <HeaderContact :infoChild="info" />
  </header>
</template>

<style lang="scss" scoped></style>
