import React, {useContext} from 'react'
import UserContext from '../context/userContext'


function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return (
        <div>
            <h1>Please LogIn</h1>
        </div>
    )

    return (
        <div>
            <h1>Welcome {user.userName}</h1>
            {/* <h1>{user.password}</h1> */}
        </div>
    )
}

export default Profile
