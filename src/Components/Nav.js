import {Link} from 'react-router-dom'

const Nav = (props) => {
  return(
    <div className='nav'>
      <Link to='/'>
        <div>Find a Roomate</div>
      </Link>
      <Link to='/findaroomate'>
        <div>Find a Roomate</div>
      </Link>
      <Link to='postapts'>
        <div>Find a Room</div>
      </Link>
      <Link to='requestapts'>
        <div>Post a Room</div>
      </Link>
    </div>
  )
}

export default Nav