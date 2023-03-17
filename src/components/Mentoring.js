import { useEffect, useState } from 'react';
import './Mentoring.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Berkeley SkyDeck", target:"Germany, UK, Japan", check: "$200k to $200k", stage:"Growth, Scaling, Early Revenue", req:"We invest in accelerate transformational startups."},
{ name: "The Aventures", target:"India, UK", check: "$100k to $300k", stage:"Idea or Patent, Prototype", req:"We invest in accelerate transformational startups."},
{ name: "Hanwha Holdings USA", target:"USA", check: "$500k to $50M", stage:"Growth, Scaling, Early Revenue", req:"We invest in accelerate transformational startups."},
{ name: "PSION", target:"France, Italy", check: "$100k to $1.5M", stage:"Growth, Scaling, Early Revenue", req:"We invest in accelerate transformational startups."},
{ name: "BCF Ventures", target:"Canada, USA", check: "$50k to $1M", stage:"Scaling, Early Revenue", req:"We invest in accelerate transformational startups."},
]

const Mentoring = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState();
  const [item, setItem] = useState(data);
  const handleChange = (event) => {
    setValue(event.target.value);
};

 useEffect(()=>{
    if(value==="all")
    {
      setItem(data);
    }
    else if(value === "IN")
    {
      const newItem = data.filter((newVal) => {
        return newVal.target.includes("India");
      });
      setItem(newItem);
    }
    else if(value === "UK")
    {
      const newItem = data.filter((newVal) => {
        return newVal.target.includes("UK");
      });
      setItem(newItem);
    }
    else if(value === "France")
    {
      const newItem = data.filter((newVal) => {
        return newVal.target.includes("France");
      });
      setItem(newItem);
    }
 },[value]);


return (
  <>
	<div className="App">
    <h3 style={{textAlign:"center",margin:"30px"}}>Find the best investors for your startup</h3>
    <div style={{ textAlign:"center",marginBottom:"30px"}}>
      <label>Country: </label>
        <select value={value} onChange={handleChange}>
            <option value="all" >All</option>
            <option value="IN">India</option>
            <option value="UK">United Kingdom</option>
            <option value="France">France</option>
        </select>
     </div>
	<table>
		<tr>
		<th>Name</th>
		<th>Target Countries</th>
		<th>First Check</th>
    <th>Funding Stage</th>
		<th>Funding Requirements</th>
		<th></th>
		</tr>
		{item.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.target}</td>
			<td>{val.check}</td>
      <td>{val.stage}</td>
			<td>{val.req}</td>
			<td>   <Button variant="primary" onClick={handleShow}>
  Submit Deck
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
    Woohoo, you'r just a one step away to reach the investor<br/>
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

export default Mentoring;
