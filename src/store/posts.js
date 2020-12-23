import { getPosts } from '@/communications/api';

const getters = {
  posts: (state) => state.posts,
  getPostById: (state) => (id) => state.posts.find((post) => post.id === id),
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

const actions = {
  async fetchPosts(context) {
    const response = await getPosts();
    context.commit('setPosts', response);
  },
};

export default {
  state: () => ({
    posts: [],
  }),
  getters,
  mutations,
  actions,
};
