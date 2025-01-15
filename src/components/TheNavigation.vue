<template>
  <header>
    <nav id="nav">
      <div class="logo">
        <img src="/images/logo.jpg" alt="Logo" class="nav-logo">
        <p><span class="airsoft">Airsoft</span><span class="app">App</span></p>
      </div>
      <div class="menu">
        <RouterLink class="home-link" to="/">Home</RouterLink>
        <RouterLink
            v-for="section in sections"
            :key="section.slug"
            :to="`/section/${section.slug}`">
          {{ section.name }}
        </RouterLink>
        <div class="get-started">
          <RouterLink class="start-link" to="/start">Get Started</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import dataSections from '../data.json';
export default {
  name: "TheNavigation",
  data() {
    return {
      sections: dataSections.sections,
    };
  },
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px 300px; /* Padding adjusted for spacing */
  background: white;
  color: #2c3e50;
  display: flex;
  justify-content: space-between; /* Space out left and right sections */
  align-items: center;
  z-index: 2;
}

.logo {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

#nav .nav-logo {
  height: 50px;
  margin: 0;
}

.menu {
  display: flex;
  justify-content: space-around;
  width: auto;
  align-items: center;
}

#nav a {
  display: inline-block;
  margin-right: 20px;
  color: black;
  opacity: 0.7;
  transition: 0.2s ease color;
}

#nav a.router-link-active {
  color: orange;
  opacity: 1;
}

#nav .get-started .router-link-active {
  color: white; /* Set color to white for active "Get Started" link */
}

#nav a:hover {
  opacity: 1;
}

.home-link {
  font-size: 1.5rem;
  font-weight: bold;
}

.start-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}

.get-started {
  background: orange;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
}

a {
  text-decoration: none;
  font-weight: bold;
}

/* Styling for Airsoft and App */
.airsoft {
  color: black;
  font-weight: bold;
  font-size: 40px;
}

.app {
  color: orange;
  font-weight: bold;
  font-size: 30px;
}
</style>
