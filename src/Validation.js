import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function Validation() {

  const [email, setEmail] = useState('') // useState to store Email address of the user
 

  // Function which will validate the input data whenever submit button is clicked.



  return (
    <div className="main">
      <form>
        {/* Input Field to insert First Name */}

        {/* Input Field to insert Last Name */}

        {/* Input Field to insert Mobile Number */}

        {/* Input Field to insert Age */}

        {/* Input Field to insert Email Address of the user */}
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
        {/* Input Field to insert Password */}

        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default Validation;
