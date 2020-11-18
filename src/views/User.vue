<template>
  <div class="home">
    <p>aqui empieza la magia</p>
    <form>
      <div class="form-group">
        <label for="first-name">First name:</label>
        <input type="text"
          v-model="userData.first_name"
          class="form-control"
          id="first-name"
          placeholder="First name">
      </div>
      <div class="form-group">
        <label for="last-name">Last name:</label>
        <input type="text"
          v-model="userData.last_name"
          class="form-control"
          id="last-name"
          placeholder="Last name">
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text"
          v-model="userData.username"
          class="form-control"
          id="username"
          placeholder="Username">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email"
          v-model="userData.email"
          class="form-control"
          id="email"
          placeholder="Email">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password"
          v-model="userData.password"
          class="form-control"
          id="password" placeholder="Password">
      </div>
      <button type="button" @click="createUser()" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { postUser } from '@/communications/api';

export default {
  name: 'User',
  data() {
    return {
      userData: {
        first_name: null,
        last_name: null,
        username: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    createUser() {
      const response = postUser(this.userData);
      console.log(response);
    },
  },
};
</script>
