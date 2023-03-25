import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

const Login = () => {
    const Navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("autehnticated") || false ))
    const users = [
        {
            username:"Thiago",
            password:"test"
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username)
        if(account && account.password === password){
            setauthenticated(true)
            localStorage.setItem("authenticated", true)
            Navigate("/homepage")
        }
    }

    const handleButton = (e) => {
        e.preventDefault()
        Navigate("/registration")
    }
    return(
        <div>
            <h2>
                Login
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='name'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="submit" 
                    value="Submit"
                />
            </form>
            <p>
                Dont already have an account?
            </p>
            <button classname="button2" onClick={handleButton}>Click Here</button>
        </div>
    )
}

export default Login