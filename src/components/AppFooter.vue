<script>
import FooterCards from "./FooterCards.vue";

export default {
  components: {
    FooterCards,
  },
  props: {
    info: Object,
  },
  data() {
    return {
      footerInfo: [
        {
          title: "About",
          links: [
            {
              href: "#",
              text: "The Company",
            },
            {
              href: "#",
              text: "Institutional",
            },
            {
              href: "#",
              text: "Social & Events",
            },
            {
              href: "#",
              text: "Innovations",
            },
            {
              href: "#",
              text: "Evironment",
            },
            {
              href: "#",
              text: "Technology",
            },
          ],
        },
        {
          title: "Services",
          links: [
            {
              href: "#",
              text: "Audit & Assurance",
            },
            {
              href: "#",
              text: "Financial Advisory",
            },
            {
              href: "#",
              text: "Analytics M&A",
            },
            {
              href: "#",
              text: "Middle Merketing",
            },
            {
              href: "#",
              text: "Legal Consulting",
            },
            {
              href: "#",
              text: "Regulatory Risk",
            },
          ],
        },
        {
          title: "Support",
          links: [
            {
              href: "#",
              text: "Responsibility",
            },
            {
              href: "#",
              text: "Terms of Use",
            },
            {
              href: "#",
              text: "About Cookies",
            },
            {
              href: "#",
              text: "Privacy Policy",
            },
            {
              href: "#",
              text: "Accessibility",
            },
            {
              href: "#",
              text: "Information",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="card info">
        <img src="../assets/img/nexgen-logo.svg" alt="" />
        <p>A Functional HTML Template for Corporate & Business</p>
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-phone" />
            {{ info.number }}
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-envelope" />
            {{ info.email }}
          </li>
          <li>
            <font-awesome-icon :icon="info.location.icon" />
            {{ info.location.address }}
          </li>
        </ul>
        <button class="btn">GET IN TOUCH</button>
      </div>
      <FooterCards
        class="card card-contacts"
        v-for="info in footerInfo"
        :data="info"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  color: var(--quaternary-color);
  padding: 100px 0;
  background-color: var(--bg-primary-color);

  .container {
    display: flex;
    justify-content: space-between;

    .btn {
      margin-top: 12px;
      background-color: transparent;
    }
    .card {
      width: calc(100% / 4 - 30px);
    }
    .card-contacts {
      padding: 40px 0;
      background-color: var(--footer-card-color);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .info {
      p {
        padding: 8px;
      }
      img {
        height: 50px;
      }

      ul {
        list-style: none;

        li {
          padding: 4px 0;

          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
}
</style>
