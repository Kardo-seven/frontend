// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
import './select.css';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import HeaderArrow from '../../components/HeaderArrow';
import Navtab from '../../components/Navtab';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

type Inputs = {
  name: string;
  surname: string;
  lastname: string;
  birthday: string;
  gender: string;
  country: string;
  region: string;
  city: string;
  citizenship: string;
  socialLink: string;
  number: string;
  email: string;
  password: string;
};

export default function EditProfilePage() {
  const [activeTab, setActiveTab] = useState('personal-data');
  const {
    register,
    // handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const options = [
    { value: 'man', label: 'Мужской' },
    { value: 'woman', label: 'Женский' },
  ];

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
            // onSubmit={handleSubmit(onSubmitPersonalData)}
          >
            <div className={styles.editProfile__inputFields}>
              <div className={styles.editProfile__inputField}>
                <label className={styles.editProfile__label} htmlFor="name">
                  Имя
                </label>
                <input
                  className={styles.editProfile__input}
                  type="text"
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
                  {...register('lastname', { required: true })}
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
                  {...register('surname', { required: true })}
                />
              </div>
              <div className={styles.editProfile__inputField}>
                <label className={styles.editProfile__label} htmlFor="birthday">
                  Дата рождения
                </label>
                <input
                  className={styles.editProfile__input}
                  type="text"
                  {...register('birthday', { required: true })}
                />
              </div>
            </div>
            <Select
              options={options}
              placeholder="Выберете пол"
              unstyled
              classNames={{
                dropdownIndicator: () => 'editProfile__dropdownIndicator',
                indicatorSeparator: () => 'editProfile__indicatorSeparator',
                control: () => 'editProfile__control',
                container: () => 'editProfile__select-container',
                menu: () => 'editProfile__menu',
              }}
            />
            <div
              className={`${styles.editProfile__inputField} ${styles.editProfile__inputField_type_big}`}
            >
              <label className={styles.editProfile__label} htmlFor="country">
                Страна
              </label>
              <input
                className={styles.editProfile__input}
                type="text"
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
                {...register('citizenship', { required: true })}
              />
            </div>
          </form>
        )}
        {activeTab === 'enter-data' && <p>Личныены дане</p>}
      </main>
    </section>
  );
}
