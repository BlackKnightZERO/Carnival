import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../pages/dashboard/Index.vue'

import ArtistList from '../pages/artist/Index.vue';

const routes = [
    {
        path: '/@/dashboard',
        name: 'dashboard.index',
        component: Dashboard
    },
    {
        path: '/@/artist',
        name: 'artist.index',
        component: ArtistList
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})