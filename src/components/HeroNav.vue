<template>
  <div class="container">
    <div class="logo"><img src="../assets/img/nexgen-logo.svg" alt="" /></div>
    <div class="sections">
      <ul>
        <li class="option" v-for="option in options">
          <a :href="option.href">{{ option.text }}</a>
        </li>
        <button>GET IN TOUCH</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          href: "#",
          text: "HOME",
        },
        {
          href: "#",
          text: "ABOUT",
        },
        {
          href: "#",
          text: "SERVICES",
        },
        {
          href: "#",
          text: "PROCESS",
        },
        {
          href: "#",
          text: "TEAM",
        },
        {
          href: "#",
          text: "BLOG",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 120px;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      padding: 0 20px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      border: none;
      color: white;
      background-color: var(--primary-color);
      padding: 10px 14px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
