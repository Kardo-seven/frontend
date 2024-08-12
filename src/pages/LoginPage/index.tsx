// import { useAppSelector } from '../../hooks/redux';
import styles from './styles.module.css';
// import { RootState } from '../../store';
import { useActions } from '../../hooks/actions';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import logoImg from '../../assets/images/login/Logo.svg';
import ActionButton from '../../components/ActionButton';
import { useState } from 'react';
import Onboarding from '../../components/Onboarding/Onboarding';
import {
  useLoginMutation,
  useRegistrationMutation,
} from '../../store/kardo/kardo.api';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../hooks/redux';
import Navtab from '../../components/Navtab';
import visible from '../../assets/images/login/visibility.svg';
import hidden from '../../assets/images/login/visibility_off.svg';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { setLoggedIn } = useActions();
  const [login] = useLoginMutation();
  const [registration] = useRegistrationMutation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('enter');
  const isOnboardingOpen = useAppSelector(
    (state) => state.onboarding.isLOnboardingOpen
  );
  const [showPassword, setShowPassword] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  

  const onSubmitLogin = async (data: Inputs) => {
    try {
      const res = await login(data).unwrap();
      localStorage.setItem('authToken', res.token);
      setLoggedIn(true);
      navigate('/content');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitRegistration = async (data: Inputs) => {
    try {
      const res = await registration(data).unwrap();
      if (res) {
        setActiveTab('enter');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.loginPage}>
      {isOnboardingOpen ? (
        <Onboarding setActiveTab={setActiveTab} />
      ) : (
        <div className={styles.loginPage__main}>
          <img className={styles.loginPage__logo} src={logoImg} alt="" />
          <h1 className={styles.loginPage__title}>Привет, Гость!</h1>
          <Navtab
            tabsList={[
              { nameRU: 'Вход', nameState: 'enter' },
              { nameRU: 'Регистрация', nameState: 'registration' },
            ]}
            setState={setActiveTab}
            state={activeTab}
          />
          <form
            className={styles.loginPage__form}
            onSubmit={
              activeTab === 'enter'
                ? handleSubmit(onSubmitLogin)
                : handleSubmit(onSubmitRegistration)
            }
          >
            <div className={styles.loginPage__inputField}>
              <label className={styles.loginPage__label} htmlFor="email">
                Электронная почта
              </label>
              <input
                className={`${styles.loginPage__input} ${
                  errors.email && styles.loginPage__inputError
                }`}
                type="text"
                placeholder="Email@kardoaward.com"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,8}$/,
                })}
              />
              {errors.email && errors.email.type === 'pattern' && (
                <span className={styles.loginPage__errorSpan}>
                  Введите email в верном формате
                </span>
              )}
              {errors.email && errors.email.type === 'required' && (
                <span className={styles.loginPage__errorSpan}>
                  email не введен
                </span>
              )}
            </div>
            <div className={styles.loginPage__inputField}>
              <label className={styles.loginPage__label} htmlFor="password">
                Пароль
              </label>
              {activeTab === 'enter' && (
                <p className={styles.loginPage__forgot}>Забыли пароль?</p>
              )}
              <input
                className={`${styles.loginPage__input} ${
                  errors.password && styles.loginPage__inputError
                }`}
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 30,
                })}
              />
              <button
                className={styles.loginPage__showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? visible : hidden}
                  alt="кнопка показывать пароль"
                />
              </button>
              {errors.password && errors.password.type === 'minLength' && (
                <span className={styles.loginPage__errorSpan}>
                  Минимальная длина пароля 6
                </span>
              )}
              {errors.password && errors.password.type === 'maxLength' && (
                <span className={styles.loginPage__errorSpan}>
                  Максимальная длина пароля 30
                </span>
              )}
              {errors.password && errors.password.type === 'required' && (
                <span className={styles.loginPage__errorSpan}>
                  Пароль не введен
                </span>
              )}
            </div>
            <div className={styles.loginPage__submitButton} onClick={() => setSubmitClicked(true)}>
              <ActionButton
                title={activeTab === 'enter' ? 'Вход' : 'Регистрация'}
                type="submit"
                disabled={!isValid && submitClicked}
              />
            </div>
            <p className={styles.notificationPersonalData}>
              При {activeTab === 'enter' ? 'входе' : 'регистрации'} вы
              соглашаетесь на обработку, хранение и передачу персональных данных
              в рамках реализации всех этапов КАРДО
            </p>
          </form>
          <button
            onClick={() => {
              navigate('/content');
            }}
            className={styles.enterWithoutLogin}
          >
            Продолжить без входа
          </button>
        </div>
      )}
    </section>
  );
}
