import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive ofeers on your email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" name="" id="" placeholder='Your email id'/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default NewLetter