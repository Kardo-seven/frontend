import styles from './styles.module.css';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

export default function Popup({
  content,
  setOpenEditAvatar,
  setOpenAchieveInfo,
  setOpenGetOut,
}: {
  content: JSX.Element;
  setOpenEditAvatar?: (openEditAvatar: boolean) => void;
  setOpenAchieveInfo?: (openAchieveInfo: boolean) => void;
  setOpenGetOut?: (openGetOut: boolean) => void;
}) {
  const isPopupOpened = useAppSelector((state) => state.popup.isPopupOpened);
  const { closePopup } = useActions();

  function handleClosePopup() {
    closePopup();
    if (setOpenEditAvatar) setOpenEditAvatar(false);
    if (setOpenAchieveInfo) setOpenAchieveInfo(false);
    if (setOpenGetOut) setOpenGetOut(false);
  }

  return (
    <div
      className={`${styles.popup} ${
        isPopupOpened === true && `${styles.popup_active}`
      }`}
    >
      <div className={styles.popup__overlay} onClick={handleClosePopup}></div>
      <div className={styles.popup__content}>
        <button
          className={styles.popup__closeButton}
          onClick={handleClosePopup}
        ></button>
        {content}
      </div>
    </div>
  );
}
