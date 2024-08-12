// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
import {
  Link,
} from "react-router-dom";
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useLazyGetEventsQuery } from '../../store/kardo/kardo.api'
import { StyledEvent } from './StyledEvent';

export default function EventsPage() {
  const [triggerMyProfile, { data: events }] = useLazyGetEventsQuery();
  const [errorMessage, setErrorMessage] = useState('Идёт загрузка')
  const path = {AWARD:'prize', COMPETITIONS:'contests', PROJECTS: 'projects', VIDEO_CHALLENGE: 'video', CHILDREN:'children'}
  useEffect(() => {

    triggerMyProfile().then((res)=>{
      if (res.isError){
        setErrorMessage(`Ошибка ${res.status}`)
      }
    })
    console.log('data', events)
  }, [events])
  return (
    <section className={styles.section}>
      {events ? (
        <nav className={styles.mainPage}>
          {events.map((event) => (
            <Link key={event.id} to={{
              pathname: path[event.eventType as keyof typeof path],
             }} state={event} className={`${styles.coverBackground}`}>
              <StyledEvent urlimage={`http://kardo.zapto.org/${event.eventImageDtoResponse.link}`}>
                <h2 className={styles.coverTitle}>{event.title}</h2>
              </StyledEvent>
            </Link>
          ))}
        </nav>
      ) : (<nav className={styles.mainPageNo}><h2>{errorMessage}</h2></nav>)}
      <Navbar />
    </section>
  );
}

