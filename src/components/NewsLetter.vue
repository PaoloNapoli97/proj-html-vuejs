<template>
  <main>
    <div class="row">
      <div class="introduction">
        <h6>NEWSLETTER</h6>
        <h2><span class="badge">Know</span> First</h2>
        <p>
          Followe closely and receive content about our company and news of the
          current market.
        </p>
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit" class="btn btn-primary">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 100px 0;
  background-image: url("../assets/img/bg-1.jpg");
  background-size: cover;
  background-position: 0 20%;
}
.row {
  color: var(--quaternary-color);
  display: flex;
  width: 50%;
  margin: auto;

  .introduction {
    margin-top: 40px;
    width: 50%;
    margin-right: 50px;

    h2 {
      color: inherit;
    }
  }

  input {
    background-color: var(--secondary-color);
    opacity: 0.6;
    width: 100%;
    margin-bottom: 20px;
    outline: none;
    padding: 12px;
    border-radius: 4px;
    border: none;
    color: gray;
  }
}
</style>
