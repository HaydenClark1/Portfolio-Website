import { useState } from "react";
import Time from "./Time";

function TimeHolder(){
    const [selectedHours, setSelectedHours] = useState<String[]>([]);

    const handleSelectedHours = (hours: String[]) => {
        setSelectedHours(hours);
    };
    const yourArrayOfHours = [
        "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
      ]; 

    return(
        <div>
            <Time hours = {yourArrayOfHours} onSelectedHour = {handleSelectedHours} />
        </div>
    )

}
export default TimeHolder;