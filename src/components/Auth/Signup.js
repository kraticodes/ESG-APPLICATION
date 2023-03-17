import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import Nav from 'react-bootstrap/Nav';
import LoadingSpinner from '../LoadingSpinner';

const Login = () => {
   
    const [email,setEmail] = useState();
    const[password,setPassword] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("investor");
    
    const handleChange = (event) => {
      setValue(event.target.value);
  };

    const {login, error, isLoading} = useLogin();
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email,password);

      await login(email,password);
      localStorage.setItem("type", value+"");
      setEmail('');
      setPassword('');
    }

    return (
      <>
      {isLoading ? <LoadingSpinner /> : 

      <form onSubmit={handleSubmit} responsive="md">
        <h3 style={{textAlign:"center", marginTop:"20px"}}>Login</h3>
        
        <div className='form-control'>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
          />
        </div>

        <div style={{ textAlign:"center",marginBottom:"30px", padding:"10px"}}>
      <label>Login As: </label>
        <select value={value} onChange={handleChange} required>
            <option value="investor" >Investor</option>
            <option value="startup">Startup</option>
        </select>
     </div>

        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
        <button  style={{backgroundColor:"#03A9F4", border:"none", color:"White", padding:"8px", width:"500px", marginLeft:"auto", marginRight:"auto"}} disabled={isLoading}>Login</button>
            {error && <div className='error'>{error}</div>}
        </div>

        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}

       
        <p className="forgot-password">
         <Nav.Link as={Link} to="/signup">New User?<u><span style={{color:"blue"}}> Sign Up</span></u></Nav.Link>
        </p>
        </div>
      </form>
      
      }
      </>
    )
  }

export default Login;