import './Header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header({
  isDesktopOrLaptop,
  setShowMenu,
  showMenu,
}) {
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="header">
      <h1 className="header__title">O'survivors</h1>

      {!isDesktopOrLaptop ? (
        <GiHamburgerMenu onClick={handleClick} />
      ) : (
        <div className="header__container-btn">
          <button className="header__btn">Connexion</button>
          <button className="header__btn">Inscription</button>
        </div>
      )}
    </div>
  );
}
