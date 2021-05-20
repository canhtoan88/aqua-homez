import React from 'react';
import {ThemeProvider} from 'cant-ui/theme';
import Header from '../components/header';
import Footer from '../components/footer';
import './style.scss';

const Container = ({children}) => {
    const theme = {
        colors: {
            primary: '#009BF8'
        },
        typography: {
            fontFamily: 'Gotham',
            fontFamilyBold: 'Gotham Bold',
            fontFamilyMedium: 'Gotham Medium',
        },
        properties: {
            backgroundColor: '#FFF'
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default Container;
