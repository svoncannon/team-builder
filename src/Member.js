import React from 'react'
import styled from 'styled-components'
import color from 'randomcolor'

const Container = styled.div`
    background: ${color()};
    border: 1px solid transparent;
    border-radius: 8px;
    font-family: sans-serif;
    margin: 2% auto;
    padding: 2%;
    text-align: center;
    width: 25%;
`

const SubHeader = styled.h4`
    background: #000;
    border-radius: 50px;
    color: ${color()};
    margin: auto;
    padding: 1%;
    width: 25%;
`

function Member({ item }) {

    const { name, email, role } = item

    return (
        <Container>
            <h2>{name}</h2>
            <SubHeader>{role}</SubHeader>
            <h6>{email}</h6>
        </Container>
    )
}

export default Member