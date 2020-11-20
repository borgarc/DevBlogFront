<template>
  <div>
    <h3>{{ postData.title }}</h3>
    <img v-if="postData.image != null" src="" alt="">
    <span>{{ postData.content }}</span>
    <video v-if="postData.video != null" width="320" height="240" controls>
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
import { getPost } from '@/communications/api';

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
  async mounted() {
    this.postData = await getPost(this.id);
  },
};
</script>
