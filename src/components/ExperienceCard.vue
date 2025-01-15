<template>
  <div class="experience-card" @click="selectExperience">
    <img :src="'/images/' + experience.image" :alt="experience.name" />
    <h3>{{ experience.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectExperience() {
      this.$emit("select", this.experience.slug);
    },
  },
};
</script>

<style scoped>
.experience-card {
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  text-align: center;
  max-width: 250px;
  cursor: pointer;
}

.experience-card:hover {
  transform: scale(1.05);
}

.experience-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.experience-card h3 {
  background: #2c3e50;
  color: white;
  padding: 10px;
  margin: 0;
  font-size: 1rem;
}
</style>