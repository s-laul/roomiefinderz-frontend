import Login from './LoginPage'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
    const Navigate = useNavigate()

    const URL = 'https://roomie-finder.herokuapp.com/registration'

    const [user, setUser] = useState(null)

    const getUser = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        getUser()
    }

    const createUser = async (user) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        getUser()
    }


    const handleButton = (e) => {
        e.preventDefault()
        Navigate('/login')
    }
    return (
        <div>
        <h2>
            Sign Up Here
        </h2>

        <form>
            <input
                type="text"
                name="username"
            />
            <br/>
            <input
                type="password"
                name="password"
            />
        </form>
        <p>
            Dont have an account?
        </p>
        <button className='button2' onClick={handleButton}>Click Here</button>
        </div>
    )
}

export default SignUp