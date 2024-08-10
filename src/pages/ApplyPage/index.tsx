import styles from './styles.module.css';
import HeaderArrow from '../../components/HeaderArrow';

export default function ApplyPage() {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <HeaderArrow title="Регистрация" size="big" />
      </div>
    </section>
  );
}
