import Image from 'next/image'
import React from 'react'

const Navigation = () => {
  return (
    <header className="bg-[#708090] flex justify-between text-white text-xl p-4 border border-gray-200">
        <Image width="40" height="40" src="https://img.icons8.com/ios/50/checklist--v1.png" alt="checklist--v1"/>
        <span className='flex gap-1'>
            <Image width="40" height="40" src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
            <Image width="40" height="40" src="https://img.icons8.com/material-rounded/48/user.png" alt="user"/>
        </span>
    </header>
  )
}

export default Navigation