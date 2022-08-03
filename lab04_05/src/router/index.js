import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetails from '../views/event/EventDetails.vue'
import Airlines from '../views/event/EventAirline.vue'
import EventLayout from '../views/event/EventLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 3
    })
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/passenger/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
        props: true
      },
      {
        path: 'airline',
        name: 'airlines',
        props: true,
        component: Airlines
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
