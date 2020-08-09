
import React, { useState } from 'react';
import Form from './Form'
import Members from './Members'

import { v4 as uuidv4 } from 'uuid'



function App() {

  const initialState = {
    name: '',
    email: '',
    coderType: 'Quirky',
    role: 'Frontender',
    id: uuidv4()
  }

  const [members, setMembers] = useState([])
  const [query, setQuery] = useState(initialState)


  const handleOnChange = e => {
    const { name, value } = e.target
    setQuery({
      ...query,
      [name]: value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const newArr = [...members, { ...query }]
    setMembers(newArr)
    setQuery(initialState)
  }


  return (
    <div className="App">
       <header className="App-header">
        <h1>Build-A-Team</h1>
      <p className='welcome-msg'>Build your perfect team, where the style guru puts on too many patches, the unseen and unappreciated fabric heart is the back-end guy, and those front-enders are all the stuffing.</p>
      </header>
      <Form submit={handleOnSubmit} change={handleOnChange} values={query} />
      <Members members={members} />
    </div>
  );
}

export default App;
