import { useEffect, useState } from "react";
import { Routes, Route, useParams} from "react-router-dom"
import RoomsIndexPage from "../Pages/RoomsIndexPage";


// const APT_URL = 'http://localhost:4000/apartment'
const APT_URL = 'https://roomie-finder.herokuapp.com/apartment'


const RoomsDisplay = (props) => {
   const [apartment, setApartment] = useState(null)
   //actionId: new or view (apartment)
   //postId: find or post (apartment)
   const {actionId, postId} = useParams()

   const getApartment = async () => {
      // const response = await fetch(URL+'requestapts')
      const response = await fetch(`${APT_URL}/view/${postId}`)
      const data = await response.json()
      console.log(data)
      setApartment(data)
   }
   const createApartment = async (room) => {
      console.log(room)
      await fetch(`${APT_URL}/new`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(room),
      });
      // update list of apartments
      getApartment();
    }
  
   useEffect(() => {
      getApartment()
    }, [])
    
   return (
      <main>
         <Routes>
            <Route path='/' element={
               <RoomsIndexPage 
                   apartment={apartment} 
                   createApartment={createApartment}
                   getApartment={getApartment} 
                   postId={postId}/>
            }/>
            {/* <Route path='/requestapts/view/:id' element={
               <RoomShow
                  apartment={apartment}
                  updateApartment={updateApartment}
                  deleteApartment={deleteApartment}
               />
            }/>
            <Route path='/requestapts' element={
               <RoomNew apartment={apartment}
               createApartment={createApartment}
               />
            }/> */}
         </Routes>
      </main>
   )
}
export default RoomsDisplay