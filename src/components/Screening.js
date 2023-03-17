import {useState, useEffect} from 'react';
import { companyData } from './companyData';
import ListOfCompany from './ListofCompany';

const Screening = () => {
    const [item, setItem] = useState(companyData);
    const [value, setValue] = useState("all");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    console.log(item);

    useEffect(()=>{
        if(value === "all")
        { setItem(companyData);}
        else if(value === "carbon"){
            const newItem = companyData.filter((newVal) => {
                return newVal.carbonfootprint >= 90;
              });
              setItem(newItem);
        }
        else if(value === "boarddiversity"){
            const newItem = companyData.filter((newVal) => {
                return newVal.boarddiversity >= 90;
              });
              setItem(newItem);
        }
        else if(value === "labor"){
            const newItem = companyData.filter((newVal) => {
                return newVal.laborpractices >= 90;
              });
              setItem(newItem);
        }
    },[value])
   

    return (
      <>
        <h4 style={{textAlign:"center"}}>Screen Investments based on ESG criteria</h4>
        <div style={{ textAlign:"center"}}>
        <select value={value} onChange={handleChange}>
            <option value="all" >All</option>
            <option value="carbon">Carbon FootPrint greater than 90</option>
            <option value="boarddiversity">Board Diversity greater than 90</option>
            <option value="labor">Labor Diversity greater than 90</option>
        </select>
        </div>
        <ListOfCompany companyData={item} />

      </>
    )
}

export default Screening;