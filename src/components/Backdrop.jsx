import React from 'react'

export default function Backdrop({children, closeModal}) {
  return (
    <div 
        onClick={closeModal}
        className='fixed flex justify-center items-center z-50 bg-black bg-opacity-50 w-full h-full'
    >
        {children}
    </div>
  )
}
