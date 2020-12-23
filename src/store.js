import { createStore } from 'vuex';
import Posts from '@/store/posts';
import Profile from '@/store/profile';
import Images from '@/store/images';

export default createStore({
  modules: {
    Images,
    Posts,
    Profile,
  },
});
