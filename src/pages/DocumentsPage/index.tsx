import { useEffect } from 'react';
import { useLazyGetDocumentsQuery } from '../../store/kardo/kardo.api';
import styles from './styles.module.css';
import imgPDF from '../../assets/images/system/PDFimg.png';
import HeaderArrow from '../../components/HeaderArrow';

export default function DocumentsPage() {
  const [triggerDocuments, { data: documents }] = useLazyGetDocumentsQuery();

  useEffect(() => {
    triggerDocuments();
  }, [documents]);

  return (
    <section className={styles.section}>
      <HeaderArrow title="Документы" size="big" />
      <main className={styles.mainPage}>
        {documents && (
          <ul className={styles.mainPage__documentsList}>
            {documents.map((doc: DocumentData) => (
              <li
                className={styles.mainPage__documentsItem}
                key={doc.documentId}
              >
                <img src={imgPDF} alt="" />
                <div className="">
                  <h3 className={styles.mainPage__documentsTitle}>
                    {doc.title}
                  </h3>
                  <a
                    href={`https://kardo.zapto.org/${doc.link}`}
                    target="_blank"
                  >
                    <button className={styles.mainPage__downloadButton}>
                      Скачать
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
