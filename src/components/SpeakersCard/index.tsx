import { Person } from '../../types';
import './styled.css';

interface Props {
  person: Person;
}

const SpeakersCard: React.FC<Props> = ({ person }) => {
  const { name, workArea, workPlace, img } = person;

  return (
    <div className="speakers-details">
      <div className="speakers-img">
        <img src={img} />
      </div>
      <h3 className="speakers-name">{name}</h3>
      <p>
        {workArea} at
        <strong> {workPlace} </strong>
      </p>
    </div>
  );
};

export default SpeakersCard;
