import {Route, Routes, Link} from 'react-router-dom'
import Nav from './Nav';
import RoomsDisplay from './RoomsDisplay';
import RoommatesDisplay from './RoomatesDisplay';

const HomePageButtons = (props) => {
   return (
      <div>
        <h2>
            What would you like to do?
         </h2>
         <section className="buttons">
            <Link to="/RoommatesDisplay">
               <button>Find a Roommate</button>
            </Link>
            <Link to="/apartment/view/find">
               <button>Find a Room</button>
            </Link>
            <Link to="/apartment/view/post">
               <button>Post a Room</button>
            </Link>

             {/* <Nav/>
            <Routes>
               <Route path='/' element={<RoommatesDisplay />} />
               <Route path='/postapts' element={<RoomsDisplay />} />
               <Route path='/requestapts' element={<RoomsDisplay />} />
            </Routes> */}
         </section>
      </div>
   )
}

export default HomePageButtons