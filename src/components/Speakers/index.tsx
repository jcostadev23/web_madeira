import SpeakersCard from '../SpeakersCard';
import { speakersList } from '../../utils/speakersList';
import './styled.css';

const Speakers: React.FC = () => {
  return (
    <div className="container">
      <h2>SPEAKERS</h2>
      <div className="card">
        {speakersList.map((person, index) => (
          <SpeakersCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
