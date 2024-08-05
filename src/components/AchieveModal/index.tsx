import styles from './styles.module.css';
import achievmentsImg from '../../assets/images/modal/achievmentss.png'

export default function AchieveModal() {
  return (
    <div className={styles.modalContent}>
      <h2 className={styles.modalContent__header}>Достижения «КАРДО»</h2>
      <img
        src={achievmentsImg}
        alt="ачивки КАРДО"
      />
      <p className={styles.modalContent__text}>
        <span className={styles.modalContent__textSpan}>Участник</span>
        Получи достижение «Участник» за активное участие в конкурсах. Прояви
        свои навыки в различных направлениях. Все участники, прошедшие отбор,
        получают эту награду.
      </p>
      <p className={styles.modalContent__text}>
        <span className={styles.modalContent__textSpan}>Призёр</span>
        Достижение «Призёр» присуждается за высокие результаты в конкурсах.
        Эксперты оценивают участников, и те, кто проявит особый талант и
        мастерство, могут получить это достижение.
      </p>
      <p className={styles.modalContent__text}>
        <span className={styles.modalContent__textSpan}>Победитель</span>
        Стать обладателем достижения «Победитель» — значит быть лучшим среди
        лучших! Это достижение вручается за победу в конкурсах по любому
        направлению.
      </p>
      
    </div>
  );
}
