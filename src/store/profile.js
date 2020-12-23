import { getProfile } from '@/communications/api';

const getters = {
  profileId: (state) => state.id,
  profileUsername: (state) => state.username,
  profileIsAdmin: (state) => state.isAdmin,
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
    profileId: null,
    profileUsername: null,
    profileIsAdmin: false,
  }),
  getters,
  mutations,
  actions,
};
