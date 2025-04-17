import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { div } from 'motion/react-client'
import AnimatedCard from "./components/AnimatedCard";
import AnimatedButton from "./components/AnimatedButton";
import LoaderSpinner from "./components/LoaderSpinner";
import FadeInImage from "./components/FadeInImage";
import GlassPanel from "./components/GlassPanel";
import Navbar from './components/Navbar';
import Card from './components/Card';
import AnimatedButton2 from './components/AnimatedButton2';
import Loader from './components/Loader';
import LoaderShine from './components/LoaderShine';
import Cursor from './components/Cursor';
import LoaderDottedSpin from './components/LoaderDottedSpin';
import AnimeButton3 from './components/AnimeButton3';


const App = () => {
  
  useEffect(() => {
    // Initialize Lenis 
    const lenis = new Lenis();
    
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  })
  
  const [theme, setTheme] = useState("light");


  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    
  

  return (
    <div data-theme={theme} className='w-full max-h-fit bg-slate-200 dark:bg-zinc-900 cursor-none'>
      <Cursor />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <div className="container w-[85%] rounded-lg mx-auto relative pt-48 flex flex-wrap gap-10 justify-between">
        <Card title={"Double Circular Loader"} desc={"Sleek Loader Animation"}>
          <Loader />
        </Card>
        
        <Card title={"Shine Gradient Loader"} desc={"Sleek Gradient Loader Animation"}>
          <LoaderShine /> 
        </Card>

        <Card title={"Shine Gradient Loader"} desc={"Sleek Gradient Loader Animation"}>
          <LoaderDottedSpin /> 
        </Card>


        <Card title={"Button Hover"} desc={"Smooth button hover animation effect"}> 
          <AnimatedButton label={'Click Me'}/>
        </Card>
        <Card title={"SlideUp Button"} desc={"Smooth sliding up hover animation effect"}> 
          <AnimatedButton2 label={'Hover'}/>
        </Card>
        
        <Card title={"SlideUp Button"} desc={"Smooth sliding up hover animation effect"}> 
          <AnimeButton3 label={'Hover'}/>
        </Card>

        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default App