import BackTo from '../BackTo';
import styles from './styles.module.css';

export default function HeaderArrow({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <BackTo />
      <h1 className={styles.header__title}>{title}</h1>
    </header>
  );
}
