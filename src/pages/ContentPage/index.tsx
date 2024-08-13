import styles from './styles.module.css';
import Navbar from '../../components/Navbar';

export default function ContentPage() {
  return (
    <section className={styles.section}>
      <div className={styles.mainPage}>Контент</div>
      <Navbar />
    </section>
  );
}
