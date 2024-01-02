import { Link, useNavigate } from "react-router-dom";
import '../../style/Projects.css';
import '../../style/link.css';
import FightingGame from '../../images/fighting-game-screenshot.png';
import FlappyDuck from '../../images/Flapy-Duck-Screenshot.png';

function Projects(){
    const navigate = useNavigate();
    const goHome = () =>{
        navigate('/');
    }
    const goResume = () =>{
        window.open('https://1drv.ms/w/s!AtKoeaQlCzlQgtdaRXtyp3QlhUuY8w?e=Ve8Jpa', '_blank');
    }
    const goContact = () =>{
        navigate('/contact');
    }
    const visitFlappyDuck = () =>{
        window.open('https://github.com/HaydenClark1/Flappy-Duck');
    }
    const visitFightingGame = () =>{
        window.open('https://github.com/HaydenClark1/Fighting-Sim');
    }
    return(
        <>
        <div className="project-container">
            <h1 className="projects">Previous Projects</h1>
                <div className="flappy-duck-container">
                <img className="flappy-duck-picture"  src={FlappyDuck} alt="Flappy Duck Picture"/>
                <button className="flappy-duck-button" onClick={visitFlappyDuck}>Visit</button>
                </div>
                <div className="fighting-game-container">
                    <img className="fighting-game-picture" src={FightingGame} alt="fighting-game-picture" />
                    <button className="fighting-game-button" onClick={visitFightingGame}>Visit</button>
                </div>
            </div>
            <div className="link-container">
                <Link className='home-button' to="/" onClick={goHome}>Home</Link> 
                <Link className='resume-link' to= {window.location.pathname} onClick={goResume}>Resume</Link>
                <Link className='contact-link' to="/contact" onClick={goContact}>Contact Me</Link>
            </div>
        </>
    )
}
export default Projects;