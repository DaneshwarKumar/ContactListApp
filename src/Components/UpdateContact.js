import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateContact = () => {

  //  using hooks to update the contacts 
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [email,setEmail] = useState("");

    const naviagte = useNavigate();

    // getting all the data from local storage that need to be update 
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setNumber(localStorage.getItem("number"));
        setEmail(localStorage.getItem("email"));
    },[]);

    // function will call when user click on Update Contact Button 
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://641d3f941a68dc9e4619f061.mockapi.io/Crud-operation/${id}` ,
        {
            name:name,
            number: number,
            email : email
        }
        ).then(() => {
             naviagte("/read");
        })

    }


return (

<div style={{backgroundColor:"lightgray" , padding:"55px" , margin:"55px"}}>
  {/* styling heading and form  */}
  <h2 style={{textAlign:'center'}}>Update Contact </h2>
  <form style={{width:"50%" , margin:"22px auto" }}>

  {/* getting the name from local storage in input box  */}
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Enter Name</label>
    <input type="text" value={name} className="form-control" id="exampleInputName" placeholder='Please Enter Name....' onChange={(e) => setName(e.target.value)} />
  </div>

  {/* getting the number from local storage in input box  */}
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Enter Contact Number</label>
    <input  type="Number" value={number} className="form-control"  placeholder='Please enter contact number...'  onChange={(e) => setNumber(e.target.value)} />
  </div>

  {/* getting the email from local storage in input box  */}
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter Email </label>
    <input type="email" value={email} className="form-control" id="exampleInputPassword1" placeholder='Please enter email address...' onChange={(e) => setEmail(e.target.value)} />
  </div>

  {/* creating an update contact Button  */}
  <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Update Contact</button>
  <Link to={"/read"}>
  <button className='btn btn-secondary mx-4' > Back  </button>
  </Link>
  
  </form>
</div>
  )
}

export default UpdateContact;
