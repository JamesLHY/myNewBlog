import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Work from '../views/Work.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/Work',
        name: 'Work',
        component: Work
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },

]

const router = new VueRouter({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL
})

export default router
