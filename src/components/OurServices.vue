<template>
  <main>
    <div class="container">
      <div class="introduction">
        <h6>OUR BUSINESS AREAS</h6>
        <h2>Excellence in <span class="badge">Services</span></h2>
        <div class="row">
          <p>
            We are leaders in providinf consultancy services with a set of
            cutting-edge technologies and a team of experienced and renowned
            professionals. These are some options that you can hire.
          </p>
          <button class="btn btn-primary">SEE ALL</button>
        </div>
      </div>
      <div class="card-container">
        <ServiceCard
          class="cards"
          v-for="service in services"
          :data_service="service"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: [
        {
          title: "Adult & Assurance",
          icon: "fa-solid fa-network-wired",
          text: "We might lose all your money but we ain't gonna pay you back",
        },
        {
          title: "Financial Advisory",
          icon: "fa-solid fa-briefcase",
          text: `E poi c'ha questa fissazione... Per questo pacchetto azionario!  MA CHE COS'É? UN PACCHETTO AZIONARIO?! E' FISICAMENTE UN PACCHETTO, O NO?!`,
        },
        {
          title: "Analytics and M&A",
          icon: "fa-solid fa-chart-line",
          text: "Ragazzi, non drogatevi! Ho perso la corsa della vita a causa di quella robaccia..",
        },
        {
          title: "Middle Marketing",
          icon: "fa-solid fa-plane",
          text: "Non sento l'Africa",
        },
        {
          title: "Legal Consulting",
          icon: "fa-solid fa-scale-balanced",
          text: "Like shining oil, this night is dripping down Stars are slipping down, glistening",
        },
        {
          title: "Regulatory Risk",
          icon: "fa-solid fa-inbox",
          text: "When the lights go out and we open our eyes, Out there in the silence, I'll be gone, I'll be gone",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: var(--bg-secondary-color);
  padding: 160px 0;

  .row {
    display: flex;
    justify-content: space-between;

    p {
      width: 80%;
    }

    button {
      align-self: baseline;
    }
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .cards {
      width: calc(100% / 3 - 20px);
      margin: 10px 0;
    }
  }
}
</style>
