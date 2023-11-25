import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return (
    <UserContextProvider>
      <div className='text-red-600'>
        I AM REACT
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}
