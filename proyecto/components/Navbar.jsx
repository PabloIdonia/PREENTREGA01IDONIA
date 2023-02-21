import "./navbar.css";
import {MuiBadge} from './MuiBadge'

const Navbar = () => {
  return (
    <nav className="container">
            <ul className="nav-link">
                <li><a href="">Logo</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Contacto</a></li>
                <li>
                    <a href=""><MuiBadge /></a>  
                </li>  
            
            </ul>
    </nav>
  );
};

export default Navbar