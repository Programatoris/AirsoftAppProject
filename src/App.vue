<template>
  <div>
    <header>
      <TheNavigation />
    </header>
  </div>

  <div class="container">
    <RouterView :key="$route.fullPath"/>
  </div>

  <div>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {TheFooter, TheNavigation}
})

</script>