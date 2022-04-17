<template>
  <TheHeader />
  <div>
    <router-view :key="componentKey" @success="success" @error="error" @warning="warning" @forceUpdate="forceUpdate" />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { store } from './components/store.js';
import notie from 'notie';

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

export default {
  name: 'App',
  components: {
    TheHeader,    
    TheFooter
  },
  data() {
    return {
      store,
      componentKey: 0,
    }
  },
  beforeMount() {
    // check for cookie
    let data = getCookie("_site_data");
    if (data !== "") {
      let cookieData = JSON.parse(data);

      // update store
      store.token = cookieData.token.token;
      store.user = {
        id: cookieData.user.id,
        first_name: cookieData.user.first_name,
        last_name: cookieData.user.last_name,
        email: cookieData.user.email,
      }
    }
  },
  methods: {
    success(msg) {
      notie.alert({
        type: "success",
        text: msg
      })
    },
    error(msg) {
      notie.alert({
        type: "error",
        text: msg
      })
    },
    warning(msg) {
      notie.alert({
        type: "warning",
        text: msg
      })
    },
    forceUpdate() {
      this.componentKey += 1;
    }
  }
}
</script>