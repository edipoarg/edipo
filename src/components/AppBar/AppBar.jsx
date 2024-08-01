import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div className={styles.line}></div>
      <button className={styles.button}>M</button>
      <button className={styles.button}>R</button>
      <button className={styles.button}>A</button>
      <button className={styles.button}>E</button>
    </div>
  );
};

export default AppBar;
