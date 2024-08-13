// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
import { useNavigate } from 'react-router-dom';
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
import {
  useLazyGetMyProfileQuery,
  useLazyGetEventsQuery,
  useLazyGetUserEventsQuery,
} from '../../store/kardo/kardo.api';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';
import ExitConfirm from '../../components/ExitConfirm';
import Navtab from '../../components/Navtab';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [triggerMyProfile, { data: profile }] = useLazyGetMyProfileQuery();
  const [triggerEvents, { data: events }] = useLazyGetEventsQuery();
  const [triggerUserEvents, { data: userEvents }] = useLazyGetUserEventsQuery();
  const { openModal, openPopup, setCurrentUser, setCurrentEvent } =
    useActions();

  useEffect(() => {
    triggerMyProfile();
    setCurrentUser(profile);
  }, [profile]);

  useEffect(() => {
    {
      triggerEvents();
      console.log(events);
    }
  }, [events]);

  useEffect(() => {
    {
      triggerUserEvents();
    }
  }, [userEvents]);

  const myProfile = useAppSelector((state) => state.user.currentUser);

  const [openEditAvatar, setOpenEditAvatar] = useState(false);
  const [openAchieveInfo, setOpenAchieveInfo] = useState(false);
  const [openGetOut, setOpenGetOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');

  function includeId(id: number) {
    const res = userEvents && userEvents.find((event: any) => event.id === id);
    if (res) {
      return true;
    } else return false;
  }

  return (
    <section className={styles.section}>
      <HeaderProfile setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={styles.mainPage}>
        {myProfile && (
          <div className={styles.mainPage__content}>
            <div className={styles.mainPage__profileInfo}>
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
                {myProfile.name ? myProfile.name : 'Имя'}{' '}
                {myProfile.lastName ? myProfile.lastName : 'Фамилия'}
              </h2>
              <ul className={styles.mainPage__profileDataList}>
                <li className={styles.mainPage__profileDataItem}>
                  <p className={styles.mainPage__profileDataText}>Публикации</p>
                  <span className={styles.mainPage__profileDataValue}>2</span>
                </li>
                <li className={styles.mainPage__profileDataItem}>
                  <p className={styles.mainPage__profileDataText}>Подписчики</p>
                  <span className={styles.mainPage__profileDataValue}>4</span>
                </li>
                <li className={styles.mainPage__profileDataItem}>
                  <p className={styles.mainPage__profileDataText}>Подписки</p>
                  <span className={styles.mainPage__profileDataValue}>8</span>
                </li>
              </ul>
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
            <Navtab
              tabsList={[
                { nameRU: 'Лента', nameState: 'feed' },
                { nameRU: 'Запись на конкурс', nameState: 'registration' },
              ]}
              setState={setActiveTab}
              state={activeTab}
            />
            {activeTab === 'feed' && (
              <p>Публикаций нет</p>
            )}
            {activeTab === 'registration' && (
              <ul className={styles.mainPage__eventsList}>
                {userEvents &&
                  events &&
                  events.map((event) => (
                    <li className={styles.mainPage__eventsItem} key={event.id}>
                      <h4 className={styles.mainPage__eventsTitle}>
                        {event.title}
                      </h4>
                      {includeId(event.id) ? (
                        <p className={styles.mainPage__eventsDoneText}>
                          Заявка подана
                        </p>
                      ) : (
                        <div
                          className={styles.mainPage__eventsButton}
                          onClick={() => {
                            navigate(`/events/apply/${event.id}`);
                            setCurrentEvent(event);
                          }}
                        >
                          <ActionButton title="Подать заявку" size="s" />
                        </div>
                      )}
                    </li>
                  ))}
              </ul>
            )}
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
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setOpenGetOut={setOpenGetOut} />
      )}
      {openGetOut && (
        <Popup content={<ExitConfirm setOpenGetOut={setOpenGetOut} />} />
      )}
    </section>
  );
}
