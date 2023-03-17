import { useEffect, useState } from 'react';
import './Mentoring.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Himan Rao", designation:"CEO at XYZ", target:"ESG Lead", check: "Led 12 startups"},
{ name: "Mary Neo", designation:"CFO at BFG", target:"Carbon Footprint Reduce", check: "Led 7 startups"},
{ name: "kohi Juan", designation:"CFO at YHG", target:"Gender Equality", check: "Led 11 startups"},
{ name: "Chi Hui", designation:"CFO at LMZ" ,target:"ESG Lead", check: "Early stage startup"},
{ name: "Ramesh Prasad", designation:"CEO at HGJ", target:"Environment Saver", check: "Led 6 startups"},
]

const Consulting = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const [value, setValue] = useState();
//   const [item, setItem] = useState(data);
//   const handleChange = (event) => {
//     setValue(event.target.value);
// };

//  useEffect(()=>{
//     if(value==="all")
//     {
//       setItem(data);
//     }
//     else if(value === "IN")
//     {
//       const newItem = data.filter((newVal) => {
//         return newVal.target.includes("India");
//       });
//       setItem(newItem);
//     }
//     else if(value === "UK")
//     {
//       const newItem = data.filter((newVal) => {
//         return newVal.target.includes("UK");
//       });
//       setItem(newItem);
//     }
//     else if(value === "France")
//     {
//       const newItem = data.filter((newVal) => {
//         return newVal.target.includes("France");
//       });
//       setItem(newItem);
//     }
//  },[value]);


return (
  <>
	<div className="App">
    <h3 style={{textAlign:"center",margin:"30px"}}>Find Mentors that will help you in your startup growth🚀🚀</h3>
    {/* <div style={{ textAlign:"center",marginBottom:"30px"}}>
      <label>Country: </label>
        <select value={value} onChange={handleChange}>
            <option value="all" >All</option>
            <option value="IN">India</option>
            <option value="UK">United Kingdom</option>
            <option value="France">France</option>
        </select>
     </div> */}
	<table>
		<tr>
		<th>Name</th>
		<th>Designation</th>
         <th>Role</th>
		<th>Lead</th>
		<th></th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
            <td>{val.designation}</td>
			<td>{val.target}</td>
			<td>{val.check}</td>
			<td>   <Button variant="primary" onClick={handleShow}>
Avail Mentorship
 </Button></td>
			</tr>
		)
		})}
	</table>
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Cold Mailing Magic 🚀</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    Woohoo, you'r just a one step away to reach the mentor<br/>
    <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a>
  </Modal.Body>
   <Modal.Footer>
     <Button  variant="secondary" onClick={handleClose}>
       Close
     </Button>
     {/* <Button variant="primary" onClick={handleClose}>
       Save Changes
     </Button> */}
   </Modal.Footer>
 </Modal>
	</div>

 
 </>
);
}

export default Consulting;
