<template>
  <div>
    <button @click="goBack">Go Back</button>
    <h1>{{ section.name }}</h1>
    <div class="destinationbox">
      <p>{{ section.description }}</p>
    </div>
    <h2>Experiences</h2>
    <router-view />
  </div>
</template>

<script>
import dataSections from "../data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "DestinationView",
  components: {
    ExperienceCard,
  },
  data() {
    const route = useRoute();
    const router = useRouter();

    const section = dataSections.sections.find(
        (dest) => dest.slug === route.params.slug
    );

    if (!section) {
      router.push("/"); // Ak sa destinácia nenašla
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
.image-wrapper {
  padding: 10px;
  border: 3px solid white;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.destination-details img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.destination-details p {
  font-size: 1.1rem;
  line-height: 1.5;
}

.experiences {
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #d4d4d4;
  text-align: center;
}

.destinationbox {
  display: flex;
  margin: auto;
  flex-direction: row;
  gap: 15px;
  text-align: left;
  align-items: center;
}
</style>
