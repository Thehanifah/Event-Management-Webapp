import {Container, Nav, Navbar, NavLink} from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import{ Navbar} from 'react-bootstrap/Navbar';
import './Navbar.css';
import logo from '../../assets/Navbar/logo.svg'
import peak from '../../assets/Navbar/peak.svg'
import { Link } from 'react-router-dom';



function NavBar() {

<>
  <div>
    <p>
      <link to="/">
        Home
      </link>
    </p>
    <p>
      <link to="../Onboardingone">Onboarding</link></p>
  </div>
</>;

  const menuData =[
    {
      path: '/solution',
      name: 'SOLUTION'
    },
    {
      path: '/benefit',
      name: 'BENEFIT'
    },
    {
      path: '/prices',
      name: 'PRICES'
    },
    {
      path: '/resources',
      name: 'RESOURCES'
    }
  ]
  return (
    <Navbar expand="lg" className="navbar">
      <Container className='Nav-body'>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="71"
              height="66.96"
              className="d-inline-block align-top"
            />{' '}
             <img
              alt=""
              src={peak}
              width="120"
              height="66.96"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapse">
          <Nav className="ms-auto">
            {
            menuData.map((item) =>(
              <NavLink className='Navlinks-box' to={item.path} key={item.name}>
                <div className="list-item mx-3">{item.name}</div>
              </NavLink>
            ) )
            }
            </Nav>
            <Nav className='ms-auto d-flex align-items-center justify-content-center '>
               <Nav.Link className='login-btn mx-3' href="../Onboardingone">LOGIN</Nav.Link>
              <button className="btn getStarted-btn">GET STARTED</button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;