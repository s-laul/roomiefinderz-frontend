const HomePageButtons = (props) => {
   return (
      <div>
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
   )
}

export default HomePageButtons