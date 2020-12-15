<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <anchor @click="goToHome()" class="navbar-brand" href="#">RogueLikeGames</anchor>
    <button class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav rl-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Create Post <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <ul v-if="this.username==null" class="navbar-nav ml-auto">
        <li class="nav-item active">
          <anchor @click="goToLogIn()"
            class="nav-link"
            href="#">Log In
            <span class="sr-only">(current)</span></anchor>
        </li>
        <li class="nav-item active">
          <anchor @click="goToCreateUser()"
            class="nav-link"
            href="#">Register
            <span class="sr-only">(current)</span></anchor>
        </li>
      </ul>
      <ul v-if="this.username!=null" class="navbar-nav ml-auto">
        <li class="nav-item active">
          <anchor @click="goToLogIn()"
            class="nav-link"
            href="#">{{ username }}
            <span class="sr-only">(current)</span></anchor>
        </li>
        <li class="nav-item active">
          <anchor @click="logOut()"
            class="nav-link"
            href="#">Log Out
            <span class="sr-only">(current)</span></anchor>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'username',
    ]),
  },
  methods: {
    ...mapMutations([
      'setNullProfile',
    ]),
    logOut() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.setNullProfile();
    },
    goToCreateUser() {
      this.$router.push({ name: 'User' });
    },
    goToLogIn() {
      this.$router.push({ name: 'LogIn' });
    },
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
