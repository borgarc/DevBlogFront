<template>
  <div class="new-image">
    <h3>Upload Image</h3>
    <form>
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text"
          v-model="image.title"
          class="form-control"
          id="title"
          placeholder="Title">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01" ref="file" @change="handleFileUpload">
          <label class="custom-file-label" for="inputGroupFile01">{{ imageName }}</label>
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input type="text"
          v-model="image.description"
          class="form-control"
          id="description"
          placeholder="Description">
      </div>
      <button type="button" @click="createImage" class="btn btn-dark">Upload</button>
      <button type="button" @click="goToHome()" class="btn btn-dark">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Image',
  data() {
    return {
      image: {
        user: null,
        title: null,
        img: null,
        description: null,
      },
      imageName: 'Choose file',
    };
  },
  computed: {
    ...mapGetters([
      'profileId',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchImage',
    ]),
    handleFileUpload(event) {
      const [img] = event.target.files;
      this.image.img = img;
      this.imageName = img.name;
    },
    createImage() {
      this.image.user = this.profileId;
      const fp = new FormData();
      fp.append('src', this.image.img, this.image.img.name);
      fp.append('description', this.image.description);
      fp.append('title', this.image.title);
      fp.append('user', this.profileId);
      this.fetchImage(fp);
    },
    goToHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
