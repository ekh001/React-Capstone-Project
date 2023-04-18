
import Navbar from '../components/NavBar'
import ItineraryAccordion from '../components/ItineraryAccordion'

import Background from '../assets/images/landing-img3.jpg'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import PageTransition from '../components/PageTransition';
import DataTable from '../components/DataTable';


function Dashboard() {

  const [isVisible, setIsVisible] = useState(false)


  const clicked = () => {
    setIsVisible(false)
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};

  return (

    <div 
    style={{ backgroundImage: `url(${Background})`, height: 'calc(100vh) !important' }}
      className="justify-center  bg-cover bg-fixed "
    >
  
      <div 
      className="flex justify-center items-center h-full"
      >
    
        <PageTransition pageVariants={pageVariants}>
    
  
        <div 
        style={{ width: '80vw', height: '90%'}} 
        className="grid place-items-center p-4 m-10 bg-white  
        bg-opacity-90
        rounded-md drop-shadow-xl"
        >

          <Navbar />

          <DataTable />

        </div>
        
    </PageTransition>
  </div>
</div>


  )
}

export default Dashboard