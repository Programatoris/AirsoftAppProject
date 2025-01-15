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
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center horizontally */
  text-align: center; /* Ensure text inside is centered */
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

.more-features {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center horizontally */
  text-align: center; /* Ensure text inside is centered */
  font-weight: bold;
}

.button {
  background: orange;
  padding: 10px 20px; /* Add horizontal padding for a more balanced button */
  border-radius: 10px;
  display: inline-block; /* Ensure the button does not stretch across the container */
  text-align: center; /* Center text within the button */
  font-size: 18px; /* Optional, adjust button text size */
  color: white; /* Change text color to white for contrast */
  text-decoration: none; /* Remove default link styling */
  margin-top: 20px; /* Space between the button and text */
}

.button:hover {
  background-color: darkorange; /* Optional: change color on hover */
}

.more-features2 {
  margin-top: 50px;
}

.contact-content {
  display: flex;
  flex-direction: row; /* Arrange items side by side */
  align-items: center; /* Align items vertically */
  justify-content: space-between; /* Add space between text and image */
  gap: 0; /* Remove gap to make divs touch */
  margin-bottom: 200px;
}

.contact-text {
  flex: 2; /* Increase the space taken by the text div */
  max-width: 800px; /* Set a max width for the text div */
  text-align: left; /* Align text to the left */
  background-color: #f4f4f4; /* Optional background color */
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-text h1 {
  text-decoration: underline;
}

.contact-text .feature-item {
  margin-bottom: 10px; /* Decrease the margin between the items */
}

.contact-text .feature-item p,
.contact-text .feature-item h2 {
  margin-bottom: 0; /* Remove any bottom margin from the text */
}

.contact-text h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.contact-text h2 {
  font-size: 25px;
  margin-bottom: 20px;
}

.contact-text p {
  font-size: 18px;
  line-height: 1.5;
}

.player {
  flex: 1; /* Take up available space */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
}

.player img {
  max-width: 100%;
  border-radius: 10px 10px 10px 10px; /* Rounded corners for the image */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.socials {
  margin-top: 20px;
  text-align: center; /* Center the social media links */
}

.socials ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center; /* Center the social icons */
  gap: 40px; /* Space between the social icons */
}

.socials li {
  display: inline-block;
}

.socials img {
  width: 50px; /* Adjust the size of the social icons */
  height: auto;
}

.orange {
  color: orange;
}

.orange2 {
  color: orange;
  font-size: 25px;
}

.more-features-detail {
  display: flex;
  flex-direction: column; /* Stack each checkmark-text pair vertically */
  align-items: flex-start;
  gap: 10px; /* Add space between each feature */
  margin-bottom: 30px; /* Space between feature sections */
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.feature-item {
  display: flex;
  align-items: center; /* Align checkmark and text horizontally */
}

.feature-item p {
  margin-left: 10px; /* Add space between checkmark and text */
  font-size: 18px;
}

.feature-item h2 {
  margin-left: 10px; /* Add space between checkmark and text */
}

.more-features-wrapper {
  display: flex;
  flex-direction: row;
  gap: 60px;
}
</style>
