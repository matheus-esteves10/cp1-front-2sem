import Header from './Components/Header';
import './App.css'
import Footer from './Components/Footer';
import Home from './Home';

function App() {

  return (
    <>
      <div className='conteudo'>
        <Header/>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
