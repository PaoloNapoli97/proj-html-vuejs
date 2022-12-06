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
      </div>
      <div class="col-small">1</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          image: "/team-4.png",
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
          image: "/team-1.png",
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
          image: "/team-2.png",
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
          image: "/team-3.png",
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
    }
    .col-small {
      width: 30%;
      background-color: aqua;
    }
  }
}
</style>
