import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import Toolbar from 'src/components/Toolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers</title>
    </Helmet>
    <Box
      className="customer-list"
      sx={{
        backgroundColor: 'background.default'
      }}
    >
      <Container className="customer-list__container">
        <Toolbar add="customer" search="Search customer" />
        <Box className="customer-list__table-box">
          <CustomerListResults
            className="customer-list__table"
            customers={customers}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
