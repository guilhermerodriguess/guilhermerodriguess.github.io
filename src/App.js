import './App.css';
import './'
import Home from './component/Home';
import Sobre from './component/Sobre';
import Projetos from './component/Projetos';
import Contato from './component/Contato';
import Footer from './component/Footer';
import Menu from './component/Menu';
import MyProvider from './context/MyProvider';

function App() {
  return (
  <div className="App">
    <MyProvider>
      <Menu />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </MyProvider>
  </div>
  );
}

export default App;
