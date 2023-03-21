import './App.css';
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import RoommatesDisplay from './Components/RoomatesDisplay';
import CreateProfileForm from './Components/CreateProfileForm';

function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App">
          <CreateProfileForm />
          {/* Code space */}

        </div>
          <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/>
    </>
  );
}
export default App;
