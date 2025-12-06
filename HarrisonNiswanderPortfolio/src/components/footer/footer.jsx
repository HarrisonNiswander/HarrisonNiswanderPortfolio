import { Link } from 'react-router-dom';
import './footer_style/footer.css';
import HN_SignatureW from '../../images/HN_SignatureW.png';

export default function footer() {
    return (
        <>
            {/*Navigation Menu*/}
            <header>
                

            </header>
            
            {/*Navigation Menu*/}
            <nav class="footer_nav">
                <ul>
                    

                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>

                    {/*Image*/}
                    <Link to="/home">
                        <img src={HN_SignatureW} alt="Harrison Niswander Signature" height={90} width={180}/>
                    </Link>

                </ul>

            </nav>

        </>

    )
}