import greekSalad from '../greek_salad.jpg';
import bruschetta from '../bruschetta.svg';
import lemonCake from '../lemon_cake.jpeg';
import { Link } from "react-router-dom";

function Highlights() {
    return (
        <div id="Highlights">
            <h1>Highlights</h1>
            <Link to="/menu" className="nav-item">Order</Link>
            <div class="card">
                <img src={greekSalad} alt="Greek salad"/>
                <div class="container">
                    <h4><b>Greek salad</b></h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p><b>Order Delivery</b></p>
                    <p>€ 11,99</p>
                </div>
            </div>
            <div class="card">
                <img src={bruschetta} alt="Bruschetta"/>
                <div class="container">
                    <h4><b>Bruschetta</b></h4>
                    <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
                    <p><b>Order Delivery</b></p>
                    <p>€ 8,99</p>
                </div>
            </div>
            <div class="card">
                <img src={lemonCake} alt="Lemon cake"/>
                <div class="container">
                    <h4><b>Lemon cake</b></h4>
                    <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <p><b>Order Delivery</b></p>
                    <p>€ 5,99</p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;