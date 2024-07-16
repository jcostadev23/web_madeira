import Button from '../Button';
import './styled.css';

const Details = () => {
  const handleClick = () =>
    window.open('https://www.eventbrite.pt/e/949332187127/preview/', '_blank');

  return (
    <div>
      <h2 className="details">Bem vindo ao Web Madeira talk</h2>
      <p className="details">
        Estamos empolgados em anunciar nossa próxima talk, um evento dedicado ao
        fascinante mundo da web. <br />
        Nesta talk, vamos explorar as últimas tendências, tecnologicas
        inovadoras e as melhores práticas que estão moldando o futuro da
        internet. <br />
        Seja você um desenvolvedor experiente, um entusiasta de tecnologia ou
        alguém curioso sobre o que está por vir no universo digital, este evento
        é para você. <br />
        Junte-se a nós para uma jornada informativa e inspiradora, onde
        especialistas da indústria compartilharão suas ideias sobre
        desenvolvimento web, design responsivo, segurança online e muito mais.
        <br />
        Prepare-se para aprender, trocar ideias e expandir seus conhecimentos em
        um ambiente dinâmico e envolvente. <br />
        Não perca esta oportunidade única de se conectar com profissionais da
        área e ficar por dentro das novidades que estão transformando a web.
        <br />
        Reserve seu lugar agora e venha fazer parte desta experiência
        imperdível!
      </p>
      <Button onClick={handleClick}>REGISTRATION</Button>
    </div>
  );
};

export default Details;
