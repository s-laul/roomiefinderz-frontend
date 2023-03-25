import {useState} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'

export default (props) => {
    console.log("in RoomsIndexPage")
    console.log(props.createApartment)
    const postId = props.postId

    let defaultState = {
      userName: '',
      post: false,
      lookFor: false,
      location: 'Rutgers University',
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
    
    
  const Navigate = useNavigate()
  const location = useLocation()
  const [newForm, setNewForm] = useState(defaultState)
    
  // const handleChange = (e) => {
  //     setNewForm(prev => ({
  //         ...prev, 
  //         [e.target.name]: e.target.value
  //       }))
  // }
  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     props.createApartment(newForm)
  //     setNewForm(defaultState)
  // } 
  const toYesNo = (abool) => {
      if (abool) {
        return "YES";
      }else{
        return "NO";
      }
  }
  const formatPrice = (arr) => {
       return "$"+arr[0].toFixed()+ " - $" + arr[1].toFixed()
  }
  const Loaded = () => {
    return props.apartment.map((room) => (
      <div key={room._id} className='room'>
        <Link to={`/apartment/view/${postId}/${room._id}`}>
          <h3>{room.userName}</h3>
        </Link>
        
        {/* <button onClick={Navigate(`/requestapts/${room._id}`)}>{room.userName}</button> */}
        <h5>Location: {room.location}</h5>
        <h5>Housing Type: {room.housingType}</h5>
        <h5>Room: {room.roomType}</h5>
        <h5>Bathroom: {room.bathroomType}</h5>
        <h5>Kitchen: {toYesNo(room.kitchen)}</h5>
        <h5>Age: {room.age}</h5>
        <h5>Price Range : {formatPrice(room.priceRange)}</h5>            
        <h5>Available From: {(new Date(room.date[0])).toLocaleDateString()+' To: '+
            (new Date(room.date[1])).toLocaleDateString()}</h5>
        <h5>Note: {room.note}</h5>
      </div>
      ))
    }
  const Loading = () => {
    return <h1>Loading...</h1>
  }  

  const handleNew = () =>{
    Navigate(`/apartment/new/${postId}`)
  }
  return(
      <section>
        {/* <button onClick={handleNew}>Create a new room</button>  */}
        {/* <Link to={`/apartment/new/${postId}`}>
          <h3>Create A New Room</h3>
        </Link> */}
        <Link to={{pathname:`/apartment/new/${postId}`, state:{createApartment:props.createApartment}} }>
          <h3>Create A New Room</h3>
        </Link>
        {props.apartment ? <Loaded/>: <Loading />}
      </section>
  )
}