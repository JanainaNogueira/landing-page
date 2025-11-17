import './App.css';
import Header from './components/header'
import Home from './components/home'
import SectionAnalises from './components/section-analises';
import SectionApp from './components/section-app'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <SectionApp/>
      <SectionAnalises/>
    </div>
  );
}

export default App;
