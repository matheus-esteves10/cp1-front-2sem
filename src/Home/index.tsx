import './style.css';
import Gow1 from '../assets/img/gow-i1.png';
import Gow2 from '../assets/img/gow-i2.png';
import Estrela1 from '../assets/img/estrela1.png';
import Estrela2 from '../assets/img/estrela2.png';
import Like from '../assets/img/Like.png'
import Deslike from '../assets/img/Deslike.png'

const Home = () => {
    return(
        <section className='geral'>
            <section className='infos'>
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
            </section>
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
            <section className='coments'>
                <div className='av'>
                    <nav className='destaque'><p>AVALIAÇÃO EM DESTAQUE</p></nav>
                    <div className='av-p'>
                        <img className='estrelas' src={Estrela1} alt=""/> <p>10/10</p>
                    </div>
                </div>
            </section>
            <section className='coments1'>
                <div className="nome-data">
                    <p id='nome'>CaioHalbert</p>
                    <p id='data'>9 de novembro de 2022</p>
                </div>
                <div className='titulo-coment'>
                    <p>What an incredible sequel!</p>
                </div>
                <div className='paragrafo'>
                    <p>A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, 
                        or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, 
                        in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.</p>
                    
                    <p>I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. 
                        If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. 
                        I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.</p>
                </div>
                <div className='likes'>
                    
                </div>
            </section>

            <section className='coments'>
                <div className='av'>
                    <nav className='destaque'><p>AVALIAÇÃO EM DESTAQUE</p></nav>
                    <div className='av-p'>
                        <img className='estrelas' src={Estrela1} alt=""/> <p>10/10</p>
                    </div>
                </div>
            </section>
            <section className='coments1'>
                <div className="nome-data">
                    <p id='nome'>ClaudiaRaynara</p>
                    <p id='data'>14 de novembro de 2022</p>
                </div>
                <div className='titulo-coment'>
                    <p>This game took part of my soul...</p>
                </div>
                <div className='paragrafo'>
                    <p>Warning: Spoilers!</p> {/*  editar*/}
                </div>
                <div className='likes'></div>
            </section>
            
           
        </section>
    )
}

export default Home;