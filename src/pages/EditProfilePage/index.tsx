// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import HeaderArrow from '../../components/HeaderArrow';
import Navtab from '../../components/Navtab';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ActionButton from '../../components/ActionButton/index';
import { usePatchPersonalDataMutation } from '../../store/kardo/kardo.api';
import { useAppSelector } from '../../hooks/redux';

export default function EditProfilePage() {
  const [activeTab, setActiveTab] = useState('personal-data');
  const [patchPersonalData] = usePatchPersonalDataMutation();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<UserPersonalData>();

  const myProfile = useAppSelector((state) => state.user.currentUser);

  const onSubmitPersonalData = async (data: any) => {
    const res = await patchPersonalData(data);
    console.log(res);
  };

  return (
    <section className={styles.section}>
      <HeaderArrow title="Личная информация" />
      <main className={styles.mainPage}>
        <Navtab
          tabsList={[
            { nameRU: 'Личные данные', nameState: 'personal-data' },
            { nameRU: 'Данные входа', nameState: 'enter-data' },
          ]}
          setState={setActiveTab}
          state={activeTab}
        />
        {activeTab === 'personal-data' && (
          <form
            className={styles.editProfile__form}
            onSubmit={handleSubmit(onSubmitPersonalData)}
          >
            <div className={styles.editProfile__inputFields}>
              <div className={styles.editProfile__inputField}>
                <label className={styles.editProfile__label} htmlFor="name">
                  Имя
                </label>
                <input
                  className={styles.editProfile__input}
                  type="text"
                  defaultValue={myProfile?.name}
                  {...register('name', { required: true })}
                />
              </div>
              <div className={styles.editProfile__inputField}>
                <label className={styles.editProfile__label} htmlFor="lastname">
                  Фамилия
                </label>
                <input
                  className={styles.editProfile__input}
                  type="text"
                  defaultValue={myProfile?.lastName}
                  {...register('lastName', { required: true })}
                />
              </div>
            </div>
            <p className={styles.editProfile__description}>
              Имя и фамилия отображаются в профиле
            </p>
            <div className={styles.editProfile__inputFields}>
              <div className={styles.editProfile__inputField}>
                <label className={styles.editProfile__label} htmlFor="surname">
                  Отчество (если есть)
                </label>
                <input
                  className={styles.editProfile__input}
                  type="text"
                  defaultValue={myProfile?.surName}
                  {...register('surName', { required: true })}
                />
              </div>
              <div className={styles.editProfile__inputField}>
                <label className={styles.editProfile__label} htmlFor="birthday">
                  Дата рождения
                </label>
                <input
                  className={styles.editProfile__input}
                  type="date"
                  defaultValue={myProfile?.birthday}
                  {...register('birthday', { required: true })}
                />
              </div>
            </div>
            <div className={styles.editProfile__genderField}>
              <p className={styles.editProfile__descriptionGender}>
                Выберите пол
              </p>
              <div className={styles.editProfile__radioVariant}>
                <input
                  className={styles.editProfile__radioInput}
                  type="radio"
                  id="man"
                  {...register('gender')}
                  value="MAN"
                  checked={myProfile?.gender === 'MAN'}
                />
                <label className={styles.editProfile__radioLabel} htmlFor="man">
                  Мужской
                </label>
              </div>
              <div className={styles.editProfile__radioVariant}>
                <input
                  className={styles.editProfile__radioInput}
                  type="radio"
                  id="woman"
                  {...register('gender')}
                  value="WOMAN"
                  checked={myProfile?.gender === 'WOMAN'}
                />
                <label
                  className={styles.editProfile__radioLabel}
                  htmlFor="woman"
                >
                  Женский
                </label>
              </div>
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="country">
                Страна
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                defaultValue={myProfile?.country}
                {...register('country', { required: true })}
              />
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="region">
                Регион
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                defaultValue={myProfile?.region}
                {...register('region', { required: true })}
              />
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="city">
                Город
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                defaultValue={myProfile?.city}
                {...register('city', { required: true })}
              />
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label
                className={styles.editProfile__label}
                htmlFor="citizenship"
              >
                Гражданство
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                defaultValue={myProfile?.citizenship}
                {...register('citizenship', { required: true })}
              />
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="socialLink">
                Ссылка на соц. сеть
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                {...register('socialLink', { required: true })}
              />
            </div>
            <div className={styles.editProfile__addButton}>
              <ActionButton title="Добавить" secondary size="s" />
            </div>
            <div className={styles.editProfile__submitButton}>
              <ActionButton title="Сохранить" type="submit" />
            </div>
          </form>
        )}
        {activeTab === 'enter-data' && (
          <form>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="phone">
                Телефон
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                {...register('phone', { required: true })}
              />
              <button>Изменить номер телефона</button>
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
                {...register('email', { required: true })}
              />
              <button>Изменить почтовый адрес</button>
            </div>
            <h2>Изменить пароль</h2>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="password">
                Старый пароль
              </label>
              <input
                className={styles.editProfile__input}
                type="password"
                {...register('password', { required: true })}
              />
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label
                className={styles.editProfile__label}
                htmlFor="newPassword"
              >
                Новый пароль
              </label>
              <input
                className={styles.editProfile__input}
                type="password"
                {...register('newPassword', { required: true })}
              />
            </div>
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label
                className={styles.editProfile__label}
                htmlFor="newPassword"
              >
                Повторите новый пароль
              </label>
              <input
                className={styles.editProfile__input}
                type="password"
                {...register('newPassword', { required: true })}
              />
            </div>
          </form>
        )}
      </main>
    </section>
  );
}
