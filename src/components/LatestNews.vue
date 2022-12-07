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
          <button class="btn btn-primary" @click="loadMore">SEE ALL</button>
        </div>
      </div>
      <div class="cards-container">
        <NewsCard v-for="card in cardsLoaded" class="card" :info="card" />
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
    return {
      cards: [
        {
          image: "news-1.jpg",
          text: "Increasing creativity is possible for everyone",
        },
        {
          image: "news-2.jpg",
          text: "Because market research is part of the business plan",
        },
        {
          image: "news-3.jpg",
          text: "Working from home is now a trend",
        },
        {
          image: "news-4.jpg",
          text: "Se ni’ mondo esistesse un po’ di bene e ognun si honsiderasse suo fratello",
        },
        {
          image: "news-5.jpg",
          text: "ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello",
        },
      ],
      length: 3,
    };
  },
  methods: {
    loadMore() {
      if (this.length > this.cards.length) return;
      this.length = this.length + 3;
    },
  },
  computed: {
    cardsLoaded() {
      return this.cards.slice(0, this.length);
    },
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
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .card {
      width: calc(100% / 3 - 20px);
      padding-top: 10px;
      margin: auto;
    }
  }
}
</style>
