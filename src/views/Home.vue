<template>
  <div class="home">
    <Post :key="post.id" v-for="post in posts" :id="post.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Post,
  },
  async mounted() {
    await this.fetchPosts();
  },
  computed: {
    ...mapGetters([
      'posts',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchPosts',
    ]),
  },
};
</script>
