
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <img src="/images/LOGO.png" alt="Logo de Kasa" className='header--logo'/>
      <nav className='header--nav'>
        <NavLink to="/" id='header--link__1' className={({isActive}) => isActive ? "active": ""}>Accueil</NavLink>
        <NavLink to="/A-Propos" id='header--link__2' className={({isActive}) =>  isActive ? "active": ""}>A Propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
