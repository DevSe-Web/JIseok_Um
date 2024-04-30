import { useNavigate } from 'react-router-dom';
import styles from './SideBar.module.css';
import htmlIcon from '../images/icons8-html-48.png';
import cssIcon from '../images/icons8-css-48.png';
import jsIcon from '../images/icons8-js-48.png';
import newsIcon from '../images/icons8-뉴스-40.svg';
import codingIcon from '../images/icons8-코딩-40.png';

// list 타입
type ListItem = {
  icon: string,
  title: string;
  items: string[];
  description: string;
};

const SideBar = () => {

  let navigate = useNavigate();

  // list 객체 정의
  /**
   * Record는 타입스크립트에서 객체의 키와 값에 대한 타입을 정의하는 데 사용되는 유틸리티 타입 중 하나입니다.
   */
  const list: Record<string, ListItem> = {
    1: {
      icon: htmlIcon,
      title: "HTML",
      items: [],
      description: ""
    },
    2: {
      icon: cssIcon,
      title: "CSS",
      items: [],
      description: ""
    },
    3: {
      icon: jsIcon,
      title: "JavaScript",
      items: ["ReactJS", "Typescript", "VanillaJS"],
      description: ""
    },
    4: {
      icon: codingIcon,
      title: "Coding Test",
      items: ["Queue", "Stack", "List", "Graph"],
      description: ""
    },
    5: {
      icon: newsIcon,
      title: "IT News",
      items: [],
      description: ""
    },
  }

  return (
    <div className={styles.body}>
      {/* Profile */}
      <div className={styles.profile_container}>
        <span className="pofo">pofo</span><span className="I">I</span>
      </div>

      {/* Counting number of posting */}
      <div className={styles.posting_rate_container}>
        <span className={styles.posting_rate}>목표 달성률</span>
        <progress id='posting' max='100' value='10'>10%</progress>
      </div>

      {/* List */}
      <ul className={styles.list_container}>
        {Object.keys(list).map((key: string) => ( // Why did I use object.keys? -> Because the list is not an array
          <li key={key} className={styles.list_item}>
            <img src={list[key].icon} alt="" />
            {list[key].title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;
