import './style.css';
import Estrela1 from '../assets/img/estrela1.png';
import Like from '../assets/img/Like.png'
import Deslike from '../assets/img/Deslike.png'

const Coments = () =>{
    return(
        <section className='geral-coments'>
            <div className="coments-cabecalho">
                <p><span className='span'>&gt;</span>  AVALIAÇÕES DE USUÁRIOS</p>
                <p className='avaliar'> + Avaliar</p>    
            </div>
            <section className='coments'>
                <div className='av'>
                    <nav className='destaque'><p>AVALIAÇÃO EM DESTAQUE</p></nav>
                    <div className='av-p'>
                        <img className='estrelas' src={Estrela1} alt=""/> <p>10/<span className='nota-max'>10</span></p>
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
                <div className='likes-dislikes'>
                    <div className='likes'>
                        <img src={Like} alt="like" />
                        <p>33</p>   
                    </div>
                    <div className='dislikes'>
                        <img src={Deslike} alt="Deslike"/>
                        <p>11</p>    
                    </div>        
                </div>
            </section>

            <section className='coments'>
                <div className='av'>
                    <nav className='destaque'><p>AVALIAÇÃO EM DESTAQUE</p></nav>
                    <div className='av-p'>
                        <img className='estrelas' src={Estrela1} alt=""/> <p>10/<span className='nota-max'>10</span></p>
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
                <div className='spoilers'>
                    <p>Warning: Spoilers!</p> {/*  editar*/}
                </div>
                <div className='likes-dislikes'>
                    <div className='likes'>
                        <img src={Like} alt="like" />
                        <p>33</p>   
                    </div>
                    <div className='dislikes'>
                        <img src={Deslike} alt="Deslike"/>
                        <p>11</p>    
                    </div>        
                </div>
            </section>
            
           
        </section>
    )
}

export default Coments;