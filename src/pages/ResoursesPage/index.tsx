import { useEffect } from 'react';
import { useLazyGetResourcesQuery } from '../../store/kardo/kardo.api';
import styles from './styles.module.css';
import HeaderArrow from '../../components/HeaderArrow';
import videoImg from '../../assets/images/system/videoImg.png';

export default function ResoursesPage() {
  const [triggerResources, { data: resources }] = useLazyGetResourcesQuery();

  useEffect(() => {
    triggerResources();
    console.log(resources);
  }, [resources]);

  return (
    <section className={styles.section}>
      <HeaderArrow title="Ресурсы" size="big" />
      <main className={styles.mainPage}>
        {resources && (
          <ul className={styles.mainPage__resourcesList}>
            {resources.map((res: ResourceData) => (
              <li
                className={styles.mainPage__resourcesItem}
                key={res.resourceId}
              >
                <img src={videoImg} alt="" />
                <div className={styles.mainPage__resourcesContent}>
                  <h3 className={styles.mainPage__resourcesTitle}>
                    {res.title}
                  </h3>
                  <a
                    href={`https://kardo.zapto.org/${res.link}`}
                    target="_blank"
                  >
                    <button className={styles.mainPage__downloadButton}>
                      Смотреть
                    </button>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
}
