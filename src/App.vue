<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  /* data() {
    return {
      nick: null,
    };
  },
  methods: {
    logIn(userNick) {
      this.nick = userNick;
    },
    logOut() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.nick = null;
    },
  }, */
};
</script>
