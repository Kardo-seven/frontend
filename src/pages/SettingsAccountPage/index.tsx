import ActionButton from '../../components/ActionButton';
import './select.css';
import HeaderArrow from '../../components/HeaderArrow';
import styles from './styles.module.css';
import Select from 'react-select';

export default function SettingsAccountPage() {
  const options = [
    { value: 'RU', label: 'Русский' },
    { value: 'EN', label: 'Английский' },
  ];
  return (
    <section className={styles.section}>
      <HeaderArrow title="Настройки аккаунта" />
      <main className={styles.main}>
        <Select
          options={options}
          defaultValue={options[0]}
          unstyled
          classNames={{
            dropdownIndicator: () => 'dropdownIndicator',
            indicatorSeparator: () => 'indicatorSeparator',
            control: () => 'control',
            menu: () => 'menu',
            option: () => 'option',
          }}
        />
        <div className={styles.main__notificationsContainer}>
          <p className={styles.main__notificatiosDescription}>Уведомления</p>
          <div className={styles.main__notifications}>
            <input
              className={styles.main__notificationsInput}
              type="checkbox"
              name="notifications"
              id="notifications"
            />
            <label
              className={styles.main__notificationsLabel}
              htmlFor="notifications"
            ></label>
          </div>
        </div>
        <div className={styles.main__submitButton}>
          <ActionButton title="Удалить аккаунт" doubleSecondary />
        </div>
      </main>
    </section>
  );
}
