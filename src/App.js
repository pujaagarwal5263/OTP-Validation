import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import {Link} from 'react-router-dom';

export class App extends Component{
 
  handleClick=()=>{
    
    let recaptcha= new firebase.auth.RecaptchaVerifier('recaptcha');
    let number=document.getElementById("contact").value;
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
      let code=prompt('Enter the OTP','');
      if(code==null){
        return;
      }
      e.confirm(code).then(function(result){
       
        console.log(result.user,'user');
        document.getElementById('error').textContent= result.user.phoneNumber + " Number Verified";
        document.getElementById('next').style.visibility="visible";
      }).catch((error)=>{
          console.log(error);
          document.getElementById('error').innerHTML="INVALID OTP!!";
      })
    })
  }

   goNext=(e)=>{
     e.preventDefault();
   } 
  render(){
    return (
      <div >
      <form onSubmit={this.goNext} action="#">
      <h1>Doctor Data Collection Form</h1>
      <div className="container">
      
      <p>Agent Executive Name: <input type="text" name="name" id="" required /></p>
      
      <label for="date">Date:</label>
      <input type="date" id="date" name="date"></input>
      
        <fieldset>
            <legend>Title</legend>
        <p>Mr. <input type="radio" name="gender" id="" required /></p>
        <p>Ms. <input type="radio" name="gender" id="" required /></p>
        <p>Mrs. <input type="radio" name="gender" id="" required /></p>
        </fieldset>
        
        <p>Doctor Full Name: <input type="text" name="name" id="" required/></p>
        <p>Hospital/ Clinic Name: <input type="text" name="name" id="" required/></p>
        
        <label for="date">Date of Birth:</label>
        <input type="date" id="date" name="date"></input>
        <br />
 
        <label for="select">Blood Group</label>  
        <select name="select">
          <option>--Select your blood group--</option>
          <option value="opos">O+</option>
          <option value="oneg">O-</option>
          <option value="apos">A+</option>
          <option value="aneg">A-</option>
          <option value="abpos">AB+</option>
          <option value="abneg">AB-</option>
        </select>

        <p>Nationality: <input type="text" name="nationality"></input></p>

        <p>Address information: <textarea rows="2" cols="50" name="address"></textarea></p>

        <p>District: <input type="text" name="dist"></input></p>
        <p>Town/ Village: <input type="text" name="vill"></input></p>
        <p>City: <input type="text" name="city"></input></p>

        <label for="state">State</label>
        <select name="state" id="state" className="form-control">
        <option value="">--Select your state--</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>


<p>Email: <input type="email" required></input></p>
<p>Registration Number: <input type="text" required></input></p>
<p>Registration State: <input type="text" required></input></p>
<p>Qualification: <input type="text" required></input></p>

<p>Doctor is for?</p>
<p><input type="radio" name="doctor" value="Allopathic"></input>Allopathic</p>
 <p><input type="radio" name="doctor" value="Homeopathy"></input>Homeopathy</p>
 <p> <input type="radio" name="doctor" value="Ayurvedic"></input>Ayurvedic</p>
 
 <p>Contact Number: <input type="text" id="contact" required></input></p>
 <small>Also enter conuntry code (Eg: +91) with contact number</small>
 <small id="phonespan"></small>
 <br />
      <label id="error"></label>
        <button onClick={this.handleClick}
        >Generate OTP</button>
         <div id="recaptcha"></div>
         
        
         <button type="submit" className="btn btn-success" value="submit">Submit</button>
         <Link to="/details" className="btn btn-primary" style={{visibility: "hidden"}} id="next">Next</Link>
         </div>
         </form>
      </div>
    )
  }
}

export default App;