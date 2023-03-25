export const PagesTemplate = (props) => {
   // To run locally
   // const BACK_URL = 'http://localhost:4000'
   const BACK_URL = 'https://roomie-finder.herokuapp.com'

   const RoomateSeed = async () => {
      const response = await fetch(`${BACK_URL}/roommateSeed`)
      
      return (
         <div className="pagesTemplate">
            <h1>RoomieFinderz</h1>
            {/* <h1>{data}</h1> */}
            <img className="skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/>
         </div>
      )
   }
   RoomateSeed()     
}

export const ApartmentTemplate = (props) => {

   // const BACK_URL = 'http://localhost:4000'
   const BACK_URL = 'https://roomie-finder.herokuapp.com'

   const ApartmentSeed = async () => {
      
      const response = await fetch(`${BACK_URL}/apartmentSeed`)
      return
   }
   ApartmentSeed()
}
