import { Route, Routes, useLocation } from 'react-router-dom';

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
  Whislist,
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
    path: '/my-account',
    element: <Account />,
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
    path: '/whislist',
    element: <Whislist />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const App = () => {
  const location = useLocation();

  // Hide breadcrumb on hidden paths
  const hiddenPaths = ['/', '/products', '/login', '/sign-up', '/my-account'];
  const isBreadcrumbVisible = !hiddenPaths.includes(location.pathname);

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
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
