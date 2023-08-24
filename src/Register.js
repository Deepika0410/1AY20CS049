import React from 'react'
import './Register.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Register() {

    const [companyname, setcompanyname] = useState('');
    const [ownername, setownername] = useState('');
    const [rollnumber, setrollnumber] = useState('');
    const [owneremail, setowneremail] = useState('');
    const [accesscode, setaccesscode] = useState('');

    console.log(companyname);

    const inputhandler = (e) => {
        e.preventDefault();
        console.log("Strength")
        const body={
          "companyName":companyname,
          "ownerName":ownername,
          "rollNo": rollnumber,
          "ownerEmail": owneremail,
          "accessCode":accesscode
        }


        const url='http://20.244.56.144/train/register';
         axios.post(url,body)  
         .then(res => console.log(res))
         .catch(err => console.log(err))
          
        
         setcompanyname('');
         setownername('');
         setrollnumber('');
         setowneremail('');
         setaccesscode('');

      }


  return (
    <div className='Register'>
    <form >
    <input className='registerinput' placeholder='Company name' onChange={(e) => setcompanyname(e.target.value)}></input>
    <input className='registerinput' placeholder='Owner name' onChange={(e) => setownername(e.target.value)}></input>
    <input className='registerinput' placeholder='Roll Number' onChange={(e) => setrollnumber(e.target.value)}></input>
    <input className='registerinput' placeholder='Owner email' onChange={(e) => setowneremail(e.target.value)}></input>
    <input className='registerinput' placeholder='Access code' onChange={(e) => setaccesscode(e.target.value)}></input>

    <button onClick={inputhandler}>Register</button>
    </form>
    
    </div>
  )
}

export default Register