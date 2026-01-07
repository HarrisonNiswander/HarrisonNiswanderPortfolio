import { Link } from 'react-router-dom';
import './footer_style/footer.css';
import HN_SignatureW from '../../images/signatures/HN_SignatureW.png';

export default function footer() {
    return (
        <>
            {/*Navigation Menu*/}
            <nav className="footer_nav">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>

                </ul>

                <ul className="footer_copyright">
                    {/*Image*/}
                    <Link to="/">
                        <img src={HN_SignatureW} alt="Harrison Niswander Signature" height={75} width={150}/>
                        
                    </Link>

                    <p className="copyright_p">© 2025 Harrison Niswander</p>

                </ul>
                
            </nav>

        </>

    )
}