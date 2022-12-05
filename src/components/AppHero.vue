<template>
  <main>
    <HeroNav />
  </main>
</template>

<script>
import HeroNav from "./HeroNav.vue";

export default {
  components: {
    HeroNav,
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 700px;
  background-image: url("../assets/img/bg-6.jpg");
  background-size: cover;
  background-position: 0 -100px;
}
</style>
