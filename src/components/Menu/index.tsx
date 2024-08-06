import styles from './styles.module.css';
import personalInfo from '../../assets/images/menu/personalInfo.svg';
import settings from '../../assets/images/menu/settings.svg';
import notifications from '../../assets/images/menu/notifications.svg';
import documents from '../../assets/images/menu/article.svg';
import resources from '../../assets/images/menu/resourses.svg';
import rating from '../../assets/images/menu/award_star.svg';
import logout from '../../assets/images/menu/logout.svg';
import { useNavigate } from 'react-router-dom';

export default function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {

const navigate = useNavigate();

  return (
    <ul className={`${styles.menu} ${isMenuOpen ? styles.menu_active : ''}`}>
      <nav className={styles.menu__nav}>
        <li className={styles.menu__item}
        onClick={() => navigate('edit-profile-info')}>
          <img src={personalInfo} alt="" />
          <span className={styles.menu__text}>Личная информация</span>
        </li>
        <li className={styles.menu__item}>
          <img src={settings} alt="" />
          <span className={styles.menu__text}>Настройки аккаунта</span>
        </li>
        <li className={styles.menu__item}>
          <img src={notifications} alt="" />
          <span className={styles.menu__text}>Уведомления</span>
        </li>
        <li className={styles.menu__item}>
          <img src={documents} alt="" />
          <span className={styles.menu__text}>Документы</span>
        </li>
        <li className={styles.menu__item}>
          <img src={resources} alt="" />
          <span className={styles.menu__text}>Ресурсы</span>
        </li>
        <li className={styles.menu__item}>
          <img src={rating} alt="" />
          <span className={styles.menu__text}>Оценка номинантов</span>
        </li>
      </nav>
      <li className={styles.menu__item}>
        <img src={logout} alt="" />
        <span className={styles.menu__text}>Выйти из аккаунта</span>
      </li>
    </ul>
  );
}
