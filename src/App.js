import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route} from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/ponis'>Gifs de ponis</Link>
        <Link to='/gif/pitas'>Gifs de pitas</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;