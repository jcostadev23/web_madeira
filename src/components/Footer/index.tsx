import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import CountDown from '../DeadLine';
import './styled.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-sub-container">
        <div className="footer-item ">
          <h3>Social</h3>
          <div className="social">
            <GitHubIcon />
            <LinkedInIcon />
            <XIcon />
          </div>
        </div>
        <div className="footer-item">
          <h3>Deadline</h3>
          <CountDown />
        </div>
        <div className="footer-item">
          <h3>Location</h3>
          <a
            href="https://www.google.pt/maps/place/Sede+ACIN+iCloud+Solutions/@32.679014,-17.0625243,17z/data=!3m2!4b1!5s0xc6059a227eb0a79:0x6916336192bc13c8!4m6!3m5!1s0xc6059a3d538596b:0xa393204f0d195615!8m2!3d32.679014!4d-17.059944!16s%2Fg%2F11bbrk7phd?hl=pt-PT&entry=ttu"
            target="_blank"
          >
            Sede ACIN iCloud Solutions
          </a>
          <br />
          <span>
            {' '}
            Estrada Regional 104, Nº 42 <br /> 9350-203 Ribeira Brava
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
