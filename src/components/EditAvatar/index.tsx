import styles from './styles.module.css';
import avatar from '../../assets/images/profile/Avatar.png';
import ActionButton from '../ActionButton';

export default function EditAvatar() {
  return (
    <div className={styles.popupContent}>
      <img className={styles.popupContent__avatar}src={avatar} alt="аватар" />
      <div className={styles.popupContent__buttons}>
        <ActionButton title="Загрузить с устройства" download/>
        <ActionButton title="Сделать снимок" />
        <ActionButton title="Удалить" secondary color="black" />
      </div>
    </div>
  );
}
