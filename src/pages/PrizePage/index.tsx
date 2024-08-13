import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navtab from '../../components/Navtab';
import { useActions } from '../../hooks/actions';
import img_requirements from '../../assets/images/events/prizeReq.png';
import img_crit from '../../assets/images/events/prizeCrit.png';

export default function PrizePage() {
  const location = useLocation();
  const event = location.state;
  const [activeTab, setActiveTab] = useState('mechanika');
  const { setCurrentEvent } = useActions();
  const handleSubmitАpplication = () => {
    setCurrentEvent(event);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to="/events" className={styles.reset} />
          <h2 className={styles.headerTitle}>Премия</h2>
          <p className={styles.headerText}>
            Определены 120 номинантов конкурса «Премия» в 10 направлениях!
          </p>
        </div>
      </header>
      <section className={styles.contests}>
        <section>
          <button className={styles.infoBut} onClick={handleSubmitАpplication}>
            К списку номинантов
          </button>
          <p className={styles.infoText}>
            «Премия» — одно из конкурсных направлений международной
            конкурс-премии «КАРДО», ориентированное на признание и поощрение
            лучших сообществ и организации, которые внесли наибольший вклад
            в развитие конкретного направления уличной культуры и спорта
            за прошедший год (2023).
          </p>
          <div className={styles.infoBlock}>
            <p className={styles.infoBlockText}>
              Путёвка в Гранд-Финал, призовой фонд по 100 000 рублей на каждое
              направление в конкурсе!
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
              { nameRU: 'Требования', nameState: 'requirements' },
              { nameRU: 'Критерии', nameState: 'criteria' },
            ]}
            setState={setActiveTab}
            state={activeTab}
          />
          {activeTab == 'mechanika' ? (
            <>
              <h2 className={styles.navtabTitle}>Механика конкурса</h2>
              <h3 className={styles.navtabSubTitle}>07.02.2024–17.03.2024</h3>
              <p className={styles.navtabText}>
                Сбор заявок с предложениями кандидатов конкурса «Премия».
                Международный мониторинг различных деятелей уличной культуры
                и спорта. Отбор ТОП-50 Претендентов конкурса «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>18.03.2024–23.03.2024</h3>
              <p className={styles.navtabText}>
                Публикация лонг-листов Претендентов конкурса «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>24.03.2024–21.04.2024</h3>
              <p className={styles.navtabText}>
                Народное онлайн-голосование. Отбор ТОП-12 Номинантов конкурса
                «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>22.04.2024–04.05.2024</h3>
              <p className={styles.navtabText}>
                Публикация результатов народного онлайн-голосования конкурса
                «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>05.05.2024–31.05.2024</h3>
              <p className={styles.navtabText}>
                Работа независимых Экспертов. Отбор ТОП-3 Лауреатов конкурса
                «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>01.06.2024–07.06.2024</h3>
              <p className={styles.navtabText}>
                Публикация шорт-листов конкурса «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>22.08.2024–25.08.2024</h3>
              <p className={styles.navtabText}>
                Гранд-финал, церемония открытия, церемония награждения
                Победителей конкурса «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>26.08.2024–31.08.2024</h3>
              <p className={styles.navtabText}>
                Публикация результатов конкурса «Премия».
              </p>
              <h3 className={styles.navtabSubTitle}>01.09.2024–30.09.2024</h3>
              <p className={styles.navtabText}>
                Постконкурсное сопровождение Лауреатов и Победителей конкурса
                «Премия».
              </p>
            </>
          ) : activeTab == 'requirements' ? (
            <div>
              <h2 className={styles.navtabTitle}>Требования к кандидатам</h2>
              <ul className={styles.navtabList}>
                <li>
                  Соответствие конкретному направлению уличной культуры и спорта
                </li>
                <li>
                  Популярность внутри направления, аудитория от 500 человек
                </li>
                <li>Прозрачность и освещаемость деятельности</li>
                <li>Наличие подтверждённой активности и достижений</li>
                <li>Коммуникативность</li>
              </ul>
              <img
                alt="Требования"
                className={styles.navtabImg}
                src={img_requirements}
              ></img>
              <p className={styles.navtabText}>
                Эксперты конкурса «Премия» – известные и авторитетные в своём
                направлении, опытные представители уличной культуры и спорта
                мира.
              </p>
            </div>
          ) : (
            <div>
              <h2 className={styles.navtabTitle}>Критерии оценки конкурса</h2>
              <ul className={styles.navtabList}>
                <li>Масштаб деятельности</li>
                <li>Разнообразие и всесторонняя направленность деятельности</li>
                <li>Реальный вклад в индустрию, инновационные подходы</li>
                <li>Наличие и масштаб сообщества вокруг бренда\организации</li>
                <li>Наличие информационных ресурсов, медийность</li>
              </ul>
              <img
                alt="Критерии"
                className={styles.navtabImg}
                src={img_crit}
              ></img>
              <h3 className={styles.navtabSubTitle}>
                Критерии равнозначны, диапазон баллов от 1 до 10 по каждому
                критерию
              </h3>
              <p className={styles.navtabText}>
                Эксперты конкурса «Премия» – известные и авторитетные в своём
                направлении, опытные представители уличной культуры и спорта
                мира.
              </p>
            </div>
          )}
        </section>
      </section>
    </>
  );
}
