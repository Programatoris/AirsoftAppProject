<template>
  <div class="container">
    <!-- Text and Get Started Link Div -->
    <div class="text-container">
      <h2>It's time for you to have</h2>
      <h1>The best Airsoft Events</h1>
      <p>With AirsoftApp you can take your milsim events to the next level</p>
      <RouterLink class="start-link" to="/get-started">
        <span class="button-text">Get Started</span>
      </RouterLink>

      <!-- App Store and Google Play Images Div -->
      <div class="store-images">
        <a href="https://play.google.com/store/games?device=windows">
          <img src="/images/gglplay.jpg" alt="Google Play Icon" class="store-image" />
        </a>
        <a href="https://www.apple.com/app-store/">
          <img src="/images/appstr.jpg" alt="App Store Icon" class="store-image" />
        </a>
      </div>

      <!-- Likes Section -->
      <div class="likes">
        <p>Show us your support</p>
        <icon-pointing class="pointing" />
        <like-component />
      </div>
    </div>

    <!-- Phone Image -->
    <div class="phone-image">
      <img src="/images/phone2.png" alt="Phone" class="phone-img" />
    </div>
  </div>

  <!-- Battleroyale Section -->
  <div class="container2">
    <h1>
      <span class="new">NEW!!! </span>
      <span class="battleroyale">Battleroyale</span>
    </h1>
    <div class="battleroyale-list">
      <div v-for="battleroyale in battleroyale" :key="battleroyale.slug" class="battleroyale-item">
        <h2>{{ battleroyale.name }}</h2>
        <p>{{ battleroyale.description }}</p>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="container3">
    <h1>
      <span class="new">GPS </span>
      <span class="battleroyale">Tracked Events</span>
    </h1>
    <div class="features-list">
      <div v-for="(feature, index) in features.slice(0, 3)" :key="feature.slug" class="feature-item">
        <h2>{{ feature.name }}</h2>
        <p>{{ feature.description }}</p>
      </div>
      <div class="explore-link">
        <RouterLink to="/section/features" class="bk">Explore All Features</RouterLink>
        <icon-pointing class="pointing" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
import dataBattleroyales from "../data.json";
import LikeComponent from "@/components/LikeComponent.vue";
import IconPointing from "@/components/icons/IconPointing.vue";

export default {
  name: "HomeView",
  components: { IconPointing, LikeComponent },
  data() {
    return {
      battleroyale: dataBattleroyales.battleroyale,
      features: data.sections.find((section) => section.slug === "features")?.features || [],
    };
  },
};
</script>

<style scoped>
/* General Styles */
.container {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.container2 {
  margin-top: 50px;
}

.container3 {
  margin-top: 50px;
  padding-bottom: 80px;
}

.text-container {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

/* Typography */
h2,
h1,
p,
.start-link {
  margin: 0;
  padding: 0;
  color: black;
}

h2 {
  margin-bottom: 8px;
}

h1 {
  margin-bottom: 12px;
}

p {
  margin-bottom: 30px;
  font-weight: bold;
}

/* Links and Buttons */
.start-link {
  background: orange;
  padding: 12px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.start-link:hover {
  background: darkorange;
}

.start-link .button-text {
  opacity: 0.8;
}

.start-link:hover .button-text {
  opacity: 1;
}

.bk {
  color: black;
  text-decoration: underline;
}

.bk:hover {
  color: orange;
}

/* Explore Link */
.explore-link {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: -35px;
  right: 0;
  width: 100%;
  gap: 10px;
  color: black;
  align-items: center;
}

.explore-link:hover {
  color: orange;
}

.explore-link .bk {
  transition: color 0.3s ease;
}

.explore-link .pointing {
  transition: transform 0.3s ease, color 0.3s ease;
  color: black;
}

.explore-link:hover .pointing {
  color: orange;
  transform: translateX(5px);
}

/* Highlights */
.new {
  color: orange;
}

.battleroyale {
  color: black;
}

/* Likes Section */
.likes {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: left;
  align-items: center;
  width: 100%;
}

.likes p {
  margin: 0;
  line-height: 1;
}

.pointing {
  width: 30px;
}

/* Store Images */
.store-images {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}

.store-image {
  max-width: 200px;
  max-height: 100px;
}

/* Phone Image */
.phone-image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 500px;
  width: 200px;
}

.phone-img {
  max-width: 250px;
  border-radius: 10px;
}

/* Battleroyale Grid */
.battleroyale-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.battleroyale-item {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.battleroyale-item h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.battleroyale-item p {
  font-size: 16px;
  color: #555;
}

/* Features Grid */
.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
  font-weight: bold;
  position: relative;
}

.feature-item {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.feature-item h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.feature-item p {
  font-size: 14px;
  color: #555;
}
</style>
