import './App.css';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage';
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
          <Route path='/roommatesdisplay' element={<RoommatesDisplay />} />
          <Route path='/createprofile' element={<CreateProfileForm />} />
          <Route path='/postapts' element={<RoomsDisplay />} />
          <Route path='/requestapts' element={<RoomsDisplay />} />
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/registration' element={<SignUp/>} />
          {/* <Route path='/roommatesdisplay/:name' element={<RoommateProfile />} /> */}
        </Routes> 
          {/* Code space */}


        </div>
          
    </>
  );
}
export default App;
