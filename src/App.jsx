import { Route, Routes, useLocation } from 'react-router-dom';

import ProtectedLayout from '@layouts/ProtectedLayout';

import { Breadcrumb, Footer, Navbar } from '@components';
import {
  UpdateAddress,
  UpdateProfile,
  AddressList,
  MyOrders,
} from '@components';
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
  ProductDetail,
  Success,
  SignUp,
  Wishlist,
  Error,
} from '@pages';

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
    element: <ProductDetail />,
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
    path: '/success',
    element: <Success />,
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
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/404',
    element: <Error code={404} />,
  },
  {
    path: '/500',
    element: <Error code={500} />,
  },
  {
    path: '/401',
    element: <Error code={401} />,
  },
  {
    path: '*',
    element: <Error code={404} />,
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
      <div className="pt-[122px] md:pt-[106px] lg:pt-[154px]">
        {/* Global Breadcrumb */}
        {isBreadcrumbVisible && <Breadcrumb />}

        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} element={element} path={path} />
          ))}

          <Route element={<ProtectedLayout />}>
            <Route element={<Account />} path="/my-account">
              <Route index element={<UpdateProfile />} />
              <Route element={<AddressList />} path="address" />
              <Route element={<UpdateAddress />} path="address/add" />
              <Route element={<UpdateAddress />} path="address/edit/:id" />
              <Route element={<MyOrders />} path="my-orders" />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
