import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { capitalizeFirst } from '../utils/util'

const Header = ({isActive}) => {
  const {profile}=useAuth()
  return (
    <header className="sticky top-0 z-999 flex w-full bg-primary-white drop-shadow-1 py-3 ">
    <div className="flex flex-grow items-center justify-between  px-4 py-4 shadow-2 md:px-6 2xl:px-11">
      <h3 className='text-2xl font-semibold'>{capitalizeFirst(isActive)}</h3>
      <div className='flex items-end gap-3'>
        <p>Welcome , {profile&&profile.username&&profile.username}</p>
      </div>
    </div>
  </header>
  )
}

export default Header