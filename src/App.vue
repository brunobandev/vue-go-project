<template>
  <TheHeader />
  <div>
    <router-view />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { store } from './components/store.js';

export default {
  name: 'App',
  components: {
    TheHeader,    
    TheFooter
  },
  data() {
    return {
      store
    }
  }
}
</script>