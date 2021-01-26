<template>
  <div>
    <div class="modal-header">
      <h3 class="image-picker-header">Image picker</h3>
    </div>
    <div class="images-container modal-body">
      <div class="images-content">
        <div class="image" :key="image.id" v-for="image in images" :id="image.id"
          @click="selectImage">
          <img :src="image.src" alt="Imagen no encontrada">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <form class="form-inline">
        <label class="mr-sm-2" for="width">Width</label>
        <input type="number" class="form-control col-sm-2" id="width" v-model="width"
          :placeholder="width">
        <label class="mr-sm-2" for="height">Height</label>
        <input type="number" class="form-control col-sm-2" id="height" v-model="height"
          :placeholder="height">
      </form>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" @click="didSelectImage" class="btn btn-dark">Upload</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      imageSelected: null,
      width: 100,
      height: 100,
    };
  },
  computed: {
    ...mapGetters([
      'images',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchImages',
    ]),
    selectImage(event) {
      const image = event.target.src;
      this.imageSelected = image;
    },
    didSelectImage() {
      this.$emit('select-image', this.imageSelected, this.width, this.height);
    },
  },
  async mounted() {
    await this.fetchImages();
  },
};
</script>

<style>
img {
  width: 100px;
}
.image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 20%;
}
.image-picker-header {
  height: 10%;
}

.modal-body {
  overflow-y: auto;
  width: 100%;
  height: 70%;
  padding: 20px;
}

.images-content {
  display: flex;
  flex-flow: row wrap;
}
.modal-footer {
  display: flex;
  flex-wrap: nowrap;
}
</style>
