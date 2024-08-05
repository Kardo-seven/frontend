import MenuButton from '../MenuButton';
import styles from './styles.module.css';

export default function HeaderProfile({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Профиль</h1>
      <MenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
    </header>
  );
};
