import React, { useState } from 'react'
import './Form.css'

function FormValidate() {
    const[name,setName] = useState('');
    const[mail,setMail] = useState('');
    const[psw,setPsw] = useState('');
    const nameHandler=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
        
    } 
    const mailHandler=(e)=>{
       setMail(e.target.value)
    }
    const pswHandler=(e)=>{
        setPsw(e.target.value)
    }
    const submitHandler=(e)=>{
      e.preventDefault();
      if(typeof(name)!==String || name===''){
        document.getElementById('name-msg').innerHTML='Invalid name'
      }
      if(!(mail.includes('@'))){
        document.getElementById('mail-msg').innerHTML='Invalid mail'
      }
      if(psw.length<6||psw.length>10){
        document.getElementById('psw-msg').innerHTML='Invalid psw'
      }
    }
  return (
    <div>
      <h1>Form Validation</h1>
        <form onSubmit={submitHandler}>
            <label for='name'>Enter Your Name:</label>
            <input type='text' id='name'value={name} name='name'onChange={nameHandler}/><br></br><br/>
            <p id='name-msg'></p>
            <label for='email'>Enter Your Email:</label>
            <input type='email' id='email' onChange={mailHandler}/> <br/> 
            <p id='mail-msg'></p>
            <label for='psw'>Enter Password:</label>
            <input type='password' id='psw' onChange={pswHandler}/> <br/> 
            <p id='psw-msg'></p>
        <input type='submit' placeholder='Submit'id='submit' />
        </form>
    </div>
  )
}

export default FormValidate