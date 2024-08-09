// import { useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { useLazyGetDocumentsQuery } from '../../store/kardo/kardo.api';
import styles from './styles.module.css';
import imgPDF from '../../assets/images/system/PDFimg.png'
import HeaderArrow from '../../components/HeaderArrow';
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

export default function DocumentsPage() {

  const [triggerdocuments, {data: documents}] = useLazyGetDocumentsQuery();
  // const [url, setUrl] = useState('');

  useEffect(() => {
    triggerdocuments();
    console.log(documents);
  }, [documents]);

  // const authToken = localStorage.getItem('authToken');

    // function clickDocument(link: string) {
    //   fetch(`https://kardo.zapto.org/${link}`, {
    //     headers: {
    //       'Content-Type': 'application/pdf',
    //       Authorization: `Bearer ${authToken}`,
    //     },
    //   })
    //     .then((res) => res.blob())
    //     .then((blob) => {
    //       const url = window.URL.createObjectURL(new Blob([blob]));
    //       setUrl(url);
    //     });
    // }

  return (
    <section className={styles.section}>
      <HeaderArrow title="Документы" />
      <main className={styles.mainPage}>
        {documents && (
          <ul className={styles.mainPage__documentsList}>
            {documents.map((doc: DocumentData) => (
              <li className={styles.mainPage__documentsItem} key={doc.documentId}>
                <img src={imgPDF} alt="" />
                <div className="">
                  <h3 className={styles.mainPage__documentsTitle}>
                    {doc.title}
                  </h3>
                  <a
                    href={`https://kardo.zapto.org/${doc.link}`}
                    target='_blank'
                    // onClick={() => clickDocument(doc.link)}
                    // download={'document.pdf'}
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
