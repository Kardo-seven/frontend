import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useActions } from '../../hooks/actions';

export default function DirectionsPage() {
  const navigate = useNavigate();
  const { setCurrentDirection } = useActions();

  function setDirection(evt: any) {
    setCurrentDirection((evt.target as HTMLElement).textContent);
    navigate(`${(evt.target as HTMLElement).textContent}`);
  }

  return (
    <section className={styles.section}>
      <main className={styles.mainPage}>
        <h1 className={styles.mainPage__title}>Направления</h1>
        <ul className={styles.mainPage__directionsList}>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_bmx}`}
            >
              BMX
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_breaking}`}
            >
              Брейкинг
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_workout}`}
            >
              Воркаут
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_graffiti}`}
            >
              Граффити
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_djing}`}
            >
              Диджеинг
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_parkour}`}
            >
              Паркур
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_skate}`}
            >
              Скейтбординг
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_scoot}`}
            >
              Трюковой самокат
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_tricking}`}
            >
              Трикинг
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_freerun}`}
            >
              Фриран
            </p>
          </li>
          <li
            className={styles.mainPage__directionsItem}
            onClick={(evt) => {
              setDirection(evt);
            }}
          >
            <p
              className={`${styles.mainPage__directionsText} ${styles.mainPage__directionsText_hiphop}`}
            >
              Хип-хоп
            </p>
          </li>
        </ul>
      </main>
      <Navbar />
    </section>
  );
}
