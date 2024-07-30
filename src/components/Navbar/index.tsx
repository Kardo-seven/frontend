import { useLocation, useNavigate } from 'react-router-dom';
// import ScrollToTop from '../../utils/ScrollToTop';
import styles from './styles.module.css';
// import { Suspense, useEffect } from 'react';
import ContentImg from '../icons/navbar/Content';
import DirectionsImg from '../icons/navbar/Directions';
import EventsImg from '../icons/navbar/Events';
import HomeImg from '../icons/navbar/Home';
import PrifileImg from '../icons/navbar/Profile';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${
            location.pathname === '/main' ? styles.navItem_active : ''
          }`}
          onClick={() => navigate('/main')}
        >
          <HomeImg location={location.pathname} />
        </li>
        <li
          className={`${styles.navItem} ${
            location.pathname === '/events' ? styles.navItem_active : ''
          }`}
          onClick={() => navigate('/events')}
        >
          <EventsImg location={location.pathname} />
        </li>
        <li
          className={`${styles.navItem} ${
            location.pathname === '/content' ? styles.navItem_active : ''
          }`}
          onClick={() => navigate('/content')}
        >
          <ContentImg location={location.pathname} />
        </li>
        <li
          className={`${styles.navItem} ${
            location.pathname === '/directions' ? styles.navItem_active : ''
          }`}
          onClick={() => navigate('/directions')}
        >
          <DirectionsImg location={location.pathname} />
        </li>
        <li
          className={`${styles.navItem} ${
            location.pathname === '/profile' ? styles.navItem_active : ''
          }`}
          onClick={() => navigate('/profile')}
        >
          <PrifileImg location={location.pathname} />
        </li>
      </ul>
    </nav>
  );
}
