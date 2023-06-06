import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav><ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            <li><Link to="/menu" className="nav-item">Menu</Link></li>
            <li><Link to="/reserve" className="nav-item">Reservations</Link></li>
            <li><Link to="/menu" className="nav-item">Order online</Link></li>
        </ul></nav>
    );
};

export default Nav;