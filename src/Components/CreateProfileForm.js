const CreateProfile = (props) => {
   
   return (
      <container className="profile-form-container">
         <form className="profile-form">
            <label for="name">Name: &nbsp;</label>
            <input id="name" type="text" name="name" placeholder="First name only"/><br/>
         
            <label for="age">Age: &nbsp;</label>
            <input id="age" type="number" name="age"/><br/>

            <label for="gender">Gender: &nbsp;</label>
            <input id="gender" type="text" name="gender"/><br/>

            <label for="major">Major: &nbsp;</label>
            <input id="major" type="text" name="major"/><br/>

            <label for="interests">Interests: &nbsp;</label>
            <input id="interests" type="text" name="interests" placeholder="Three, separated by commas"></input><br/>

            <label for="morning-or-night">Morning or Night Person: &nbsp;</label>
            <select id="morning-or-night" name="morning-or-night">
               <option value="morning">Morning  </option>
               <option value="night">Night  </option>
            </select><br/>

            <label for="smoker">Smoker: &nbsp;</label>
            <select id="smoker" name="smoker">
               <option value="no">No</option>
               <option value="yes">Yes</option>
            </select><br/>

            <label for="roommate-or-room">Seeking Roommate or Room: &nbsp;</label>
            <select id="roommate-or-room" name="roommate-or-room">
               <option value="roommate">Roommate</option>
               <option value="room">Room</option>
            </select><br/>

            <input type="submit" value="Submit" />
         </form>
      </container>
   )
}

export default CreateProfile