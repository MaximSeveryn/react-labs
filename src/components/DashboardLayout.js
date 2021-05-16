import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const DashboardLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256
  }
}));

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <DashboardLayoutRoot className="dashboard">
      <DashboardNavbar
        className="navbar dashboard__navbar"
        onMobileNavOpen={() => setMobileNavOpen(true)}
      />
      <DashboardSidebar
        className="sidebar dashboard__sidebar"
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardLayoutWrapper className="wrapper dashboard__wrapper">
        <div className="container dashboard__container">
          <div className="content dashboard__content">
            <Outlet />
          </div>
        </div>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
