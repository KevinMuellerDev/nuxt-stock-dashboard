<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <h1>Mein Logo</h1>
        </div>
        <ul class="navbar-menu">
          <li><nuxt-link to="/">Startseite</nuxt-link></li>
          <li><nuxt-link to="/about">Über uns</nuxt-link></li>
          <li><nuxt-link to="/contact">Kontakt</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <p>{{ currentContent }}</p>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 Mein Unternehmen. Alle Rechte vorbehalten.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const currentContent = ref('Willkommen auf der Startseite!')
document.title = "Home"

const getContentByPath = (path) => {
  switch (path) {
    case '/':
      return "Willkommen auf der Startseite"
    case '/about':
      return "Willkommen auf der Über uns Seite"
    case '/contact':
      return "Willkommen auf der Kontakt Seite"
    default:
      return "Seite nicht gefunden"
  }
};

const getTitleByPath = (path) => {
  switch (path) {
    case '/':
      return "Home"
    case '/about':
      return "Über uns"
    case '/contact':
      return "Kontakt"
    default:
      return "Seite nicht gefunden"
  }
};

currentContent.value = getContentByPath(route.path);

watch(() => route.path, (newPath) => {
  currentContent.value = getContentByPath(newPath);
  document.title = getTitleByPath(newPath);
})

</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand h1 {
  margin: 0;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-left: 20px;
}

.navbar-menu a {
  color: white;
  text-decoration: none;
}

.navbar-menu a:hover {
  text-decoration: underline;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}
</style>
