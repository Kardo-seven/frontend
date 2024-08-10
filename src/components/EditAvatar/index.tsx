import styles from './styles.module.css';
import avatar from '../../assets/images/profile/Avatar.png';
import ActionButton from '../ActionButton';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { usePostAvatarMutation } from '../../store/kardo/kardo.api';

export default function EditAvatar() {
  const [postAvatar] = usePostAvatarMutation();
  const {
    register,
    handleSubmit,
  } = useForm();

  const [isDisabled, setIsDisabled] = useState(true);
  const formData = new FormData();
console.log(formData);

  const onSubmit = async (data: any) => {

    await formData.append('file', data.download[0]);
    // localStorage.setItem('avatar', data.download[0].name);

    // await postAvatar(formData).unwrap();

    localStorage.removeItem('avatar');
  };

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
              {...register('download', {
                required: true,
                onChange: () => setIsDisabled(false),
              })}
            />
          </div>
          <ActionButton title="Сохранить" type="submit" disabled={isDisabled} />
        </form>
        <ActionButton title="Удалить" secondary color="black" />
      </div>
    </div>
  );
}
