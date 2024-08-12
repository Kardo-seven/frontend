import {
    Link,
  } from "react-router-dom";
  import styles from './styles.module.css';
  import { useState } from 'react';
  import { useLocation, useNavigate } from 'react-router-dom';
  import Navtab from '../../components/Navtab'
  import { useActions } from '../../hooks/actions';
  //import VideoPlayer from "../../components/VideoPlayer";
  //import video from '../../assets/Video/Konkurs_Videokonkurs.mp4'
  
  export default function VideoContestPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const event = location.state;
    const [activeTab, setActiveTab] = useState('task')
    const {  setCurrentEvent } = useActions();
    const handleSubmitАpplication=(()=>{
        navigate('/profile')
        setCurrentEvent(event);
    })
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link to='/events' className={styles.reset} />
                    <h2 className={styles.headerTitle}>Видеоконкурс</h2>
                    <p className={styles.headerText}>Снимите видеоролик от 1 до 3 минут и отразите в нем не менее одного направления</p>
                </div>
            </header>
            <section className={styles.contests}>
                <section>
                    <button className={styles.infoBut} onClick={handleSubmitАpplication}>Подать заявку</button>
                    <div className={styles.marquee}>
                        <div className={styles.track}>
                            <div className={styles.content}>&nbsp;УЛИЦА НАЧИНАЕТСЯ ЗДЕСЬ • УЛИЦА НАЧИНАЕТСЯ ЗДЕСЬ • УЛИЦА НАЧИН </div>
                        </div>
                    </div>
                </section>
                <section className={styles.menuInfo} >
                    <Navtab
                     tabsList={[
                        { nameRU: 'Задание', nameState: 'task' },
                        { nameRU: 'Механика', nameState: 'mehanika' },
                        { nameRU: 'Призы', nameState: 'prizes' },
                        { nameRU: 'Критерии', nameState: 'criteria' },
                    ]}
                        setState={setActiveTab}
                        state={activeTab}
                    />
                    {
                    activeTab=='task' ? (
                        <>
                        
                         <h3 className={styles.navtabTitle}>Задание для участников</h3>
                         <p className={styles.navtabText}>
                            На этапе регистрации участник снимает и выкладывает видеоролик длительностью от 1 до 3 минут со вставкой интро и аутро в свою социальную сеть с хэштегами #KARDO, #KARDO7 (видео загружается в личный кабинет в виде ссылки на видеоролик, загруженный на облачный диск, а также в виде ссылки на открытый источник в свободном доступе (ссылка на видеоролик в социальной сети участника)), в котором необходимо отразить не менее одного направления проекта «Брейкинг» (Breaking), «Паркур» (Parkour), «Фриран» (Freerunning), «Воркаут» (Workout), «Хип-хоп» (Hip-hop), «Граффити» (Graffiti), «Диджеинг» (Djing), «Трикинг» (Tricking), «Скейтбординг» (Skateboarding), «Веломотоэкстрим» (BMX), «Экстремальный самокат» (Kickscootering). Ссылка на диск должна быть активна и ссылка на видеоролик, выложенный в социальных сетях, должна быть доступна до завершения Конкурс-премии. Необходимый материал в виде аутро и интро каждый участник скачивает самостоятельно с сайта Конкурс-премии. Данная вставка является обязательной. Ролик должен быть горизонтальным в разрешении 1920×1080 точек (пикселей).
                         </p>
                        
                          </>
                    ) : (activeTab == 'mehanika' ? (
                       <div> 
                    <h3 className={styles.navtabTitle}>Механика оценки работ</h3>
                    <p className={styles.navtabText}>Максимальное количество баллов по каждому из направлений — 10 баллов. Максимальное количество баллов за видеоролик — 40 баллов. Экспертный совет просматривает и оценивает материал, по результатам на официальном сайте, а также на странице сообщества в социальной сети Вконтакте публикуется список ТОП-48 участников. Участники ТОП-48 получают творческое задание в личном кабинете, а также на email, указанный участником при регистрации. После выполнения творческого задания будут отобраны ТОП-12 участников. Участники ТОП-12 получают творческое задание на финал в личном кабинете.
                    На Гранд-финале Экспертный совет просматривает финальные работы и оценивает защиту участников, которая проходит в очном формате. Участник за 3 минуты защищает проект. Участнику разрешено использовать презентацию и показать бекстейдж съёмок финального задания, что так же будет оценено Экспертным советом в качестве дополнительных баллов. Победителей Видеоконкурса объявят на Гранд-финале после просмотра и оценивания финального задания.</p>
                    </div>
                    ) : (
                        activeTab=='prizes' ? (
                            <>
                                <h3 className={styles.navtabTitle}>Призы и премии</h3>
                                <p className={styles.navtabText}>Номинация «Лучшая операторская работа» — 100 000 (сто тысяч) рублей;</p>
                                <p className={styles.navtabText}>Номинация «Самая оригинальная работа» — 100 000 (сто тысяч) рублей;</p>
                                <p className={styles.navtabText}>Номинация «Лучший монтаж» — 100 000 (сто тысяч) рублей</p>
                                <p className={styles.navtabText}>Номинация «Лучшая режиссёрская работа» — 100 000 (сто тысяч) рублей;</p>
                                <p className={styles.navtabText}>Гран-при — 150 000 (сто пятьдесят тысяч) рублей.</p>
                            </>
                        ) :(
                        <>
                            <h3 className={styles.navtabTitle}>Критерии оценки работ</h3>
                            <h3 className={styles.navtabSubtitle}>Операторская работа</h3>
                            <p className={styles.navtabText}>Композиция и постановка кадра, световые решения, правильность фокусировки, правильность экспозиции кадра — отсутствие пересветов и завалов в тёмное.</p>
                            <h3 className={styles.navtabSubtitle}>Монтаж видеоролика</h3>
                            <p className={styles.navtabText}>Соблюдение основных принципов монтажа, качество визуальных эффектов, качество аудиоэффектов, цветокоррекция.</p>
                            <h3 className={styles.navtabSubtitle}>Режиссёрская работа</h3>
                            <p className={styles.navtabText}>Наличие сюжета, работа с актёрами, обоснованность монтажных решений, гармоничность и целостность видеоролика</p>
                            <h3 className={styles.navtabSubtitle}>Оригинальность</h3>
                            <p className={styles.navtabText}>Использование различных приёмов в съёмке, монтаже, саунд дизайне</p>
                        </>)
                    ))
                    }
                </section>
                 
            </section> 
        </>
    );
  }