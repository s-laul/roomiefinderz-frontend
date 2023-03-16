import { useState } from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        setNewUser(prev => ({
            ...prev,
            [e.target.username]: e.target.value
        }))
    }

    return (
       <section>
        <h1>
            Login
        </h1>
        <form onSubmit={handleSubmit}>
            <input
            type= 'text'
            value= {newUser.username}
            name='username'
            placeholder='username'
            />
            <br/>
            <input
            type= 'text'
            value={newUser.password}
            name='password'
            placeholder='password'
            />
            <br/>
            <input
            type='submit'
            value='SIGN UP'
            />
        </form>
        <br/>
        <p>
            Already have an account?
        </p>
        <Link to={`/login`}>
            Click Here
        </Link>
       </section>
    )
}