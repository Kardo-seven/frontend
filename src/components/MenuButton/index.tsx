import styles from './styles.module.css';

export default function MenuButton({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}) {
  return (
    <button
      className={styles.menuButton}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span
        className={`${styles.menuButton__line} ${
          isMenuOpen ? styles.menuButton__line_active : ''
        }`}
      ></span>
      <span
        className={`${styles.menuButton__line} ${
          isMenuOpen ? styles.menuButton__line_active : ''
        }`}
      ></span>
      <span
        className={`${styles.menuButton__line} ${
          isMenuOpen ? styles.menuButton__line_active : ''
        }`}
      ></span>
    </button>
  );
}
