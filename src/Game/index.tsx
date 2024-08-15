import './style.css';
import Gow1 from '../assets/img/gow-i1.png';
import Gow2 from '../assets/img/gow-i2.png';
import Estrela1 from '../assets/img/estrela1.png';
import Estrela2 from '../assets/img/estrela2.png';


const Home = () => {
    return(
        <>
        <main className='geral'>
            <section className='infos'>
                <div className='nome-jogo'>
                    <h1>GOD OF WAR: RAGNARÖK</h1>
                </div>
                <div className='avaliacoes'>
                    <div className='av-notas'>
                        <p>AVALIAÇÃO DA RATING</p> 
                        <div className='notas'>
                            <img className='estrelas' src={Estrela1} alt=""/> <p>9.6/<span className='nota-max'>10</span></p>
                        </div>
                    </div>
                    <div className="av-notas">
                        <p>SUA AVALIAÇÃO</p>
                        <div className="notas">
                            <img src={Estrela2} alt="" /> <p>Avaliar</p> 
                        </div>
                    </div>
                </div>
            </section>
            <div className="imgs">
                <img src={Gow1} alt="imagem1 god of war" className='img1'/>
                <img src={Gow2} alt="imagem2 god of war" className='img2'/>
            </div>
        </main>
        <section className='enredo'>
                <h2><span className='span'>&gt;</span>  Enredo</h2>
                <p>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
        </section>
        </>
    )
}

export default Home;