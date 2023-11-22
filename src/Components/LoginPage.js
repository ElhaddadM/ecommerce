import React, { useEffect, useRef, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';





export default function LoginPage(props) {
const [display,setDisplay] = useState(false)
const [users,setUsers] = useState([])

const navigate = useNavigate()

const name = useRef('')
const emailInscrit = useRef('')
const passwordInscrit = useRef('')
const rePasswordInscrit = useRef('')

const emailLogin = useRef('')
const passwordLogin = useRef('')

const getUsers = async () =>{
   const data = await axios.get("http://localhost:3001/users")
    setUsers(data.data)
    console.log(data.data)
       
}
useEffect( () =>{
     getUsers()
},[])

const handlInscription =  (event)=>{
    event.preventDefault()
    const user = {
        "name" : (name.current.value).trim(),
        "email" : (emailInscrit.current.value).trim(),
        "password" : passwordInscrit.current.value
    }
    console.log(user);
    if (passwordInscrit.current.value.trim() == (rePasswordInscrit.current.value).trim() ){

        axios.post("http://localhost:3001/users",user)
        .then(data => console.log(data))
    }
    
}
const handlLogin = (event)=>{
    event.preventDefault()

    const usre = users?.find( usr => {
        return (usr.email === (emailLogin.current.value).trim() && usr.password === passwordLogin.current.value)
    } )
    if(usre !== undefined) { 
      sessionStorage.setItem('user',JSON.stringify(usre)) 
      navigate('/')
    }
    else{
      alert('Not Found')
      console.log('not Found');
    } 
   
}

  return (
    <>


      <MDBModal staticBackdrop tabIndex='-1' open={props.staticModal} setOpen={props.setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className={ display ? 'd-none' : 'd-block'} >Login</MDBModalTitle>
              <MDBModalTitle className={ display ? 'd-block' : 'd-none'} >Create Compte</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={props.toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form className={ display ? 'd-block' : 'd-none'} onSubmit={handlInscription}>
                <MDBInput  className='my-3'   label='Name' id='formControlLg' type='text' size='lg' ref={name}/>
                <MDBInput  className='my-3'   label='Email' id='formControlLg' type='text' size='lg' ref={emailInscrit}/>
                <MDBInput className='my-3'  label='Password' id='formControlLg' type='password' size='lg'  ref={passwordInscrit} />
                <MDBInput className='my-3'  label='Re-Password' id='formControlLg' type='password' size='lg'  ref={rePasswordInscrit} />
                <MDBBtn className='w-50 mb-3' type='submit'>Submit</MDBBtn> <br/>
                <Link className='mt-3 ' to='/' onClick={()=>{setDisplay(prev=> !prev)}} type='submit' > Login ?</Link>

            </form>
                <form  className={ display ? 'd-none' : 'd-block'} onSubmit={handlLogin} >
                <MDBInput  className='my-3'   label='Email' id='formControlLg' type='email' size='lg' ref={emailLogin} />
                <MDBInput className='my-3'  label='Password' id='formControlLg' type='password' size='lg'  ref={passwordLogin} />
                <MDBBtn className='w-50 mb-3' type='submit' onClick={ handlLogin}  >Login</MDBBtn> <br/>
                <Link className='mt-3 ' to='/' onClick={()=>{setDisplay(prev=> !prev)}} >Creer Compte ?</Link>
                </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={props.toggleOpen}>
                Close
              </MDBBtn>
              {/* <MDBBtn>Understood</MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}