import {
    Link,
} from "react-router-dom";
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navtab from '../../components/Navtab'
import { useActions } from '../../hooks/actions';
import ChildrenModal from "../../components/ChildrenModal";
import Modal from "../../components/Modal";
import FilterMenu from "../../components/FilterMenu";
import { useLazyGetChildrenQuery } from '../../store/kardo/kardo.api'

export default function ChildrenPage() {
    const [triggerChildren, { data: children }] = useLazyGetChildrenQuery();
    const location = useLocation();
    const event = location.state;
    const [activeTab, setActiveTab] = useState('people')
    const { openModal, setCurrentEvent } = useActions();
    const [currentNameDirection, setCurrentNameDirection] = useState({ value: 'WORKOUT', label: 'WORKOUT' })
    const [currentNameLevel, setCurrentNameLevel] = useState({ value: 'PARTICIPANT', label: 'Все' })
    const [currentChild, setCurrentChild] = useState<ChildData | null>(null);
    const [childMessage, setChildMessage] = useState('')
    const directionsList = [    
        { value: 'WORKOUT', label: 'WORKOUT' },
        { value: 'SKATEBOARDING', label: 'SKATEBOARDING' },
        { value: 'PARKOUR', label: 'PARKOUR' },
        { value: 'BMX', label: 'BMX' },
        { value: 'BREAKING', label: 'BREAKING' },
        { value: 'GRAFFITI', label: 'GRAFFITI' },
        { value: 'DJING', label: 'DJING' },
        { value: 'STUNK_SCOOTER', label: 'STUNK_SCOOTER' },
        { value: 'TRICKING', label: 'TRICKING' },
        { value: 'FREERAN', label: 'FREERAN' },
        { value: 'HIP_HOP', label: 'HIP_HOP' },

    ]
    const levelsList = [
        { value: 'PARTICIPANT', label: 'Все' },
        { value: 'EXPERT', label: 'Судьи' },
    ];
    
    const navigate = useNavigate();
    const onSubmitChildren = async (formData:any) => {
        setChildMessage('Идёт загрузка')
        await triggerChildren(formData).then((res)=>{
            if (res.isError){
                setChildMessage(`Ошибка`)
            }
          });
        if (children){
            setCurrentChild(children[0])
        }
      };

      useEffect(() => {
        const formData: ChildPersonalData = {
            directions: currentNameDirection.value,
            authorities: currentNameLevel.value,
            size: 5,
        };
        onSubmitChildren(formData);
        
      }, [children, currentNameLevel, currentNameDirection])
    return (
        <>
            <Modal content={<ChildrenModal />} />
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link to="/events" className={styles.reset} />
                    <h2 className={styles.headerTitle}>Дети</h2>
                    <p className={styles.headerText}>
                        1 сезон Всероссийской конкурс-премии Уличной Культуры и спорта среди детей
                    </p>
                </div>
            </header>
            <section className={styles.contests}>
                <section>
                    <button
                        className={styles.infoBut}
                        onClick={() =>{    
                            setCurrentEvent(event);
                            navigate('/profile');
                        }
                        }
                    >
                        Подать заявку
                    </button>
                    <p className={styles.infoText}>Улицы сегодня — это узнаваемые бренды, спортсмены и атлеты, танцоры, деятели культуры, перспективные общественные проекты.</p>
                    <p className={styles.infoText}>До этого момента КАРДО поддерживало всех представителей Уличной Культуры старше 16 лет, живущих и болеющих своим делом. Но время идёт. Вы просили — мы услышали!</p>
                    <p className={styles.infoText}>1 сезон Всероссийской конкурс-премии Уличной Культуры и спорта среди детей и молодёжи «КАРДО-ДЕТИ» даёт свой старт. Мы отберём лучших по каждому из представленных направлений, которые будут бороться за звание победителя соревнований КАРДО. </p>
                    <p className={styles.infoText}>Чтобы принять участие — регистрируйся на нашем сайте и подавай заявку в личном кабинете в разделе КАРДО-ДЕТИ.</p>
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
                            { nameRU: 'Люди', nameState: 'people' },
                            { nameRU: 'Этапы', nameState: 'stages' },
                        ]}
                        setState={setActiveTab}
                        state={activeTab}
                    />
                    {activeTab == 'people' ? (
                        <>
                            <h3 className={styles.navtabTitle}>КАРДО — ДЕТИ</h3>
                            <FilterMenu menuList={directionsList} setCurrentName={setCurrentNameDirection} />
                            <FilterMenu menuList={levelsList} setCurrentName={setCurrentNameLevel} />
                            <div className={styles.navtabGrid}>
                               {children ? children.map((child)=>(
                                <img key={child.id} onClick={()=>setCurrentChild(child)} className={(currentChild && child.id==currentChild.id) ? styles.navtabGrid__elem : `${styles.navtabGrid__elem} ${styles.navtabGrid__elem_noactive}`} alt={child.lastName} src={`https://kardo.zapto.org/${child.avatarLink}`}></img>
                               )) :(<p className={styles.navtabTitle}>{childMessage}</p>)} 
                            </div>
                            <img className={styles.navtab__avatar} alt={'Записей не найдено'} src={currentChild ? `https://kardo.zapto.org/${currentChild.avatarLink}` : ''}/>
                               <p className={styles.navtab__name}>{currentChild ? (currentChild.name + ' '+ currentChild.lastName) : ''}</p>
                        </>
                    ) : (
                        <div>
                            <h3 className={styles.navtabTitle}>Этапы</h3>
                            <div className={styles.navtabCard}>
                                <div className={styles.navtabContainer}>
                                    <h4 className={styles.navtabSubtitle}>Онлайн регистрация <br /> с 5 октября по 31 октября</h4>
                                    <p className={styles.navtabText}>Приём заявок по 8 направлениям: BREAKING, PARKOUR, SKATEBOARDING, WORKOUT, HIP-HOP, BMX, SCOOT, TRICKING.</p>
                                    <button className={styles.navtabButton} onClick={() => openModal()}>Подробнее</button>
                                </div>
                            </div>
                            <div className={styles.navtabCard}>
                                <div className={styles.navtabContainer}>
                                    <h4 className={styles.navtabSubtitle}>ТОП-6 <br /> с 1 ноября по 5 ноября</h4>
                                    <p className={styles.navtabText}>Отбор ТОП-6 по 8 направлениям</p>
                                </div>
                            </div>
                            <div className={styles.navtabCard}>
                                <div className={styles.navtabContainer}>
                                    <h4 className={styles.navtabSubtitle}>Фестиваль <br /> с 23 ноября по 25 ноября</h4>
                                    <p className={styles.navtabText}>Приём заявок по 8 направлениям: BREAKING, PARKOUR, SKATEBOARDING, WORKOUT, HIP-HOP, BMX, SCOOT, TRICKING.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </section>
        </>
    );
}