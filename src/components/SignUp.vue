<template>
  <div class="container">
    <div class="hero-container">
      <h2>FUSION & ACQUISITIONS</h2>
      <h3>Insurance Consulting</h3>

      <form action="">
        <div class="info">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <select name="" id="">
            <option value="">More Info</option>
            <option value="">Boia</option>
            <option value="">Boia Deh</option>
            <option value="">Boia Deh Pefforza</option>
            <option value="">Boia Deh Pefforza D'altronde</option>
          </select>
        </div>
        <button class="btn btn-primary">GET IN TOUCH</button>
        <button class="btn btn-secondary">READ MORE</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: end;

  .hero-container {
    position: absolute;
    width: 28%;
    top: 26%;
    // background-color: red;

    h2 {
      color: var(--primary-color);
      font-size: 18px;
    }

    h3 {
      color: var(--tertiary-color);
      font-size: 60px;
      font-weight: 800;
    }

    .info {
      display: flex;
      flex-wrap: wrap;
      margin-left: -5px;
      margin-bottom: 8px;

      input,
      select {
        background-color: var(--secondary-color);
        width: calc(100% / 2 - 10px);
        margin: 5px 5px;
        outline: none;
        padding: 12px;
        border-radius: 4px;
        border: none;
        color: gray;
      }
    }

    .btn-secondary {
      background-color: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      margin-left: 10px;
    }
  }
}
</style>
