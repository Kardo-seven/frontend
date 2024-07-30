import styles from './styles.module.css';
import ActionButton from '../../components/ActionButton';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  
    const navigate = useNavigate();
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__main}>
        <h1 className={styles.notFound__title}>Ошибка 404</h1>
        <p className={styles.notFound__description}>
          Страницы, которую вы запросили, не существует. Возможно она устарела
          или была удалена
        </p>
      </div>
      <div
        className={styles.notFound__buttonToMain}
        onClick={() => navigate('/', { replace: true })}
      >
        <ActionButton title="Вернуться на главную" />
      </div>
    </section>
  );
}
