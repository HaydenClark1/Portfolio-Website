import { useNavigate } from "react-router-dom";
import '../style/mechanichome.css';
import wrench from '../images/wrench.jpg';
import { useState } from "react";
import mechanic from '../images/mechanic-background.jpg';
function MechanicHome(){
  //add function to add and remove state
  const [selectedIndex, setSelectedIndex] = useState(-1);
 const navigate = useNavigate();
 const useMenu = (index: number)=> {
    setSelectedIndex(index);
    if(index === 0){
      navigate('/HomePage/Day');
    }
  }
  const hoverMenu = (index:number) => {
    setSelectedIndex(index);
  }
 
 let menu = ['Schedule an Appointment', 'Learn more', 'Contact Us']
  return (
    <>
    <div className="Heading">
        <h1>Madison Mechanic</h1>
    </div>
    <img className = "wrench" src={wrench} alt="wrench clipart" />
    <div>
      <ul className="menu-group">
        {menu.map((option,index) => (
          <li className={selectedIndex === index ? 'menu-group-item active' : 'menu-group-item'}
          key = {option}
            onMouseOverCapture={() => {hoverMenu(index)}}
            onClick={() => {useMenu(index);}}
          >  
            {option}</li>
        ))}
      </ul>
    </div>
    <div className="mechanicBackGround">
      <img className= "mechanicPicture" src={mechanic} alt="mechanic background" />
    </div>
    </>
  )
}
export default MechanicHome;