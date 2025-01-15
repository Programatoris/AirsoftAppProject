<template>
  <div class="feature-list">
    <FeatureCard
        v-for="feature in features"
        :key="feature.slug"
        :feature="feature"
    />
  </div>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  name: "FeatureList",
  components: {
    FeatureCard,
  },
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between feature cards */
  flex-direction: column;
}
</style>