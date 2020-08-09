import React from 'react'
import styled from 'styled-components'
import color from 'randomcolor'

const Container = styled.div`
    border: 1px solid black;
    text-align: center;
`;

const FormContainer = styled.form`
height: 40vh;
width: 100%;
display: flex;
justify-content: center;
`;

const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 2.5%;
width: 100%;
text-shadow: 2px 2px whitesmoke;
background-image: url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
background-position: center
`;
const Button =  styled.button`
box-shadow: 3px 4px 0px 0px #1564ad;
background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
background-color:${color()};
border-radius:5px;
border:1px solid #337bc4;
display:inline-block;
cursor:pointer;
color:${color()};
font-family:Arial;
font-size:17px;
font-weight:bold;
padding:12px 44px;
text-decoration:none;
text-shadow:0px 1px 0px #528ecc
`;
const FormBox = styled.div`
background-color: whitesmoke;
  opacity: 90%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Staatliches', cursive;
  font-size: 1.5rem
  `;

const SubContainer = styled.div`
    display: flex;
`;

function Form(props) {

    const { values, change, submit } = props
    return (
        <>
            <FormContainer onSubmit={submit}>
            <Banner>
                <h3>Become a Team Member!</h3>
            </Banner>
            <h5>Enter Your Information:</h5>
                <FormBox>
                <SubContainer>
               
                    <label htmlFor="name">Name</label>
                    <input onChange={change} value={values.name} type="text" name="name" id="name" placeholder="first name" />

                    <label htmlFor="email">Email</label>
                    <input onChange={change} value={values.email} type="email" name="email" id="email" placeholder="email" />
                </SubContainer>
                <label html For = "personality">
                    Pick one word that describes you:
                <select onChange={change} value={values.coderType} name="coderType" id="coderType">
                    <option value="Quirky">Quirky</option>
                    <option value="Sensible">Sensible</option>
                    <option value="Overachieving">Overachieving</option>
                    <option value="Show-offy">Flashy</option>
                    <option value="Study-buddy">Learned</option>
                    <option value="Geek">Nerdy</option>
                </select>
                </label>
                <label html For = "role">
                    What's your role?                
                <select onChange={change} value={values.role} name="role" id="role">
                    <option value="Frontender">Frontender</option>
                    <option value="Backend Aficionado">Backend Aficionado</option>
                    <option value="Style Guru">Style Guru</option>
                    <option value="Know-it-All">Know-it-All</option>
                </select>
                </label>
               
                <Button >Submit</Button>
                </FormBox>
            </FormContainer>
        </>
    )
}

export default Form