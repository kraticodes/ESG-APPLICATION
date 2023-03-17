import {GiGooeyImpact} from 'react-icons/gi';
import {MdPeople} from 'react-icons/md';
import {BsBook} from 'react-icons/bs';
import Globe from '../globe.gif.gif' ;
import Globe1 from '../globe.gif' ;
const Main = () => {
    return (
        <div style={{display:"flex"}} >
        <div style={{marginLeft:"50px"}}> 
         <h1>Our Values</h1>
         <p>We believe that everyone should be able to understand the impact of the companies they engage with on the causes they care about.</p>

         <div className='desc' style={{fontSize:"1.25rem", lineHeight:"2"}}> IMPACT <GiGooeyImpact /> </div>
         <p>You should be able to make decisions that align with your values.</p>

         <div className='desc' style={{fontSize:"1.25rem", lineHeight:"2"}}> EMPOWERMENT <MdPeople /> </div>
         <p>You can help reshape our economy and planet.</p>

         <div className='desc' style={{fontSize:"1.25rem", lineHeight:"2"}}> TRANSPARENCY <BsBook /> </div>
         <p>Transparency and credible sources are critical for assessing impact.</p>

        </div>
        <img src={Globe1} height="600px" />
        </div>
    )
}

export default Main;