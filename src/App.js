import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
import CreateProfileForm from './Components/CreateProfileForm';
import RoommatesDisplay from './Components/RoomatesDisplay';
import RoomsDisplay from './Components/RoomsDisplay';
import HomePageButtons from './Components/HomepageButtons';

function App() {
  return (
    <>
      <h1>RoomieFinderz</h1>
        <div className="App" >
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/createprofile' element={<CreateProfileForm />} />
            <Route path='/roommatesdisplay' element={<RoommatesDisplay />} />
            {/* <Route path='/roommatesdisplay/:name' element={<RoommateProfile />} /> */}
            <Route path='/postapts' element={<RoomsDisplay />} />
            <Route path='/requestapts' element={<RoomsDisplay />} />

        </Routes> 
          {/* <CreateProfile createProfile={CreateProfile}/> */}
          {/* Code space */}
          {/* <RoomsDisplay /> */}
          {/* <RoommatesDisplay /> */}

        </div>
          
    </>
  );
}
export default App;
