<script>
import AboutUs from "./AboutUs.vue";
import OurServices from "./OurServices.vue";
import OurPlan from "./OurPlan.vue";
import OurTeam from "./OurTeam.vue";
import LatestNews from "./LatestNews.vue";
import NewsLetter from "./NewsLetter.vue";

export default {
  name: "AppMain",
  components: {
    AboutUs,
    OurServices,
    OurPlan,
    OurTeam,
    LatestNews,
    NewsLetter,
  },
};
</script>

<template>
  <AboutUs />
  <OurServices />
  <OurPlan />
  <OurTeam />
  <LatestNews />
  <NewsLetter />
</template>

<style lang="scss" scoped></style>
