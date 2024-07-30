import styles from './styles.module.css';

export default function ActionButton({
  title,
  size,
  secondary,
  type,
}: {
  title: string;
  size?: string;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={`${styles.actionButton} ${
        size === 's' ? `${styles.actionButton_size_s}` : ''
      } ${size === 'm' ? `${styles.actionButton_size_m}` : ''} ${
        size === 'xs' ? `${styles.actionButton_size_xs}` : ''
      } ${secondary ? `${styles.actionButton_secondary}` : ''}`}
      type={type ? type : 'button'}
    >
      {title}
    </button>
  );
}
