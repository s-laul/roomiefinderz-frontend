import {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom"

export default (props) => {
  const navigate = useNavigate()
  let defaultState = {
      userName: '',
      post: false,
      lookFor: false,
      location: '',
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
  const [newForm, setNewForm] = useState(defaultState)
    
  const minDateChange = (e) => {
      setNewForm(prev => ({
          ...prev,
          //[e.target.name]: e.target.value
      }))
      if (e.target.name == "start-date"){
          newForm.date[0] = new Date(e.target.value)
      }
  }
  const maxDateChange = (e) => {
      setNewForm(prev => ({
        ...prev,
        //[e.target.name]: e.target.value
      }))
      if (e.target.name == "end-date"){
        newForm.date[1] = new Date(e.target.value)
      }
  }
  const minPriceChange = (e) => {
      setNewForm(prev => ({
        ...prev,
          //
      }))
      if (e.target.name == 'minp'){
            newForm.priceRange[0] = parseFloat(e.target.value)
        }
  }
  const maxPriceChange = (e) => {
    setNewForm(prev => ({
      ...prev,
          //
    }))
    if (e.target.name == 'maxp'){
          newForm.priceRange[1] = parseFloat(e.target.value)
    }
  }
  const handleKitchen = (e) => {
    setNewForm(prev => ({
          ...prev,
          [e.target.name]: (e.target.value == 'yes'? true: false)
          }))
  }
  const handleChange = (e) => {
    setNewForm(prev => ({
          ...prev, 
          [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      props.createApartment(newForm)
      setNewForm(defaultState)
      navigate('/')
  }
  const handleCancel = (e) => {
    navigate('/')
  }
  const toYesNo = (abool) => {
      if (abool) {
        return "YES";
      }else{
        return "NO";
      }
  }
  const formatPrice = (arr) => {
        console.log(arr)
         return "$"+arr[0].toFixed()+ "-$" + arr[1].toFixed()
  }

  return (
  <section>
    <input type='submit' value='CANCEL' onClick={handleCancel}/>
    {<form onSubmit={handleSubmit}>
      <br/>
      <input
        type='text'
        value={newForm.userName}
        name='userName'
        placeholder='userName'
        onChange={handleChange}
      /><br/>
      <input
        type='text'
        value={newForm.location}
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
        <select id="kitchen" name="kitchen" value={newForm.kitchen?'yes':'no'} onChange={handleKitchen}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select><br/>
        <label>Age: &nbsp;</label>
        <input id="age" type="number" name="age" value={newForm.age} onChange={handleChange}/><br/>
        <label>Price Range: &nbsp;</label>
        <div id="priceRange" name="priceRange">
            <input name="minp" type="number" placeholder="Minimum" value={newForm.priceRange[0]} onChange={minPriceChange}/>
            <input name="maxp" type="number" placeholder="Maximum" value={newForm.priceRange[1]} onChange={maxPriceChange} />
        </div><br/>
        <label>Start date: &nbsp;</label>
        <input type="date" id="start" name="start-date" value={(new Date(newForm.date[0])).toISOString().split('T')[0]} onChange={minDateChange}/>
        <label>&nbsp;-&nbsp;End date: &nbsp;</label>
        <input id="end-date" type="date" name="end-date" value={(new Date(newForm.date[1])).toISOString().split('T')[0]} onChange={maxDateChange}/><br/>         
        {/* <label>Upload Pictures: &nbsp;</label>
        <input type="file" id="room-picture" name="room-picture" multiple></input><br/><br/> */}
        <label>Note: &nbsp;</label>
        <input id="note" type="text" name="note" value={newForm.note} onChange={handleChange}/><br/>

      <input type='submit' value='Create Room' />
    </form> } 
  </section>
  )
}