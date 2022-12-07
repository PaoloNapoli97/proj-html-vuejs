<template>
  <div>
    <h2>{{ data.title }}</h2>
    <ul>
      <li v-for="info in data.links">
        <a :href="info.href"
          ><font-awesome-icon icon="fa-solid fa-chevron-right" />
          {{ info.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  padding-bottom: 20px;
}
ul {
  list-style: none;

  li {
    padding-bottom: 4px;
  }
  a {
    font-weight: 300;
    text-decoration: none;
    color: inherit;
  }
}
</style>
