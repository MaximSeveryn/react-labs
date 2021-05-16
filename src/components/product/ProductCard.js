import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const ProductCard = ({ product, ...rest }) => (
  <Card
    {...rest}
  >
    <CardContent className="product-card__content">
      <Box
        className="product-card__avatar-box"
      >
        <Avatar
          className="product-card__avatar"
          alt="Product"
          src={product.media}
          variant="square"
        />
      </Box>
      <Typography
        className="product-card__title"
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {product.title}
      </Typography>
      <Typography
        className="product-card__desc"
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {product.description}
      </Typography>
    </CardContent>
    <Box className="spacing" />
    <div className="divider" />
    <Box className="product-card__info" sx={{ p: 2 }}>
      <Grid
        className="product-card__info-inner"
        container
        spacing={2}
      >
        <Grid
          className="product-card__info-block"
          item
        >
          <AccessTimeIcon className="product-card__info-icon" color="action" />
          <Typography
            className="product-card__info-desc"
            color="textSecondary"
            display="inline"
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          className="product-card__info-block"
          item
        >
          <GetAppIcon className="product-card__info-icon" color="action" />
          <Typography
            className="product-card__info-desc"
            color="textSecondary"
            display="inline"
            variant="body2"
          >
            {product.totalDownloads}
            {' '}
            Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
