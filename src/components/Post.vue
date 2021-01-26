<template>
  <div>
    <h3>{{ postData.title }}</h3>
    <img v-if="postData.image != null" src="" alt="">
    <div v-html="postData.content" />
    <video v-if="postData.video != null" width="320" height="240" controls>
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      postData: Object,
    };
  },
  computed: {
    ...mapGetters([
      'getPostById',
    ]),
  },
  async mounted() {
    this.postData = this.getPostById(this.id);
  },
};
</script>
