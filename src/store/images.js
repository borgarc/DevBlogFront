import { postImage } from '@/communications/api';

const getters = {
  images: (state) => state.images,
};

const mutations = {
  setImages(state, images) {
    state.images = images;
  },
};

const actions = {
  async fetchImage(context, data) {
    const response = await postImage(data);
    context.commit('setImages', response);
  },
};

export default {
  state: () => ({
    images: [],
  }),
  getters,
  mutations,
  actions,
};
