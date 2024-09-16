import { useEffect, useState } from 'react'
import { Auth } from "./components/authcomponent/auth"
import './App.css'
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function App() {
  const [players, setGames] = useState([])

  const playersCollectionRef

  useEffect(() => {
    const getAvailableGames = async () => {
      // Read the Data
      // Set games list
    }
  }, [])

  return (
    <div>
      <h1>FireBase</h1>
      <div>
        <Auth />
      </div>
    </div>
  )
}

export default App
