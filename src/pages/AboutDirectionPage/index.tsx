import styles from './styles.module.css';
import ActionButton from '../../components/ActionButton';
import { useNavigate } from 'react-router-dom';
import HeaderArrow from '../../components/HeaderArrow';
import { useAppSelector } from '../../hooks/redux';

export default function AboutDirectionPage() {
  const navigate = useNavigate();
  const direction = useAppSelector((state) => state.direction.currentDirection);
  return (
    <section className={styles.section}>
      <div className={styles.main}>
      <HeaderArrow title={direction} />
      </div>

    </section>
  );
}
