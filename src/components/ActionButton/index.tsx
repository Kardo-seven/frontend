import styles from './styles.module.css';

export default function ActionButton({
  title,
  size,
  secondary,
  type,
  color,
  download,
}: {
  title: string;
  size?: string;
  secondary?: boolean;
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
          }`}
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
