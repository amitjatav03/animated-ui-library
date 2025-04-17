import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import AnimatedButton from "./components/AnimatedButton";
import Navbar from './components/Navbar';
import Card from './components/Card';
import AnimatedButton2 from './components/AnimatedButton2';
import Loader from './components/Loader';
import LoaderShine from './components/LoaderShine';
import Cursor from './components/Cursor';
import LoaderDottedSpin from './components/LoaderDottedSpin';
import AnimeButton3 from './components/AnimeButton3';
import AnimeCard1 from './components/AnimeCard1';
import AnimeCard2 from './components/AnimeCard2';


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
      {/* custom cursor */}
      <Cursor />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <div className="container w-[85%] rounded-lg mx-auto relative pt-44 pb-20 flex flex-wrap gap-10 justify-center">
        <Card title={"Dual Arc Spinner"} desc={"Minimalist loader with two semi-circular arcs rotating in harmony."}>
          <Loader />
        </Card>
        
        <Card title={"Gradient Pulse Ring"} desc={"Elegant circular loader with a flowing gradient that pulses smoothly."}>
          <LoaderShine /> 
        </Card>

        <Card title={"Wobbly Loop Loader"} desc={"Animated dashed loop with an elastic morphing effect during loading"}>
          <LoaderDottedSpin /> 
        </Card>


        <Card title={"Click Button"} desc={"Clickon the button minimal effect while hovering as well minimalistic effect"}> 
          <AnimatedButton label={'Click Me'}/>
        </Card>
        <Card title={"SlideUp Button"} desc={"Smooth sliding up hover animation effect"}> 
          <AnimatedButton2 label={'Hover'}/>
        </Card>
        
        <Card title={"Zoom Out Button"} desc={"Emerged out circle while hovering on the button animation effect"}> 
          <AnimeButton3 label={'Hover Me'}/>
        </Card>

        <Card title={"Card Dual mode"} desc={"Smooth sliding up hover animation effect"}>
          <AnimeCard1 />
        </Card>

        <Card title={"Selection Cards"} desc={"A circle is emerged out from the center of the button"}>
          <AnimeCard2 />
        </Card>
      </div>

    </div>
  )
}

export default App