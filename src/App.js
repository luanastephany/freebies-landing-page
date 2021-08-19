import './App.scss';
import Header from './components/Header'
import About from './components/About'
import Estatistics from './components/Estatistics';
import Features from './components/Features';
import Plans from './components/Plans/Plans';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Estatistics />
      <Features />
      <Plans />

    </main>


  );
}

export default App;
