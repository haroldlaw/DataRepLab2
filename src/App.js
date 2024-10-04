import './App.css';
import Content from './content';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div classname="App">
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
