import Header from './Components/Header';
import './App.css'
import Footer from './Components/Footer';
import Home from './Game';
import Coments from './Coments';

function App() {

  return (
    <>
      <div className='conteudo'>
        <Header/>
        <Home></Home>
        <Coments></Coments>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
