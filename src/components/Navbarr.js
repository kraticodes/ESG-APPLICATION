import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbarr = () => {
  const {user} = useAuthContext();

  const {logout} = useLogout();
  // console.log(user.user.name);
  const handleClick = () => {
    logout();
    localStorage.removeItem("type");
  }

  const type = localStorage.getItem("type");
  return (
    <Navbar collapseOnSelect expand="lg"  style={{backgroundColor: "#2196F3", width:"100%", marginBottom : "30px"}}  >
      <Container fluid>
        <Navbar.Brand href="#home" style={{color:"#fff",marginLeft:"50px"}}><span color="#230557">ESG </span>App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{width:"100%"}}>
            <Nav />
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {user  ?
               <>
                 {type === "investor" ? 
                        <>
                        <Nav.Link  to="/" style={{color:"#fff"}}>Hello, {user.user.name}</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{color:"#fff"}}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/company" style={{color:"#fff"}}>Startup List</Nav.Link>
                        <Nav.Link as={Link} to="/screening" style={{color:"#fff"}}>Screening & Filtering Startups</Nav.Link>
                        <Nav.Link as={Link} to="/thread" style={{color:"#fff"}}>Forums</Nav.Link>
                        <Nav.Link as={Link} to="/themes" style={{color:"#fff"}}>Themes</Nav.Link>
                        <Nav.Link as={Link} to="/resources" style={{color:"#fff"}}>Resources</Nav.Link>
                        <Nav.Link as={Link} to="/writeblog" style={{color:"#fff"}}>Write a Blog</Nav.Link>
                        <Nav.Link onClick={handleClick} style={{color:"#fff"}}>Logout</Nav.Link>
                        
                        </>
                 :
                        <>
                         <Nav.Link  to="/" style={{color:"#fff"}}>Hello, {user.user.name}</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{color:"#fff"}}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/company" style={{color:"#fff"}}>Startup List</Nav.Link>
                        <Nav.Link as={Link} to="/investors" style={{color:"#fff"}}>Look for Investors</Nav.Link>
                        <Nav.Link as={Link} to="/consulting" style={{color:"#fff"}}>Mentorship</Nav.Link>
                        <Nav.Link as={Link} to="/thread" style={{color:"#fff"}}>Forums</Nav.Link>
                        <Nav.Link as={Link} to="/themes" style={{color:"#fff"}}>Themes</Nav.Link>
                        <Nav.Link as={Link} to="/resources" style={{color:"#fff"}}>Resources</Nav.Link>
                        <Nav.Link as={Link} to="/writeblog" style={{color:"#fff"}}>Write a Blog</Nav.Link>
                        <Nav.Link onClick={handleClick} style={{color:"#fff"}}>Logout</Nav.Link>
                        </>
                 }
       

               </>
               :
               <>
                  <Nav.Link as={Link} to="/login" style={{color:"#fff"}}>Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup" style={{color:"#fff"}}>Sign Up</Nav.Link>
               </>
             }
           
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;