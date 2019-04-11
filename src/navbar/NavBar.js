import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

const NavBar = () => (
    <AppBar color="secondary" position="static">
        <Toolbar>
            <TypoGraphy variant="title"
                color="inherit"
            >
                ImageFinder
            </TypoGraphy>
        </Toolbar>
    </AppBar>
)

export default NavBar
