
import React, { useState } from 'react';
import Form from './Form'
import Members from './Members'

import { v4 as uuidv4 } from 'uuid'

function App() {

  const initialState = {
    name: '',
    email: '',
    role: 'Frontend',
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
      <Form submit={handleOnSubmit} change={handleOnChange} values={query} />
      <Members members={members} />
    </div>
  );
}

export default App;
