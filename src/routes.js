import Header from './components/layouts/Header.vue';
import Home from './components/pages/Home.vue';

export const routes = [
    {
        path: '', 
        name: 'home', 
        components: {
            default: Home,
            'header': Header
        }
    },
    {path: '*', redirect: '/'}
];