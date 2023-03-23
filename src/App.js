import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import PagesTemplate from './Components/PageTemplate';
import CreateProfile from './Components/CreateProfileForm';
import CreateRoom from './Components/CreateRoomForm';
import CreateProfileForm from './Components/CreateProfileForm';
import RoommatesDisplay from './Components/RoomatesDisplay';
import RoomsDisplay from './Components/RoomsDisplay';
import HomePageButtons from './Components/HomepageButtons';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App" >
        <Routes>
          <Route path='/' element={<LoginPage />} />
               <Route path='/findroomate' element={<RoommatesDisplay />} />
               <Route path='/postapts' element={<RoomsDisplay />} />
               <Route path='/requestapts' element={<RoomsDisplay />} />
               <Route path='/homepage' element={<HomePage/>} />
               <Route path='/registration' element={<SignUp/>} />
        </Routes> 
          {/* <CreateProfile createProfile={CreateProfile}/> */}
          {/* Code space */}
          {/* <RoomsDisplay /> */}

        </div>
          {/* <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/> */}
    </>
  );
}
export default App;
