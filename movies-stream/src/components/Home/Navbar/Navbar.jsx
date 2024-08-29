import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <p className={styles.navTitle}>Discover your favorites.</p>
        <div className={styles.searchWrapper}>
          <div className={styles.searchBox}>
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search here..."
            />
          </div>

          <button type="button" className={styles.filterButton}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
