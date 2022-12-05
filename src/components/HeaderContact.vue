<template>
  <header>
    <div class="container">
      <div class="open-hours">
        <font-awesome-icon icon="fa-solid fa-clock" />
        Open Hours: Mon - Sat - 9:00 - 18:00
      </div>
      <div class="contacts">
        <div class="phone">
          <font-awesome-icon icon="fa-solid fa-phone" />
          {{ infoChild.number }}
        </div>
        <div class="email">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          {{ infoChild.email }}
        </div>
        <ul>
          <li class="social" v-for="social in infoChild.socials">
            <a :href="social.link"><font-awesome-icon :icon="social.icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    infoChild: Object,
  },
};
</script>

<style lang="scss" scoped>
header {
  color: var(--header-secondary-color);
  padding: 10px 0;
  background-color: var(--tertiary-color);
}
.container {
  display: flex;
  justify-content: space-between;

  .contacts {
    div {
      padding: 0 10px;
    }
    display: flex;

    ul {
      display: flex;
      list-style: none;

      li {
        padding: 0 10px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
