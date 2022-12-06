<template>
  <main>
    <div class="container">
      <div class="col-big">
        <div class="introduction">
          <h6>WE LIKE WHAT WE DO</h6>
          <h2><span class="badge">Team</span> of Expert</h2>
          <p>
            Ethics and integridty are the bases on which our professionals build
            their careers. <br />
            They are fundamentals that become daily attitudes.
          </p>
        </div>
        <div class="card-container">
          <TeamCard class="cards" v-for="person in team" :data_team="person" />
        </div>
      </div>
      <div class="col-small">
        <h4>President Speech</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reiciendis cupiditate, perferendis sapiente modi amet corrupti quasi
          quas <br />
          <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          quia voluptatibus, ad, assumenda illo fuga voluptate accusantium
          doloremque enim quam consequuntur veritatis. <br />
          <br />
          Vitae provident amet corporis vero ut unde consectetur!
        </p>
        <font-awesome-icon class="icon" icon="fa-solid fa-quote-right" />
      </div>
    </div>
  </main>
</template>

<script>
import TeamCard from "./TeamCard.vue";

export default {
  components: {
    TeamCard,
  },
  data() {
    return {
      team: [
        {
          image: "team-4.jpg",
          name: "David Cooper",
          role: "CTO & CO-FOUNDER",
          socials: [
            {
              link: "https://it-it.facebook.com/",
              icon: "fa-brands fa-facebook-f",
            },
            {
              link: "https://twitter.com/",
              icon: "fa-brands fa-twitter",
            },
            {
              link: "https://it.linkedin.com/",
              icon: "fa-brands fa-linkedin-in",
            },
          ],
        },
        {
          image: "team-1.jpg",
          name: "T. Johnson",
          role: "CEO & PRESIDENT",
          socials: [
            {
              link: "https://it-it.facebook.com/",
              icon: "fa-brands fa-facebook-f",
            },
            {
              link: "https://twitter.com/",
              icon: "fa-brands fa-twitter",
            },
            {
              link: "https://it.linkedin.com/",
              icon: "fa-brands fa-linkedin-in",
            },
          ],
        },
        {
          image: "team-2.jpg",
          name: "Emma Lopez",
          role: "CHIEF MARKETING",
          socials: [
            {
              link: "https://it-it.facebook.com/",
              icon: "fa-brands fa-facebook-f",
            },
            {
              link: "https://twitter.com/",
              icon: "fa-brands fa-twitter",
            },
            {
              link: "https://it.linkedin.com/",
              icon: "fa-brands fa-linkedin-in",
            },
          ],
        },
        {
          image: "team-3.jpg",
          name: "Oliver Jones",
          role: "CHIEF PROCUREMENT",
          socials: [
            {
              link: "https://it-it.facebook.com/",
              icon: "fa-brands fa-facebook-f",
            },
            {
              link: "https://twitter.com/",
              icon: "fa-brands fa-twitter",
            },
            {
              link: "https://it.linkedin.com/",
              icon: "fa-brands fa-linkedin-in",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 100px 0;
  background-color: var(--bg-primary-color);

  .container {
    color: var(--quaternary-color);
    display: flex;
    justify-content: space-between;
    .col-big {
      width: 60%;

      h2 {
        color: var(--quaternary-color);
      }

      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .cards {
          width: calc(100% / 2 - 20px);
          margin: 10px 0;
        }
      }
    }

    .col-small {
      padding: 20px;
      width: 30%;
      background-color: var(--primary-color);
      border-radius: 4px;
      position: relative;

      .icon {
        color: var(--line-color);
        font-size: 26px;
        position: absolute;
        right: 22px;
        bottom: 20px;
      }
    }
  }
}
</style>
