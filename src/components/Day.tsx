import { useState } from "react";
import "../style/Day.css";
import { useNavigate } from "react-router-dom";

function Day(){
    let dayNames = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const onMouseOverCaptureHandler = (index: number) =>{
       return setSelectedIndex(index);
    }
    const navigate = useNavigate();
    const findAddress = (day : String) => {
        return "/HomePage/Day/" + day;
    }

    return (
        
        <>
        <h1>Available Days</h1>
        {dayNames.length === 0 ? <p>No dayNames</p> : null}
        {dayNames.length === 0 && <p>No dayNames</p>}
        <ul className="list-group">
         {dayNames.map((dayName, index) => (
         <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
         key={dayName}
           onMouseOverCapture={ () => {onMouseOverCaptureHandler(index);}}
           onClick={() => navigate(findAddress(dayName))}
          >
            {dayName}</li>
         ))}
         </ul>
         <button className="homeButton"
            onClick={() => navigate("/")}>Return to Home</button> 
        </>
       

    )
}
export default Day;