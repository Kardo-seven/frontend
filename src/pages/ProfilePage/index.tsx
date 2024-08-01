// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ActionButton from '../../components/ActionButton';

export default function ProfilePage() {
  return (
    <section className={styles.section}>
      <div className={styles.mainPage}>
        {/* header сделать как отдельный компонент */}
        <header className={styles.header}>
          <h1 className={styles.header__title}>Профиль</h1>
          {/* кнопку бургера сделать как отдельный компонент  */}
          <div className={styles.header__burger}></div>
        </header>
        <div className={styles.mainPage__content}>
          <div className={styles.mainPage__profileInfo}>
            <div className={styles.mainPage__avatarAndName}>
              <img className={styles.mainPage__avatar} src="" alt="" />
              <h2 className={styles.mainPage__name}>Иван</h2>
            </div>
            <ul className={styles.mainPage__profileDataList}>
              <li className={styles.mainPage__profileDataItem}>
                <p className={styles.mainPage__profileDataText}>Публикации</p>
                <span className={styles.mainPage__profileDataValue}>2</span>
              </li>
              <li className={styles.mainPage__profileDataItem}>
                <p className={styles.mainPage__profileDataText}>Подписчики</p>
                <span className={styles.mainPage__profileDataValue}>4</span>
              </li>{' '}
              <li className={styles.mainPage__profileDataItem}>
                <p className={styles.mainPage__profileDataText}>Подписки</p>
                <span className={styles.mainPage__profileDataValue}>8</span>
              </li>
            </ul>
          </div>
          <div className={styles.mainPage__subscribe}>
            <ActionButton title="Подписаться" size='s'/>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
