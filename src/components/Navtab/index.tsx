import styles from './styles.module.css';

export default function Navtab({ tabsList, setState, state } :
  {tabsList : {nameRU: string, nameState: string}[];
  setState: (state: string) => void;
  state: string;}
) {

  const tabsLength = tabsList.length.toString();
  return (
    <nav className={styles.nav}>
      {tabsList.map((tab) => (
        <button
          key={tab.nameState}
          className={`${styles.nav__button} ${
            state === tab.nameState && styles.nav__button_active
          } ${styles[`nav__button_length_${tabsLength}`]}`}
          onClick={() => {
            setState(tab.nameState);
          }}
        >
          {tab.nameRU}
        </button>
      ))}
    </nav>
  );
}
