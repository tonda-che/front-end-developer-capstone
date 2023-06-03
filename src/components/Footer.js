import logo from '../footer_logo.png'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Footer Logo" />
            <div>
                <h2>Social Media</h2>
                <p><a href="https:/facebook.com">facebook</a></p>
                <p><a href="https:/medium.com">Medium</a></p>
                <p><a href="https:/instagram.com">instagram</a></p>
            </div>
            <div>
                <h2>Contact</h2>
                <p>+49 000 0000000</p>
                <p><a href="contact@littlelemon.com">contact@littlelemon.com</a></p>
            </div>
            <div>
                <h2>© Copyright</h2>
                <p>By Little Lemon Restaurant</p>
            </div>
        </footer>
    );
};

export default Footer;