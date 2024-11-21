import './app.scss';
import logo from '../../assets/logo.svg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <div className="container">
        <div className="side-bar"></div>
        <div className="main"></div>
      </div>
    </div>
  );
}

export default App;
