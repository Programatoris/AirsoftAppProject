import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useLikeStore = defineStore('like', () => {
  // Initialize `liked` from localStorage or default to false
  const liked = ref(localStorage.getItem('liked') === 'true');

  // Watch for changes in the liked state and persist it to localStorage
  watch(liked, (newLikedState) => {
    localStorage.setItem('liked', newLikedState);
  });

  // Function to toggle the like state
  function toggleLike() {
    liked.value = !liked.value;
  }

  return { liked, toggleLike };
});
