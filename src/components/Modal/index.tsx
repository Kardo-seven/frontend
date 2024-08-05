import styles from './styles.module.css';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function Modal({
  content,
  setSelectedActiveCard,
  setSelectedInActiveCard,
}: {
  content: JSX.Element;
  setSelectedActiveCard?: (id: number) => void;
  setSelectedInActiveCard?: (id: number) => void;
}) {
  const isModalOpened = useAppSelector((state) => state.modal.isModalOpen);
  const { closeModal } = useActions();

  function handleCloseModal() {
    closeModal();
  }

  return (
    <div
      className={`${styles.modal} ${
        isModalOpened === true && `${styles.modal_active}`
      }`}
    >
      <div className={styles.modal__overlay} onClick={handleCloseModal}></div>
      <div className={styles.modal__content}>
        <button className={styles.modal__closeButton} onClick={handleCloseModal}/>
        {content}</div>
    </div>
  );
}
