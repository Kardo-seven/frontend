// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
import {
  Link,
} from "react-router-dom";
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function EventsPage() {

  return (
    <section className={styles.section}>
      <nav className={styles.mainPage}>
        <Link to="/contests" className={`${styles.coverBackground} ${styles.coverBackgroundContests}`}>
          <h2 className={styles.coverTitle}>Соревнования</h2>
        </Link>
        <Link to="#" className={`${styles.coverBackground} ${styles.coverBackgroundPrize}`}>
          <h2 className={styles.coverTitle}>Премия</h2>
        </Link>
        <Link to="#" className={`${styles.coverBackground} ${styles.coverBackgroundProjects}`}>
          <h2 className={styles.coverTitle}>Проекты</h2>
        </Link>
        <Link to="#" className={`${styles.coverBackground} ${styles.coverBackgroundVideoContest}`}>
          <h2 className={styles.coverTitle}>Видеоконкурс</h2>
        </Link>
        <Link to="#" className={`${styles.coverBackground} ${styles.coverBackgroundChildren}`}>
          <h2 className={styles.coverTitle}>Дети</h2>
        </Link>
        <Link to="#" className={`${styles.coverBackground} ${styles.coverBackgroundGrand}`}>
          <h2 className={styles.coverTitle}>Гранд-финал</h2>
        </Link>
      </nav>
      <Navbar />
    </section>
  );
}

