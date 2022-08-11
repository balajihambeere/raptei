import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const BrandMobile = (): React.ReactElement => {
    return (<>
        <ShoppingBasketIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}>
            FOOTCOMM
        </Typography>
    </>);
};

export default BrandMobile;
