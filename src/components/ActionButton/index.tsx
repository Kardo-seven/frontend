import styles from './styles.module.css';

export default function ActionButton({
  title,
  size,
  secondary,
  doubleSecondary,
  type,
  color,
  download,
}: {
  title: string;
  size?: string;
  secondary?: boolean;
  doubleSecondary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  download?: boolean;
}) {
  return (
    <div className={styles.actionButtonContainer}>
      {!download ? (
        <button
          className={`${styles.actionButton} ${
            size === 's' ? `${styles.actionButton_size_s}` : ''
          } ${color === 'black' ? `${styles.actionButton_color_black}` : ''} ${
            secondary ? `${styles.actionButton_secondary}` : ''
          } ${doubleSecondary ? `${styles.actionButton_doubleSecondary}` : ''}`}
          type={type ? type : 'button'}
        >
          {title}
        </button>
      ) : (
        <div className={styles.actionButtonDownload}>
          <label
            className={`${styles.actionButton} ${styles.actionButton_download}`}
            htmlFor="download"
          >
            {title}
          </label>
          <input type="file" name="download" id="download" />
        </div>
      )}
    </div>
  );
}
