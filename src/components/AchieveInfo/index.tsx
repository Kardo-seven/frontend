import styles from './styles.module.css';
import winner from '../../assets/images/profile/winner.png'

export default function AchieveInfo() {
  return (
    <div className={styles.popupContent}>
      <img className={styles.popupContent__logo} src={winner} alt="лого ачивки" />
      <p className={styles.popupContent__text}><span className={styles.popupContent__textSpan}>Победитель</span>  'Название ивента' по напрвлению 'Направление'</p>
    </div>
  );
}
