<template>
  <div class="header">
    <h1>{{ section.name }}</h1>
    <p>{{ section.description }}</p>
    <router-view />
  </div>

  <!-- Features Section -->
  <div>
    <FeatureList v-if="section.features" :features="section.features" />
    <div v-if="section.features" class="more-features">
      <p>More Features</p>
      <h1>We have a lot more features</h1>
      <div class="more-features-wrapper">
        <!-- Features section 1 -->
        <div class="more-features-detail">
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Multiple game modes</p>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Danger Zones</p>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Medics</p>
          </div>
        </div>
        <!-- Features section 2 -->
        <div class="more-features-detail">
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Airstrikes</p>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Fortress Zones</p>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>UAV's</p>
          </div>
        </div>
        <!-- Features section 3 -->
        <div class="more-features-detail">
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Mortars</p>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Quest Zones</p>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>Quick Games</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div v-if="section.slug === 'contact'" class="more-features2">
      <div class="contact-content">
        <div class="contact-text">
          <h1><span>Airsoft</span><span class="orange2">App</span></h1>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <h2>Airsoft events with GPS</h2>
          </div>
          <div class="feature-item">
            <IconCheckMark class="orange" />
            <p>If you would like to contact us, please do so.</p>
          </div>
          <div class="button">
            <a href="mailto:airsoftapp@support.com">Get in Touch</a>
          </div>
          <div class="socials">
            <ul>
              <li><a href="https://discord.com/"><img src="/images/discord.png" alt="Discord Icon"></a></li>
              <li><a href="https://www.facebook.com/"><img src="/images/fb.png" alt="Facebook Icon"></a></li>
              <li><a href="https://www.reddit.com/"><img src="/images/reddit.png" alt="Reddit Icon"></a></li>
              <li><a href="https://www.instagram.com/"><img src="/images/insta.png" alt="Instagram Icon"></a></li>
            </ul>
          </div>
        </div>
        <div class="player">
          <img src="/images/masked.png" alt="Player">
        </div>
      </div>
    </div>

    <!-- how to use section -->
    <div v-if="section.slug === 'how-to-use'" class="more-features3">
      <div class="step1">
        <h2>Step 1 - Register</h2>
        <p>Go to the Organiser panel and register to become an event organiser</p>
        <p>After registration proceed to creating your first field of battle</p>
      </div>

      <div class="step2">
        <h2>Step 2 - Creating your battlefield</h2>
        <ul>
          <li>Go to fields and press „create a new field“</li>
          <li>Upload a field image</li>
          <li>Give your field a name</li>
        </ul>
        <p>OPTIONAL, but recommended if you intend to use this field more than once</p>
        <h3>Create zones(These will be later assigned for spawns, objectives, quests and danger zones):</h3>
        <div class="step2-contents">
          <div>
            <ul>
              <li>Find your field on the map</li>
              <li>Using the draw polygon or draw circle functions you will need to draw areas</li>
              <li>It is required to have at least 2 spawn points and 1 objective point</li>
              <li>Set a center for your field and a parking location</li>
              <li>Name your areas (Use easy to understand names, because you will need to assign functions to them)</li>
            </ul>
          </div>

          <div>
            <img src="/images/map.png" alt="Map" class="map-image">
          </div>
        </div>
      </div>

      <div class="step3">
        <h2>Step 3 – Creating an event</h2>
        <ul>
          <li>In the games tab, Press „new game“</li>
          <li>Upload event cover picture</li>
          <li>Choose a game (event) name</li>
          <li>Add game description</li>
        </ul>
        <h3>Configuring your field</h3>

        <div class="creating-field">
          <div>
            <p>Assign functions for the areas you have drawn with circle or polygon tool when creating a field:</p>
            <ul>
              <li>Spawns</li>
              <li>Objectives</li>
              <li>Quests</li>
              <li>Fortresses</li>
              <li>Danger zones</li>
            </ul>
          </div>

          <div>
            <img src="/images/areas.png" alt="Areas" class="areas-image">
          </div>
        </div>
      </div>

      <div class="settings">
        <h2>Settings (Advanced)</h2>
        <ul>
          <li>Set player health and bleeding damage</li>
          <li>Set damage from danger zones</li>
          <li>Set time it takes to respawn on being shot, players will start to bleed with X bleeding damage per second. They can get revived by scanning a medic's QR code. If they bleed out to 0 health, they will die. Set this number to the amount of seconds you want them to wait for medic. Standing in danger zones also reduces players health. Players with lower health will have less time to be revived after being shot</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dataSections from "../data.json";
import FeatureList from "@/components/FeatureList.vue"; // Import the FeatureList component
import { useRouter, useRoute } from "vue-router";
import IconCheckMark from "@/components/icons/IconCheckMark.vue";

export default {
  name: "SectionView",
  components: {
    IconCheckMark,
    FeatureList, // Register the FeatureList component
  },
  data() {
    const route = useRoute();
    const router = useRouter();

    const section = dataSections.sections.find(
        (dest) => dest.slug === route.params.slug
    );

    if (!section) {
      router.push("/"); // Redirect if section not found
    }

    return {
      section,
      router,
    };
  },
};
</script>

<style scoped>
/* General Header Styling */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.header p {
  margin-top: 0;
  font-size: 25px;
}

.header h1 {
  margin-top: 0;
  font-size: 40px;
}

/* Features Section */
.more-features {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.more-features-wrapper {
  display: flex;
  flex-direction: row;
  gap: 60px;
}

.more-features-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 30px;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.feature-item {
  display: flex;
  align-items: center;
}

.feature-item p {
  margin-left: 10px;
  font-size: 18px;
}

.feature-item h2 {
  margin-left: 10px;
}

/* Contact Section */
.more-features2 {
  margin-top: 50px;
}

.contact-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0;
  margin-bottom: 200px;
}

.contact-text {
  flex: 2;
  max-width: 800px;
  text-align: left;
  background-color: #f4f4f4;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-text h1 {
  text-decoration: underline;
  font-size: 40px;
  margin-bottom: 10px;
}

.contact-text h2 {
  font-size: 25px;
  margin-bottom: 5px;
}

.contact-text p {
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
  padding-left: 10px;
}

.contact-text .feature-item {
  margin-bottom: 5px;
}

.player {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.socials {
  margin-top: 20px;
  text-align: center;
}

.socials ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.socials li {
  display: inline-block;
}

.socials img {
  width: 50px;
  height: auto;
}

/* How-To-Use Section */
.more-features3 h2 {
  text-decoration: orange underline;
}

.step1 {
  margin-top: 50px;
}

.step2 {
  margin-top: 80px;
}

.step2-contents {
  display: flex;
  flex-direction: row;
}

.map-image {
  width: 350px;
  border-radius: 10px;
}

.step3 {
  margin-top: 50px;
}

.creating-field {
  display: flex;
  flex-direction: row;
}

.areas-image {
  width: 500px;
  border-radius: 10px;
}

.settings {
  margin-bottom: 60px;
}

/* Buttons */
.button {
  background: orange;
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin-top: 20px;
}

.button:hover {
  background-color: darkorange;
}

/* Utility Classes */
.orange {
  color: orange;
}

.orange2 {
  color: orange;
  font-size: 25px;
}
</style>