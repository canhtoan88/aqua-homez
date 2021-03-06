import React from 'react';
import {Link} from 'react-router-dom';
import {Phone, Mail, Location, Facebook, Public} from 'cant-ui/icons';
import logo from '../../assets/images/logo-name.png';
import logoOnly from '../../assets/images/logo.png';
import './style.scss';
import { Typography } from 'cant-ui/core';

const Footer = () => {
    return (
        <div className={'AH_Footer'}>
            <div className={'AH_Footer_Profile'}>
                <div className={'AH_Footer_Profile--logo'}>
                    <img src={logo} alt="AQUA HOME" />
                    <div className={'AH_Footer_Profile--logo-noname'}>
                        <img src={logoOnly} alt="AQUA HOME" />
                        <span className={'AH_Footer_Profile--name'}>AQUA HOMEZ</span>
                    </div>
                </div>
                <div className={'AH_Footer_Profile--information'}>
                    <div className={'AH_Footer_Profile--contact'}>
                        <span className={'AH_Footer_Profile--title'}>
                            Liên hệ
                        </span>
                        <div className={'AH_Footer_Profile--item'}>
                            <Phone color={'#80CDFC'} />
                            <span className={'AH_Footer_Profile--value'}>0906908004</span>
                        </div>
                        <div className={'AH_Footer_Profile--item'}>
                            <Mail color={'#80CDFC'} />
                            <span className={'AH_Footer_Profile--value'}>tuyendung.aquahomez@gmail.com</span>
                        </div>
                        <div className={'AH_Footer_Profile--item'}>
                            <Public color={'#80CDFC'} />
                            <span className={'AH_Footer_Profile--value'}>aquahomez.com</span>
                        </div>
                    </div>
                    <div className={'AH_Footer_Profile--link'}>
                        <span className={'AH_Footer_Profile--title'}>
                            Liên kết
                        </span>
                        <div className={'AH_Footer_Profile--item'}>
                            <Link to={'/trang-chu'} className={'AH_Footer_Profile--value'}>Giới thiệu</Link>
                        </div>
                        <div className={'AH_Footer_Profile--item'}>
                            <a href={'https://forms.gle/g6w6uXB63QTd3bot5'} rel="noreferrer" target={'_blank'} className={'AH_Footer_Profile--value'}>Tuyển dụng</a>
                        </div>
                        <div className={'AH_Footer_Profile--item'}>
                            <Link to={'/'} className={'AH_Footer_Profile--value'}>Liên hệ</Link>
                        </div>
                    </div>
                    <div className={'AH_Footer_Profile--area'}>
                        <span className={'AH_Footer_Profile--title'}>
                            Khu vực
                        </span>
                        <Link to={''} className={'AH_Footer_Profile--item item-area'}>
                            <Location color={'#80CDFC'} />
                            <span className={'AH_Footer_Profile--value'}>Thành Phố Hồ Chí Minh</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'AH_Footer_Copyright'}>
                <div className={'AH_Footer_Copyright--text'}>
                    Copyright © {new Date().getFullYear()} by Aqua Homez | All rights reserved.
                </div>
                <div className={'AH_Footer_Copyright--social'}>
                    <Typography text={'Liên hệ với chúng tôi qua'} color={'#FFF'} />
                    <a href="https://www.facebook.com/aquahomez.vn/?ref=pages_you_manage" target={'_blank'} rel="noreferrer">
                        <Facebook width={32} height={32} mainColor />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
