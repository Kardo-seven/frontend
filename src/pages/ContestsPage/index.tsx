import {
    Link,
} from "react-router-dom";
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ContestsPage() {
    const navigate = useNavigate();
    const divBlock = useRef<HTMLDivElement | null>(null);
    const [widthMenu, setWidthMenu] = useState(0);
    const listMenu = ["Механика", "Сроки"];
    const [activeName, setActiveName] = useState("Механика")
    useEffect(() => {
        if (divBlock.current) {
            console.log('width', divBlock.current.clientWidth)
            // Получаем ширину элемента
            setWidthMenu(divBlock.current.clientWidth);
        }
    }, [divBlock.current]);
    interface AlertProps {
        countData: number;
        widthData: number;
        active: boolean;
    }
    const StyledAlert = styled.div<AlertProps>`
  width: ${(props) => props.widthData / props.countData}px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.active ? 'red' : 'rgba(128, 128, 128, 1)'};
`;
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link to='/events' className={styles.reset} />
                    <h2 className={styles.headerTitle}>Соревнования</h2>
                    <p className={styles.headerText}>Регистрация на национальные и региональные этапы.</p>
                </div>
            </header>
            <main className={styles.main}>
                <section>
                    <button className={styles.infoBut} onClick={() => navigate('/profile', { replace: true })}>Подать заявку</button>
                    <div className={styles.marquee}>
                        <div className={styles.track}>
                            <div className={styles.content}>&nbsp;Улица начинается здесь • Улица начинается здесь • Улица начин </div>
                        </div>
                    </div>
                </section>
                <section className={styles.menuInfo} ref={divBlock}>
                    <div className={styles.menu}>
                        {listMenu.map((item) => (
                            <StyledAlert key={item}
                                countData={listMenu.length}
                                widthData={widthMenu}
                                active={activeName == item}
                                onClick={() => setActiveName(item)}
                            > {item}</StyledAlert>
                        ))}
                    </div>
                    <h2>Механика</h2>
                </section>
                
            </main>
        </>
    );
}