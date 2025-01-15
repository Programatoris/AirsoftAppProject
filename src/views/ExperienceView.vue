<template>
  <div v-if="experience">
    <br>
    <!-- Obal pre obrázok a text, v rámci jedného okraja -->
    <div class="experience-box">
      <!-- Nadpis v boxe -->
      <h1 class="experience-box-title">{{ experience.name }}</h1>

      <!-- Flexbox pre obrázok a text vedľa seba -->
      <div class="experience-content">
        <div class="image-wrapper">
          <img :src="'/images/' + experience.image" :alt="experience.name" />
        </div>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dataSections from "../data.json";

export default {
  name: "ExperienceView",
  data() {
    const route = this.$route;
    const section = dataSections.sections.find(
        (dest) => dest.slug === route.params.slug
    );

    const experience = section
        ? section.experiences.find(
            (exp) => exp.slug === route.params.experienceSlug
        )
        : null;

    return {
      section,
      experience,
    };
  }
};
</script>

<style scoped>
.experience-box {
  border: 3px solid #2c3e50;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 30px;
}

.experience-box-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2c3e50;
  text-align: center;
}

.experience-content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.experience-box img {
  width: 250px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.experience-box p {
  font-size: 1.1rem;
  line-height: 1.5;
  flex-grow: 1;
}
</style>
