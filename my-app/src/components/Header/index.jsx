
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <img src="/images/LOGO.png" alt="Logo de Kasa"/>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/A-Propos">A Propos</Link>
      </nav>
    </div>
  )
}

export default Header