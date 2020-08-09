import React from "react";
import styled from "styled-components";
import color from "randomcolor";

const Container = styled.div`
  background: ${color()};
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: 'Archive Narrow', sans-serif;
  margin: 2% auto;
  padding: 2%;
  text-align: center;
  width: 25%;
`;

const SubHeader = styled.h4`
  background: #000;
  color: ${color()};
  margin: auto;
  padding: 1%;
  width: 25%;
  font-family: 'Archive Narrow', sans-serif;
  line-height: 2.0rem
`;

const Username = styled.h2`
width: 80%;
padding: 2%;
text-align: center;
font-size: 1.5rem;
`

function Member({ item }) {
  const { name, email, role, coderType } = item;

  return (
    <Container>
      <Username>{name}</Username> 
      <SubHeader>The {coderType} {role}</SubHeader>
      <h6>Contact: {email}</h6>
    </Container>
  );
}

export default Member;
