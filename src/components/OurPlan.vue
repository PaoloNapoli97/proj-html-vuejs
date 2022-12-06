<template>
  <main>
    <div class="introduction">
      <h6>HOW IT WORKS IN PRACTICE</h6>
      <h2><span class="badge">Process</span> Management</h2>
      <p>
        We work with innovative methodologies to ensure that the entire
        reformatting process is done from start to finish as planned.
      </p>
    </div>
    <div class="line-graph">
      <div class="line"></div>
      <div class="line-container">
        <div class="step" v-for="step in steps">
          <div class="circle">{{ step.number }}</div>
          <h3>{{ step.scope }}</h3>
          <p>{{ step.more }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          number: "01",
          scope: "Collection of imformation",
          more: "Lorem ipsum dolor sit amet consecteur",
        },
        {
          number: "02",
          scope: "Strategic planning",
          more: "Lorem ipsum dolor sit amet consecteur",
        },
        {
          number: "03",
          scope: "Assignment of responsibilities",
          more: "Lorem ipsum dolor sit amet consecteur",
        },
        {
          number: "04",
          scope: "Formatting process",
          more: "Lorem ipsum dolor sit amet consecteur",
        },
        {
          number: "05",
          scope: "Continuity formalization",
          more: "Lorem ipsum dolor sit amet consecteur",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 100px 0;

  .line-graph {
    margin-top: 20px;
    position: relative;
    .line-container {
      width: 80%;
      display: flex;
      margin: auto;
      justify-content: space-between;

      .step {
        text-align: center;
        position: relative;

        h3 {
          padding-top: 40px;
          padding-bottom: 10px;
        }
        p {
          font-weight: 300;
        }
        .circle {
          font-weight: 700;
          color: var(--primary-color);
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -18px;
          margin: auto;
          right: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--line-color);
        }
      }
    }
    .line {
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: var(--line-color);
    }
  }
  .introduction {
    text-align: center;

    h6 {
      left: 0;
      right: 0;
    }

    p {
      width: 40%;
      margin: auto;
    }
  }
}
</style>
