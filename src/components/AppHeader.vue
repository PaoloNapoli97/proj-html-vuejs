<script>
import HeaderContact from "./HeaderContact.vue";
import AppHero from "./AppHero.vue";

export default {
  name: "AppHeader",
  components: {
    HeaderContact,
    AppHero,
  },
  props: {
    info: Object,
  },
};
</script>

<template>
  <header>
    <HeaderContact :infoChild="info" />
    <AppHero />
  </header>
</template>

<style lang="scss" scoped></style>
