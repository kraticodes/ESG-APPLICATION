import Card from 'react-bootstrap/Card';
import { companyData } from './companyData';
import Button from 'react-bootstrap/Button';
import { Navigate, Link } from "react-router-dom";
const ListOfCompany = ({companyData}) => {
   
    return(
    <div className="company-list">
    {companyData && companyData.map(item => (
            <Card>
                <Card.Body>
                <Card.Title>
                    <p style={{fontSize:"1.05rem", color:"grey"}}>#{item['overall-rank']} FOR OVERALL IMPACT</p>
                    <Link to={`/company/${item.id}`} params={{ id: item.id }}>{item.name}</Link>
                    <div style={{display:"flex", flexDirection:"column", float:"right"}}>
                    <div style={{backgroundColor:"#A2F8A4", color:"green",float:"right", padding:"3.4px",textAlign:"center", alignItems:"center"}}>
                        <h3>A ({item['overall-remark']})</h3>
                    </div>
                    <div style={{backgroundColor:"#DEDFD9",float:"right", fontSize:"0.75rem",alignItems:"center",padding:"1.4px"}}>
                        <p style={{textAlign:"center"}}>{item.category}</p>
                    </div>
                    </div>
                </Card.Title>
                <Card.Text>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>{item.desc}</p>      
                    </div>
                </Card.Text>
                {/* <Card.Link href="/company">Card Link</Card.Link> */}
              </Card.Body>
            </Card>

    ))}
      
      </div>

    )
}

export default ListOfCompany;