import { useState } from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setNewUser(prev => ({
            ...prev,
            [e.target.username]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createUSer(newUser)
        setlogin({
            username: "",
            password: ""
        })
    }


    return (
       <section>
        <h1>
            Login
        </h1>
        <form onSubmit={handleChange}>
            <input
            type= 'text'
            value= {newUser.username}
            name='username'
            placeholder='username'
            onChange={handleSubmit}
            />
            <br/>
            <input
            type= 'text'
            value={newUser.password}
            name='password'
            placeholder='password'
            onChange={handleSubmit}
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