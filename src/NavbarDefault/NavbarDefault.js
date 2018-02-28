import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AppBarDefault = () => (
    <MuiThemeProvider>
    <AppBar
        title={"Title"}
        iconClassNameRight={"muidocs-icon-navigation-expand-more"}
        iconElementRight={<FlatButton label="Sign Up | Sign In" />}
    />
    </MuiThemeProvider>
);

export default AppBarDefault;