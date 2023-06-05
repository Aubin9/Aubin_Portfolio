import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import me from '../../assets/changer.jpg'
import HeaderSocial from './HeaderSocial'

export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                 <h5>Hello I am called</h5>
                 <h1>Aubin SIAHA</h1>
                 <h5 className='text-light'>Junior Software Engineer <br />Bachelor level Student <br />student at FET-Buea-CMR</h5>
                 <CTA/>
                 <HeaderSocial/>
                 <div className='my_image'>
                    <img src={me} alt='me'/>
                 </div>
                 <a href='#contact' className='scroll__down'>click to Scroll down</a>

            </div>
        </header>
    )
}
export default Header;
