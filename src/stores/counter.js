import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useLikeStore = defineStore('like', () => {
  const liked = ref(localStorage.getItem('liked') === 'true');

  watch(liked, (newLikedState) => {
    localStorage.setItem('liked', newLikedState);
  });

  function toggleLike() {
    liked.value = !liked.value;
  }

  return { liked, toggleLike };
});
