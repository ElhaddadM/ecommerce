import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import LoginPage from './LoginPage';
function Nav() {
  const [staticModal, setStaticModal] = useState(false);
  const [user,setUser] = useState( JSON.parse(sessionStorage.getItem('user')))
  const toggleOpen = () => setStaticModal(!staticModal);

  useEffect(()=>{

    setUser( JSON.parse(sessionStorage.getItem('user')) );
    console.log(user);
  },[])
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <Link className="navbar-brand" href="#">Navbar scroll</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse   " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll " style={{ "--bs-scroll-height": "100px;" }}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to='/products'>Produits</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" href="#">Produits</Link>
        </li> 
        </ul>

       
        <div className='me-auto'>
       <div className="d-flex "   role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>  
       </div>

    
     <div className='pe-5'>
        <span className='px-3'  style={{ "cursor":"pointer !important" } } >Pannier</span>
        <span className='' style={{ "cursor":"pointer" }} onClick={()=>setStaticModal(prev=> !prev)} >
        { user === null ? "Login" : user.name }
        {/* <RxAvatar size={40} style={{ "cursor":"pointer" }} /> */}
        </span>
     </div>
    </div>
  </div>
  <LoginPage staticModal ={staticModal} setStaticModal={setStaticModal} toggleOpen={toggleOpen} />
</nav>

  )
}

export default Nav