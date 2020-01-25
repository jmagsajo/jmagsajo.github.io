import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';
import Home from './components/pages/home/Home.vue';
import Portfolio from './components/pages/portfolio/Portfolio.vue';
import Contact from './components/pages/contact/Contact.vue';
import Cheatsheet from './components/pages/other/Cheatsheet.vue';

export const routes = [
    {
        path: '', 
        name: 'home', 
        components: {
            default: Home,
            'app-header': Header,
            'app-footer': Footer
        }
    },
    {
        path: '/portfolio', 
        name: 'portfolio', 
        components: {
            default: Portfolio,
            'app-header': Header,
            'app-footer': Footer
        }
    },
    {
        path: '/contact', 
        name: 'contact', 
        components: {
            default: Contact,
            'app-header': Header,
            'app-footer': Footer
        }
    },
    {
        path: '/cheatsheet', 
        name: 'cheatsheet', 
        components: {
            default: Cheatsheet,
            'app-header': Header,
            'app-footer': Footer
        }
    },
    {path: '*', redirect: '/'}
];