import { useState } from 'react';
import styles from './styles.module.css';

export default function MenuButton() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <button
      className={styles.menuButton}
      onClick={() => setIsMenuOpened(!isMenuOpened)}
    >
      <span
        className={`${styles.menuButton__line} ${
          isMenuOpened ? styles.menuButton__line_active : ''
        }`}
      ></span>
      <span
        className={`${styles.menuButton__line} ${
          isMenuOpened ? styles.menuButton__line_active : ''
        }`}
      ></span>
      <span
        className={`${styles.menuButton__line} ${
          isMenuOpened ? styles.menuButton__line_active : ''
        }`}
      ></span>
    </button>
  );
}
