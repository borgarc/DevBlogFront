<template>
  <div>
    <h3>Post creation</h3>
    <label class="mr-sm-2" for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Title" v-model="post.title">
    <label class="mr-sm-2" for="content">Content</label>
    <editor
      id="content"
      v-model="post.content"
      api-key="no-api-key"
      :init="{
        height: 500,
        selector: textarea,
        setup: setup,
        menubar: insert,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | addImage bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
      }"
    />
    <imagepickermodal id="modal" v-if="showImagePicker" @select-image="selectImage" />
    <button type="button" class="btn btn-primary" @click="createPost">Crear</button>
  </div>
</template>

<script>
import { postPost } from '@/communications/api';
import Editor from '@tinymce/tinymce-vue';
import ImagePickerModal from '../components/ImagePickerModal.vue';

export default {
  components: {
    editor: Editor,
    imagepickermodal: ImagePickerModal,
  },
  data() {
    return {
      textarea: null,
      post: {
        title: null,
        content: null,
        image: null,
        video: null,
      },
      showImagePicker: false,
    };
  },
  methods: {
    setup(editor) {
      this.textarea = editor;
      editor.ui.registry.addButton('addImage', {
        text: 'Add image',
        icon: 'image',
        onAction: () => {
          this.showImagePicker = true;
        },
      });
    },
    selectImage(imageURL, heigth, width) {
      this.textarea.insertContent(`&nbsp; <img src="${imageURL}" style="heigth:${heigth}px;width:${width}px" /> &nbsp;`);
      this.showImagePicker = false;
    },
    createPost() {
      const response = postPost(this.post);
      console.log(response);
    },
  },
};
</script>
<style>
#modal {
  background-color: red;
  position: fixed;
  right: 25%;
  left: 25%;
  bottom: 25%;
  top: 25%;
  z-index: 1400;
}
</style>
