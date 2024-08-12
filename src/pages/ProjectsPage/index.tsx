import {
    Link,
} from "react-router-dom";
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Navtab from '../../components/Navtab'
import { useActions } from '../../hooks/actions';

export default function ProjectsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const event = location.state;
    const [activeTab, setActiveTab] = useState('mechanika')
    const {  setCurrentEvent } = useActions();

    return (
      <>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <Link to="/events" className={styles.reset} />
            <h2 className={styles.headerTitle}>Проекты</h2>
            <p className={styles.headerText}>
                Подайте заявку, пройдите очную защиту и получите деньги на реализацию собственного проекта.
            </p>
          </div>
        </header>
        <section className={styles.contests}>
          <section>
            <button
              className={styles.infoBut}
              onClick={() => {
                navigate('/profile')
                setCurrentEvent(event)
            }}
            >
              Подать заявку
            </button>
            <p className={styles.infoText}>
                Мы создаём условия, чтобы любой желающий смог развивать свои проектные идеи и мечты. Каждый может оформить заявку на получение грантовой поддержки, пройти очную защиту на гранд-финале 22–25 августа и получить деньги на реализацию своего проекта!
            </p>
          </section>
          <section className={styles.menuInfo}>
            <Navtab
              tabsList={[
                { nameRU: 'Механика', nameState: 'mechanika' },
                { nameRU: 'Возраст', nameState: 'age' },
                { nameRU: 'Сроки', nameState: 'dedlines' },
              ]}
              setState={setActiveTab}
              state={activeTab}
            />
            {activeTab == 'mechanika' ? (
              <>
                <h3 className={styles.navtabTitle}>Механика</h3>
                <p className={styles.navtabText}>
                Конкурс по поддержке молодёжных проектов, направленных на развитие уличной культуры и спорта. Грантовый конкурс, размер гранта до 1,5 млн рублей, участник проходит регистрацию и оформление проекта, а после защищает его перед экспертами в рамках гранд-финала.
                </p>
                
              </>
            ) : activeTab == 'age' ? (
              <div>
                <h3 className={styles.navtabTitle}>Возраст</h3>
                <ul className={styles.navtabList}>
                  <li>
                    От 16 до 35 лет.
                  </li>
                  <li>
                  Только для физических лиц.
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <h3 className={styles.navtabTitle}>Сроки</h3>
                <ul className={styles.navtabList}>
                  <li>
                  Регистрация: 2 июня — 15 июля
                  </li>
                  <li>
                  Очная защита проектов: 22 августа — 25 августа
                  </li>
                </ul>
              </>
            )}
          </section>
        </section>
      </>
    );
}