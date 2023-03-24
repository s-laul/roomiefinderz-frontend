import { useState } from "react"
import RoommateContext from "./RoommateContext"

const CreateProfileForm = (props) => {
   const [formData, setFormData] = useState({
      picture: Image,
      name: '',
      age: '',
      gender: '',
      major: '',
      interests: '',
      smoker: 'No',
      morningOrNight: 'morning',
      roommateOrRoom: 'roommate'
   })

   
   const onChangeData = (e) => {
      setFormData((prev) => ({
         ...prev, 
         [e.target.name]: e.target.value
      }))
   }

   const createProfile = (e) => {
      e.preventDefault()
      console.log(formData)
   }

   
   
   return ( 
      <>
      <div className="backButton">
            <a href="/">Return Home</a>
         </div>
      <container className="profile-form-container">
         <form onSubmit={createProfile} className="profile-form">
            <label name="picture">Upload Picture: &nbsp;</label>
            <input htmlFor="picture" type="file"/><br/>

            <label htmlFor="name">Name: &nbsp;</label>
            <input onChange={onChangeData} value={formData.name} id="name" type="text" name="name" placeholder="First name only"/><br/>
         
            <label htmlFor="age">Age: &nbsp;</label>
            <input onChange={onChangeData} value={formData.age} id="age" type="number" name="age"/><br/>

            <label htmlFor="gender">Gender: &nbsp;</label>
            <input onChange={onChangeData} value={formData.gender} id="gender" type="text" name="gender"/><br/>

            <label htmlFor="smoker">Smoker: &nbsp;</label>
            <select onChange={onChangeData} value={formData.smoker} id="smoker" name="smoker">
               <option value="no">No</option>
               <option value="yes">Yes</option>
            </select><br/>

            <label htmlFor="morningOrNight">Morning or Night Person: &nbsp;</label>
            <select onChange={onChangeData} value={formData.morningOrNight} id="morningOrNight" name="morningOrNight">
               <option value="morning">Morning  </option>
               <option value="night">Night  </option>
            </select><br/>

            <label htmlFor="roommateOrRoom">Seeking Roommate or Room: &nbsp;</label>
            <select onChange={onChangeData} value={formData.roommateOrRoom} id="roommateOrRoom" name="roommateOrRoom">
               <option value="roommate">Roommate</option>
               <option value="room">Room</option>
            </select><br/>

            <label htmlFor="major">Major: &nbsp;</label>
            <input onChange={onChangeData} value={formData.major} id="major" type="text" name="major"/><br/>

            <label htmlFor="interests">Interests: &nbsp;</label>
            <input onChange={onChangeData} value={formData.interests} id="interests" type="text" name="interests" placeholder="Three, separated by commas"></input><br/><br/>

           
            <input type="submit" value="Submit" />
         </form>
      </container>
      </>
   )
}

export default CreateProfileForm