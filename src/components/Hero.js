import photo from '../stock.jpg';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div id="Hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                <Link to="/reserve" className="nav-item">Reserve table</Link>
            </div>
            <img src={photo} alt="Restaurant Stock IMG"/>
        </div>
    );
};

export default Hero;