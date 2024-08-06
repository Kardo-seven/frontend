import styles from './styles.module.css';
import ActionButton from '../../components/ActionButton';
import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/images/system/notFound.png'

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__main}>
        <img className={styles.notFound__image}src={notFound} alt="" />
        <h1 className={styles.notFound__title}>Упс, не туда свернул!</h1>
        <p className={styles.notFound__description}>
          Этой страницы пока нет, но&nbsp;мы&nbsp;скоро&nbsp;забомбим&nbsp;её для тебя!
        </p>
      </div>
      <div
        className={styles.notFound__buttonToMain}
        onClick={() => navigate('/', { replace: true })}
      >
        <ActionButton title="На главную" />
      </div>
    </section>
  );
}
