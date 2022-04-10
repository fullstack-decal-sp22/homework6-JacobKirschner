import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import NewPost from "./Components/NewPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Blockstagram</h1>
      <Feed/>
    </div>
  );
}

export default App;
