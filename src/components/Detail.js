import {GiBulletImpacts} from "react-icons/gi";
const Detail = ({item}) => {
    console.log(item);
    return(
         <>
           <li>
                <div className='desc'><GiBulletImpacts /> {item.name} </div><span style={{}}>{item.remark}</span>
           </li>
         </>
    )


}

export default Detail;