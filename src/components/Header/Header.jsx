/* eslint-disable react/no-unescaped-entities */
import './Header.css'
import NavBar from '../Navbar/Navbar'



function Header() {
  return (
    <>
     <div className='container header '>
       <NavBar/>
       <div className='text-container text-start '>
       <h1 className ="header-head">Plan flawless events. <br /> Effortlessly!</h1>
       <p className="header-text-p text-start">Peak Planner streamlines your workflow and elevates the attendee experience.</p>
       <button className="btn getStarted-btn mt-5 " id='btn-getStarted-header'>GET STARTED</button>
      </div>
     </div>
    </>
  )
}

export default Header
