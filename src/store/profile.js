import { getProfile } from '@/communications/api';

const getters = {
  id: (state) => state.id,
  username: (state) => state.username,
  isAdmin: (state) => state.isAdmin,
};

const mutations = {
  setProfile(state, userData) {
    state.id = userData.id;
    state.username = userData.username;
    state.isAdmin = userData.is_superuser;
  },
  setNullProfile(state) {
    state.id = null;
    state.username = null;
    state.isAdmin = false;
  },
};

const actions = {
  async fetchProfile(context) {
    const response = await getProfile();
    context.commit('setProfile', response);
  },
};

export default {
  state: () => ({
    id: null,
    username: null,
    isAdmin: false,
  }),
  getters,
  mutations,
  actions,
};
