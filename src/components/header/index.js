import React from 'react';
import {NavLink} from 'react-router-dom';
// import logo from '../../assets/favicon.jpg';
import {Divider} from 'cant-ui/core';
import {Home} from 'cant-ui/icons';
import './style.scss';

const Menu = () => {
    return (
        <div className={'AH_Nav'}>
            <div className={'AH_Nav_Container'}>
                <NavLink exact to={'/'} className={'AH_Nav_Logo'}>
                    <Home viewBox width={40} height={40} />
                    {/* <img src={logo} alt="Aqua Home" /> */}
                </NavLink>
                <div className={'AH_Nav_Menu'}>
                    <NavLink to={'/'} className={'AH_Nav_Menu--item'}>Giới thiệu</NavLink>
                    <Divider direction={'vertical'} color={'white'} height={'75%'} />
                    <NavLink to={'/'} className={'AH_Nav_Menu--item'}>Tuyển dụng</NavLink>
                    <Divider direction={'vertical'} color={'white'} height={'75%'} />
                    <NavLink to={'/'} className={'AH_Nav_Menu--item'}>Liên hệ</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Menu;
