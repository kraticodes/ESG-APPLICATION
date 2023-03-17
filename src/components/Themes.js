import {BsFillCloudDrizzleFill, BsHeartPulseFill} from 'react-icons/bs';
import {GiFlood} from 'react-icons/gi';
import {FaGasPump, FaCloudversify} from 'react-icons/fa';
import {MdHealthAndSafety, MdChildFriendly} from 'react-icons/md';
import {RiMentalHealthFill} from 'react-icons/ri';

const Themes = () => {
    return(
        <div>
          <h2 style={{marginLeft:"30px", fontSize:"2.25rem"}} >Explore the causes you care about</h2>
          <h4 style={{marginLeft:"30px", fontSize:"1.25rem"}}>Pick your causes and discover investments, brands and employers that support those causes</h4>
          <div className="thm1">
              <div className='img-icon'><BsFillCloudDrizzleFill style={{fontSize:"4.25rem"}} /></div>
              <h3>Climate action</h3>
              <p>Take urgent action to combat climate change and its impacts</p>
          </div>
          <div className='thm2'>
                <div className="thm1">
                    <div className='img-icon'><GiFlood style={{fontSize:"4.25rem"}} /></div>
                    <h5>Disaster readiness and effective aid</h5>
                    <p style={{width:"170px"}}>Be ready for natural disasters and provide effective aid when disaster happen</p>
                </div>
                <div className="thm1">
                    <div className='img-icon'><FaCloudversify style={{fontSize:"4.25rem"}} /></div>
                    <h5>Reduce green house and gas emission</h5>
                    <p style={{width:"170px"}}>Continually reduce greenhouse gas emissions and other pollutants</p>
                </div>
                <div className="thm1">
                    <div className='img-icon'><FaGasPump style={{fontSize:"4.25rem"}} /></div>
                    <h5>Renewable Energy Growth</h5>
                    <p style={{width:"170px"}}>Increase access to affordable, reliable and sustainable energy to all</p>
                </div>
          </div>
          <div style={{margin:"50px"}}></div>
          <div className="thm1">
              <div className='img-icon'><BsHeartPulseFill style={{fontSize:"4.25rem"}} /></div>
              <h3>Health and Well-being</h3>
              <p>Ensure healthy life and well-being for all at ages</p>
          </div>
          <div className='thm2'>
                <div className="thm1">
                    <div className='img-icon'><MdHealthAndSafety style={{fontSize:"4.25rem"}} /></div>
                    <h5>Access to affordable healthcare</h5>
                    <p style={{width:"170px"}}>Ensure universal access to affordable healthcare</p>
                </div>
                <div className="thm1">
                    <div className='img-icon'><MdChildFriendly style={{fontSize:"4.25rem"}} /></div>
                    <h5>Child and Maternal Health</h5>
                    <p style={{width:"170px"}}>End preventable deaths of mother and children, support reproductive health everywhere</p>
                </div>
                <div className="thm1">
                    <div className='img-icon'><RiMentalHealthFill  style={{fontSize:"4.25rem"}} /></div>
                    <h5>Improved Mental Health</h5>
                    <p style={{width:"170px"}}>Support awareness and access to mental health support</p>
                </div>
          </div>

        </div>
    )
}
export default Themes;