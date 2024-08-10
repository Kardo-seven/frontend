// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ActionButton from '../../components/ActionButton';
import HeaderProfile from '../../components/HeaderProfile';
import avatar from '../../assets/images/profile/Avatar.png';
import winner from '../../assets/images/profile/winner.png';
import prize from '../../assets/images/profile/prize.png';
import event from '../../assets/images/profile/event.png';
import { useActions } from '../../hooks/actions';
import Popup from '../../components/Popup';
import AchieveInfo from '../../components/AchieveInfo';
import Modal from '../../components/Modal';
import AchieveModal from '../../components/AchieveModal';
import { useState } from 'react';
import EditAvatar from '../../components/EditAvatar';
import Menu from '../../components/Menu';
import { useLazyGetMyProfileQuery } from '../../store/kardo/kardo.api';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';

export default function ProfilePage() {
  const [triggerMyProfile, { data: profile }] = useLazyGetMyProfileQuery();
  const { openModal, openPopup, setCurrentUser } = useActions();
  useEffect(() => {
    triggerMyProfile();
    setCurrentUser(profile);
  }, [profile]);

  const myProfile = useAppSelector((state) => state.user.currentUser);

  const [openEditAvatar, setOpenEditAvatar] = useState(false);
  const [openAchieveInfo, setOpenAchieveInfo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={styles.section}>
      <HeaderProfile setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={styles.mainPage}>
        {myProfile && (
          <div className={styles.mainPage__content}>
            <div className={styles.mainPage__profileInfo}>
              <div className={styles.mainPage__avatarAndName}>
                <img
                  className={styles.mainPage__avatar}
                  src={avatar}
                  alt="аватар"
                  onClick={() => {
                    setOpenEditAvatar(true);
                    openPopup();
                  }}
                />
                <h2 className={styles.mainPage__name}>
                  {myProfile.name} {myProfile.lastName}
                </h2>
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
              <button
                className={styles.mainPage__achievementAbout}
                onClick={() => openModal()}
              ></button>
              <ul className={styles.mainPage__achievementList}>
                <li
                  className={styles.mainPage__achievementItem}
                  onClick={() => {
                    setOpenAchieveInfo(true);
                    openPopup();
                  }}
                >
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
                  <p className={styles.mainPage__achievementCaption}>
                    Участник
                  </p>
                </li>
              </ul>
            </div>
            <ul>
              <li>Публикация</li>
              <li>Публикация</li>
              <li>Публикация</li>
            </ul>
          </div>
        )}
      </div>
      <Navbar />
      {openAchieveInfo && (
        <Popup
          content={<AchieveInfo />}
          setOpenAchieveInfo={setOpenAchieveInfo}
        />
      )}
      {openEditAvatar && (
        <Popup content={<EditAvatar />} setOpenEditAvatar={setOpenEditAvatar} />
      )}
      <Modal content={<AchieveModal />} />
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />}
    </section>
  );
}
