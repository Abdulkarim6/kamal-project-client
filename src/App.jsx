import './App.css';
import About from './components/About/About';
import AddPhoto from './components/AddPhoto/AddPhoto';
import Banner from './components/Banner/Banner';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import ShowPhotoDetails from './components/ShowPhotoDetails/ShowPhotoDetails';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <div >
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <AddPhoto></AddPhoto>
      <ShowPhotoDetails></ShowPhotoDetails>
      <Footer></Footer>
    </div>
  )
}

export default App
