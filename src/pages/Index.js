import { useState } from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

    const [login, setlogin] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        setlogin(prev => ({
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
            value= {login.username}
            name='username'
            placeholder='username'
            />
            <br/>
            <input
            type= 'text'
            value={login.password}
            name='password'
            placeholder='password'
            />
            <br/>
            <input
            type='submit'
            value='SIGN IN'
            />
        </form>
        <br/>
        <p>
            Dont have an Account?
        </p>
        <Link to={`/registration`}>
            Click Here
        </Link>
       </section>
    )
}