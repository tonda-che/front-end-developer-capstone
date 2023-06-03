import photo from '../stock.jpg';

function Hero() {
    return (
        <div id="Hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                <button>Reserve a table</button>
            </div>
            <img src={photo} alt="Restaurant Stock IMG"/>
        </div>
    );
};

export default Hero;