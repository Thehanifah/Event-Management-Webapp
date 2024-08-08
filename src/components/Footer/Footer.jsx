import './Footer.css'
import logo from '../../assets/Navbar/logo.svg'
import peak from '../../assets/Navbar/peak.svg'


function Footer() {
  return (
    <>
      <div className="container footer-container">
        <h2 className='footer-header'>Ready To Get Started?</h2>
        <p className="footer-text-p text-center">Peak Planner streamlines your workflow and elevates the attendee experience.</p>
        <button type="button  " id='getStartedbtn-footer' className = "btn btn-outline-success getStarted-btn-footer">GET STARTED FREE</button>
    <div className='col justify-content-between align-items-center footer-links-container'>
        <div className='logo-container-footer'>
        <img
              alt=""
              src={logo}
              width="71"
              height="66.96"
              className="foot-logo"
            />
             <img
              alt=""
              src={peak}
              width="120"
              height="66.96"
              className="foot-logo-text"
            />  
        </div> 

       <div className="row  links-container">
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Terms & Conditions</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Resources</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Contact</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Legal</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Privacy Policy</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Partners</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Promotions</a></div>
           <div className="col-6 footer-cols col-sm-3 text-end"><a href="">Career</a></div>
      </div>
    </div >

    <p className="footer-text-p text-center" id='footer-text'>@copyright 2024 Peak Planner All Rights Reserved</p>
    </div>


    </>
  )
}

export default Footer
