const HomePage = (props) => {
   return (
      <>
         <div className="Homepage">
            <h2>
               What would you like to do?
            </h2>
            <section className="buttons">
               <button className="findRoomate">
                  Find a Roommate
               </button>
               <button className="findRoom">
                  Find a Room
               </button>
               <button className="postRoom">
                  Post a Room
               </button>
            </section>
         </div>
         <img className="skyline" src="https://www.pngkit.com/png/full/636-6361779_skyline-clipart-bangalore-city-line-art-png.png"/>
      </>
   )
}

export default HomePage