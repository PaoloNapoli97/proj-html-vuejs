<template>
  <main>
    <HeroNav />
    <SignUp class="position" />
  </main>
</template>

<script>
import HeroNav from "./HeroNav.vue";
import SignUp from "./SignUp.vue";

export default {
  components: {
    HeroNav,
    SignUp,
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 700px;
  background-image: url("../assets/img/bg-6.jpg");
  background-size: cover;
  background-position: 0 -100px;
  position: relative;
}
</style>
