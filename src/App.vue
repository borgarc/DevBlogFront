<template>
  <NavBar :userNick="nick" @log-out="logOut()"/>
  <router-view @set-nick="logIn($event)"/>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      nick: null,
    };
  },
  methods: {
    logIn(userNick) {
      console.log('estoy aquiiiii');
      console.log(userNick);
      this.nick = userNick;
    },
    logOut() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.nick = null;
    },
  },
};
</script>
