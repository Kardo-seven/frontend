// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import img from '../../assets/images/events/programs.png'
export default function ProgramsPage() {

  return (
    <section className={styles.section}>
        <div className={styles.programs}>
      <header className={styles.header}>
        <Link to="/events" className={styles.reset} />
        <h2 className={styles.header__title}>Программа</h2>
      </header>
      <img src={img} className={styles.programs__img}></img>
      <h3 className={styles.programs__subtitle}>Гранд-финал</h3>
      <p className={styles.programs__text}>«Премия» – одно из конкурсных направлений международной конкурс-премии «КАРДО», ориентированное на признание и поощрение лучших сообществ и организации, которые внесли наибольший вклад в развитие конкретного направления уличной культуры и спорта за прошедший год (2023).</p>
      </div>
    </section>
  );
}