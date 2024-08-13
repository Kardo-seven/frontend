import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import HeaderArrow from '../../components/HeaderArrow';
import { useAppSelector } from '../../hooks/redux';
import coverBMX from '../../assets/images/aboutDirection/CoverBMX.png';
import coverBreaking from '../../assets/images/aboutDirection/CoverBeaking.png';
import coverSkate from '../../assets/images/aboutDirection/CoverSkate.png';
import coverTricking from '../../assets/images/aboutDirection/CoverTricking.png';
import coverParkour from '../../assets/images/aboutDirection/CoverParkour.png';
import coverFreerun from '../../assets/images/aboutDirection/CoverFreerun.png';
import coverDjing from '../../assets/images/aboutDirection/CoverDjing.png';
import coverGraffiti from '../../assets/images/aboutDirection/CoverGraffiti.png';
import coverHiphop from '../../assets/images/aboutDirection/CoverHipHop.png';
import coverScoot from '../../assets/images/aboutDirection/CoverScoot.png';
import coverWorkout from '../../assets/images/aboutDirection/CoverWorkout.png';
import BMX from '../../assets/images/aboutDirection/BMX.png';
import breaking from '../../assets/images/aboutDirection/Breaking.png';
import skate from '../../assets/images/aboutDirection/Skate.png';
import tricking from '../../assets/images/aboutDirection/Tricking.png';
import parkour from '../../assets/images/aboutDirection/Pakour.png';
import freerun from '../../assets/images/aboutDirection/Freerun.png';
import djing from '../../assets/images/aboutDirection/Djing.png';
import graffiti from '../../assets/images/aboutDirection/Graffiti.png';
import hiphop from '../../assets/images/aboutDirection/HipHop.png';
import scoot from '../../assets/images/aboutDirection/Scoot.png';
import workout from '../../assets/images/aboutDirection/Workout.png';
import Navtab from '../../components/Navtab';
import { useState } from 'react';
import ActionButton from '../../components/ActionButton';

