import { Route, Routes, useLocation, useParams } from 'react-router-dom';

import { Breadcrumb, Footer, Navbar } from '@components';
import {
  About,
  Account,
  AllProducts,
  BestSelling,
  Cart,
  Checkout,
  Contact,
  Home,
  Login,
  NotFound,
  Product,
  SignUp,
  ThankYou,
  Wishlist,
} from '@pages';

import { 
  UpdateAddress,
  UpdateProfile,
  AddressList,
  MyOrders 
} from '@components';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <AllProducts />,
  },
  {
    path: '/products/:id',
    element: <Product />,
  },
  {
    path: '/best-selling',
    element: <BestSelling />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/thank-you',
    element: <ThankYou />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];


const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const hiddenPathsRegex = new RegExp(
    [
      '^/$',
      '^/products$',
      '^/login$',
      '^/sign-up$',
      '^/my-account$',
      '^/my-account/address$',
      '^/my-account/address/add$',
      '^/my-account/address/edit/\\d+$',
      '^/my-account/my-orders$',
    ].join('|')
  );

  const isBreadcrumbVisible = !hiddenPathsRegex.test(currentPath);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Global Breadcrumb */}
        {isBreadcrumbVisible && <Breadcrumb />}

        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} element={element} path={path} />
          ))}

        <Route path="/my-account" element={<Account />}>
          <Route index element={<UpdateProfile />} />
          <Route path="address" element={<AddressList />} />
          <Route path="address/add" element={<UpdateAddress />} />
          <Route path="address/edit/:id" element={<UpdateAddress />} />
          <Route path="my-orders" element={<MyOrders />} />
        </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;