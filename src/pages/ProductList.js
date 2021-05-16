import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import ProductCard from 'src/components/product//ProductCard';
import products from 'src/__mocks__/products';
import Toolbar from 'src/components/Toolbar';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products</title>
    </Helmet>
    <Box className="product-list">
      <Container className="product-list__container">
        <Toolbar add="product" search="Search product" />
        <Box className="product-list__cards">
          <Grid className="product-list__cards-container" container spacing={3}>
            {products.map((product) => (
              <Grid
                className="product-list__card-wrapper"
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard className="product-list__card" product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className="product-list__pagination-wrapper">
          <Pagination
            className="product-list__pagination"
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