export default function AboutDirectionPage() {
  const navigate = useNavigate();
  const direction = useAppSelector((state) => state.direction.currentDirection);
  const [activeTab, setActiveTab] = useState('description');

  function defineCover(direction: string) {
    if (direction === 'BMX') {
      return coverBMX;
    }
    if (direction === 'Брейкинг') {
      return coverBreaking;
    }
    if (direction === 'Скейтбординг') {
      return coverSkate;
    }
    if (direction === 'Трикинг') {
      return coverTricking;
    }
    if (direction === 'Паркур') {
      return coverParkour;
    }
    if (direction === 'Фриран') {
      return coverFreerun;
    }
    if (direction === 'Диджеинг') {
      return coverDjing;
    }
    if (direction === 'Граффити') {
      return coverGraffiti;
    }
    if (direction === 'Хип-хоп') {
      return coverHiphop;
    }
    if (direction === 'Трюковой самокат') {
      return coverScoot;
    }
    if (direction === 'Воркаут') {
      return coverWorkout;
    }
  }

  function defineContentImg (direction: string) {
    if (direction === 'BMX') {
      return BMX;
    }
    if (direction === 'Брейкинг') {
      return breaking;
    }
    if (direction === 'Скейтбординг') {
      return skate;
    }
    if (direction === 'Трикинг') {
      return tricking;
    }
    if (direction === 'Паркур') {
      return parkour;
    }
    if (direction === 'Фриран') {
      return freerun;
    }
    if (direction === 'Диджеинг') {
      return djing;
    }
    if (direction === 'Граффити') {
      return graffiti;
    }
    if (direction === 'Хип-хоп') {
      return hiphop;
    }
    if (direction === 'Трюковой самокат') {
      return scoot;
    }
    if (direction === 'Воркаут') {
      return workout;
    }
  }

  function defineTextCover(direction: string) {
        if (direction === 'BMX') {
          return 'Сбросив себя оковы шаблонных стандартов,BMX street и КАРДО продолжают объединять множество идейных людей по всему миру, образуя вокруг себя огромное комьюнити.';
        }
        if (direction === 'Брейкинг') {
          return 'Впервые «брейкинг» появился в Бронксе в 1974 году. Этот термин придумал DJ Kool Herk: он называл «би-боями» и «би-гёрл» молодых людей, танцующих под его перкуссионные «брэйксы» на уличных вечеринках в парке Сидар.';
        }
        if (direction === 'Скейтбординг') {
          return 'Скейтбординг на КАРДО это гремучая смесь спорта высших достижений с дружеской атмосферой и безудержными тусовками в лучших скейтерских традициях! ';
        }
        if (direction === 'Трикинг') {
          return 'Для КАРДО трикинг — это возможность заявить о себе на весь мир, показать лучших атлетов и познакомить всех с нашей культурой через батлы мирового уровня, достойные олимпиады.';
        }
        if (direction === 'Паркур') {
          return 'Паркур заложен в каждом из нас, по этому он так понятен и доступен многим людям, делая его универсальным языком общения объединяя людей из разных городов и стран.';
        }
        if (direction === 'Фриран') {
          return 'Творческое начало — это то, что объединяет фриран с уличным искусством и безоговорочно делает его важной частью КАРДО.';
        }
        if (direction === 'Диджеинг') {
          return 'Диджеинг в КАРДО — это как здоровый ритм биения сердца без которого организм не сможет полноценно функционировать.';
        }
        if (direction === 'Граффити') {
          return 'Граффити в мире КАРДО — это возможность показать свой стиль, навыки, обменяться опытом и вдохновением, а также привлечь внимание к искусству улиц.';
        }
        if (direction === 'Хип-хоп') {
          return 'Хип-хоп в мире КАРДО — это прежде всего люди, которые живут в ритме свободы, вдохновляют и поддерживают друг друга. ';
        }
        if (direction === 'Трюковой самокат') {
          return 'Самокат на КАРДО — это компания единомышленников, это способ заявить о себе, возможность раскрыть свой потенциал и унести домой крутой приз.';
        }
        if (direction === 'Воркаут') {
          return 'Воркаут-номинация на КАРДО — это всегда накал страстей, эмоции, яркие и запоминающиеся события, и мы готовы открыть новую главу в этом сезоне.';
        }
  }

  function defineMainText(direction: string) {
        if (direction === 'BMX') {
          return 'BMX street в настоящий момент по‑прежнему остаётся спортивной велодисциплиной, на которую до сих пор не наложились официальные правила, рамки и ограничения. Наверное, именно по этому, темпы роста интереса к этому спортивному направлению у современной молодёжи не останавливаются, а только растут.';
        }
        if (direction === 'Брейкинг') {
          return 'В начале 80-х би-бои из «Rock Steady Crew» вдохнули новую жизнь в брейкинг, изобрели множество новых движений и представили танец за пределами Нью-Йорка в фильме «Flashdance» (1983). Брейкинг состоит из четырёх основных движений: Toprock, Footwork, Power Moves и Freezes, и исполняется под музыку с драм-брэйками, особенно в хип-хопе, фанке, соуле и брейкбите, хотя современные тенденции допускают более широкий спектр музыки. Сегодня брейкинг становится более сложным и популярным, и будет включён в программу Олимпийских игр 2024 года в Париже.';
        }
        if (direction === 'Скейтбординг') {
          return 'Скейтбординг — экстремальный вид спорта, придуманный сёрферами для развлечения без волн. Несмотря на взлёты и падения, он уже более 70 лет остаётся значимой субкультурой. В 2017 году скейтбординг стал олимпийским видом спорта. Этот молодой спорт ценит креативность, индивидуальность и стиль, без строгих правил. Скейтбординг постоянно прогрессирует и развивается, и его будущее сложно предсказать.';
        }
        if (direction === 'Трикинг') {
          return 'Трикинг, зародившийся в 90-х годах среди мастеров боевых искусств и быстро ставший самостоятельным направлением, представляет собой молодую и динамично развивающуюся культуру, объединяющую гимнастов, би-боев, капуэристов, трейсеров и учеников различных школ боевых искусств, которые ценят красоту и сложность движения; свобода творчества, оттачивание стиля, поиск новых движений и батлы, тесно связывающие его с уличной хип-хоп культурой и восточной философией, делают трикинг сообществом удивительных, сильных и свободных духом людей.';
        }
        if (direction === 'Паркур') {
          return 'Паркур — это дух свободы, выражаемый через преодоление препятствий в городской среде. Возникнув из системы подготовки французских солдат, в конце 20 века он стал самостоятельным явлением на улицах пригородов Парижа. Паркур развивает навыки преодоления препятствий, расширяя физические и внутренние границы человека. Люди, занимающиеся паркуром, видят город и мир по-новому. Он стал неотъемлемой частью уличного спорта и культуры, присутствуя в кино, видеоиграх, комиксах и на сцене.';
        }
        if (direction === 'Фриран') {
          return 'Фриран — это направление, тесно связанное с паркуром, представляющее собой искусство самовыражения через креативные движения и их комбинации. Включая элементы паркура, акробатики, трикинга и брейкинга, фриран фокусируется на выражении себя и украшении окружающей среды, а не на эффективном преодолении препятствий. Основу фрирана составляют движения паркура и акробатики, постепенно обогащаясь элементами других направлений.';
        }
        if (direction === 'Диджеинг') {
          return 'Словосочетание «диск-жокей» (disc jockey) появилось в 1935 году, а в 50-е годы эта культура стала популярной. В 60-е на Ямайке произошёл бум дискотек, давший начало Хип-Хопу. Ямайская культура быстро распространилась в США, и DJ Kool Herc придумал использовать две пластинки для создания брейка, что привело к появлению брейк-данса. В 1975 году Grand Wizard Theodore изобрёл скретчинг. В конце 80-х диджеинг стал настолько популярным, что производители аудиотехники начали выпускать специальную аппаратуру для диджеев. В 1985 году прошло первое DMC DJ Championship, что привело к развитию Turntablism. После этого диджеинг разделился на клубный и техничный. В этом году на КАРДО 7 будут представлены оба направления.';
        }
        if (direction === 'Граффити') {
          return 'Граффити — это уличное искусство, которое украшает городские стены, парки и подземные переходы. Оно служит средством самовыражения и протеста, передавая социальные или политические сообщения. Граффити ассоциируется с бунтарским духом и индивидуальным стилем, выделяясь из серой массы.';
        }
        if (direction === 'Хип-хоп') {
          return 'Хип-хоп — это улицы Бронкса, стиль, движение, ритм и свобода. Эта культура, возникшая в 70-х, включает диджеинг, брейкинг, граффити и рэп, которые вместе образуют четыре столпа хип-хопа, с добавлением пятого элемента — знания. Как самостоятельный танцевальный стиль, хип-хоп сочетает движения брейкинга, локинга и поппинга, отличаясь сочетанием расслабленных и резких движений, низким положением корпуса и мощной энергией, подчёркнутой ритмичными битами. За полвека хип-хоп перешёл с улиц Бронкса в танцевальные академии и большие арены, объединяя любителей и профессионалов по всему миру, которых можно будет увидеть на премии КАРДО.';
        }
        if (direction === 'Трюковой самокат') {
          return 'Самокатное движение выросло из детской забавы в полноценный спорт, характеризующийся трюковой ездой на специально укреплённых самокатах, которые позволяют выполнять сложные прыжки как на земле, так и в воздухе. В этом спорте существуют различные дисциплины: парк, стрит, памирек и биг-эйр, каждая из которых имеет свою технику и трюки.';
        }
        if (direction === 'Воркаут') {
          return 'Воркаут — молодёжное спортивное движение и субкультура, включающая выполнение упражнений с собственным весом на уличных площадках: турниках, брусьях и т.д. Это доступный спорт, занимающий сотни тысяч человек по всему миру, включая Россию с её уникальными атлетами. Воркаут развивает силу, ловкость, баланс, гибкость, выносливость и скорость, сочетая элементы гимнастики, акробатики и эквилибристики. Он способствует здоровью и спортивности, а также включает экстремальные направления с акцентом на ловкость и зрелищность.';
        }
  }
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <HeaderArrow title={direction} />
        <div className={styles.direction__coverContainer}>
          <img
            className={styles.direction__coverImg}
            src={defineCover(direction)}
            alt={`${direction}`}
          />
          <div className={styles.direction__coverTextContainer}>
            <h2 className={styles.direction__coverTitle}>{direction}</h2>
            <p className={styles.direction__coverText}>
              {defineTextCover(direction)}
            </p>
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.track}>
            <div className={styles.content}>
              &nbsp;УЛИЦА НАЧИНАЕТСЯ ЗДЕСЬ • УЛИЦА НАЧИНАЕТСЯ ЗДЕСЬ • УЛИЦА
              НАЧИН{' '}
            </div>
          </div>
        </div>
        <p className={styles.direction__text}>{defineMainText(direction)}</p>
        <img
          className={styles.direction__img}
          src={defineContentImg(direction)}
          alt={direction}
        />
        <Navtab
          tabsList={[
            { nameRU: 'Описание', nameState: 'description' },
            { nameRU: 'Философия', nameState: 'philosophy' },
            { nameRU: 'Площадка', nameState: 'spot' },
          ]}
          setState={setActiveTab}
          state={activeTab}
        />
        {activeTab === 'description' && <p>Описание</p>}
        {activeTab === 'philosophy' && <p>Философия</p>}
        {activeTab === 'spot' && <p>Площадка</p>}
        <p className={styles.direction__aboutDocumentsText}>
          С более полной и подробной информацией вы можете ознакомиться
          в «Положении» в разделе документы
        </p>
        <div className={styles.direction__button} onClick={() => navigate('/documents')}>
          <ActionButton title="Документы" size='s'/>
        </div>
      </div>
    </section>
  );
}
