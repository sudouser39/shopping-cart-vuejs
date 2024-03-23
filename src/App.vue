<script setup>
import { RouterLink, RouterView } from "vue-router";
import Welcome from "./components/Welcome.vue";
</script>

<template>
  <header>
    <div class="header-content">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <div class="welcome-container">
          <Welcome msg="Konbini コンビニ" />
        </div>

        <nav>
          <RouterLink to="/">Login</RouterLink>
          <RouterLink to="/productsview">Products</RouterLink>
          <RouterLink to="/inventory">Inventory</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  text-align: center; /* Center the content horizontally */
}

.welcome-container {
  margin-bottom: -5rem; /* Add some space between Welcome and nav */
}

/* New styles to center Welcome */
.welcome-container {
  display: flex;
  justify-content: center; /* Center horizontally */
}

header {
  color: white;
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.header-content {
  width: 100%;
  max-width: 1200px; /* Adjust maximum width as needed */
  padding: 0 20px; /* Add some padding */
}

.logo {
  display: block;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
}

.wrapper {
  text-align: center; /* Center the content horizontally */
}

.welcome-wrapper {
  margin-bottom: 20px; /* Add some space between Welcome and navigation */
}

nav {
  font-size: 12px;
  margin-top: 25px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    margin-top: 1rem;
  }
}
</style>
