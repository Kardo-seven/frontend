import {
    Link,
} from "react-router-dom";
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Navtab from '../../components/Navtab'
import { useActions } from '../../hooks/actions';

export default function PrizePage() {
    // const navigate = useNavigate();
    const location = useLocation();
    const event = location.state;
    const [activeTab, setActiveTab] = useState('mechanika')
    const { setCurrentEvent } = useActions();

    return (
      <>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <Link to="/events" className={styles.reset} />
            <h2 className={styles.headerTitle}>Премия</h2>
            <p className={styles.headerText}>
              Определены 120 номинантов конкурса «Премия» в 10 направлениях!
            </p>
          </div>
        </header>
        <section className={styles.contests}>
          <section>
            <button
              className={styles.infoBut}
              onClick={() => setCurrentEvent(event)}
            >
              К списку номинантов
            </button>
            <p className={styles.infoText}>
              «Премия» — одно из конкурсных направлений международной
              конкурс-премии «КАРДО», ориентированное на признание и поощрение
              лучших сообществ и организации, которые внесли наибольший вклад
              в развитие конкретного направления уличной культуры и спорта
              за прошедший год (2023).
            </p>
            <div className={styles.infoBlock}>
              <p className={styles.infoBlockText}>
                Путёвка в Гранд-Финал, призовой фонд по 100 000 рублей на каждое
                направление в конкурсе!
              </p>
            </div>
            <div className={styles.marquee}>
              <div className={styles.track}>
                <div className={styles.content}>
                  &nbsp;УЛИЦА НАЧИНАЕТСЯ ЗДЕСЬ • УЛИЦА НАЧИНАЕТСЯ ЗДЕСЬ • УЛИЦА
                  НАЧИН{' '}
                </div>
              </div>
            </div>
          </section>
          <section className={styles.menuInfo}>
            <Navtab
              tabsList={[
                { nameRU: 'Механика', nameState: 'mechanika' },
                { nameRU: 'Сроки', nameState: 'deadlines' },
                { nameRU: 'Призы', nameState: 'prizes' },
              ]}
              setState={setActiveTab}
              state={activeTab}
            />
            {activeTab == 'mechanika' ? (
              <>
                <h2 className={styles.navtabTitle}>Механика</h2>
                <p className={styles.navtabText}>
                  1. Отборочный этап в онлайн: размещение заявки в личном
                  кабинете на сайте и видео в социальных сетях.
                </p>
                <p className={styles.navtabText}>
                  Выбираются полуфиналисты разных категорий:
                </p>
                <p className={styles.navtabText}>Breaking:</p>
                <p className={styles.navtabText}>
                  «Breaking 1×1», «Toprock 1×1», «Footwork 1×1» — ТОП-24.
                </p>
                <p className={styles.navtabText}>Parkour и Freerunning:</p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-24, категория MID — ТОП-12.
                </p>
                <p className={styles.navtabText}>Workout:</p>
                <p className={styles.navtabText}>
                  Категория «Лучший статик» (мужчины), категория «Лучший
                  динамик» (мужчины), категория «Лучший универсал» (мужчины),
                  категория «Лучший универсал» (женщины) — ТОП-24.
                </p>
                <p className={styles.navtabText}>Hip-hop, Graffiti:</p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-24, категория Beginners — ТОП-12.
                </p>
                <p className={styles.navtabText}>DJing:</p>
                <p className={styles.navtabText}>
                  Категория «Scratch», категория «Mix» — ТОП-24.
                </p>
                <p className={styles.navtabText}>Tricking:</p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-24, категория Advance — ТОП-12.
                </p>
                <p className={styles.navtabText}>
                  Skateboarding, BMX, Kickscootering:
                </p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-24, категория Amateur — ТОП-12.
                </p>
                <p className={styles.navtabText}>
                  2. Выбранные полуфиналисты выполняют индивидуальное задание
                  и лучшие становятся финалистами.
                </p>
                <p className={styles.navtabText}>
                  Выбираются финалисты разных категорий:
                </p>
                <p className={styles.navtabText}>Breaking:</p>
                <p className={styles.navtabText}>
                  «Breaking 1×1», «Toprock 1×1», «Footwork 1×1» — ТОП-24.
                </p>
                <p className={styles.navtabText}>Parkour и Freerunning:</p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-24, категория MID — ТОП-12.
                </p>
                <p className={styles.navtabText}>Workout:</p>
                <p className={styles.navtabText}>
                  Категория «Лучший статик» (мужчины), категория «Лучший
                  динамик» (мужчины), категория «Лучший универсал» (мужчины),
                  категория «Лучший универсал» (женщины) — ТОП-24.
                </p>
                <p className={styles.navtabText}>Hip-hop, Graffiti:</p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-4, категория Beginners — ТОП-3.
                </p>
                <p className={styles.navtabText}>DJing:</p>
                <p className={styles.navtabText}>
                  Категория «Scratch», категория «Mix» — ТОП-4.
                </p>
                <p className={styles.navtabText}>Tricking:</p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-4, категория Advance — ТОП-3.
                </p>
                <p className={styles.navtabText}>
                  Skateboarding, BMX, Kickscootering:
                </p>
                <p className={styles.navtabText}>
                  Категория Pro — ТОП-4, категория Amateur — ТОП-3.
                </p>
                <p className={styles.navtabText}>
                  Участники, прошедшие в финал, получают путёвку «ПОД КЛЮЧ»
                  на гранд-финал, возглавляют турнирную сетку.
                </p>
              </>
            ) : activeTab == 'deadlines' ? (
              <div>
                <h2 className={styles.navtabTitle}>Сроки</h2>
                <ul className={styles.navtabList}>
                  <li>
                    Регистрация и загрузка конкурсного видео: <br />
                    7 февраля — 17 апреля
                  </li>
                  <li>
                    1 этап отбора (отбор полуфиналистов): <br />
                    24 апреля — 1 мая
                  </li>
                  <li>
                    2 этап отбора (отбор финалистов):
                    <br />
                    7 мая — 7 июня
                  </li>
                  <li>Финальные соревнования: 22–25 августа</li>
                </ul>
              </div>
            ) : (
              <>
                <h2 className={styles.navtabTitle}>Призы</h2>
                <p className={styles.navtabPresents}>
                  Различные денежные призы или подарки для победителей в разных
                  направлениях и их категориях, подробнее можете ознакомиться
                  в разделе «Документы».
                </p>
                <button className={styles.navtabButton}>Документы</button>
              </>
            )}
          </section>
        </section>
      </>
    );
}