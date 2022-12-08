import { IRoute } from "../interfaces/Routes";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Signup from "../pages/signup/Signup";
import Welcome from "../pages/welcome/Welcome";


export const routes: IRoute[] = [
    { path: '/home', component: Home, title: 'Home', exact: true },
    { path: '/', component: Welcome, title: 'Welcome', exact: true },
    { path: '/signup', component: Signup, title: 'Sign Up', exact: true },
    { path: '/login', component: Login, title: 'Log In', exact: true },
    { path: '/*', component: NotFound, title: 'Not found', exact: true },
  ];