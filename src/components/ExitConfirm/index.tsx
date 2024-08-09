import styles from './styles.module.css';
import ActionButton from '../ActionButton';
import { useActions } from '../../hooks/actions';

export default function ExitConfirm({
  setOpenGetOut,
}: {
  setOpenGetOut: (openGetOut: boolean) => void;
}) {
  const { setLoggedIn } = useActions();
  return (
    <div>
      <h2 className={styles.exitConfirm__title}>Выйти из аккаунта?</h2>
      <div
        onClick={() => {
          setOpenGetOut(false);
        }}
        className={styles.exitConfirm__button}
      >
        <ActionButton title="Остаться" />
      </div>
      <div
        onClick={() => {
          localStorage.removeItem('authToken');
          setLoggedIn(false);
        }}
        className={styles.exitConfirm__button}
      >
        <ActionButton title="Выйти" secondary color="black" />
      </div>
    </div>
  );
}
