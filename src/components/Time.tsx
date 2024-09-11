import { useState } from "react";
interface TimeProps{
    hours: String[];
    onSelectedHour: (selectedHours: String[]) => void;
}
function Time({hours , onSelectedHour }: TimeProps){
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [hourArray, setHours] = useState(hours);
    
    const deleteHour = (removedHour: String, index: number) =>{
        const newHours = hourArray.filter((number) => number !== removedHour);
        if(index === selectedIndex){
            setSelectedIndex(-1);
            setHours(newHours);
            console.log(newHours);
            onSelectedHour(newHours);
        }
    }

    const onMouseOverCaptureHandler = (index: number) =>{
        return setSelectedIndex(index);
     }
    return(
        <>
        <h1>Select Available Hours</h1>
        {hourArray.length === 0 && <p>No Hours Available</p>}
        <ul className="list-group">
         {hourArray.map((hour, index) => (
         <li key= {index} className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            onMouseOverCapture={() => {onMouseOverCaptureHandler(index)} }
           onClick={() => {deleteHour(hour, index)
            }}
          >
            {hour}</li>
         ))}
         </ul>
        </>
    )
}
export default Time;