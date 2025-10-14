import Navbar from "./Navbar/Navbar";
import styles from './Menu.module.less';
import Dropdown from "./Dropdown/Dropdown";

function Menu({ dropMenu, dropped }) {
  
    /** Span.menu is hidden and made visible on desktop screen of choice */

  return (
    <section className={styles.menu}>
        <Navbar dropMenu={dropMenu} dropped={dropped} />
        <Dropdown dropped={dropped} />
    </section>
  );
}

export default Menu;
