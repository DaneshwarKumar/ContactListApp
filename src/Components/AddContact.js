import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const AddContact = () => {
  
  // using hooks to set name , number , email 
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [email,setEmail] = useState("");
    const history = useNavigate();

    const header = ({"Access-Control-Allow-Origin" : "*"});

    // function will call when user click on submit button 
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("clicked");
       
        // if name field will be empty then it will return 
        if(name === ""){
          alert("Please Enter the name..");
          return;
        }

        // if number field will be empty then it will return 
        if(number === ""){
          alert("Please Enter Number..");
          return;
        }

        // if email field will be empty then it will return 
        if(email === ""){
          alert("Please Enter Email...");
          return;
        }

        // sending the data on  mockapi server 
        axios.post("https://641d3f941a68dc9e4619f061.mockapi.io/Crud-operation" , {
            name : name,
            number : number,
            email : email,
            header
        }).then(() => {
          history('/read');
        })
      
    }


return (

<div style={{backgroundColor:"lightgray" , padding:"55px" , margin:"55px"}}>
  {/* heading style */}
  <h2 style={{textAlign:'center'}}>Add Contact </h2>
  {/* styling the form  */}
  <form style={{width:"50%" , margin:"22px auto" }}>

  
  {/* getting the Name  */}
  <div className="mb-3">
    <label for="exampleInputname" className="form-label">Enter Name</label>
    <input type="text"  className="form-control"  placeholder='Please Enter Name....' onChange={(e) => setName(e.target.value)} id="exampleInputname" />
  </div>


  {/* getting the Number */}
  <div className="mb-3">
    <label for="exampleInputNumber" className="form-label">Enter Contact Number</label>
    <input type="Number" className="form-control"  placeholder='Please enter contact number...' onChange={(e) => setNumber(e.target.value)} id="exampleInputNumber"/>
  </div>

 
 {/* getting the email */}
  <div className="mb-3">
    <label for="exampleInputemail" className="form-label">Enter Email </label>
    <input type="email" className="form-control"  placeholder='Please enter email address...' onChange={(e) => setEmail(e.target.value)} id="exampleInputemail" />
  </div>

  {/* creating an Add Contact Button  */}
  <button type="submit" className="btn btn-primary"  onClick={handleSubmit} >Add Contact </button>

   <Link to={'/read'}>
   <button className='btn btn-secondary m-4' > Contact List  </button>
   </Link>

  </form>
</div>
  )
}

export default AddContact;

