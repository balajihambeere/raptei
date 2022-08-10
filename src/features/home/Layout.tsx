import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Copyright from "../../components/Copyright";
import NavBar from "./NavBar";
import Container from "@mui/material/Container";

const mdTheme = createTheme();

const HomeLayout = ({ children }: any): React.ReactElement => {
    return (
        <ThemeProvider theme={mdTheme}>
            <CssBaseline />
                <NavBar />
                <Box sx={{ mt: 2 }}>
                    {children}
                </Box>
                <Copyright sx={{ pt: 4 }} />
        </ThemeProvider>);
};

export default HomeLayout;