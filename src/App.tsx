import Homepage from './components/HomePage/Homepage'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import {Route, Routes} from "react-router-dom";


function App() {

  return <Routes>
  <Route path = '/' element = {<Homepage/>}/>
  <Route path = '/contact' element = {<Contact/>}/>
<<<<<<< HEAD
  <Route path = '/projects' element = {<Projects/>}/>
=======
  <Route path = '/projects' element = {<Projects/>}/>4
>>>>>>> c1fd5ab (Added files and changed portfolio website)
</Routes>

}

export default App
