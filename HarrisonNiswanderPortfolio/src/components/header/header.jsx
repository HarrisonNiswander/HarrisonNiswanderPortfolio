import { Link } from 'react-router-dom';
import './header_style/header.css';
import HN_Signature from '../../images/HN_Signature.png';

export default function header() {
    return (
        <>
            {/*Navigation Menu*/}
            <header>
                

            </header>
            
            {/*Navigation Menu*/}
            <nav class="container">
                <ul>
                    {/*Image*/}
                    <Link to="/home">
                        <img src={HN_Signature} alt="Harrison Niswander Signature" height={50} width={130}/>
                    </Link>

                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>

                </ul>

            </nav>

        </>

    )
}