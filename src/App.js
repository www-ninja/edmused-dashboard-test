import Container from "./components/container";
import KnowledgeCard from "./components/knowledgeCard";
import Layout from "./components/layout";
import Sidebar from "./components/sidebar";
import ProfileCard from "./components/profileCard";
import ChartCard from "./components/chartCard";
import ProgressCard from "./components/progressCard";

import FolderIconCyan from './assets/img/icon_folder_cyan.png';
import FolderIconPink from './assets/img/icon_folder_pink.png';
import FolderIconYellow from './assets/img/icon_folder_yellow.png';
import Avatar from './assets/img/avatar.jpeg';




const CARD_ITEMS = [
  {
    title: 'vocabulary',
    color: '#f1f9ff',
    src: FolderIconCyan
  },
  {
    title: 'Prasal verbs',
    color: '#fef6fb',
    src: FolderIconPink
  },
  {
    title: 'Grammer',
    color: '#fdfbec',
    src: FolderIconYellow
  }
];

const PROFILE_INFO = {
  name: 'Leslie Alexander',
  email: 'jenny.w@gmail.com',
  image: Avatar,
  lessons: 98,
  terms: 5
}


const PROGRESS_INFO = [
  {
    progress: 15,
    title: 'Listening',
    detail: 'Speak 20 minutes.',
    icon: 'fa fa-headphones',
    color: '#aab3fe'
  },
  {
    progress: 32,
    title: 'Grammer',
    detail: 'Learn 5 new rules.',
    icon: 'fa fa-pencil',
    color: '#f1a76d'
  },
  {
    progress: 21,
    title: 'Prounanciation',
    detail: 'Read 30 minutes.',
    icon: 'fa fa-microphone',
    color: '#7fd990'
  },
  {
    progress: 64,
    title: 'Dictionary',
    detail: 'Learn 15 new words.',
    icon: 'fa fa-book',
    color: '#f6a390'
  },
]

function App() {
  return (
    <Container>
      <Sidebar />
      <Layout>
        <h3>Knowledge base</h3>
        <div className="card-items">
          {CARD_ITEMS.map((item, index) => <KnowledgeCard item={item} key={index}/>)}
          <ProfileCard userInfo={PROFILE_INFO}/>
        </div>
        <div className="dashboard-details">
          <div className="chart-section">
            <div className="chart-title">
              <h3>Statistics</h3>
              <span>Aug 2021</span>
            </div>
            <ChartCard />
          </div>
          <div className="daily-progress">
            <h3>Daily Progress</h3>
            {PROGRESS_INFO.map((item, index) => <ProgressCard info={item} key={index}/>)}
          </div>
        </div>
      </Layout>
    </Container>
  );
}

export default App;
