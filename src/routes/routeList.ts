import Home from '../views/Pages/Home/Home';
import Login from '../views/Pages/Login/Login';
import Register from '../views/Pages/Register/Register';
import Checkout from '../views/Pages/Checkout/Checkout';
import CategoryProduct from '../views/Pages/Category/CategoryProduct';
import GroupProduct from '../views/Pages/Group/GroupProduct';

export default [
    {
        path: "/",
        name: "home",
        component: Home,
        exact: true
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        exact: true
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        exact: true
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
        exact: true
    },
    {
        path: "/category/:id",
        name: "category",
        component: CategoryProduct,
        exact: true
    },
    {
        path: "/group/:id",
        name: "group",
        component: GroupProduct,
        exact: true
    },
]