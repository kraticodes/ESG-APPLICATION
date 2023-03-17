
import Detail from './Detail';
const Records = ({data}) => {
    
    return(
        <ul id="list" className="list" responsive="md" >
        {data && data.map(item => (
           <Detail item={ item} key ={item.id} />
        ))}
     </ul>
    )
}

export default Records;