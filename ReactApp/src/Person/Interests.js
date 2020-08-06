import React from 'react';
import styled from 'styled-components'
//import Radium from 'radium';
//import './Interests.css';

const StyledDiv = styled.div`
width: 30%;
margin: 15px auto;
border: 1px solid black;
box-shadow: 3px 3px #ccc;
padding: 12px;
text-align: center;

@media(min-width: 500px):{
    width: '450px'

`;

const interest = (props) =>{
    // const style = {
    //     '@media(min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
return (
    <StyledDiv>
        <p onClick={props.click}>I am interested in {props.name}</p>
        <p>{props.children}</p>
        <input onChange={props.change} value = {props.name}></input>
    </StyledDiv>
    ) 
}
//<p>I am learning React. I am in chapter {Math.floor(Math.random() * 30)}.</p>
//export default Radium(interest);
export default interest;