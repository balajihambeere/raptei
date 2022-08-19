import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Brand from './Brand';
import NavBarItems from './NavBarItems';
import BrandMobile from './BrandMobile';
import NavBarItemsMobile from './NavBarItemsMobile';
import Settings from './Settings';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useCart from '../cart/useCartHook';
import { useAppContext } from '../../ContextState';

const pages = ['MENS', 'WOMENS', "KIDS"];

const NavBar = (): React.ReactElement => {
    const { cartItems } = useAppContext();
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Brand />
                    <NavBarItems pages={pages} />
                    <BrandMobile />
                    <NavBarItemsMobile pages={pages} />
                    <Settings />
                    {/* <IconButton sx={{ p: 0 }} style={{ color: 'white' }}>
                        <PermIdentityIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
                    </IconButton> */}
                    <IconButton sx={{ p: 0 }} style={{ color: 'white' }}>
                        <FavoriteIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
                    </IconButton>
                    <Badge badgeContent={cartItems?.length} color="error">
                        <IconButton sx={{ p: 0 }} style={{ color: 'white' }}>
                            <ShoppingCartIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
                        </IconButton>
                    </Badge>

                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
