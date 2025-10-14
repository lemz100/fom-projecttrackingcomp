import styles from './Dropdown.module.less';

// Hamburger is usually on the main screen, so only close icon is needed
/** Dropdown component - dropped is state variable and handleDropdown is its toggle function */

function Dropdown({ dropped }) {

  return (
    <div className={`${styles.dropdown} ${dropped ? styles.visible : ""}`}>
        <div className={styles.contents}>
                <span className={styles.links}>
                  <p>Product</p>
                  <p>Features</p>
                  <p>Pricing</p>
                </span>
                <div className={styles.line}></div>
                <p className={styles.login}>Login</p>
        </div>
    </div>
  );
}

export default Dropdown