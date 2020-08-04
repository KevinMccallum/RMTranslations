import React from 'react';
import classes from '../sass/react-components/Header.module.scss';
import logo from '../img/logo-white.png'




const Header = () => {
    return (
        <div>
            <div>
                <header className={classes['header']} >
                    <div className={classes['header__logoBox']} >
                        <img src={logo} className={classes['header__logo']} />
                    </div>
                    <div className={classes['header__textBox']} >
                        <h1 className={classes['headingPrimary']} >
                            <span className={classes['headingPrimary-main']}>Robin McCallum</span>
                            <span className={classes['headingPrimary-sub']}>Translations</span>
                        </h1>
                    </div>
                </header>
            </div>
            
        </div>
    )
}

export default Header;