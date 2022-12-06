<script>
import AboutUs from "./AboutUs.vue";
import OurServices from "./OurServices.vue";
import OurPlan from "./OurPlan.vue";

export default {
  name: "AppMain",
  components: {
    AboutUs,
    OurServices,
    OurPlan,
  },
};
</script>

<template>
  <AboutUs />
  <OurServices />
  <OurPlan />
</template>

<style lang="scss" scoped></style>
