import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav><ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            <li><a href="/menu">Menu</a></li>
            <li><Link to="/reserve" className="nav-item">Reservations</Link></li>
            <li><a href="/order">Order online</a></li>
            <li><a href="/login">Login</a></li>
        </ul></nav>
    );
};

export default Nav;