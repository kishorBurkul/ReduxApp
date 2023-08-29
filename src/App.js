import logo from './logo.svg';
import './App.css';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeContainer from './Containers/HomeContainers'

function App() {
  return (
    <div className="App">

      <HomeContainer/>
      {/* <User data={{name:"kishor Burkul", age:"25"}}/> */}
    </div>
  );
}

export default App;
