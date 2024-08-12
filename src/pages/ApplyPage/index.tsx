import styles from './styles.module.css';
import HeaderArrow from '../../components/HeaderArrow';
import { useAppSelector } from '../../hooks/redux';
import { useForm } from 'react-hook-form';
import ActionButton from '../../components/ActionButton';
import { useState } from 'react';
import { usePostApplyEventMutation } from '../../store/kardo/kardo.api';

export default function ApplyPage() {
  const event = useAppSelector((state) => state.event.currentEvent);
  const eventId = event.id.toString();
  const user = useAppSelector((state) => state.user.currentUser);
  const [activeSlide, setActiveSlide] = useState(1);
  const [postApplyEvent] = usePostApplyEventMutation();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ApplyEvent>();

  const onSubmit = (data: any) => {
    activeSlide < 3
      ? setActiveSlide(activeSlide + 1)
      : postApplyEvent(
          {
            data: {
              name: data.name,
              lastName: data.lastName,
              surName: data.surName,
              phone: data.phone,
              email: data.email,
              address: data.address,
              birthday: data.birthday,
              gender: data.gender,
              typeOfSelection: data.typeOfSelection,
              linkList: [data.linkList],
              directionEnumList: data.directionEnumList,
            },
            eventId
          }
        ).unwrap();
  };

  return (
    <section className={styles.section}>
      <HeaderArrow title="Регистрация" size="big" />
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {activeSlide === 1 && (
            <div>
              <h2 className={styles.form__title}>Конкурс и направления</h2>
              <p className={styles.main__eventTitle}>{event.title}</p>
              {event.title !== 'Видеоконкурс' && (
                <div className={styles.form__selectDomainContainer}>
                  <p className={styles.form__containerLabel}>Выберите отбор</p>
                  <div className={styles.form__variant}>
                    <input
                      className={styles.form__radioInput}
                      type="radio"
                      id="REGIONAL_SELECTIONS"
                      value="REGIONAL_SELECTIONS"
                      {...register('typeOfSelection', { required: true })}
                    />
                    <label
                      className={styles.form__radioLabel}
                      htmlFor="REGIONAL_SELECTIONS"
                    >
                      Региональный отбор
                    </label>
                  </div>
                  <div className={styles.form__variant}>
                    <input
                      className={styles.form__radioInput}
                      type="radio"
                      id="NATIONAL_SELECTIONS"
                      value="NATIONAL_SELECTIONS"
                      {...register('typeOfSelection', { required: true })}
                    />
                    <label
                      className={styles.form__radioLabel}
                      htmlFor="NATIONAL_SELECTIONS"
                    >
                      Национальный отбор
                    </label>
                  </div>
                </div>
              )}
              <div className={styles.form__inputContainer}>
                <label className={styles.form__label} htmlFor="address">
                  Город, регион, страна
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  {...register('address', { required: true })}
                  placeholder="Сыктывкар, Республика Коми, РФ"
                />
              </div>
              {/* {event.title === 'Видеоконкурс' && (
                <div>
                  <p>Видеозаявка</p>
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
                      })}
                    />
                  </div>
                </div>
              )} */}
              <h3 className={styles.main__subtitle}>Направления</h3>
              <div className={styles.checkboxesContainer}>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="BREAKING"
                  />
                  <label htmlFor="">BREAKING</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="PARKOUR"
                  />
                  <label htmlFor="">PARKOUR</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="WORKOUT"
                  />
                  <label htmlFor="">WORKOUT</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="KICKSCOOTERING"
                  />
                  <label htmlFor="">KICKSCOOTERING</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="TRICKING"
                  />
                  <label htmlFor="">TRICKING</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="SKATEBOARDING"
                  />
                  <label htmlFor="">SKATEBOARDING</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="BMX"
                  />
                  <label htmlFor="">BMX</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="HIP-HOP"
                  />
                  <label htmlFor="">HIP-HOP</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="DJ-ING"
                  />
                  <label htmlFor="">DJ-ING</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register('directionEnumList', { required: true })}
                    value="GRAFFITI"
                  />
                  <label htmlFor="">GRAFFITI</label>
                </div>
              </div>
            </div>
          )}
          {activeSlide === 2 && (
            <div>
              <h2 className={styles.form__title}>Личные данные</h2>
              <div className={styles.form__inputsContainer2}>
                <div
                  className={`${styles.form__inputContainer}
                ${styles.form__inputContainer_size_s}`}
                >
                  <label className={styles.form__label} htmlFor="name">
                    Имя
                  </label>
                  <input
                    className={styles.form__input}
                    type="text"
                    defaultValue={user.name}
                    {...register('name', { required: true })}
                  />
                </div>
                <div
                  className={`${styles.form__inputContainer}
                ${styles.form__inputContainer_size_s}`}
                >
                  <label className={styles.form__label} htmlFor="lastname">
                    Фамилия
                  </label>
                  <input
                    className={styles.form__input}
                    type="text"
                    defaultValue={user.lastName}
                    {...register('lastName', { required: true })}
                  />
                </div>
                <div
                  className={`${styles.form__inputContainer}
                ${styles.form__inputContainer_size_s}`}
                >
                  <label className={styles.form__label} htmlFor="surname">
                    Отчество (если есть)
                  </label>
                  <input
                    className={styles.form__input}
                    type="text"
                    defaultValue={user.surName}
                    {...register('surName')}
                  />
                </div>{' '}
                <div
                  className={`${styles.form__inputContainer}
                ${styles.form__inputContainer_size_s}`}
                >
                  <label className={styles.form__label} htmlFor="birthday">
                    Дата рождения
                  </label>
                  <input
                    className={styles.form__input}
                    type="date"
                    defaultValue={user.birthday}
                    {...register('birthday', { required: true })}
                  />
                </div>
                <div className={styles.form__selectDomainContainer}>
                  <p className={styles.form__containerLabel}>Выберите пол</p>
                  <div className={styles.form__variant}>
                    <input
                      className={styles.form__radioInput}
                      type="radio"
                      id="man"
                      {...register('gender', { required: true })}
                      value="MAN"
                      defaultChecked={user.gender === 'MAN'}
                    />
                    <label className={styles.form__radioLabel} htmlFor="man">
                      Мужской
                    </label>
                  </div>
                  <div className={styles.form__variant}>
                    <input
                      className={styles.form__radioInput}
                      type="radio"
                      id="woman"
                      {...register('gender', { required: true })}
                      value="WOMAN"
                      defaultChecked={user.gender === 'WOMAN'}
                    />
                    <label className={styles.form__radioLabel} htmlFor="woman">
                      Женский
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeSlide === 3 && (
            <div>
              <h2 className={styles.form__title}>Контактные данные</h2>
              <div className={styles.form__inputContainer}>
                <label className={styles.form__label} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  {...register('email', { required: true })}
                  placeholder="Email@kardoaward.com"
                />
              </div>
              <div className={styles.form__inputContainer}>
                <label className={styles.form__label} htmlFor="phone">
                  Телефон
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  {...register('phone', { required: true })}
                  placeholder="+7 999 999-99-99"
                />
              </div>
              <div className={styles.form__inputContainer}>
                <label className={styles.form__label} htmlFor="linkList">
                  Ссылка на соц. сеть
                </label>
                <input
                  className={styles.form__input}
                  type="text"
                  {...register('linkList')}
                />
              </div>
            </div>
          )}
          <div className={styles.form__buttonsContainer}>
            <div className={styles.form__nextButton}>
              {activeSlide === 3 ? (
                <ActionButton title="Подать заявку" type="submit" />
              ) : (
                <ActionButton title="Далее" type="submit" />
              )}
            </div>
            {activeSlide !== 1 && (
              <div
                className={styles.form__prevButton}
                onClick={() => setActiveSlide(activeSlide - 1)}
              >
                <ActionButton title="Назад" secondary />
              </div>
            )}
            <div className={styles.form__navbar}>
              <div
                className={`${styles.form__navspot} ${
                  activeSlide === 1 ? styles.form__navspot_active : ''
                }`}
              ></div>
              <div
                className={`${styles.form__navspot} ${
                  activeSlide === 2 ? styles.form__navspot_active : ''
                }`}
              ></div>
              <div
                className={`${styles.form__navspot} ${
                  activeSlide === 3 ? styles.form__navspot_active : ''
                }`}
              ></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
