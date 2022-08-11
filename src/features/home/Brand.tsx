import * as React from 'react';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box } from '@mui/system';

const Brand = (): React.ReactElement => {
    return (<>
        <ShoppingBasketIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
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

export default Brand;