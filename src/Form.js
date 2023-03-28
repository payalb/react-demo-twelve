import React, { Component } from 'react'

class Form extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         person : {
            name: "",
            address: "",
            age: 0,
            phoneNumber: 0,
            gender: ""

         }
      }
    }
    
  setName = (event)=> {
    this.setState  ( (prevState) => {
        let  p = prevState.person
        p.name = event.target.value   
        return {person: p}
    });
  }
  setAddress = (event)=> {
    this.setState  ( (prevState) => {
        let  p = prevState.person
        p.address = event.target.value   
        return {person: p}
    });
  }
  setAge = (event)=> {
    
    this.setState ( (prevState) => {
        let  p = prevState.person
        p.age = event.target.value   
        return {person: p}
    }
    );
  }
  setPhoneNumber = (event)=> {
        this.setState  ( (prevState) => {
            let  p = prevState.person
            p.phoneNumber = event.target.value   
            return {person: p}
        });
      }
  
  setGender = (event)=> {
    this.setState  ( (prevState) => {
        let  p = prevState.person
        p.gender = event.target.value   
        return {person: p}
    });
  }
    
  printDetails = (event)=> {
   alert(JSON.stringify(this.state.person))
   event.preventDefault();
  }
render(){

    const p = this.state.person;
  return (
    <div>
    <form onSubmit={this.printDetails}>
      Name: <input type= "text" id= "name"  value = {p.name} onChange={this.setName}/> <br/>
      Address: <input type= "text" id= "address" value = {p.address}  onChange={this.setAddress}/> <br/>
      Age: <input type= "number" id= "age" value = {p.age}  onChange={this.setAge}/> <br/>
      Phone Number: <input type= "number" id= "phoneNumber" value = {p.phoneNumber}  onChange={this.setPhoneNumber}/> <br/>
      Gender: <input type= "text" id= "gender" value = {p.gender}  onChange={this.setGender}/> <br/>
      <input type= "submit" />
    </form>
    </div>
  )
}
}

export default Form
