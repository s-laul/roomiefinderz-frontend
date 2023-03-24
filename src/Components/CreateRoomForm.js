import RoomShow from "../Pages/RoomShow"
import RoommatesDisplay from "./RoomatesDisplay"

const CreateRoom = (props) => {

   return (
      <container className="profile-room-container">
         <form className="room-form">
            <label for="name">Name: &nbsp;</label>
            <input id="name" type="text" name="name" placeholder="First name only"/><br/>

            <label for="housing-type">Housing Type: &nbsp;</label>
            <select id="housing-type" name="housing-type">
               <option value="apartment">Apartment</option>
               <option value="condo">Condo</option>
               <option value="house">House</option>
            </select><br/>

            <label for="room-type">Room: &nbsp;</label>
            <select id="room-type" name="type-type">
               <option value="individual-room">Individual Room</option>
               <option value="shared-room">Shared Room</option>
               <option value="studio">Studio</option>
            </select><br/>

            <label for="bathroom-type">Bathroom: &nbsp;</label>
            <select id="bathroom-type" name="bathroom-type">
               <option value="individual-bathroom">Individual</option>
               <option value="shared-bathroom">Shared</option>
            </select><br/>

            <label for="kitchen">Kitchen &nbsp;</label>
            <select id="kitchen" name="kitchen">
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select><br/>
         
            <label for="age">Age: &nbsp;</label>
            <input id="age" type="number" name="age"/><br/>

            <label for="min-price">Price: &nbsp;</label>
            <input id="min-price" type="number" name="min-price" placeholder="Minimum"/>
            
            <label for="max-price">&nbsp;-&nbsp;</label>
            <input id="max-price" type="number" name="max-price" placeholder="Maximum"/><br/>

            <label for="start-date">Start date: &nbsp;</label>
            <input type="date" id="start" name="start-date"/>

            <label for="end-date">&nbsp;-&nbsp;End date: &nbsp;</label>
            <input id="end-date" type="date" name="end-date"/><br/>

            <label for="room-picture">Upload Pictures: &nbsp;</label>
            <input type="file" id="room-picture" name="room-picture" multiple></input><br/>

            <input type="submit" value="Submit"/>
         </form>
      </container>

   )
}

export default CreateRoom