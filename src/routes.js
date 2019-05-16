import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';
import Home from './components/pages/home/Home.vue';
import Portfolio from './components/pages/portfolio/Portfolio.vue';

export const routes = [
    {
        path: '', 
        name: 'home', 
        components: {
            default: Home,
            'header': Header,
            'footer': Footer
        }
    },
    {
        path: '/portfolio', 
        name: 'portfolio', 
        components: {
            default: Portfolio,
            'header': Header,
            'footer': Footer
        }
    },
    {path: '*', redirect: '/'}
];