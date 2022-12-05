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
  <main>
    <HeaderContact :infoChild="info" />
  </main>
</template>

<style lang="scss" scoped></style>
