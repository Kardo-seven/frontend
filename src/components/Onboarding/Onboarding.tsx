import styles from './styles.module.css';
import './pagination.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ActionButton from '../ActionButton';
import { useState } from 'react';
import slide1 from '../../assets/images/onboarding/slide1.jpg';
import slide2 from '../../assets/images/onboarding/slide2.jpg';
import slide3 from '../../assets/images/onboarding/slide3.jpg';
import slide4 from '../../assets/images/onboarding/slide4.jpg';

export default function OnBoarding({
  setIsOnboardingOpen,
  setIsEnter,
}: {
  setIsOnboardingOpen: (isOnboardingOpen: boolean) => void;
  setIsEnter: (isEnter: boolean) => void;
}) {
  const [isLastSlide, setIsLastSlide] = useState(false);

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <div
        className={`${styles.swiper__nextButton} ${
          isLastSlide ? styles.swiper__nextButton_last : ''
        }`}
        onClick={() => {
          if (!isLastSlide) swiper.slideNext();
          else {
            setIsOnboardingOpen(false);
            setIsEnter(false);
          }
        }}
      >
        <ActionButton title={isLastSlide ? 'Зарегистрироваться' : 'Далее'} />
      </div>
    );
  };

    const SkipButton = () => {
      return <button className={styles.swiper__skipButton} onClick={() => setIsOnboardingOpen(false)}>Пропустить</button>;
    };

    const BackgroundPagination = () => {
      return <div className={styles.swiper__backgroundPagination}></div>;
    }

  return (
    <div className={styles.onBoarding__page}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          bulletClass: 'swiper-pagination-bullet zlz',
          bulletActiveClass: 'swiper-pagination-bullet-active zlz-active',
          clickable: true,
        }}
        onSlideChange={() => {
          if (isLastSlide) setIsLastSlide(false);
        }}
        className={styles.swiper}
        onReachEnd={() => {
          setIsLastSlide(true);
        }}
      >
        <SwiperSlide className={styles.swiper__slide}>
          <SkipButton />
            <h2 className={styles.swiper__headerSlide}>
              Добро пожаловать в КАРДО
            </h2>
            <p className={styles.slide__description}>
              Мир КАРДО — это мир уличной культуры и спорта. Здесь переплетаются
              сотни историй и судеб.
            </p>
            <img className={styles.slide__image} src={slide1} alt="слайд1" />
            <SwiperButtonNext />
          <BackgroundPagination />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <SkipButton />
          <h2 className={styles.swiper__headerSlide}>Участвуй в конкурсах</h2>
          <p className={styles.slide__description}>
            Прими участие в международных конкурсах по 11 направлениям: BMX,
            Hip-Hop, Граффити, Танцы и другие.Покажи свои навыки и стань лучшим!
          </p>
          <img className={styles.slide__image} src={slide2} alt="слайд2" />
          <SwiperButtonNext />
          <BackgroundPagination />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <SkipButton />
          <h2 className={styles.swiper__headerSlide}>
            Делись своими достижениями
          </h2>
          <p className={styles.slide__description}>
            Загружай свои фото и видео. Делись успехами, вдохновляй других и
            получай признание от сообщества.
          </p>
          <img className={styles.slide__image} src={slide3} alt="слайд3" />
          <SwiperButtonNext />
          <BackgroundPagination />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h2 className={styles.swiper__headerSlide}>Войди и начни сейчас!</h2>
          <p
            className={`${styles.slide__description} ${styles.slide__description_last}`}
          >
            Для участия в конкурсах и доступа ко всем возможностям приложения
            войди в аккаунт.
          </p>
          <img className={styles.slide__image} src={slide4} alt="слайд4" />
          <SwiperButtonNext />
          <BackgroundPagination />
          <p className={styles.slide__isLogin}>
            Уже есть аккаунт?
            <button
              onClick={() => {
                setIsOnboardingOpen(false);
                setIsEnter(true);
              }}
              className={styles.slide__loginButton}
            >
              Войти
            </button>
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
