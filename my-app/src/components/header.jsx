
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div className='header'>
      <img src="/images/LOGO.png" alt="Logo de Kasa" />
      <nav>
        <Link to="/" className='header--link__1'>Accueil</Link>
        <Link to="/A-Propos" className='header--link__2'>A Propos</Link>
      </nav>
    </div>
  )
}

export default Header