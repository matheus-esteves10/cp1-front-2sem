import './style.css';
import Gow1 from '../assets/img/gow-i1.png';
import Gow2 from '../assets/img/gow-i2.png';
import Estrela1 from '../assets/img/estrela1.png';
import Estrela2 from '../assets/img/estrela2.png';

const Home = () => {
    return(
        <div className='geral'>
            <div className='infos'>
                <div className='nome-jogo'>
                    <h1>GOD OF WAR: RAGNARÖK</h1>
                </div>
                <div className='avaliacoes'>
                    <div className='av-notas'>
                        <p>AVALIAÇÃO DA RATING</p> 
                        <div className='notas'>
                            <img className='estrelas' src={Estrela1} alt=""/> <p>9.6/10</p>
                        </div>
                    </div>
                    <div className="av-notas">
                        <p>SUA AVALIAÇÃO</p>
                        <div className="notas">
                            <img src={Estrela2} alt="" /> <p>Avaliar</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgs">
                <img src={Gow1} alt="imagem1 god of war" />
                <img src={Gow2} alt="imagem2 god of war" />
            </div>
            <div className='enredo'>
                <h2><span className='span'>&gt;</span>  Enredo</h2>
                <p>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
            </div>
            <div className="coments-cabecalho">
                <p><span className='span'>&gt;</span>  AVALIAÇÕES DE USUÁRIOS</p>
                <p className='avaliar'> + Avaliar</p>    
            </div>
            <div className='coments'>

            </div>
            <div className='coments'>

            </div>
           
        </div>
    )
}

export default Home;