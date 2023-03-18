import './App.css';
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import PagesTemplate from './Components/PageTemplate';
import CreateProfile from './Components/CreateProfileForm';
import CreateRoom from './Components/CreateRoomForm';

function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App">
          <CreateRoom />
          {/* Code space */}

        </div>
          <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/>
    </>
  );
}

export default App;
