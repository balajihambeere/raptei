import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface NavBarItemsMobileProps {
    pages: string[]
};

const NavBarItemsMobile = (props: NavBarItemsMobileProps): React.ReactElement => {
    const { pages } = props;
    return (<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
            <Box sx={{ my: 2, color: 'white', display: 'block' }} key={page}>
                <Link
                    key={page}
                    // onClick={handleCloseNavMenu}
                    href='/'
                    style={{ textDecoration: 'none' }}>
                    {page}
                </ Link >
            </Box>

        ))}
    </Box>);
};

export default NavBarItemsMobile;
