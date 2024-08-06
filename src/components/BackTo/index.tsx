import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import ArrowLeft from '../icons/system/ArrowLeft';

export default function BackTo() {
  const navigate = useNavigate();

  return (
      <button
        className={styles.backTo}
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeft />
      </button>
  );
}
