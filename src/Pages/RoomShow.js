import {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const apartment = props.apartment
  const room = apartment.find((p) => p._id === id)

  const [editForm, setEditForm] = useState(room)

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
    props.updateApartment(editForm, id)
    navigate('/')
  }

  const handleDelete = () => {
    props.deleteApartment(id)
    navigate('/')
  }

  const handleBack = () => {
    navigate('/')
  }
  
  return (
  <container className="profile-room-container">
  <div className='room'>
    <h2>{room.userName}</h2>
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
      <select id="housingType" name="housingType" onChange={handleChange}>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="house">House</option>
      </select><br/>
      <label>Room: &nbsp;</label>
        <select id="roomType" name="roomType" onChange={handleChange}>
          <option value="Individual">Individual</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
        </select><br/>
        <label>Bathroom: &nbsp;</label>
        <select id="bathroomType" name="bathroomType" onChange={handleChange}>
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
}