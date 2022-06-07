import React from 'react'

const Card = ({ children }) => {
  return (
    <>
      <p>i am header</p>
      {children}
      <p>i am footer</p>

    </>
  )
}

export default Card