import styles from './styles.module.css';
import Navbar from '../../components/Navbar';

export default function MainPage() {

  return (
    <section className={styles.section}>
      <div className={styles.mainPage}>Главная</div>
      <Navbar />
    </section>
  );
}
