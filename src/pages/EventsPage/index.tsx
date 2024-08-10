// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
import {
  Link,
} from "react-router-dom";
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useLazyGetEventsQuery } from '../../store/kardo/kardo.api'
import { StyledEvent } from './StyledEvent';

export default function EventsPage() {
  const [triggerMyProfile, { data: events }] = useLazyGetEventsQuery();
  
  useEffect(() => {

    triggerMyProfile()
    console.log('data', events)
  }, [events])
  return (
    <section className={styles.section}>
      {events ? (
        <nav className={styles.mainPage}>
          {events.map((event) => (
            <Link key={event.id} to={{
              pathname: 'contests',
             }} state={event} className={`${styles.coverBackground}`}>
              <StyledEvent urlImage={`http://kardo.zapto.org/${event.eventImageDtoResponse.link}`}>
                <h2 className={styles.coverTitle}>{event.title}</h2>
              </StyledEvent>
            </Link>
          ))}
        </nav>
      ) : (<nav className={styles.mainPageNo}><h2>Идёт загрузка</h2></nav>)}
      <Navbar />
    </section>
  );
}

