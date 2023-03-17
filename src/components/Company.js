import Card from 'react-bootstrap/Card';
import BarChart from './BarChart';
import {BsFillCloudDrizzleFill} from "react-icons/bs";
import {SiSocialblade} from 'react-icons/si';
import {RiGovernmentFill} from 'react-icons/ri';
import {useState} from 'react';
import {data} from './data';
import Records from './Records';
import Pagination from './Pagination';
import { companyData } from './companyData';
import { useParams } from 'react-router-dom';

const Company = () => {
    
    let idx = useParams().id;
    console.log("oUr id", idx);
    const result = companyData.filter((data) => {
        console.log(data.id);
        if (data.id == idx){
            return true;
        } else {
            return false;
        }
    });
    console.log(result);
    //pagination
    
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return(
        <>
          <h1>{result[0].name}</h1>
          <div className = "grid-container">
             <div className="card">
                <div className="score_card"> 
                    <Card>
                    <Card.Body>Overall Impact <br /> A ({result[0]['overall-remark']}) </Card.Body>
                    </Card>
                </div>
                <div className="commentary">
                    <Card>
                        
                        <Card.Body>
                        <Card.Title>Commentary</Card.Title>
                        <Card.Text>
                            {result[0].desc}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='esg'>
                    <Card>
                        
                        <Card.Body>
                            <Card.Title>ESG values
                                {/* <div className="help-tip">
                                <p>Overall ratings for the Environmental, Social, Governance</p>
                                </div> */}
                            </Card.Title>
                        <Card.Text>
                        <ul id="list" className="list" responsive="md" >
                            <li>
                            <div className='desc'><BsFillCloudDrizzleFill /> Environment </div><span style={{}}>A ({result[0].carbonfootprint})</span>
                            </li>
                            <li>
                            <div className='desc'><SiSocialblade /> Social </div><span style={{marginLeft:"10px"}}>A ({result[0].laborpractices})</span>
                            </li>
                            <li>
                            <div className='desc'><RiGovernmentFill /> Governance </div><span style={{marginLeft:"10px"}}>A ({result[0].boarddiversity})</span>
                            </li>
                        </ul>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
             </div>
             <div className="impact">
                    <Card>
                    
                    <Card.Body>
                    <Card.Title>Impact</Card.Title>
                    <Card.Text>
                        <BarChart />
                        <div className='causes'>
                            <h3>Causes</h3>
                        {/* <ul id="list" className="list" responsive="md" >
                            <li>
                            <div className='desc'><BsFillCloudDrizzleFill /> Environment </div><span style={{}}>A (94)</span>
                            </li>
                            <li>
                            <div className='desc'><SiSocialblade /> Social </div><span style={{marginLeft:"10px"}}>A (88)</span>
                            </li>
                            <li>
                            <div className='desc'><RiGovernmentFill /> Governance </div><span style={{marginLeft:"10px"}}>A (87)</span>
                            </li>
                            <li>
                            <div className='desc'><BsFillCloudDrizzleFill /> Environment </div><span style={{}}>A (94)</span>
                            </li>
                            <li>
                            <div className='desc'><SiSocialblade /> Social </div><span style={{marginLeft:"10px"}}>A (88)</span>
                            </li>
                            <li>
                            <div className='desc'><RiGovernmentFill /> Governance </div><span style={{marginLeft:"10px"}}>A (87)</span>
                            </li>
                            <li>
                            <div className='desc'><RiGovernmentFill /> Governance </div><span style={{marginLeft:"10px"}}>A (87)</span>
                            </li>
                        </ul> */}
                                 <Records data={currentRecords} responsive="md" />
                                <Pagination
                                
                                        nPages={nPages}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                />
                        </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
             </div>
             <div >

             </div>
          </div>

        
        </>
    )
}

export default Company;