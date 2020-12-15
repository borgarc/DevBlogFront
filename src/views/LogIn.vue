<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-login my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Log In</h5>
            <form class="form-login">
              <div class="form-label-group">
                <input type="username"
                  v-model="userCredentials.username"
                  id="inputUsername"
                  class="form-control"
                  placeholder="Username"
                  required autofocus>
                <label for="inputUsername"></label>
              </div>

              <div class="form-label-group">
                <input type="password"
                  v-model="userCredentials.password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required>
                <label for="inputPassword"></label>
              </div>

              <hr class="my-4">
              <button @click="logIn()" class="btn btn-lg btn-primary btn-block text-uppercase"
                type="button">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAccessToken } from '@/communications/api';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userCredentials: {
        grant_type: 'password',
        username: null,
        password: null,
        scope: 'read write',
      },
    };
  },
  methods: {
    ...mapActions([
      'fetchProfile',
    ]),
    async logIn() {
      const response = await getAccessToken(this.userCredentials);
      const token = response.access_token;
      localStorage.setItem('token', token);
      localStorage.setItem('username', this.userCredentials.username);
      await this.fetchProfile();
      this.goToHome();
    },
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.card-login {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-login .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-login .card-body {
  padding: 2rem;
}

.form-login {
  width: 100%;
}

.form-login .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  text-align: center;
  border-radius: 2rem;
}

::-webkit-input-placeholder {
   text-align: center;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
</style>
