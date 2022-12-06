<script>
import AboutUs from "./AboutUs.vue";
import OurServices from "./OurServices.vue";
import OurPlan from "./OurPlan.vue";
import OurTeam from "./OurTeam.vue";

export default {
  name: "AppMain",
  components: {
    AboutUs,
    OurServices,
    OurPlan,
    OurTeam,
  },
};
</script>

<template>
  <AboutUs />
  <OurServices />
  <OurPlan />
  <OurTeam />
</template>

<style lang="scss" scoped></style>
