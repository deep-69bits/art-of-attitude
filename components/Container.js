import React from 'react'

const Container = ({children}) => {
  return (
    <div className='lg:px-10 px-4 py-20 min-h-screen '> {children}</div>
  )
}

export default Container