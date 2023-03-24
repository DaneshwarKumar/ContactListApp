import React, { useState , useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {

    const [data,setData] = useState([]);

   
    // getting the data from the server 
    const getData = () => {
        axios.get("https://641d3f941a68dc9e4619f061.mockapi.io/Crud-operation")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }

    // function to delete the contact 
    const handleDelete = (id) => {
       axios.delete(`https://641d3f941a68dc9e4619f061.mockapi.io/Crud-operation/${id}`)
       .then(() => {
        getData();
       })
    }

    // getting the data with hooks 
    useEffect(() => {
        getData();
    } , []);


    // set the data in local storage to edit the contact details 
    const setToLocalStorage = (id,name,number,email) =>{
       localStorage.setItem("id" , id);
       localStorage.setItem("name" , name);
       localStorage.setItem("number" , number);
       localStorage.setItem("email",email);
    }


return (

<React.Fragment>

<div style={{width:"80%" , backgroundColor:"lightgray" , margin:"55px auto", padding:"22px"}}>

{/* creating heading and back Button  */}
<div className='d-flex justify-content-between m-3'>
 <h2 className='m-3' >Contact List</h2>

 <Link to={'/'}>
   <button className='btn btn-secondary m-4 ' > Back  </button>
  </Link>
</div>

<hr/>


<table className= "table table-dark" >
  {/* creating the table heading  */}
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Gmail</th>
      <th scope='col'></th>
      <th scope='col'></th>
    </tr>
  </thead>
    
    {/* redering all the data from server  */}
   {
      data.map((eachData) => {
         return(
            <>
                <tbody>
                        <tr>
                            <th scope="row"> {eachData.id} </th>
                            <td> {eachData.name} </td>
                            <td> {eachData.number} </td>
                            <td>  {eachData.email} </td>
                            <td>  <Link to='/update'>  
                                     <button onClick={() => setToLocalStorage(eachData.id,eachData.name,eachData.number,eachData.email)} > 
                                       <span style={{color:"navy"}}><EditIcon /> </span> 
                                     </button> 
                                 </Link> </td>
                            <td>  <button onClick={() => handleDelete(eachData.id) }>  <span style={{color:"red"}}><DeleteIcon /></span> </button> </td>
                       </tr>
                </tbody>
            </>
         )
      })
   }

</table>

</div>

    </React.Fragment>
  )
}

export default ContactList;

