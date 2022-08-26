import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

interface NavBarItemsMobileProps {
    pages: string[]
};

const NavBarItemsMobile = (props: NavBarItemsMobileProps): React.ReactElement => {
    const { pages } = props;
    return (<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
            <MenuItem key={page}>
                <Link
                    key={page}
                    href='/'
                    style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center" style={{ color: 'white' }}>{page}</Typography>
                </ Link >
            </MenuItem>))}
    </Box>);
};

export default NavBarItemsMobile;
