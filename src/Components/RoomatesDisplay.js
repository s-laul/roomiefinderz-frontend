import { Link } from "react-router-dom"

const RoommatesDisplay = (props) => {

   const roommateSeed = [
      {
         picture: '/Images/profilepic1.png',
         name: 'Max Lourd',
         age: 19,
         gender: 'male',
         smoker: 'no',
         morningOrNight: 'morning',
         roommateOrRoom: 'roommate',
         major: 'biology',
         interests: ['sports', 'movies', 'hiking'],
      },
      {
         picture: '/Images/profilepic2.png',
         name: 'Elizabeth Walker',
         age: 18,
         gender: 'female',
         smoker: false,
         earlyRiser: false,
         major: 'economics',
         interests: ['fashion', 'working out', 'music'],
      },
      {
         picture: '/Images/profilepic3.png',
         name: 'Priya Jain',
         age: 20,
         gender: 'female',
         smoker: false,
         earlyRiser: true,
         major: 'computer science',
         interests: ['dancing', 'reading', 'sports'],
      },
      {
         picture: '/Images/profilepic8.png',
         name: 'Kyrie Jackson',
         age: 21,
         gender: 'male',
         smoker: false,
         earlyRiser: true,
         major: 'physics',
         interests: ['working out', 'basketball', 'music'],
      },
      {
         picture: '/Images/profilepic5.png',
         name: 'Layla Abbas',
         age: 18,
         gender: 'female',
         smoker: false,
         earlyRiser: false,
         major: 'english',
         interests: ['writing', 'reading', 'baking'],
      },
      {
         picture: '/Images/profilepic7.png',
         name: 'Jun Park',
         age: 22,
         gender: 'male',
         smoker: true,
         earlyRiser: true,
         major: 'economics',
         interests: ['music', 'traveling', 'fashion'],
      },
      {
         picture: '/Images/profilepic6.png',
         name: 'Sasha Smith',
         age: 21,
         gender: 'female',
         smoker: false,
         earlyRiser: true,
         major: 'gender studies',
         interests: ['sports', 'reading', 'working out'],
      },
      {
         picture: '/Images/profilepic4.png',
         name: 'Al Jones',
         age: 19,
         gender: 'female',
         smoker: true,
         earlyRiser: false,
         major: 'mathematics',
         interests: ['movies', 'baking', 'dancing'],
      }
   ]

   return (
      <>
         <div className="backButton">
            <a href="/">Return Home</a>
         </div>
         <div className="roommatesDisplay">
         {roommateSeed.map((roommate) => {
            const {picture, name} = roommate
            return (
               <Link to={`/roommatesdisplay/${name}`} key={name}>
                  <img src={picture}/>
                  <h2>{name}</h2>
               </Link>
            )})} 
         </div>
      </>
   )
}

export default RoommatesDisplay