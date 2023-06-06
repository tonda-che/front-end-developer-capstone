import user1 from '../user1.jpg';
import user2 from '../user2.jpg';
import user3 from '../user3.jpg';
import user4 from '../user4.jpg';


function Testimonials() {
    return (
        <div id="Testimonials">
            <h1>Testimonials</h1>
            <div>
                <img src={user1} alt="User Profile 1" />
                <p>"Love the restaurant!"</p>
            </div>
            <div>
                <img src={user2} alt="User Profile 2" />
                <p>"Best restaurant!"</p>
            </div>
            <div>
                <img src={user3} alt="User Profile 3" />
                <p>"I love to come here!"</p>
            </div>
            <div>
                <img src={user4} alt="User Profile 4" />
                <p>"Best take-out food!"</p>
            </div>
        </div>
    );
};

export default Testimonials;