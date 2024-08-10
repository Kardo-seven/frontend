import BackTo from '../BackTo';
import styles from './styles.module.css';

export default function HeaderArrow({ title, size }: { title: string, size?: string }) {
  return (
    <header className={styles.header}>
      <BackTo />
      <h1 className={`${styles.header__title} ${size === 'big' ? `${styles.header__title_big}` : ''}`}>{title}</h1>
    </header>
  );
}
