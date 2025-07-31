import routes from './route';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'hash'
});

export default router;
