<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      contacts: {
        number: "+1 (305) 1234-5678",
        email: "hello@example.com",
        location: [
          {
            address: "Main Avenue, 987",
            icon: "fa-solid fa-location-dot",
          },
        ],
        socials: [
          {
            href: "#",
            link: "https://it-it.facebook.com/",
            icon: "fa-brands fa-facebook-f",
          },
          {
            href: "#",
            link: "https://twitter.com/",
            icon: "fa-brands fa-twitter",
          },
          {
            href: "#",
            link: "https://it.linkedin.com/",
            icon: "fa-brands fa-linkedin-in",
          },
        ],
      },
    };
  },
};
</script>

<template>
  <AppHeader :info="contacts" />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
