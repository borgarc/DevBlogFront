<template>
  <div class="home">
    <Post :key="post.id" v-for="post in posts" :id="post.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue';
import { getPosts } from '@/communications/api';

export default {
  name: 'Home',
  components: {
    Post,
  },
  data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    this.posts = await getPosts();
  },
};
</script>
