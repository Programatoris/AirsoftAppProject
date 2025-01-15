<template>
  <div class="feature-card-wrapper">
    <div class="feature-card">
      <div class="feature-text">
        <h2>{{ feature.name }}</h2>
        <p>{{ feature.description }}</p>
      </div>
    </div>
    <img
        :src="feature.image"
        :alt="feature.name"
        class="feature-image"
    />
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature-card-wrapper {
  display: flex;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
}

.feature-card {
  width: 60%; /* Controls the text box width */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f4;
}

.feature-text h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.feature-image {
  max-width: 300px; /* Adjust the image width */
  height: auto;
  border-radius: 8px;
}
</style>
