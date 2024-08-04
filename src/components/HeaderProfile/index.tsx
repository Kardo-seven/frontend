import MenuButton from '../MenuButton';
import styles from './styles.module.css';

export default function HeaderProfile() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Профиль</h1>
      <MenuButton />
    </header>
  );
};
