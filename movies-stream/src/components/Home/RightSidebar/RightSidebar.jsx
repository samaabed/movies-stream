import styles from "./RightSidebar.module.css";

const RightSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaServicesSction}>
        <h2 className={styles.sidebarTitle}>media services</h2>
        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName}>apple tv</p>
        </div>
        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName}>disney tv</p>
        </div>

        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName}>hbo max tv</p>
        </div>

        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName}>hulu</p>
        </div>

        <div className={styles.mediaRow}>
          <div className={styles.mediaImage}></div>
          <p className={styles.mediaName}>prime</p>
        </div>
      </div>
      <div className={styles.genreSection}>
        <h2 className={styles.sidebarTitle}>genre</h2>
         <p className={styles.genreName}>action</p>
         <p className={styles.genreName}>comedy</p>
         <div className={styles.genreContainer}>
            <p className={styles.genreName}>drama</p>
         </div>
         <p className={styles.genreName}>horror</p>

      </div>
    </div>
  );
};

export default RightSidebar;
