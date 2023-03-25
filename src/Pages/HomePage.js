import HomePageButtons from "../Components/HomepageButtons"
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

const HomePage = (props) => {
   const [authenticated, setauthenticated] = useState(null)
   useEffect(() => {
      const loggedUser = localStorage.getItem("authenticated")
      if(loggedUser){
         setauthenticated(loggedUser)
      }
   },[])

   if(!authenticated){
      <Navigate replace to="/"/>
   } else {
   return (
      <>
         <div className="HomePage">
            <HomePageButtons />
         </div>
         <img className="Skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/>
      </>
      
   )
   }
}

export default HomePage