import './App.css';
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import PagesTemplate from './Components/PageTemplate';
import CreateProfile from './Components/CreateProfileForm';
import CreateRoom from './Components/CreateRoomForm';
import CreateProfileForm from './Components/CreateProfileForm';
import RoommatesDisplay from './Components/RoomatesDisplay';

function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App">
          <CreateProfile createProfile={CreateProfile}/>
          <RoommatesDisplay />
          {/* Code space */}

        </div>
          <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/>
    </>
  );
}
export default App;
