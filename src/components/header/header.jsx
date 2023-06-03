import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/IMG_20220330_123220.jpg'
import HeaderSocial from './headerSocial' //import of headerSocial component

export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
            <h5>Hello I am</h5>
            <h1>Aubin SIAHA</h1>
            <h5 className='text-light'>Junior Software Engineer <br /> student at FET-Buea <br />Faculty of Eng. and Tech.</h5>
            <CTA/>
            <HeaderSocial/>
            <div className='my_image'>
                <img src={me} alt='my image'/>
            </div>
            <a href='#contact' className='scroll__down'>just scroll down...</a>
            </div>
        </header>
    )
}
export default Header;