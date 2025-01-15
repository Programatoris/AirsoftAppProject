<template>
  <div class="container">
    <!-- Text and Get Started Link Div -->
    <div class="text-container">
      <h2>It's time for you to have</h2>
      <h1>The best Airsoft Events</h1>
      <p>With AirsoftApp you can take your milsim events to the next level</p>
      <RouterLink class="start-link" to="/start"><span class="button-text">Get Started</span></RouterLink>

      <!-- App Store and Google Play Images Div -->
      <div class="store-images">
        <img src="/images/appstr.jpg" alt="google_play" class="store-image">
        <img src="/images/gglplay.jpg" alt="app_store" class="store-image">
      </div>
    </div>

    <!-- Phone Image -->
    <div class="phone-image">
      <img src="/images/phone.png" alt="Phone" class="phone-img">
    </div>
  </div>

  <div class="container2">
    <h1><span class="new">NEW!!! </span><span class="battleroyale">Battleroyale</span></h1>
    <div class="battleroyale-list">
      <!-- Loop through battleroyales -->
      <div v-for="battleroyale in battleroyale" :key="battleroyale.slug" class="battleroyale-item">
        <h2>{{ battleroyale.name }}</h2>
        <p>{{ battleroyale.description }}</p>
      </div>
    </div>
  </div>

  <div class="container3">
    <!-- Features Section -->
    <h1><span class="new1">GPS Tracked Events</span></h1>
    <div class="features-list">
      <!-- Loop through the features -->
      <div v-for="(feature, index) in features.slice(0, 3)" :key="feature.slug" class="feature-item">
        <h2>{{ feature.name }}</h2>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
import dataBattleroyales from "../data.json";

export default {
  name: "HomeView",
  data() {
    return {
      battleroyale: dataBattleroyales.battleroyale,
      features: data.sections.find(section => section.slug === "features")?.features || []
    };
  },
};
</script>

<style scoped>
.new {
  color: orange;
}

.new1 {
  color: black;
}

.battleroyale {
  color: black;
}

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
}

.text-container {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

h2, h1, p, .start-link {
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

.start-link {
  background: orange;
  padding: 12px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-top: 10px;
}

.start-link .button-text {
  opacity: 0.8;
}

.start-link:hover .button-text {
  opacity: 1;
}

.store-images {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}

.store-image {
  max-width: 200px;
  max-height: 100px;
}

.phone-image {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.phone-img {
  max-width: 250px;
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .phone-image {
    margin-top: 20px;
  }
}

/* CSS Grid for Battleroyale Items */
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

/* CSS Grid for Features */
.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
  font-weight: bold;
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
