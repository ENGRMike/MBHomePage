import React from 'react'

import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
function Nav() {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav;