import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
//import Radium, {StyleRoot} from 'radium'
import Interests from './Person/Interests.js';

const StyledButton = styled.button`
background-color : red;
color: white;
border : 1px solid red;
padding: 5px;

&:hover {background-color: salmon;
color:black;
}
`;

class App extends Component {
  state = {
    interest:[
      {key:101,name:"Learning new things"},
      {key:102,name:"Exercising every morning"},
      {key:103,name:"Content writing"}
    ],
    //interest : ["Learning new things","Exercising every morning","Content writing"],
    showDetails : false
  }
  switchInterestHandler = (newInterest) =>{
    this.setState({
      interest:[
        {key:101,name:"Learning new things"},
        {key:102,name:"Exercising every morning"},
        {key:103,name: newInterest}
      ]
    })
  }

  interestChangeHandler = (event) =>{
    this.setState({
      interest:[
        {key:101,name:"Learning new things"},
        {key:102,name:event.target.value},
        {key:103,name: "Content writing"}
      ]
    })
  }

  toggleHandler = () =>{
    let show = this.state.showDetails;
    this.setState({
      showDetails : !show
    })
  }

  deleteHandler = (index) =>{
    //let interest = this.state.interest;
    console.log("In delete "+index);
    let interest = [...this.state.interest];
    interest.splice(index,1);
    this.setState({
      interest : interest
    })
  }

  interestChangeHandler1=(event,id) =>{
    let interestIndex = this.state.interest.findIndex((p)=>{
      return p.key === id
    })
    let interest = {
      ...this.state.interest[interestIndex]
    }

    interest.name = event.target.value;
    let newInterest = this.state.interest;
    newInterest[interestIndex] = interest;
    this.setState({
      interest : newInterest
    })
  }

  render() {
    const style = {
      backgroundColor : 'red',
      color: 'white',
      border : '1px solid red',
      padding: '5px',
      ':hover' : {backgroundColor: 'salmon',
      color:'black'}
    }
    let interests1 = null;
    let interests2 = null;
    if(this.state.showDetails){
      interests1 = (
        <div>
          {this.state.interest.map((interest,index) =>{
            return (<Interests
            name ={interest.name}
            click={()=>this.deleteHandler(index)}
            change={(event)=>this.interestChangeHandler1(event,interest.key)}
            key={interest.key}>
            </Interests>)
          })}
        </div>
      );
      // interests2 = (
      //   <div>
      //       <button style={style} onClick={()=>this.switchInterestHandler("Reading Books!")}>Switch Interests</button>
      //       <Interests name={this.state.interest[0].name}>Both personally and professionally</Interests>
      //       <Interests name={this.state.interest[1].name} click={this.switchInterestHandler.bind(this,"writing poems")} change = {this.interestChangeHandler}></Interests>
      //       <Interests name={this.state.interest[2].name}></Interests>
      //     </div>
          
      // )
      
      style.backgroundColor = 'blue';
      style[':hover'] =  {backgroundColor: 'lightBlue',
      color:'black'}
    };
    let classes = [];
    if(this.state.interest.length <=2){
      classes.push('red');
    }
    if(this.state.interest.length <=1){
      classes.push('bold');
    }
    
    return (
      
      <div className="App">
        <h1>Hi, I am Manaswini</h1>
        <p className={classes.join(' ')}>I am a Web Developer</p>
        {/* onClick={this.switchInterestHandler.bind(this,"Journaling") */}
        {/* <button style={style} onClick={this.toggleHandler}>Toggle</button> */}
        <StyledButton onClick={this.toggleHandler}>Toggle</StyledButton>
        {interests1}
        {interests2}
      </div> 
    );
    //return React.createElement('div',{className: "App"},React.createElement('h1',null,'Hi From react element'));
  }
}

//export default Radium(App);
export default App;
