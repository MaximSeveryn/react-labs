import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import CustomerList from 'src/pages/CustomerList';
import ProductList from 'src/pages/ProductList';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Navigate to="customers" /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'products', element: <ProductList /> }
    ]
  }
];

export default routes;
