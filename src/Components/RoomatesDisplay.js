import { useState, useEffect } from "react";
import CreateProfileForm from "./CreateProfileForm";

const RoommatesDisplay = (props) => {
   return (
      <div>
         <h2>{props.name}</h2>
         <h2>{props.age}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.major}</h2>
         <h2>{props.interests}</h2>
         <h2>{props.smoker}</h2>
         <h2>{props.morningOrNight}</h2>
         <h2>{props.roommateOrRoom}</h2>
      </div>
   )
}

export default RoommatesDisplay