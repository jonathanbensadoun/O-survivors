import './MenuBurger.scss';

export default function MenuBurger() {
  return (
    <div className="menu">
      <ul className="menu__lists">
        <li className="menu__list">Connexion</li>
        <li className="menu__list">Profile</li>
        <li className="menu__list">Mentions Légales</li>
        <li className="menu__list">Déconnexion</li>
      </ul>
    </div>
  );
}
