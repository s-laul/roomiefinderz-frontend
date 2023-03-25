import {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation} from "react-router-dom"

// const APT_URL = 'http://localhost:4000/apartment'
const APT_URL = 'https://roomie-finder.herokuapp.com/apartment'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
   
  const {actionId, postId, id} = useParams()
  console.log(id)
  const [room, setRoom] = useState(null)

  const Navigate = useNavigate()
  //const apartment = props.apartment
  //console.log(apartment)
  //const room = apartment.find((p) => p._id === id)
  const getRoom = async () => {
    // const response = await fetch(URL+'requestapts')
    const response = await fetch(`${APT_URL}/view/${postId}/${id}`)
    const data = await response.json()
    setRoom(data)
    //room = data
    updateEditForm(data)
 }
 let defaultState = {
  userName: '',
  post: false,
  lookFor: false,
  location: 'Rutgers University',
  housingType: 'Condo',
  roomType: 'Individual',
  bathroomType: 'Invdividual',
  kitchen: false,
  age: 18,
  priceRange: [900,1200],
  date: ['2023-05-15', '2023-07-15'],
  image: '',
  note: ''
} 

 const updateRoom = async(room, id ) => {
  await fetch(`${APT_URL}/view/${postId}/${id}`,  {
    method: 'put',
    headers: {
     "Content-Type": 'application/json'
    },
    body: JSON.stringify(room)
  })
  //getRoom(id);
}

const deleteRoom = async (id) => {
  await fetch(`${APT_URL}/view/${postId}/${id}`, {
    method: 'delete'
  })
  getRoom(id);
}
 //useEffect(id)
const [editForm, setEditForm] = useState(defaultState)
const updateEditForm=(room) => {
    editForm.userName = room.userName
    editForm.post = room.post
    editForm.lookFor = room.lookFor
    editForm.location = room.location
    editForm.housingType = room.housingType
    editForm.roomType = room.roomType
    editForm.bathroomType = room.bathroomType
    editForm.kitchen = room.kitchen
    editForm.age = room.age
    editForm.priceRange = room.priceRange
    editForm.date = room.date
    editForm.image = room.image 
    editForm.note = room.note
}

  const handleChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const minDateChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      //[e.target.name]: e.target.value
    }))
    if (e.target.name == "start-date"){
        editForm.date[0] = new Date(e.target.value)
    }
  }

  const maxDateChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      //[e.target.name]: e.target.value
    }))
    if (e.target.name == "end-date"){
        editForm.date[1] = new Date(e.target.value)
    }
  }

  const minPriceChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      //
    }))
    if (e.target.name == 'minp'){
        editForm.priceRange[0] = parseFloat(e.target.value)
    }
  }
  const maxPriceChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      //
    }))
    if (e.target.name == 'maxp'){
        editForm.priceRange[1] = parseFloat(e.target.value)
    }
  }
  const handleKitchen = (e) => {
    setEditForm(prev => ({
      ...prev,
      [e.target.name]: (e.target.value == 'yes'? true: false)
      }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRoom(editForm, id)
    Navigate('/apartment/view/'+postId)
  }

  const handleDelete = () => {
    deleteRoom(id)
    Navigate('/apartment/view/' + postId)
  }

  const handleBack = () => {
    Navigate('/apartment/view/' + postId)
  }
  
useEffect(() => {
  getRoom()
}, [])

return (
      <container className="profile-room-container">
      <div className='room'>
        <h2>{editForm.userName}</h2>
        <input type='submit' value='DELETE' onClick={handleDelete}/>
        <input type='submit' value='BACK' onClick={handleBack}/>
        <form onSubmit={handleSubmit}>
          <br/>
          <input
            type='text'
            value={editForm.userName}
            name='userName'
            placeholder='userName'
            onChange={handleChange}
          /><br/>
          <input
            type='text'
            value={editForm.location}
            name='location'
            placeholder='location'
            onChange={handleChange}
          /><br/>
          <label>Housing Type: &nbsp;</label>
          <select id="housingType" name="housingType" value={editForm.housingType} onChange={handleChange}>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
          </select><br/>
          <label>Room: &nbsp;</label>
            <select id="roomType" name="roomType" value={editForm.roomType} onChange={handleChange}>
              <option value="Individual">Individual</option>
              <option value="Shared">Shared</option>
              <option value="Studio">Studio</option>
            </select><br/>
            <label>Bathroom: &nbsp;</label>
            <select id="bathroomType" name="bathroomType" value={editForm.bathroomType} onChange={handleChange}>
                <option value="Individual">Individual</option>
                <option value="Shared">Shared</option>
            </select><br/>
            <label>Kitchen &nbsp;</label>
              <select id="kitchen" name="kitchen" value={editForm.kitchen?'yes':'no'} onChange={handleKitchen}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select><br/>
            <label>Age: &nbsp;</label>
            <input id="age" type="number" name="age" value={editForm.age} onChange={handleChange}/><br/>
            <label>Price Range: &nbsp;</label>
              <div id="priceRange" name="priceRange">
                <input name="minp" type="number" placeholder="Minimum" value={editForm.priceRange[0]} onChange={minPriceChange}/>
                <input name="maxp" type="number" placeholder="Maximum" value={editForm.priceRange[1]} onChange={maxPriceChange} />
              </div>
            <label>Start date: &nbsp;</label>
            <input type="date" id="start" name="start-date" value={(new Date(editForm.date[0])).toISOString().split('T')[0]} onChange={minDateChange}/>
            <label>&nbsp;-&nbsp;End date: &nbsp;</label>
            <input id="end-date" type="date" name="end-date" value={(new Date(editForm.date[1])).toISOString().split('T')[0]} onChange={maxDateChange}/><br/>         
            {/* <label>Upload Pictures: &nbsp;</label>
            <input type="file" id="room-picture" name="room-picture" multiple></input><br/><br/> */}
            <label>Note: &nbsp;</label>
            <input id="note" type="text" name="note" value={editForm.note} onChange={handleChange}/><br/>
                
          <input type='submit' value='Update Room' />
        </form>
      </div> 
      </container> 
      )
    
//     console.log("THERE55")
//   console.log(room)
//   console.log("THERE255")
//   console.log("ERE55")
//   //console.log(room.userName)
// }, [c])
// getRoom()
// c=1  

  
}