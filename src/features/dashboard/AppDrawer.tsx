import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import AppDrawer from '../../components/Drawer';

interface DashboardAppDrawerProps {
    open: boolean;
    toggleDrawer: () => void;
}
const DashboardAppDrawer = (props: DashboardAppDrawerProps): React.ReactElement => {
    const { open, toggleDrawer } = props;
    return (<AppDrawer variant="permanent" open={open}>
        <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
            }}>
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
        </List>
    </AppDrawer>
    );
}

export default DashboardAppDrawer;