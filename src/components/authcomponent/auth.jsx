import { auth, googleProvider } from "../../config/firebase"
import { signInWithPopup, signOut } from 'firebase/auth'
import { useState } from "react"

export const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(auth?.currentUser?.email)

    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = async () => {
        try {
        await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <input 
                placeholder="Email..." 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password..." 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signInWithGoogle}> Sign in with Google </button>

            <button onClick={logOut}> Sign Out</button>
        </div>
    )
}