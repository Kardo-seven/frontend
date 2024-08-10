import styles from './styles.module.css';
import avatar from '../../assets/images/profile/Avatar.png';
import ActionButton from '../ActionButton';
import { useForm } from 'react-hook-form';
// import { usePostAvatarMutation } from '../../store/kardo/kardo.api';

export default function EditAvatar() {
  // const [postAvatar] = usePostAvatarMutation();
    const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
  }

  return (
    <div className={styles.popupContent}>
      <img className={styles.popupContent__avatar} src={avatar} alt="аватар" />
      <div className={styles.popupContent__buttons}>
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.actionButtonDownload}>
            <label
              className={`${styles.actionButton} ${styles.actionButton_download}`}
              htmlFor="download"
            >
              Загрузить
            </label>
            <input
              type="file"
              id="download"
              {...register('download', { required: true })}
            />
          </div>
          <ActionButton title="Сохранить" type="submit" />
        </form>
        <ActionButton title="Удалить" secondary color="black" />
      </div>
    </div>
  );
}
