import styles from './styles.module.css';

import { useNavigate } from 'react-router-dom';


import Navbar from '../../components/Navbar';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <header className={styles.header}>
          <div className={styles.headerContainer}>
            <h2 className={styles.headerTitle}>КАРДО [7]</h2>
            <p className={styles.headerText}>
            До гранд-финала КАРДО 41 день 03:57:51
            </p>
          </div>
        </header>
        <button
              className={styles.infoBut}
              onClick={() => {
                navigate('/profile')
              }}
            >
              Подать заявку
        </button>
      <Navbar />
    </section>
  );
}
