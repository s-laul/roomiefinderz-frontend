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
         <img src="../../public/Images/Homepage.png"/>
      </>
   )
}

export default HomePage