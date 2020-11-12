import Home from '../views/Pages/Home/Home';
import Login from '../views/Pages/Login/Login';
import Register from '../views/Pages/Register/Register';
import Cart from '../views/Pages/Cart/Cart';
import CategoryProduct from '../views/Pages/Category/CategoryProduct';

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
        path: "/cart",
        name: "cart",
        component: Cart,
        exact: true
    },
    {
        path: "/category-product",
        name: "category-product",
        component: CategoryProduct,
        exact: true
    },
]