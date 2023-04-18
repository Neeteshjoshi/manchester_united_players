import React from 'react'

const Button = ({buttonText, handleButton}) => {
  return (
    <div className='btn btn-primary my-2 mx-2' onClick={handleButton}>{buttonText}</div>
  )
}

export default Button