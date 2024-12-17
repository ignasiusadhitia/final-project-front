import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Footer, Navbar } from '@components';
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
  Register,
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
    path: '/account',
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
    path: '/register',
    element: <Register />,
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
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
