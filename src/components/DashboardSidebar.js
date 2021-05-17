import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Drawer, Hidden, Typography } from '@material-ui/core';
import {
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import React, { useState } from 'react';

const getData = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    return res.json();
  }
  return 0;
};

const getUser = () => {
  const userName = 'MaximSeveryn'.toLowerCase();
  const url = `https://api.github.com/users/${userName}`;
  return getData(url).then((response) => {
    return [response.avatar_url, response.login];
  });
};

const items = [
  {
    href: '/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userItems, setItems] = useState([]);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  useEffect(() => {
    getUser().then(
      (result) => {
        setItems(result);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const content = (
      <Box className="sidebar__wrapper">
        <Box className="sidebar__content">
          <Avatar
            className="user-avatar"
            component={RouterLink}
            src={userItems[0]}
            sx={{
              cursor: 'pointer',
              width: 64,
              height: 64
            }}
            to="/"
          />
          <Typography color="textPrimary" variant="h5">
            {userItems[1]}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Stydent
          </Typography>
        </Box>
        <hr className="sidebar__divider divider" />
        <Box className="sidebar__content" sx={{ p: 2 }}>
          <ul className="nav-list sidebar__nav-list">
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </ul>
        </Box>
        <div className="sidebar__spacing spacing" />
      </Box>
    );

    return (
      <>
        <Hidden lgUp>
          <Drawer
            anchor="left"
            onClose={onMobileClose}
            open={openMobile}
            variant="temporary"
            PaperProps={{
              sx: {
                width: 256
              }
            }}
          >
            {content}
          </Drawer>
        </Hidden>
        <Hidden lgDown>
          <Drawer
            anchor="left"
            open
            variant="persistent"
            PaperProps={{
              sx: {
                width: 256,
                top: 64,
                height: 'calc(100% - 64px)'
              }
            }}
          >
            {content}
          </Drawer>
        </Hidden>
      </>
    );
  }
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};
export default DashboardSidebar;
