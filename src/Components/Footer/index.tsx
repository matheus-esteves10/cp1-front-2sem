import React from 'react';
import Vector from '../../assets/img/Vector.png';
import './style.css';

const Footer: React.FC = () => {
return(
    <footer>
        <div className='vector'>
            <img src={Vector} alt="logo vector" />
        </div>
        <div className='listas-geral'>
            <div>
                <ul className='listas'>
                    <li className='listas-top'>COMPANY</li>
                    <li>Abouts us</li>
                    <li>Partnerships</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <ul className='listas'>
                    <li className='listas-top'>COMPANY</li>
                    <li>Abouts us</li>
                    <li>Partnerships</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <ul className='listas-ultima'>
                    <li className='listas-top'>COMPANY</li>
                    <li>Abouts us</li>
                    <li>Partnerships</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    </footer>
)

}
export default Footer;