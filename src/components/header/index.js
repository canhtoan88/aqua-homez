/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
// import logo from '../../assets/favicon.jpg';
import {Divider} from 'cant-ui/core';
import {Home, Menu as MenuIcon} from 'cant-ui/icons';
import './style.scss';

const Menu = () => {
    const moreMenuRef = useRef(null);

    const showMenuHandler = e => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.add('active');
            setTimeout(() => {
                document.addEventListener('click', hideMenuHandler);
            }, 0);
        }
    }

    const hideMenuHandler = e => {
        if (!moreMenuRef.current.nextElementSibling.contains(e.target)) {
            moreMenuRef.current.classList.remove('active');
            document.removeEventListener('click', hideMenuHandler);
        }
    }

    useEffect(() => {
        document.removeEventListener('click', hideMenuHandler);
    }, [])

    return (
        <div className={'AH_Nav'}>
            <div className={'AH_Nav_Container'}>
                <NavLink exact to={'/'} className={'AH_Nav_Logo'}>
                    <Home viewBox width={40} height={40} />
                    {/* <img src={logo} alt="Aqua Home" /> */}
                </NavLink>
                <span className={'AH_Nav_Menu_More'} onClick={showMenuHandler} ref={moreMenuRef}>
                    <MenuIcon viewBox width={40} height={40} />
                </span>
                <div className={'AH_Nav_Menu'}>
                    <NavLink to={'/'} className={'AH_Nav_Menu--item'}>Giới thiệu</NavLink>
                    <Divider direction={'vertical'} color={'white'} height={'75%'} />
                    <a href={'https://forms.gle/g6w6uXB63QTd3bot5'} target={'_blank'} rel="noreferrer" className={'AH_Nav_Menu--item active'}>Tuyển dụng</a>
                    <Divider direction={'vertical'} color={'white'} height={'75%'} />
                    <NavLink to={'/'} className={'AH_Nav_Menu--item'}>Liên hệ</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Menu;
