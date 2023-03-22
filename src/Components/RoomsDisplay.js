import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom"
import RoomsIndexPage from "../Pages/RoomsIndexPage";
import RoomShow from "../Pages/RoomShow";
import RoomNew from "../Pages/RoomNew";

const URL = "http://localhost:4000/requestapts"

const RoomsDisplay = (props) => {

   const [apartment, setApartment] = useState(null)

   const getApartment = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setApartment(data)
   }
   const createApartment = async (room) => {
      await fetch(URL, {
      // await fetch(`${URL}/apartment`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(room),
      });
      // update list of apartments
      getApartment();
    }
  
    const updateApartment = async(room, id ) => {
      await fetch(`${URL}/${id}`,  {
        method: 'put',
        headers: {
         "Content-Type": 'application/json'
        },
        body: JSON.stringify(room)
      })
      getApartment();
    }
  
    const deleteApartment = async (id) => {
      await fetch(`${URL}/${id}`, {
        method: 'delete'
      })
      getApartment();
    }
  
   useEffect(() => {
      getApartment()
    }, [])
    
   return (
      <main>
         <h1>REQUEST A ROOM</h1>
         <Routes>
            <Route path='/' element={
               <RoomsIndexPage apartment={apartment}/>
            }/>
            <Route path='/requestapts/:id' element={
               <RoomShow
                  apartment={apartment}
                  updateApartment={updateApartment}
                  deleteApartment={deleteApartment}
               />
            }/>
            <Route path='/requestapts/requestapts' element={
               <RoomNew apartment={apartment}
               createApartment={createApartment}
               />
            }/>
         </Routes>
      </main>
      // <div>
      //    <CreateRoomForm />
      // </div>
   )
}
export default RoomsDisplay