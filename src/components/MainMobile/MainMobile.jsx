import './MainMobile.scss';

export default function MainMobile() {
  return (
    <div className="main">
      <p className="main__paragraph">
        Veuilliez vous connecter à un Ordinateur pour jouer au jeu{' '}
      </p>
      <div className="main__container-img">
        <h2 className="main__title-img">Bestiaire</h2>
      </div>
      <div className="main__container-img">
        <h2 className="main__title-img">Contactez-nous</h2>
      </div>
    </div>
  );
}
