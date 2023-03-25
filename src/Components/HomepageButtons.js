import {Route, Routes, Link} from 'react-router-dom'
import Nav from './Nav';
import RoomsDisplay from './RoomsDisplay';

const HomePageButtons = (props) => {
   return (
      <div>
         <h2>
            What would you like to do?
         </h2>
         <section className="buttons">
            <Link to="/apartment/view/post">
               <button>Post a Room</button>
            </Link>
            <Link to="/apartment/view/find">
               <button>Find a Room</button>
            </Link>
            <Link to="/createprofile">
               <button>Create a Profile</button>
            </Link>
            <Link to="/roommates">
               <button>Find a Roommate</button>
            </Link>
         </section>
      </div>
   )
}

export default HomePageButtons