<template>
  <div class="card">
    <img :src="`src/assets/img/${data_team.image}`" :alt="data_team.name" />
    <div class="info">
      <h4>{{ data_team.name }}</h4>
      <small> {{ data_team.role }}</small>
      <div class="socials">
        <ul>
          <li class="social" v-for="social in data_team.socials">
            <a :href="social.link"><font-awesome-icon :icon="social.icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data_team: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;

  .info {
    display: flex;
    flex-direction: column;
    padding-left: 12px;

    .socials {
      margin-top: auto;
      ul {
        display: flex;
        list-style: none;

        li {
          margin: 0 4px;
          width: 30px;
          height: 30px;
          position: relative;
          background-color: var(--primary-color-light);
          border-radius: 50%;
        }
        a {
          position: absolute;
          top: 2px;
          left: 8px;
          text-decoration: none;
          color: var(--primary-color);
        }
      }
    }
  }

  img {
    width: 100px;
    height: 110px;
  }
}
</style>
