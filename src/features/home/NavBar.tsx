import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Brand from './Brand';
import NavBarItems from './NavBarItems';
import BrandMobile from './BrandMobile';
import NavBarItemsMobile from './NavBarItemsMobile';
import Settings from './Settings';

const pages = ['Products'];

const NavBar = (): React.ReactElement => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Brand />
                    <NavBarItems pages={pages} />
                    <BrandMobile />
                    <NavBarItemsMobile pages={pages} />
                    {/* <Cart anchorElUser={anchorElUser} handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} /> */}
                    <Settings />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
