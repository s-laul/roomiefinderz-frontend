import { useState } from 'react'
import HomePage from './HomePage'
import { useNavigate } from 'react-router-dom'

export default (props) => {
    const Navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false))
    const users = [{username: "Thiago", password: "test"}]
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username)
        if(account && account.password === password) {
            localStorage.setItem("authenticated", true)
            Navigate('/Homepage')
        }
    }

    return (
        <div>
        <h2>
            Login
        </h2>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <br/>
            <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <input
            type="submit"
            value="submit"
            />
        </form>
        </div>
    )
}