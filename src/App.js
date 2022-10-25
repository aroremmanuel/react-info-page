import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <nav className="header">
            <img src="../logo192.png" className="header-image"></img>
            <h1 className="header-image-text">ReactFacts</h1>
            <h1 className="header-title">React Course - Project 1</h1>
        </nav>

        <main>
          <h1 className="main-title">Fun facts about React</h1>
          <ul className="list-of-facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </main>
      </div>  
  );
}

export default App;
