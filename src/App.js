import './App.css';
import {Route, Routes, Outlet} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import {PagesTemplate, ApartmentTemplate} from './Components/PageTemplate';
import CreateProfile from './Components/CreateProfileForm';
import CreateRoom from './Components/CreateRoomForm';
import CreateProfileForm from './Components/CreateProfileForm';
import RoommatesDisplay from './Components/RoomatesDisplay';
import RoomsDisplay from './Components/RoomsDisplay';
import HomePageButtons from './Components/HomepageButtons';
import Nav from './Components/Nav';
// import RoomShow from './Pages/RoomShow';
import RoomNew from './Pages/RoomNew';
import SignUp from './Pages/SignUp';
import RoomShow from './Pages/RoomShow';


function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App" >
        <Routes>
          <Route path='/' element={<LoginPage />} />
               <Route path='/findroomate' element={<RoommatesDisplay />} />
               <Route path='/apartment/view/:postId' element={<RoomsDisplay />} />
               <Route path='/apartment/:actionId/:postId/:id' element={<RoomShow />} />
               <Route path='/apartment/new/:postId' element={<RoomNew />} />
               <Route path='/homepage' element={<HomePage/>} />
               <Route path='/registration' element={<SignUp/>} />
               <Route path='/apartmentSeed' element={<ApartmentTemplate />}/>
               <Route path='/roommateSeed' element={<PagesTemplate />}/>

        </Routes> 
        </div>
          {/* <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/> */}
    </>
  );
}
export default App;
