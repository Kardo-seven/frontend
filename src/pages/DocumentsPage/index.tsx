// import { useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { useLazyGetDocumentsQuery } from '../../store/kardo/kardo.api';
import styles from './styles.module.css';
import imgPDF from '../../assets/images/system/PDFimg.png'
// import { RootState } from '../../store';
// import { useActions } from '../../hooks/actions';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

export default function DocumentsPage() {

  const [triggerdocuments, {data: documents}] = useLazyGetDocumentsQuery();

  useEffect(() => {
    triggerdocuments();
    console.log(documents);
  }, [documents]);

  return (
    <section className={styles.section}>
      <main className={styles.mainPage}>
        <ul>
          {documents?.map((doc) => (
            <li key={doc.title}><img src={imgPDF} alt="" />{doc.title}</li>
          ))}
        </ul>
      </main>
    </section>
  );
}
