<template>
  <div class="header">
    <h1>{{ section.name }}</h1>
    <p>{{ section.description }}</p>
    <router-view />
  </div>

  <!-- If section is features -->
  <div>
    <FeatureList v-if="section.features" :features="section.features" />
    <div v-if="section.features" :features="section.features" class="more-features">
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
  methods: {
    goBack() {
      this.router.push('/');
    },
    goToExperience(experienceSlug) {
      this.router.push(`/section/${this.section.slug}/experience/${experienceSlug}`);
    },
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

.header p{
  margin-top: 0;
  font-size: 25px;
}

.header h1{
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

.orange {
  color: orange;
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

.more-features-wrapper {
  display: flex;
  flex-direction: row;
  gap: 60px;
}
</style>
