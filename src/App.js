import './App.css';
import {Route, Routes, Outlet} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import PagesTemplate from './Components/PageTemplate';
import CreateProfile from './Components/CreateProfileForm';
import CreateRoom from './Components/CreateRoomForm';
import CreateProfileForm from './Components/CreateProfileForm';
import RoommatesDisplay from './Components/RoomatesDisplay';
import RoomsDisplay from './Components/RoomsDisplay';
import HomePageButtons from './Components/HomepageButtons';
import Nav from './Components/Nav';
import RoomShow from './Pages/RoomShow';
import RoomNew from './Pages/RoomNew';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App" >
          <Routes>
            {/* <Route path='/' element={<Nav />} />
              <Route index element={<HomePage />}/> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/findroomate' element={<RoommatesDisplay />} />
                <Route path='/postapts' element={<RoomsDisplay />} />
                <Route path='/requestapts' element={<RoomsDisplay />} />
                <Route path='/requestapts/view/:id' element={<RoomShow />} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/registration' element={<SignUp/>} />
          </Routes> 
          {/* <CreateProfile createProfile={CreateProfile}/> */}
        </div>
          {/* <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/> */}
    </>
  );
}
export default App;
