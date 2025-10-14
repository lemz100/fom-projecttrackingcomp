import styles from './Navbar.module.less';
import close from './icon-close.svg';
import logo from './logo.svg'; // Can change logo icon based on desired logo
import hamburger from './icon-hamburger.svg'; // Hamburger = menu icon.

function Navbar({ dropMenu, dropped }) {
  
    /** Span.menu is hidden and made visible on desktop screen of choice */

  return (
    <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        {
          dropped === false ?  
        <img 
            className={styles.menuIcon} 
            src={hamburger} 
            alt="Open Menu"  
            onClick={dropMenu} /** For dropdown */
        />
        :
        <img 
          className={styles.menuIcon}
          src={close} 
          alt="Close Menu" 
          onClick={dropMenu} 
          />
        }
        <span className={styles.menu}>
            <span className={styles.links}>
              <p>Product</p>
              <p>Features</p>
              <p>Pricing</p>
            </span>
            <div className={styles.oval}></div>          
            <p className={styles.login}>Login</p>
        </span>
    </nav>
  );
}

export default Navbar;
