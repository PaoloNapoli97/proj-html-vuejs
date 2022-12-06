<template>
  <header>
    <div class="container">
      <div class="section">
        <h6>ABOUT THE NETWORK</h6>
        <div class="col">
          <h2><span class="badge">The</span>Company</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel
            repellendus earum error animi dolorum delectus minus mollitia nam
            voluptatibus nesciunt iure, quos qui itaque aperiam pariatur
            doloremque quia repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            possimus tempore.
          </p>
        </div>
        <div class="col col-right">
          <div class="col-card">
            <div class="title">
              <font-awesome-icon class="icon" icon="fa-solid fa-award" />
              <h4>Tradition</h4>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="col-card">
            <div class="title">
              <font-awesome-icon class="icon" icon="fa-solid fa-lock" />
              <h4>Security</h4>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="col-card">
            <div class="title">
              <font-awesome-icon
                class="icon"
                icon="fa-solid fa-pen-to-square"
              />
              <h4>Certificate</h4>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="col-card">
            <div class="title">
              <font-awesome-icon
                class="icon"
                icon="fa-solid fa-graduation-cap"
              />
              <h4>Expertise</h4>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: var(--bg-primary-color);
  padding: 160px 0;

  .section {
    color: var(--quaternary-color);
    display: flex;
    position: relative;

    .col {
      width: 50%;

      p {
        font-weight: 300;
        padding: 8px 0;
      }
    }

    h2 {
      font-weight: 900;
      font-size: 30px;
      color: var(--quaternary-color);
      padding-bottom: 20px;
    }

    h6 {
      color: var(--primary-color);
      position: absolute;
      top: -30px;
    }

    .col-right {
      margin-left: 60px;
      display: flex;
      flex-wrap: wrap;

      .col-card {
        height: calc(100% / 2 - 20px);
        width: calc(100% / 2 - 20px);
        margin-right: 20px;
        // background-color: red;

        .title {
          display: flex;
          align-items: center;
          padding-bottom: 10px;

          .icon {
            font-size: 24px;
            color: var(--primary-color);
            padding-right: 8px;
          }
        }
      }

      h4 {
        font-weight: 600;
        font-size: 22px;
      }
    }
  }
}
</style>
