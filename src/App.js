import Navbar from './Navbar'; //we created a new component
import Home from './Home';

function App() { //function MUST begiin with a capital letter
  //the following is NOT html, but JSX (similar)

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
