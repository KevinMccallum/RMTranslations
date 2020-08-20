import React from 'react';
import classes from '../sass/react-components/Footer.module.scss';
import cx from 'classnames';
import logo from '../img/logo-green-2x.png'



 const Footer = () => {
    return (
        <div>
            <footer className={classes['footer']}>
                <div className={classes['footer__logo-box']}>
                    <img className={classes['footer__logo']} src={logo} alt="Full logo"/>
                </div>
                <div className={classes['row']}>
                    <div className={classes['col-1-of-2']}>
                        <div className={classes['footer__navigation']}>
                            <ul className={classes['footer__list']}>
                                <li className={classes['footer__item']}> <a href="#" className={classes['footer__link']}>Company</a> </li>
                                <li className={classes['footer__item']}> <a href="#" className={classes['footer__link']}>Contact Us</a> </li>
                                <li className={classes['footer__item']}> <a href="#" className={classes['footer__link']}>Careers</a> </li>
                                <li className={classes['footer__item']}> <a href="#" className={classes['footer__link']}>Privacy</a> </li>
                                <li className={classes['footer__item']}> <a href="#" className={classes['footer__link']}>Terms</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes['col-1-of-2']}>
                        <p className={classes['footer__copyright']}> Copyright &copy; by Mike Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, 
                        facilis veritatis? Saepe voluptates alias voluptatem tempore possimus? Repellat inventore quis in, magni soluta dolorum eaque vel quia asperiores, 
                        ullam odio.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;