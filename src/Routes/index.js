import HomePage from '../Pages/Home/Home'
import ProductPage from '../Pages/ProductsPage/ProductPage'
import OrderPage from '../Pages/OrderPage/OrderPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
export const routes = [
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/order',
        page: OrderPage
    },
    {
        path: '/product',
        page: ProductPage
    },
    {
        path: '*',
        page: NotFoundPage
    },
];