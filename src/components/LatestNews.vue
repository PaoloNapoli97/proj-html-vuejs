<template>
  <main>
    <div class="container">
      <div class="introduction">
        <h6>OUR EDITORIAL CONTENT</h6>
        <h2>Latest <span class="badge">News</span></h2>
        <div class="row">
          <p>
            Every week we publish content about what is the best business world.
          </p>
          <button class="btn btn-primary">SEE ALL</button>
        </div>
      </div>
      <div class="cards-container">
        <NewsCard class="card" />
      </div>
    </div>
  </main>
</template>

<script>
import NewsCard from "./NewsCard.vue";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 100px 0;

  .row {
    display: flex;
    justify-content: space-between;

    button {
      align-self: baseline;
    }
  }

  .cards-container {
  }
}
</style>
