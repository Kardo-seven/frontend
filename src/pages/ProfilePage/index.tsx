// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ActionButton from '../../components/ActionButton';
import HeaderProfile from '../../components/HeaderProfile';
import avatar from '../../assets/images/profile/Avatar.jpg';
import winner from '../../assets/images/profile/winner.png';
import prize from '../../assets/images/profile/prize.png';
import event from '../../assets/images/profile/event.png';

export default function ProfilePage() {
  return (
    <section className={styles.section}>
      <HeaderProfile />
      <div className={styles.mainPage}>
        <div className={styles.mainPage__content}>
          <div className={styles.mainPage__profileInfo}>
            <div className={styles.mainPage__avatarAndName}>
              <img
                className={styles.mainPage__avatar}
                src={avatar}
                alt="аватар"
              />
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
            <ActionButton title="Подписаться" size="s" />
          </div>
          <div className={styles.mainPage__achievementSection}>
            <h2 className={styles.mainPage__achievementHeader}>Достижения</h2>
            <button className={styles.mainPage__achievementAbout}></button>
            <ul className={styles.mainPage__achievementList}>
              <li className={styles.mainPage__achievementItem}>
                <img
                  src={winner}
                  alt="ачивка"
                  className={styles.mainPage__achievementImg}
                />
                <p className={styles.mainPage__achievementCaption}>
                  Победитель
                </p>
              </li>
              <li className={styles.mainPage__achievementItem}>
                <img
                  src={prize}
                  alt="ачивка"
                  className={styles.mainPage__achievementImg}
                />
                <p className={styles.mainPage__achievementCaption}>Призер</p>
              </li>
              <li className={styles.mainPage__achievementItem}>
                <img
                  src={event}
                  alt="ачивка"
                  className={styles.mainPage__achievementImg}
                />
                <p className={styles.mainPage__achievementCaption}>Участник</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
