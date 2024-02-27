// Importation des styles de l'application
import './App.scss';

// Importation des composants de l'application
import GameContainer from '../GameContainer/GameContainer';
import Header from '../Hearder/Header';
import Footer from '../footer/Footer';
import MenuBurger from '../MenuBurger';
import MainMobile from '../MainMobile/MainMobile';

// Importation des hooks de React
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

function App() {
  // État pour gérer l'affichage du menu
  const [showMenu, setShowMenu] = useState(false);

  // Détection de la taille de l'écran pour adapter l'affichage
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      {/* Affichage du HeaderMobile avec les props nécessaires */}
      <Header
        isDesktopOrLaptop={isDesktopOrLaptop}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />

      {/* Affichage du Menu si showMenu est vrai */}
      {showMenu && <MenuBurger />}

      {/* Affichage du MainMobile si l'appareil n'est pas un ordinateur de bureau ou un ordinateur portable et que le menu n'est pas affiché */}
      {!isDesktopOrLaptop && !showMenu && <MainMobile />}

      {/* Affichage du GameContainer et du Footer si l'appareil est un ordinateur de bureau ou un ordinateur portable */}
      {isDesktopOrLaptop && <GameContainer />}
      {isDesktopOrLaptop && <Footer />}
    </>
  );
}

// Exportation du composant App par défaut
export default App;
