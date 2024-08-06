// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import HeaderArrow from '../../components/HeaderArrow';

export default function EditProfilePage() {
  return (
    <section className={styles.section}>
      <HeaderArrow title="Личная информация" />
      <main className={styles.mainPage}></main>
    </section>
  );
}
